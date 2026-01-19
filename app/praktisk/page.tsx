import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/blocks/CTA';
import site from '@/content/site.json';

export const metadata: Metadata = {
    title: 'Praktisk information',
    description: 'Find vores klinik i Svendborg. Læs om parkering, hvad du kan forvente, og praktiske detaljer om din hypnosebehandling.',
};

export default function PraktiskPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#25a31d] to-[#1e8a17] text-white py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <nav className="text-white/60 text-sm mb-4">
                            <Link href="/" className="hover:text-white">Forside</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">Praktisk</span>
                        </nav>
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Praktisk information
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Alt du behøver at vide før dit besøg i vores klinik i Svendborg.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="section">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-2">

                        {/* Location */}
                        <div>
                            <h2
                                className="text-2xl font-bold text-text mb-6"
                                style={{ fontFamily: 'var(--font-headline)' }}
                            >
                                Klinikken
                            </h2>

                            <div className="bg-background-alt rounded-xl p-6 mb-6">
                                <address className="not-italic text-text-light">
                                    <strong className="text-text block text-lg mb-2">{site.address.name}</strong>
                                    {site.address.street}<br />
                                    {site.address.zip} {site.address.city}
                                </address>
                            </div>

                            {/* Map */}
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.street + ', ' + site.address.zip + ' ' + site.address.city)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden relative group mb-6"
                            >
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                                    <div className="text-center">
                                        <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        <p className="text-primary font-medium">Åbn i Google Maps</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                            </a>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text">Gratis parkering</h3>
                                        <p className="text-text-light text-sm">
                                            Der er gratis parkering lige uden for klinikken.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text">Lehns Hus</h3>
                                        <p className="text-text-light text-sm">
                                            Klinikken ligger i Lehns Hus – et roligt og trygt sted perfekt til behandling.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What to expect */}
                        <div>
                            <h2
                                className="text-2xl font-bold text-text mb-6"
                                style={{ fontFamily: 'var(--font-headline)' }}
                            >
                                Når du kommer
                            </h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text mb-1">Ankomst</h3>
                                        <p className="text-text-light">
                                            Parkér gratis lige ved klinikken og find vej til ventilokalet.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text mb-1">Venter på dig</h3>
                                        <p className="text-text-light">
                                            Jacob henter dig personligt i ventilokalet, når det er tid.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text mb-1">Samtale</h3>
                                        <p className="text-text-light">
                                            I starter med en samtale om dine udfordringer og ønsker for sessionen.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                                        4
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text mb-1">Hypnose</h3>
                                        <p className="text-text-light">
                                            Du guides ind i en behagelig, afslappet tilstand, hvor vi arbejder med dine mål.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                                        5
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text mb-1">Afslutning</h3>
                                        <p className="text-text-light">
                                            Sessionen afsluttes med en kort opsamling og eventuelle værktøjer til hjemmebrug.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tips */}
                            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                                <h3
                                    className="font-semibold text-text mb-3"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    Gode råd før din session
                                </h3>
                                <ul className="space-y-2 text-text-light text-sm">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        Kom i behageligt tøj
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        Kom i behageligt tøj
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        Sæt telefonen på lydløs
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        Vær åben og ærlig om dine udfordringer
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking info */}
            <section className="section bg-background-alt">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2
                            className="text-2xl font-bold text-text mb-4"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Booking
                        </h2>
                        <p className="text-text-light mb-4">
                            Al booking foregår via vores hovedsite. Efter du har booket, modtager du en
                            bekræftelsesmail med alle praktiske detaljer.
                        </p>
                        <p className="text-text-light mb-6">
                            <strong className="text-text">Tip:</strong> Tjek din spam-mappe, hvis du ikke
                            modtager bekræftelsen inden for få minutter.
                        </p>
                        <a
                            href={site.contact.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Book behandling
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA
                title="Har du spørgsmål?"
                description="Kontakt os, hvis der er noget, du er i tvivl om."
                primaryButton={{
                    label: "Kontakt os",
                    href: "/kontakt",
                }}
                variant="light"
            />
        </>
    );
}
