import Link from 'next/link';
import nav from '@/content/nav.json';
import site from '@/content/site.json';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white">
            <div className="container">
                {/* Main footer content */}
                <div className="section grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand & description */}
                    <div className="lg:col-span-1">
                        <Link
                            href="/"
                            className="inline-block text-xl font-bold text-white hover:text-white/80 transition-colors mb-4"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Hypnose Fyn
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                            Professionel hypnosebehandling i Svendborg med over 27 års erfaring.
                            Behandling af <Link href="/behandlinger/angst" className="underline hover:opacity-80" style={{ color: 'white' }}>angst</Link>,{' '}
                            <Link href="/behandlinger/stress" className="underline hover:opacity-80" style={{ color: 'white' }}>stress</Link>,{' '}
                            <Link href="/behandlinger/fobier" className="underline hover:opacity-80" style={{ color: 'white' }}>fobier</Link> og meget mere.
                        </p>
                        <a
                            href={site.social.trustpilot}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            Se anmeldelser på Trustpilot
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            {nav.footerNav.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-white/80 hover:text-white transition-colors text-sm"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
                            Kontakt
                        </h3>
                        <address className="not-italic text-sm text-white/80 space-y-2">
                            <p>{site.address.name}</p>
                            <p>{site.address.street}</p>
                            <p>{site.address.zip} {site.address.city}</p>
                            <p className="pt-2">
                                <a
                                    href={`mailto:${site.contact.email}`}
                                    className="hover:text-white transition-colors"
                                >
                                    {site.contact.email}
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* CTA */}
                    <div>
                        <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
                            Book behandling
                        </h3>
                        <p className="text-sm text-white/80 mb-4">
                            Klar til at tage det første skridt? Book din session i dag.
                        </p>
                        <a
                            href={site.contact.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white font-medium rounded-md hover:bg-white/90 transition-colors"
                            style={{ color: '#25a31d' }}
                        >
                            Book nu
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="py-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
                    <p>© {currentYear} {site.owner.name}. Alle rettigheder forbeholdes.</p>
                    <p>
                        Drevet af{' '}
                        <a
                            href="https://jacobstrachotta.dk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            Institut for Avanceret Hypnose
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
