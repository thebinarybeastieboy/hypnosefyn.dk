import site from '@/content/site.json';

export interface FAQItem {
    question: string;
    answer: string;
}

// LocalBusiness schema for the clinic
export function generateLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'HealthAndBeautyBusiness',
        '@id': 'https://hypnosefyn.dk/#business',
        name: 'Hypnose Fyn',
        alternateName: 'Institut for Avanceret Hypnose - Svendborg',
        description: site.description,
        url: 'https://hypnosefyn.dk',
        telephone: undefined, // No phone number
        email: site.contact.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            postalCode: site.address.zip,
            addressCountry: 'DK',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 55.0674, // Approximate for Svendborg
            longitude: 10.6086,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
        },
        priceRange: '$$',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '207',
            bestRating: '5',
            worstRating: '1',
        },
        sameAs: [
            site.social.trustpilot,
            'https://jacobstrachotta.dk',
        ],
    };
}

// Person schema for Jacob Strachotta
export function generatePersonSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://hypnosefyn.dk/#person',
        name: site.owner.name,
        jobTitle: 'Hypnotisør og Hypnoterapeut',
        description: 'En af Danmarks mest erfarne hypnotisører med over 27 års erfaring og mere end 10.000 sessioner.',
        worksFor: {
            '@type': 'Organization',
            name: site.owner.company,
        },
        alumniOf: {
            '@type': 'Organization',
            name: 'Institut for Avanceret Hypnose',
        },
        knowsAbout: [
            'Hypnose',
            'Hypnoterapi',
            'Angstbehandling',
            'Stressbehandling',
            'Fobibehandling',
        ],
        sameAs: [
            'https://jacobstrachotta.dk',
            'https://dk.linkedin.com/in/jacobstrachotta',
        ],
    };
}

// Service schema for hypnosis treatment
export function generateServiceSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': 'https://hypnosefyn.dk/#service',
        name: 'Hypnosebehandling',
        description: 'Professionel hypnosebehandling til behandling af angst, stress, fobier, søvnproblemer og mere.',
        provider: {
            '@type': 'HealthAndBeautyBusiness',
            '@id': 'https://hypnosefyn.dk/#business',
        },
        serviceType: 'Hypnoterapi',
        areaServed: {
            '@type': 'Place',
            name: 'Fyn, Danmark',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Hypnosebehandlinger',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Hypnose mod angst',
                        description: 'Behandling af angst og panikangst med hypnose.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Hypnose mod stress',
                        description: 'Stressbehandling med hypnose for at genfinde balance.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Hypnose mod fobier',
                        description: 'Behandling af fobier som flyskræk og klaustrofobi.',
                    },
                },
            ],
        },
    };
}

// FAQPage schema
export function generateFAQSchema(faqs: FAQItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

// BreadcrumbList schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

// Combined schema for homepage
export function generateHomePageSchema() {
    return [
        generateLocalBusinessSchema(),
        generatePersonSchema(),
        generateServiceSchema(),
    ];
}
