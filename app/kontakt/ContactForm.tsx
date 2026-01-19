'use client';

import { useState, FormEvent } from 'react';
import site from '@/content/site.json';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Build email body
        const body = `Navn: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Telefon: ${formData.phone}\n` : ''}
Besked:
${formData.message}`;

        // Build mailto URL
        const subject = encodeURIComponent(formData.subject || 'Henvendelse fra hypnosefyn.dk');
        const bodyEncoded = encodeURIComponent(body);
        const mailtoUrl = `mailto:${site.contact.email}?subject=${subject}&body=${bodyEncoded}`;

        // Open user's email client
        window.location.href = mailtoUrl;
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Navn <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="Dit navn"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Din email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="din@email.dk"
                />
            </div>

            {/* Phone (optional) */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                    Telefon <span className="text-text-muted">(valgfrit)</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="Dit telefonnummer"
                />
            </div>

            {/* Subject */}
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                    Emne
                </label>
                <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                >
                    <option value="">Vælg emne</option>
                    <option value="Spørgsmål om behandling">Spørgsmål om behandling</option>
                    <option value="Booking">Booking</option>
                    <option value="Uddannelse">Uddannelse</option>
                    <option value="Andet">Andet</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Besked <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-y"
                    placeholder="Skriv din besked her..."
                />
            </div>

            {/* Info text */}
            <p className="text-sm text-text-muted">
                Når du klikker &quot;Åbn i email&quot;, åbnes dit email-program med beskeden klar til afsendelse.
            </p>

            {/* Submit */}
            <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Åbn i email
            </button>
        </form>
    );
}
