import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';
import site from '@/content/site.json';

export const metadata: Metadata = {
    title: 'Kontakt',
    description: 'Kontakt Hypnose Fyn i Svendborg. Send os en besked eller book din behandling direkte.',
};

export default function KontaktPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#25a31d] to-[#1e8a17] text-white py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <nav className="text-white/60 text-sm mb-4">
                            <Link href="/" className="hover:text-white">Forside</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">Kontakt</span>
                        </nav>
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Kontakt os
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Har du spørgsmål eller ønsker du at booke en behandling?
                            Udfyld formularen nedenfor eller brug booking-linket.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="section">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-3">

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <h2
                                className="text-2xl font-bold text-text mb-6"
                                style={{ fontFamily: 'var(--font-headline)' }}
                            >
                                Send os en besked
                            </h2>
                            <ContactForm />
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Booking CTA */}
                            <div className="bg-primary text-white rounded-xl p-6">
                                <h3
                                    className="font-bold text-xl mb-3"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    Book behandling
                                </h3>
                                <p className="text-white/80 text-sm mb-4">
                                    Vil du booke en behandling direkte? Brug vores online bookingsystem.
                                </p>
                                <a
                                    href={site.contact.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-white text-primary font-semibold py-3 rounded-lg hover:bg-white/90 transition-colors"
                                >
                                    Book nu
                                </a>
                            </div>

                            {/* Contact info */}
                            <div className="bg-background-alt rounded-xl p-6">
                                <h3
                                    className="font-bold text-lg mb-4"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    Kontaktinformation
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-text-muted">Email</p>
                                            <a
                                                href={`mailto:${site.contact.email}`}
                                                className="text-text hover:text-primary transition-colors"
                                            >
                                                {site.contact.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-text-muted">Adresse</p>
                                            <address className="not-italic text-text">
                                                {site.address.name}<br />
                                                {site.address.street}<br />
                                                {site.address.zip} {site.address.city}
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Response time */}
                            <div className="border border-border rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="font-semibold text-text">Svartid</h3>
                                </div>
                                <p className="text-text-light text-sm">
                                    Vi bestræber os på at svare inden for 1-2 hverdage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
