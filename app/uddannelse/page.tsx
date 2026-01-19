import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Hypnoseuddannelse',
    description: 'Bliv professionel hypnotisør eller hypnoterapeut. Jacob Strachotta har uddannet over 750 professionelle gennem Institut for Avanceret Hypnose.',
};

export default function UddannelsePage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#25a31d] to-[#1e8a17] text-white py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <nav className="text-white/60 text-sm mb-4">
                            <Link href="/" className="hover:text-white">Forside</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">Uddannelse</span>
                        </nav>
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Hypnoseuddannelse
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Er du interesseret i at lære hypnose professionelt? Jacob uddanner hypnotisører
                            og hypnoterapeuter gennem Institut for Avanceret Hypnose.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg max-w-none text-text-light">
                            <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                Institut for Avanceret Hypnose
                            </h2>
                            <p>
                                Jacob Strachotta er grundlægger af <strong>Institut for Avanceret Hypnose</strong>,
                                hvor han har uddannet over 750 professionelle hypnotisører og hypnoterapeuter.
                            </p>
                            <p>
                                Uddannelsen er en af Danmarks mest omfattende og praksisorienterede hypnoseuddannelser,
                                der kombinerer solid teori med intensiv praktisk træning.
                            </p>

                            <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                Hvad lærer du?
                            </h2>
                            <ul>
                                <li>Dybe teoretiske fundamenter for hypnose og hypnoterapi</li>
                                <li>Praktiske teknikker og induktionsteknikker</li>
                                <li>Arbejde med forskellige problemstillinger (angst, fobier, vaner m.m.)</li>
                                <li>Etik og professionel praksis</li>
                                <li>At opbygge en praksis som hypnoterapeut</li>
                            </ul>

                            <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                Lokationer
                            </h2>
                            <p>
                                Uddannelsen tilbydes i:
                            </p>
                            <ul>
                                <li><strong>Svendborg</strong> – på Fyn</li>
                                <li><strong>Roskilde</strong> – på Sjælland</li>
                            </ul>

                            <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                Læs mere og tilmeld dig
                            </h2>
                            <p>
                                For detaljerede oplysninger om uddannelsen, datoer og tilmelding,
                                besøg hovedsitet:
                            </p>
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://jacobstrachotta.dk/hypnose-uddannelse-og-kursus/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                Se uddannelse på hovedsitet
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
                            <div className="bg-primary/10 rounded-xl p-6">
                                <div className="text-3xl font-bold text-primary">750+</div>
                                <div className="text-text-muted text-sm">uddannede</div>
                            </div>
                            <div className="bg-primary/10 rounded-xl p-6">
                                <div className="text-3xl font-bold text-primary">27+</div>
                                <div className="text-text-muted text-sm">års erfaring</div>
                            </div>
                            <div className="bg-primary/10 rounded-xl p-6">
                                <div className="text-3xl font-bold text-primary">2</div>
                                <div className="text-text-muted text-sm">lokationer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
