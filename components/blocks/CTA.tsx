import Link from 'next/link';

interface CTAProps {
    title: string;
    description?: string;
    primaryButton: {
        label: string;
        href: string;
        external?: boolean;
    };
    secondaryButton?: {
        label: string;
        href: string;
        external?: boolean;
    };
    variant?: 'primary' | 'secondary' | 'light';
}

export default function CTA({
    title,
    description,
    primaryButton,
    secondaryButton,
    variant = 'primary',
}: CTAProps) {
    const bgStyles = {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        light: 'bg-background-alt text-text',
    };

    const buttonStyles = {
        primary: 'bg-white text-primary hover:bg-white/90',
        secondary: 'bg-white text-secondary hover:bg-white/90',
        light: 'bg-primary text-white hover:bg-primary-dark [&]:text-white [&]:hover:text-white',
    };

    const secondaryButtonStyles = {
        primary: 'border-white/50 text-white hover:bg-white/10',
        secondary: 'border-white/50 text-white hover:bg-white/10',
        light: 'border-primary text-primary hover:bg-primary hover:text-white',
    };

    return (
        <section className={`section ${bgStyles[variant]}`}>
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ fontFamily: 'var(--font-headline)' }}
                    >
                        {title}
                    </h2>

                    {description && (
                        <p className={`text-lg mb-8 ${variant === 'light' ? 'text-text-light' : 'text-white/90'}`}>
                            {description}
                        </p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {primaryButton.external ? (
                            <a
                                href={primaryButton.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all hover:scale-105 shadow-lg ${buttonStyles[variant]}`}
                                style={{ color: variant === 'primary' || variant === 'secondary' ? '#25a31d' : 'white' }}
                            >
                                {primaryButton.label}
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        ) : (
                            <Link
                                href={primaryButton.href}
                                className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all hover:scale-105 shadow-lg ${buttonStyles[variant]}`}
                                style={{ color: variant === 'primary' || variant === 'secondary' ? '#25a31d' : 'white' }}
                            >
                                {primaryButton.label}
                            </Link>
                        )}


                        {secondaryButton && (
                            secondaryButton.external ? (
                                <a
                                    href={secondaryButton.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg border-2 transition-all ${secondaryButtonStyles[variant]}`}
                                >
                                    {secondaryButton.label}
                                </a>
                            ) : (
                                <Link
                                    href={secondaryButton.href}
                                    className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg border-2 transition-all ${secondaryButtonStyles[variant]}`}
                                >
                                    {secondaryButton.label}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
