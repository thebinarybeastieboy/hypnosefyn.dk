import { Metadata } from 'next';
import Link from 'next/link';
import DefinitionBox from '@/components/blocks/DefinitionBox';
import CTA from '@/components/blocks/CTA';
import site from '@/content/site.json';

export const metadata: Metadata = {
    title: 'Hvad er hypnose?',
    description: 'Lær hvad hypnose er, hvordan det virker, og hvad du kan forvente af en hypnosebehandling. Få svar på de mest stillede spørgsmål om hypnose.',
};

export default function HypnosePage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#25a31d] to-[#1e8a17] text-white py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <nav className="text-white/60 text-sm mb-4">
                            <Link href="/" className="hover:text-white">Forside</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">Hypnose</span>
                        </nav>
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Hvad er hypnose?
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Hypnose er en naturlig tilstand, du sikkert allerede kender. Her forklarer vi,
                            hvad der sker under hypnose, og hvordan det kan hjælpe dig.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto">

                        <DefinitionBox
                            term="Hypnose"
                            definition="Hypnose er en naturlig bevidsthedstilstand karakteriseret ved dyb mental afspænding og øget fokus, hvor den bevidste del af sindet træder i baggrunden, og det underbevidste sind bliver mere modtageligt for positive forandringer. Du behøver ikke være fysisk afspændt – det handler om at geare ned mentalt. Al hypnose er i bund og grund selvhypnose – du er altid i kontrol."
                        />

                        <div className="prose prose-lg max-w-none text-text-light">
                            <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                Hvad sker der under hypnose?
                            </h2>
                            <p>
                                Under hypnose oplever du en tilstand af dyb mental afspænding og skærpet koncentration.
                                Du behøver ikke være fysisk afspændt – det er sindet, der giver slip.
                                Din bevidste, kritiske sans træder lidt i baggrunden, mens dit underbevidste sind
                                bliver mere tilgængeligt og modtageligt for positive forandringer.
                            </p>
                            <p>
                                Det er ikke søvn – du er vågen og bevidst hele vejen igennem. De fleste beskriver
                                det som en behagelig, afslappet tilstand, hvor de føler sig rolige og fokuserede
                                på samme tid.
                            </p>

                            <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                Hvad kan hypnose hjælpe med?
                            </h2>
                            <p>
                                Hypnose er en effektiv metode til at arbejde med mange forskellige udfordringer,
                                især dem der har rødder i underbevidste mønstre:
                            </p>
                            <ul>
                                <li><strong><Link href="/behandlinger/angst">Angst</Link> og <Link href="/behandlinger/fobier">fobier</Link></strong> – herunder <Link href="/behandlinger/flyskraek">flyskræk</Link>, <Link href="/behandlinger/klaustrofobi">klaustrofobi</Link>, social angst</li>
                                <li><strong><Link href="/behandlinger/stress">Stress</Link></strong> – genfind ro og balance</li>
                                <li><strong><Link href="/behandlinger/soevn">Søvnproblemer</Link></strong> – slip tankemylder og sov bedre</li>
                                <li><strong>Vaner</strong> – <Link href="/behandlinger/rygestop">rygestop</Link>, <Link href="/behandlinger/sukkertrang">sukkertrang</Link>, overspisning</li>
                                <li><strong>Præstationsangst</strong> – <Link href="/behandlinger/eksamensangst">eksamensangst</Link>, sceneskræk</li>
                                <li><strong>Selvtillid og selvværd</strong></li>
                            </ul>

                            <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                Hvornår virker hypnose?
                            </h2>
                            <p>
                                Hypnose virker bedst, når der er et tillidsfuldt samarbejde mellem dig og hypnotisøren.
                                Det kræver, at du har en intention om forandring og er åben over for processen.
                            </p>
                            <p>
                                Alle kan i princippet hypnotiseres – det handler om at finde den rette tilgang.
                                Evnen til at gå i hypnose er naturlig og kan trænes.
                            </p>

                            <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                Er hypnose farligt?
                            </h2>
                            <p>
                                Nej, hypnose er en helt naturlig tilstand, som du sandsynligvis oplever flere gange
                                om dagen – f.eks. når du er fordybet i en film eller kører bil på "autopilot".
                            </p>
                            <p>
                                Du kan ikke blive "fanget" i hypnose, og du vil altid kunne afbryde, hvis du ønsker det.
                                <strong> Al hypnose er i bund og grund selvhypnose</strong> – du er med hele vejen og
                                bibeholder din frie vilje.
                            </p>

                            <h2 className="text-text" style={{ fontFamily: 'var(--font-headline)' }}>
                                Hypnose vs. scenehypnose
                            </h2>
                            <p>
                                Det er vigtigt at skelne mellem terapeutisk hypnose og scenehypnose. Scenehypnose
                                er underholdning, hvor deltagerne bevidst spiller med. Terapeutisk hypnose handler
                                om at skabe reel, positiv forandring.
                            </p>
                            <p>
                                Hos os arbejder vi altid respektfuldt og professionelt med dit velbefindende i fokus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section bg-background-alt">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2
                            className="text-3xl font-bold text-text mb-8 text-center"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Ofte stillede spørgsmål
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "Kan alle hypnotiseres?",
                                    a: "Ja, de fleste mennesker kan hypnotiseres. Evnen til at gå i hypnose varierer fra person til person, men med den rette tilgang kan de fleste opleve hypnotisk tilstand."
                                },
                                {
                                    q: "Husker jeg, hvad der sker under hypnose?",
                                    a: "Ja, de fleste husker alt, der sker under hypnose. Du er ikke bevidstløs, men i en tilstand af fokuseret opmærksomhed."
                                },
                                {
                                    q: "Kan hypnotisøren få mig til at gøre noget imod min vilje?",
                                    a: "Nej. Du bibeholder altid din frie vilje og dine værdier under hypnose. Du vil ikke gøre noget, der strider imod dine overbevisninger."
                                },
                                {
                                    q: "Hvor lang tid varer en session?",
                                    a: "En session varer ca. 60 minutter, inklusiv samtale før og efter selve hypnosen."
                                },
                                {
                                    q: "Hvor mange sessioner har jeg brug for?",
                                    a: "Det varierer afhængigt af udfordringen. Mange oplever betydelig forbedring efter 1-3 sessioner, mens andre forløb kan være længere."
                                },
                                {
                                    q: "Er hypnose det samme som meditation?",
                                    a: "Der er ligheder, da begge involverer afspænding og fokus. Men hypnose inkluderer typisk aktiv guidning og arbejde mod specifikke mål, mens meditation ofte handler om at observere tanker uden at ændre dem."
                                },
                            ].map((item, index) => (
                                <details key={index} className="group bg-white rounded-lg shadow-sm">
                                    <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-text">
                                        {item.q}
                                        <svg className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
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
                </div>
            </section>

            {/* CTA */}
            <CTA
                title="Klar til at opleve hypnose?"
                description="Book en session og oplev selv, hvordan hypnose kan hjælpe dig."
                primaryButton={{
                    label: "Book behandling",
                    href: site.contact.bookingUrl,
                    external: true,
                }}
                secondaryButton={{
                    label: "Se behandlinger",
                    href: "/behandlinger",
                }}
            />
        </>
    );
}
