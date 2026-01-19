import { MetadataRoute } from 'next';
import treatments from '@/content/treatments.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hypnosefyn.dk';

    // Static pages
    const staticPages = [
        '',
        '/hypnose',
        '/behandlinger',
        '/praktisk',
        '/om-jacob',
        '/uddannelse',
        '/kontakt',
        '/faq',
    ];

    const staticRoutes = staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic treatment pages
    const treatmentRoutes = treatments.map((treatment) => ({
        url: `${baseUrl}/behandlinger/${treatment.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...treatmentRoutes];
}
