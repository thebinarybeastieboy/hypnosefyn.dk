'use client';

import { useState, FormEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    consent: boolean;
    honeypot: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false,
        honeypot: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (formData.honeypot) {
            setStatus('success');
            return;
        }

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage('Udfyld venligst alle påkrævede felter.');
            setStatus('error');
            return;
        }

        if (!formData.consent) {
            setErrorMessage('Du skal acceptere vores behandling af dine oplysninger.');
            setStatus('error');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            if (!response.ok) {
                throw new Error('Der opstod en fejl. Prøv venligst igen.');
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                consent: false,
                honeypot: '',
            });
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Der opstod en fejl.');
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <h3
                    className="text-xl font-bold text-green-800 mb-2"
                    style={{ fontFamily: 'var(--font-headline)' }}
                >
                    Tak for din besked!
                </h3>
                <p className="text-green-700">
                    Vi har modtaget din henvendelse og vender tilbage hurtigst muligt.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot */}
            <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
            />

            {/* Error message */}
            {status === 'error' && errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    {errorMessage}
                </div>
            )}

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
                    Email <span className="text-red-500">*</span>
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

            {/* Consent */}
            <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
                />
                <label htmlFor="consent" className="text-sm text-text-light">
                    Jeg accepterer, at mine oplysninger behandles i forbindelse med min henvendelse.
                    Oplysningerne slettes efter endt korrespondance. <span className="text-red-500">*</span>
                </label>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sender...
                    </span>
                ) : (
                    'Send besked'
                )}
            </button>
        </form>
    );
}
