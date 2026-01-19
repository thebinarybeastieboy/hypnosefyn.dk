import Link from 'next/link';

interface HeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    primaryCta?: {
        label: string;
        href: string;
        external?: boolean;
    };
    secondaryCta?: {
        label: string;
        href: string;
    };
    backgroundImage?: string;
    centered?: boolean;
}

export default function Hero({
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    backgroundImage,
    centered = true,
}: HeroProps) {
    return (
        <section
            className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden"
            style={{
                background: backgroundImage
                    ? `linear-gradient(to right, rgba(37, 163, 29, 0.92), rgba(30, 138, 23, 0.88)), url(${backgroundImage}) center/cover no-repeat`
                    : 'linear-gradient(135deg, #25a31d 0%, #1e8a17 50%, #166812 100%)',
            }}
        >
            {/* Subtle animated gradient overlay */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                }}
                aria-hidden="true"
            />

            <div className={`container relative z-10 py-16 lg:py-24 ${centered ? 'text-center' : ''}`}>
                <div className={centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}>
                    {subtitle && (
                        <p className="text-white/80 text-sm md:text-base font-medium uppercase tracking-wider mb-4">
                            {subtitle}
                        </p>
                    )}

                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
                        style={{ fontFamily: 'var(--font-headline)' }}
                    >
                        {title}
                    </h1>

                    {description && (
                        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}

                    {(primaryCta || secondaryCta) && (
                        <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
                            {primaryCta && (
                                primaryCta.external ? (
                                    <a
                                        href={primaryCta.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
                                    >
                                        {primaryCta.label}
                                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </a>
                                ) : (
                                    <Link
                                        href={primaryCta.href}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
                                    >
                                        {primaryCta.label}
                                    </Link>
                                )
                            )}

                            {secondaryCta && (
                                <Link
                                    href={secondaryCta.href}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all"
                                >
                                    {secondaryCta.label}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}
