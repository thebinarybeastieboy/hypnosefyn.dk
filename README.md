# Hypnose Fyn

Officielt website for [Hypnose Fyn](https://hypnosefyn.dk) v/ Jacob Strachotta.

## Teknisk Stack

Projektet er bygget med moderne webteknologier med fokus på hastighed, SEO og stabilitet.

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Sprog**: TypeScript
- **Content**: JSON-baseret CMS (i `/content` mappen)
- **Deploy Strategi**: Static HTML Export

## Lokal Udvikling

For at køre projektet lokalt:

1.  Installer afhængigheder:
    ```bash
    npm install
    ```

2.  Start udviklingsserveren:
    ```bash
    npm run dev
    ```

Sitet vil være tilgængeligt på `http://localhost:3000`.

## Build & Deployment

Sitet er konfigureret til **Static Export**, hvilket betyder det genererer rene HTML/CSS/JS filer, der kan hostes på enhver webserver (f.eks. Siteground) uden Node.js backend.

### Generer produktions-build

```bash
npm run build
```

Dette vil oprette en `out` mappe med alle produktionsfilerne.

### Deploy til Siteground

1.  Kør `npm run build` (eller zip-kommandoet nedenfor).
2.  Tag indholdet af `out` mappen.
3.  Upload det til `public_html` mappen på webserveren via File Manager eller FTP.

**Zip kommando (Mac/Linux):**
```bash
zip -r hypnosefyn_production.zip out
```

## Projektstruktur

- `/app`: Pages og routing logic (Next.js App Router).
- `/components`: Genbrugelige UI komponenter (Buttons, Cards, Layouts).
- `/content`: Alt tekstindhold ligger her som JSON filer for nem redigering.
- `/lib`: Hjælpefunktioner (SEO, utils).
- `/public`: Billeder og statiske filer.

## Features

- **Lokal SEO**: Dedikeret sektion med afstande til alle større fynske byer.
- **JSON-LD**: Struktureret data for LocalBusiness, Person, Service og FAQ.
- **Dynamiske Sider**: Behandlingssider genereres automatisk ud fra data.
- **Mailto Kontakt**: Ingen server-backend nødvendig for kontaktformularen.

---
© 2026 Hypnose Fyn / Jacob Strachotta
