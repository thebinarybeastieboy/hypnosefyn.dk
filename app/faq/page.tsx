import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/blocks/CTA';
import site from '@/content/site.json';

export const metadata: Metadata = {
    title: 'FAQ – Ofte stillede spørgsmål',
    description: 'Find svar på de mest stillede spørgsmål om hypnose, behandling og booking hos Hypnose Fyn i Svendborg.',
};

const faqs = [
    {
        category: "Om hypnose",
        questions: [
            {
                q: "Hvad er hypnose?",
                a: "Hypnose er en naturlig bevidsthedstilstand karakteriseret ved dyb mental afspænding og øget fokus. I denne tilstand bliver dit underbevidste sind mere modtageligt for positive forandringer. Du behøver ikke være fysisk afspændt – det er sindet, der giver slip. Du er vågen og bevidst hele vejen igennem."
            },
            {
                q: "Kan alle hypnotiseres?",
                a: "Ja, de fleste mennesker kan hypnotiseres. Evnen varierer fra person til person, men med den rette tilgang kan næsten alle opleve hypnotisk tilstand. Det handler om at finde den tilgang, der virker for dig."
            },
            {
                q: "Er hypnose farligt?",
                a: "Nej, hypnose er en helt naturlig tilstand. Du kan ikke blive 'fanget' i hypnose, og du bevarer altid din frie vilje. Al hypnose er i bund og grund selvhypnose – du er i kontrol."
            },
            {
                q: "Kan hypnotisøren få mig til at gøre noget imod min vilje?",
                a: "Nej. Du bibeholder altid dine værdier og din dømmekraft under hypnose. Du vil ikke acceptere suggestioner, der strider imod dine overbevisninger."
            },
            {
                q: "Husker jeg, hvad der sker under hypnose?",
                a: "Ja, de fleste husker alt. Du er ikke bevidstløs, men i en tilstand af fokuseret opmærksomhed. Nogle oplever let amnesi for detaljer, men den overordnede oplevelse huskes typisk klart."
            },
        ]
    },
    {
        category: "Om behandlingen",
        questions: [
            {
                q: "Hvor lang tid varer en session?",
                a: "En session varer ca. 60 minutter. Dette inkluderer indledende samtale, selve hypnosen og en afsluttende opsamling."
            },
            {
                q: "Hvor mange sessioner har jeg brug for?",
                a: "Det varierer afhængigt af udfordringen. Mange oplever betydelig forbedring efter 1-3 sessioner. Nogle udfordringer kan kræve flere sessioner for at opnå varige resultater."
            },
            {
                q: "Hvad kan hypnose hjælpe med?",
                a: "Hypnose kan hjælpe med mange udfordringer, herunder angst, stress, søvnproblemer, fobier (flyskræk, klaustrofobi m.m.), rygestop, vægttab, eksamensangst og meget mere."
            },
            {
                q: "Mærker jeg effekten med det samme?",
                a: "Mange oplever øjeblikkelig afspænding og klarhed efter første session. Varige ændringer kan udvikle sig over dage og uger, efterhånden som de nye mønstre forankres."
            },
        ]
    },
    {
        category: "Praktisk",
        questions: [
            {
                q: "Hvor ligger klinikken?",
                a: "Klinikken ligger i Lehns Hus, Sørup Kirkevej 74, 5700 Svendborg. Der er gratis parkering lige ved klinikken."
            },
            {
                q: "Hvordan booker jeg en tid?",
                a: "Du booker via vores online bookingsystem på jacobstrachotta.dk/hypnose-svendborg. Efter booking modtager du en bekræftelsesmail."
            },
            {
                q: "Hvad koster en behandling?",
                a: "Find aktuelle priser på vores bookingside på jacobstrachotta.dk/hypnose-svendborg."
            },
            {
                q: "Kan jeg aflyse eller ændre min tid?",
                a: "Ja, kontakt os så hurtigt som muligt. Vi beder om mindst 24 timers varsel ved aflysning."
            },
            {
                q: "Skal jeg forberede mig på noget?",
                a: "Kom i behageligt tøj. Det vigtigste er at komme med et åbent sind og en intention om forandring."
            },
        ]
    },
];

export default function FAQPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#25a31d] to-[#1e8a17] text-white py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <nav className="text-white/60 text-sm mb-4">
                            <Link href="/" className="hover:text-white">Forside</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">FAQ</span>
                        </nav>
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Ofte stillede spørgsmål
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Find svar på de mest almindelige spørgsmål om hypnose og behandling.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ sections */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto space-y-12">
                        {faqs.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <h2
                                    className="text-2xl font-bold text-text mb-6"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    {section.category}
                                </h2>
                                <div className="space-y-4">
                                    {section.questions.map((item, index) => (
                                        <details key={index} className="group bg-background-alt rounded-lg">
                                            <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-text">
                                                {item.q}
                                                <svg className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </summary>
                                            <p className="px-5 pb-5 text-text-light">
                                                {item.a}
                                            </p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still have questions */}
            <CTA
                title="Har du flere spørgsmål?"
                description="Kontakt os, så hjælper vi gerne."
                primaryButton={{
                    label: "Kontakt os",
                    href: "/kontakt",
                }}
                secondaryButton={{
                    label: "Book behandling",
                    href: site.contact.bookingUrl,
                    external: true,
                }}
                variant="light"
            />
        </>
    );
}
