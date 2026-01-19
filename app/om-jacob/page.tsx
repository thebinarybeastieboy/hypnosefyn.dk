import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/blocks/CTA';
import site from '@/content/site.json';

export const metadata: Metadata = {
    title: 'Om Jacob Strachotta',
    description: 'Mød Jacob Strachotta – en af Danmarks mest erfarne hypnotisører med over 27 års erfaring, 10.000+ sessioner og grundlægger af Institut for Avanceret Hypnose.',
};

export default function OmJacobPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#25a31d] to-[#1e8a17] text-white py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <nav className="text-white/60 text-sm mb-4">
                            <Link href="/" className="hover:text-white">Forside</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">Om Jacob</span>
                        </nav>
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Jacob Strachotta
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            En af Danmarks mest erfarne hypnotisører med over 27 års erfaring
                            og mere end 10.000 sessioner.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="section">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-3">

                        {/* Main column */}
                        <div className="lg:col-span-2">
                            <div className="prose prose-lg max-w-none text-text-light">
                                <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                    Min baggrund
                                </h2>
                                <p>
                                    Jeg har arbejdet professionelt med hypnose i over 27 år og har i den tid
                                    gennemført mere end 10.000 sessioner med klienter fra alle samfundslag og
                                    med vidt forskellige udfordringer.
                                </p>
                                <p>
                                    Min tilgang til hypnose er rodfæstet i en dyb forståelse af det menneskelige
                                    sind og de mekanismer, der styrer vores tanker, følelser og adfærd. Jeg arbejder
                                    i krydsfeltet mellem psykologi, adfærd og hypnose.
                                </p>

                                <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                    Institut for Avanceret Hypnose
                                </h2>
                                <p>
                                    Ud over at praktisere hypnose har jeg uddannet over 750 professionelle
                                    hypnotisører og hypnoterapeuter gennem <strong>Institut for Avanceret Hypnose</strong>,
                                    som jeg er grundlægger af.
                                </p>
                                <p>
                                    Uddannelsen tilbydes både i Svendborg og Roskilde og er en af Danmarks mest
                                    omfattende og praksisorienterede hypnoseuddannelser.
                                </p>

                                <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                    HelloMind
                                </h2>
                                <p>
                                    Jeg er også medstifter af <a href="https://hellomind.com/dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">HelloMind</a>, en prisbelønnet
                                    hypnose-app, der har hjulpet tusindvis af mennesker verden over med at
                                    arbejde med alt fra stress og angst til søvn og selvtillid.
                                </p>

                                <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                    Min tilgang
                                </h2>
                                <p>
                                    Jeg tror på, at de bedste resultater opnås gennem et tillidsfuldt samarbejde.
                                    Derfor lægger jeg stor vægt på at skabe et trygt, respektfuldt rum, hvor du
                                    kan slappe af og være ærlig om dine udfordringer.
                                </p>
                                <p>
                                    Min stil er jordnær og direkte. Jeg forklarer altid, hvad der sker, og
                                    hvorfor – så du hele tiden føler dig tryg og informeret.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Photo */}
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/jacob-strachotta.jpg"
                                    alt="Jacob Strachotta - Hypnotisør"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Stats */}
                            <div className="bg-primary text-white rounded-xl p-6">
                                <h3
                                    className="font-bold text-lg mb-4"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    I tal
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-3xl font-bold">27+</div>
                                        <div className="text-white/80 text-sm">års erfaring</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">10.000+</div>
                                        <div className="text-white/80 text-sm">sessioner gennemført</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">750+</div>
                                        <div className="text-white/80 text-sm">uddannede hypnotisører</div>
                                    </div>
                                </div>
                            </div>

                            {/* Trustpilot */}
                            <div className="bg-background-alt rounded-xl p-6 text-center">
                                <div className="flex justify-center gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-6 h-6 text-[#00b67a]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-2xl font-bold text-text">4.9 / 5</p>
                                <p className="text-text-muted text-sm">207 anmeldelser på Trustpilot</p>
                                <a
                                    href={site.social.trustpilot}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 text-primary text-sm hover:underline"
                                >
                                    Se anmeldelser
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA
                title="Klar til at komme i gang?"
                description="Book din session og oplev, hvordan hypnose kan hjælpe dig."
                primaryButton={{
                    label: "Book behandling",
                    href: site.contact.bookingUrl,
                    external: true,
                }}
                secondaryButton={{
                    label: "Kontakt mig",
                    href: "/kontakt",
                }}
            />
        </>
    );
}
