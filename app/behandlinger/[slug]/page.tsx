import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CTA from '@/components/blocks/CTA';
import treatments from '@/content/treatments.json';
import site from '@/content/site.json';
import testimonials from '@/content/testimonials.json';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return treatments.map((treatment) => ({
        slug: treatment.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const treatment = treatments.find((t) => t.slug === slug);

    if (!treatment) {
        return { title: 'Ikke fundet' };
    }

    return {
        title: treatment.seo.title,
        description: treatment.seo.description,
    };
}

export default async function TreatmentPage({ params }: Props) {
    const { slug } = await params;
    const treatment = treatments.find((t) => t.slug === slug);

    if (!treatment) {
        notFound();
    }

    // Find related testimonials
    const relatedTestimonials = testimonials.filter(
        (t) => t.type === slug || t.type === 'behandling'
    ).slice(0, 2);

    // Find related treatments (exclude current)
    const relatedTreatments = treatments
        .filter((t) => t.slug !== slug)
        .slice(0, 3);

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#25a31d] to-[#1e8a17] text-white py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <nav className="text-white/60 text-sm mb-4">
                            <Link href="/" className="hover:text-white">Forside</Link>
                            <span className="mx-2">/</span>
                            <Link href="/behandlinger" className="hover:text-white">Behandlinger</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">{treatment.title}</span>
                        </nav>
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            {treatment.title}
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            {treatment.intro}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="section">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Main column */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Symptoms */}
                            <div>
                                <h2
                                    className="text-2xl font-bold text-text mb-6"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    Genkender du disse symptomer?
                                </h2>
                                <ul className="space-y-3">
                                    {treatment.symptoms.map((symptom, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-text-light">{symptom}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* How it helps */}
                            <div>
                                <h2
                                    className="text-2xl font-bold text-text mb-6"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    Hvordan kan hypnose hjælpe?
                                </h2>
                                <p className="text-text-light leading-relaxed">
                                    {treatment.howItHelps}
                                </p>
                            </div>

                            {/* Process */}
                            <div>
                                <h2
                                    className="text-2xl font-bold text-text mb-6"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    Sådan foregår behandlingen
                                </h2>
                                <ol className="space-y-4">
                                    {treatment.process.map((step, index) => (
                                        <li key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                                                {index + 1}
                                            </div>
                                            <p className="text-text-light pt-1">{step}</p>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* FAQ */}
                            <div>
                                <h2
                                    className="text-2xl font-bold text-text mb-6"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    Ofte stillede spørgsmål
                                </h2>
                                <div className="space-y-4">
                                    {treatment.faq.map((item, index) => (
                                        <details key={index} className="group bg-background-alt rounded-lg">
                                            <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-text">
                                                {item.question}
                                                <svg className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </summary>
                                            <p className="px-4 pb-4 text-text-light">
                                                {item.answer}
                                            </p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Book CTA */}
                            <div className="bg-primary text-white rounded-xl p-6">
                                <h3
                                    className="font-bold text-xl mb-3"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    Klar til at komme i gang?
                                </h3>
                                <p className="text-white/80 text-sm mb-4">
                                    Book din session i dag og tag det første skridt mod forandring.
                                </p>
                                <a
                                    href={site.contact.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-white font-semibold py-3 rounded-lg hover:bg-white/90 transition-colors"
                                    style={{ color: '#25a31d' }}
                                >
                                    Book behandling
                                </a>
                            </div>

                            {/* Testimonials */}
                            {relatedTestimonials.length > 0 && (
                                <div className="bg-background-alt rounded-xl p-6">
                                    <h3
                                        className="font-bold text-lg mb-4"
                                        style={{ fontFamily: 'var(--font-headline)' }}
                                    >
                                        Hvad siger andre?
                                    </h3>
                                    <div className="space-y-4">
                                        {relatedTestimonials.map((testimonial) => (
                                            <div key={testimonial.id} className="text-sm">
                                                <p className="text-text-light italic mb-2">
                                                    &ldquo;{testimonial.text.slice(0, 150)}...&rdquo;
                                                </p>
                                                <p className="text-text font-medium">— {testimonial.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Contact */}
                            <div className="border border-border rounded-xl p-6">
                                <h3
                                    className="font-bold text-lg mb-3"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    Har du spørgsmål?
                                </h3>
                                <p className="text-text-light text-sm mb-4">
                                    Kontakt os for en uforpligtende snak.
                                </p>
                                <Link
                                    href="/kontakt"
                                    className="btn-outline w-full text-center"
                                >
                                    Kontakt os
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related treatments */}
            <section className="section bg-background-alt">
                <div className="container">
                    <h2
                        className="text-2xl font-bold text-text mb-8 text-center"
                        style={{ fontFamily: 'var(--font-headline)' }}
                    >
                        Andre behandlinger
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedTreatments.map((t) => (
                            <Link
                                key={t.slug}
                                href={`/behandlinger/${t.slug}`}
                                className="bg-white rounded-xl p-6 shadow-sm border border-border card-hover"
                            >
                                <h3
                                    className="font-semibold text-lg text-text mb-2"
                                    style={{ fontFamily: 'var(--font-headline)' }}
                                >
                                    {t.title}
                                </h3>
                                <p className="text-text-light text-sm line-clamp-2">
                                    {t.shortDescription}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA
                title="Tag det første skridt i dag"
                description="Book din session og oplev, hvordan hypnose kan hjælpe dig."
                primaryButton={{
                    label: "Book behandling",
                    href: site.contact.bookingUrl,
                    external: true,
                }}
                secondaryButton={{
                    label: "Læs mere om hypnose",
                    href: "/hypnose",
                }}
            />
        </>
    );
}
