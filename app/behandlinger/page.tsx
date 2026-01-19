import { Metadata } from 'next';
import Link from 'next/link';
import TreatmentCards from '@/components/blocks/TreatmentCards';
import CTA from '@/components/blocks/CTA';
import treatments from '@/content/treatments.json';
import site from '@/content/site.json';

export const metadata: Metadata = {
    title: 'Behandlinger',
    description: 'Se alle vores hypnosebehandlinger. Vi hjælper med angst, stress, søvnløshed, fobier, vægttab, rygestop og meget mere i Svendborg.',
};

export default function BehandlingerPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#25a31d] to-[#1e8a17] text-white py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <nav className="text-white/60 text-sm mb-4">
                            <Link href="/" className="hover:text-white">Forside</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">Behandlinger</span>
                        </nav>
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Hvad kan hypnose hjælpe med?
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Hypnose er en effektiv metode til at arbejde med en lang række udfordringer.
                            Herunder finder du de mest almindelige områder, vi arbejder med.
                        </p>
                    </div>
                </div>
            </section>

            {/* All treatments */}
            <TreatmentCards
                treatments={treatments}
                showAll={true}
            />

            {/* Process */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2
                            className="text-3xl font-bold text-text mb-8 text-center"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Sådan forløber behandlingen
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Indledende samtale",
                                    desc: "Vi starter med en samtale, hvor du fortæller om dine udfordringer og mål. Dette hjælper mig med at skræddersy behandlingen til dig."
                                },
                                {
                                    title: "Hypnotisk induktion",
                                    desc: "Du guides ind i en behagelig, afslappet tilstand. Du forbliver bevidst og i kontrol hele vejen igennem."
                                },
                                {
                                    title: "Terapeutisk arbejde",
                                    desc: "I hypnose arbejder vi med de underbevidste mønstre, der ligger bag dine udfordringer. Dette kan indebære visualiseringer, regression eller suggestioner."
                                },
                                {
                                    title: "Integration og afslutning",
                                    desc: "De nye mønstre forankres, og du vender stille og roligt tilbage til fuld vågen tilstand – ofte med en følelse af lethed og klarhed."
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: 'var(--font-headline)' }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-text-light">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA
                title="Har du spørgsmål?"
                description="Kontakt os for en uforpligtende snak om, hvordan hypnose kan hjælpe dig."
                primaryButton={{
                    label: "Book behandling",
                    href: site.contact.bookingUrl,
                    external: true,
                }}
                secondaryButton={{
                    label: "Kontakt os",
                    href: "/kontakt",
                }}
            />
        </>
    );
}
