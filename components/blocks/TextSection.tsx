interface TextSectionProps {
    title?: string;
    subtitle?: string;
    content: string;
    align?: 'left' | 'center';
    columns?: 1 | 2;
}

export default function TextSection({
    title,
    subtitle,
    content,
    align = 'left',
    columns = 1,
}: TextSectionProps) {
    return (
        <section className="section">
            <div className="container">
                <div className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
                    {(title || subtitle) && (
                        <div className="mb-8">
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

                    <div
                        className={`prose prose-lg max-w-none text-text-light ${columns === 2 ? 'md:columns-2 md:gap-8' : ''}`}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </section>
    );
}
