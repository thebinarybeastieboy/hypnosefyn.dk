import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple rate limiting (in-memory)
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 3; // Max 3 requests per window

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimit.get(ip);

    if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
        rateLimit.set(ip, { count: 1, lastReset: now });
        return false;
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return true;
    }

    record.count++;
    return false;
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
            request.headers.get('x-real-ip') ||
            'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'For mange henvendelser. Prøv venligst igen om lidt.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Udfyld venligst alle påkrævede felter.' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Ugyldig email-adresse.' },
                { status: 400 }
            );
        }

        // Create transporter
        // Note: In production, configure SMTP credentials via environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.example.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_FROM || 'noreply@hypnosefyn.dk',
            to: 'hypnosefyn@mail.jacobstrachotta.dk',
            replyTo: email,
            subject: `[Hypnose Fyn] ${subject || 'Ny henvendelse'} fra ${name}`,
            text: `
Ny henvendelse fra hypnosefyn.dk

Navn: ${name}
Email: ${email}
Telefon: ${phone || 'Ikke angivet'}
Emne: ${subject || 'Ikke angivet'}

Besked:
${message}

---
Denne besked blev sendt via kontaktformularen på hypnosefyn.dk
      `.trim(),
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #25a31d; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
    .value { margin-top: 4px; }
    .message { background: white; padding: 15px; border-radius: 8px; margin-top: 20px; }
    .footer { margin-top: 20px; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 20px;">Ny henvendelse fra Hypnose Fyn</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Navn</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Telefon</div>
        <div class="value">${phone || 'Ikke angivet'}</div>
      </div>
      <div class="field">
        <div class="label">Emne</div>
        <div class="value">${subject || 'Ikke angivet'}</div>
      </div>
      <div class="message">
        <div class="label">Besked</div>
        <div class="value" style="white-space: pre-wrap; margin-top: 8px;">${message}</div>
      </div>
      <div class="footer">
        Denne besked blev sendt via kontaktformularen på hypnosefyn.dk
      </div>
    </div>
  </div>
</body>
</html>
      `.trim(),
        };

        // In development, log instead of sending
        if (process.env.NODE_ENV === 'development') {
            console.log('Email would be sent:', mailOptions);
        } else {
            await transporter.sendMail(mailOptions);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Der opstod en fejl. Prøv venligst igen.' },
            { status: 500 }
        );
    }
}
