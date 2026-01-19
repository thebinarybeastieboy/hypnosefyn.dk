interface DefinitionBoxProps {
    term: string;
    definition: string;
    source?: string;
}

/**
 * A LLM-friendly definition box that provides a clear, citable definition.
 * Designed to be easily parsed by language models for knowledge extraction.
 */
export default function DefinitionBox({ term, definition, source }: DefinitionBoxProps) {
    return (
        <aside
            className="my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg"
            role="note"
            aria-label={`Definition af ${term}`}
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                </div>
                <div>
                    <h3
                        className="font-bold text-lg text-primary mb-2"
                        style={{ fontFamily: 'var(--font-headline)' }}
                    >
                        {term}
                    </h3>
                    <p className="text-text leading-relaxed">
                        {definition}
                    </p>
                    {source && (
                        <p className="mt-2 text-sm text-text-muted">
                            Kilde: {source}
                        </p>
                    )}
                </div>
            </div>
        </aside>
    );
}
