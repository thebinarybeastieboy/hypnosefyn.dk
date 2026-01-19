import Hero from '@/components/blocks/Hero';
import TreatmentCards from '@/components/blocks/TreatmentCards';
import Testimonials from '@/components/blocks/Testimonials';
import CTA from '@/components/blocks/CTA';
import DefinitionBox from '@/components/blocks/DefinitionBox';
import treatments from '@/content/treatments.json';
import testimonials from '@/content/testimonials.json';
import site from '@/content/site.json';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Professionel hypnosebehandling på Fyn"
        title="Skab varig forandring med hypnose"
        description="Hos Hypnose Fyn i Svendborg tilbyder vi professionel hypnosebehandling med over 27 års erfaring. Slip angst, stress og fobier – og genfind ro og balance i dit liv."
        primaryCta={{
          label: "Book behandling",
          href: site.contact.bookingUrl,
          external: true,
        }}
        secondaryCta={{
          label: "Læs om hypnose",
          href: "/hypnose",
        }}
      />

      {/* What is hypnosis - brief intro */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-text mb-6"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Hvad er hypnose?
            </h2>
            <p className="text-lg text-text-light leading-relaxed mb-6">
              Hypnose er en naturlig tilstand af dyb mental afspænding og fokuseret opmærksomhed,
              hvor dit underbevidste sind bliver mere tilgængeligt for positiv forandring.
              Det er ikke søvn, men en tilstand af skærpet koncentration, hvor du forbliver
              bevidst og i kontrol hele vejen igennem. Du behøver ikke være fysisk afspændt –
              det er den mentale del af sindet, der frigøres.
            </p>
            <DefinitionBox
              term="Hypnose"
              definition="Hypnose er en naturlig bevidsthedstilstand karakteriseret ved dyb mental afspænding og øget fokus, hvor den bevidste del af sindet træder i baggrunden, og det underbevidste sind bliver mere modtageligt for positive forandringer. Du behøver ikke være fysisk afspændt – det handler om at geare ned mentalt. Al hypnose er i bund og grund selvhypnose – du er altid i kontrol."
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">27+</div>
              <div className="text-white/80">års erfaring</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10.000+</div>
              <div className="text-white/80">sessioner</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">750+</div>
              <div className="text-white/80">uddannede</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
              <div className="text-white/80">på Trustpilot</div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <TreatmentCards
        subtitle="Behandlinger"
        title="Hvad kan hypnose hjælpe med?"
        treatments={treatments}
      />

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-wider text-sm mb-2">
              Processen
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-text"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Sådan foregår en session
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { step: 1, title: "Samtale", desc: "Vi starter med at tale om dine udfordringer og ønsker" },
              { step: 2, title: "Mental afspænding", desc: "Du guides ind i en rolig, fokuseret tilstand" },
              { step: 3, title: "Hypnose", desc: "Vi arbejder med dit underbevidste sind" },
              { step: 4, title: "Integration", desc: "Nye mønstre og ressourcer forankres" },
              { step: 5, title: "Afslutning", desc: "Du vender tilbage fuldt bevidst og forfrisket" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  {item.title}
                </h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        subtitle="Anmeldelser"
        title="Hvad siger vores klienter?"
        testimonials={testimonials}
        trustpilotUrl={site.social.trustpilot}
      />

      {/* About Jacob brief */}
      <section className="section bg-background-alt">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-primary font-medium uppercase tracking-wider text-sm mb-2">
                Om hypnotisøren
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-text mb-6"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                Jacob Strachotta
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                Med over 27 års erfaring og mere end 10.000 sessioner er Jacob en af Danmarks
                mest erfarne hypnotisører. Han har uddannet over 750 professionelle hypnotisører
                og hypnoterapeuter gennem <strong>Institut for Avanceret Hypnose</strong>.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                Jacob arbejder i krydsfeltet mellem psykologi, adfærd og hypnose, og hans tilgang
                er præget af faglighed, varme og en dyb forståelse for menneskets sind.
              </p>
              <a href="/om-jacob" className="btn-outline">
                Læs mere om Jacob
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/30 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-text-muted text-sm">Billede kommer snart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              {/* Static map placeholder with link */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.street + ', ' + site.address.zip + ' ' + site.address.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-primary font-medium">Se på Google Maps</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-medium uppercase tracking-wider text-sm mb-2">
                Klinik i Svendborg
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-text mb-6"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                Find os på Fyn
              </h2>
              <address className="not-italic text-text-light leading-relaxed mb-6">
                <strong className="text-text">{site.address.name}</strong><br />
                {site.address.street}<br />
                {site.address.zip} {site.address.city}
              </address>
              <ul className="space-y-3 text-text-light mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Gratis parkering lige ved klinikken
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Jacob henter dig i ventilokalet
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Rolige, trygge omgivelser
                </li>
              </ul>
              <a href="/praktisk" className="btn-outline">
                Praktisk information
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        title="Klar til at tage det første skridt?"
        description="Book din session i dag og oplev, hvordan hypnose kan hjælpe dig med at skabe varig forandring."
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
