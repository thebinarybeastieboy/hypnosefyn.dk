interface Testimonial {
    id: string;
    name: string;
    text: string;
    type: string;
    rating: number;
}

interface TestimonialsProps {
    title?: string;
    subtitle?: string;
    testimonials: Testimonial[];
    trustpilotUrl?: string;
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${rating} ud af 5 stjerner`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? 'text-[#00b67a]' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials({
    title,
    subtitle,
    testimonials,
    trustpilotUrl,
}: TestimonialsProps) {
    // Show max 6 testimonials
    const displayTestimonials = testimonials.slice(0, 6);

    return (
        <section className="section">
            <div className="container">
                {(title || subtitle) && (
                    <div className="text-center mb-12">
                        {subtitle && (
                            <p className="text-primary font-medium uppercase tracking-wider text-sm mb-2">
                                {subtitle}
                            </p>
                        )}
                        {title && (
                            <h2
                                className="text-3xl md:text-4xl font-bold text-text"
                                style={{ fontFamily: 'var(--font-headline)' }}
                            >
                                {title}
                            </h2>
                        )}
                    </div>
                )}

                {/* Trustpilot badge */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-border">
                        <svg className="w-6 h-6 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="font-bold text-[#00b67a]">Trustpilot</span>
                        <span className="text-text-light text-sm">4.9 / 5</span>
                        <span className="text-text-muted text-sm">(207 anmeldelser)</span>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {displayTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-xl p-6 shadow-sm border border-border"
                        >
                            <StarRating rating={testimonial.rating} />
                            <p className="mt-4 text-text-light leading-relaxed">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <div className="mt-4 pt-4 border-t border-border">
                                <p className="font-medium text-text">{testimonial.name}</p>
                                <p className="text-sm text-text-muted capitalize">{testimonial.type}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {trustpilotUrl && (
                    <div className="text-center mt-10">
                        <a
                            href={trustpilotUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
                        >
                            Se alle anmeldelser på Trustpilot
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
