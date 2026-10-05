# M.A Plomberie — site vitrine

Site one-page Next.js pour **M.A Plomberie** (Andrei Mihailescu), plombier à Monnaie (37).
Projet livré et fonctionnel.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Sécurité : CSP par nonce (middleware), headers de sécurité (next.config.ts), validation Zod, sanitisation (lib/sanitize.ts)

## Démarrage

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Build de production :

```bash
npm run build
npm run start
```

## Arborescence

```
site/
├── app/
│   ├── layout.tsx                      Layout racine, metadata SEO
│   ├── page.tsx                        Page d'accueil (assemble toutes les sections)
│   ├── globals.css                     Styles globaux Tailwind
│   ├── error.tsx                       Page d'erreur
│   ├── not-found.tsx                   Page 404
│   ├── robots.ts                       robots.txt généré
│   ├── sitemap.ts                      sitemap.xml généré
│   ├── icon.png / apple-icon.png       Favicons
│   ├── mentions-legales/page.tsx       Page légale : mentions légales
│   └── politique-confidentialite/page.tsx   Page légale : politique de confidentialité
│
├── components/
│   ├── Header.tsx                      En-tête / navigation
│   ├── Footer.tsx                      Pied de page
│   ├── sections/
│   │   ├── HeroSection.tsx             Section d'accueil + CTA devis
│   │   ├── ServicesSection.tsx         Liste des prestations
│   │   ├── WhyUsSection.tsx            Arguments / pourquoi choisir M.A Plomberie
│   │   ├── GallerySection.tsx          Galerie photos chantiers
│   │   ├── TestimonialsSection.tsx     Avis clients
│   │   ├── MapSection.tsx              Carte / zone d'intervention
│   │   └── ContactSection.tsx          Coordonnées de contact (tel / mailto)
│   └── ui/
│       ├── Button.tsx                  Bouton réutilisable
│       ├── Card.tsx                    Carte réutilisable
│       └── Field.tsx                   Champ de formulaire réutilisable
│
├── lib/
│   ├── constants.ts                    Données du site (coordonnées, services, galerie, SITE_URL…)
│   ├── validation.ts                   Schémas de validation Zod
│   ├── sanitize.ts                     Sanitisation des entrées
│   └── ratelimit.ts                    Rate limiting Upstash (prêt à l'emploi, non branché — pas de formulaire serveur actuellement)
│
├── public/
│   ├── logo.png
│   ├── hero-plombier.png
│   └── icon/                           Icônes (icon.png, icon-32.png)
│
├── middleware.ts                       CSP (nonce par requête) + noindex en preview
├── next.config.ts                      Headers de sécurité HTTP, domaines d'images autorisés
├── .env.example                        Variables d'environnement (SITE_URL)
├── package.json
└── tsconfig.json
```

## Contact

Pas de formulaire ni d'envoi d'email côté serveur : les visiteurs contactent l'entreprise
directement par téléphone (`tel:`) ou par email (`mailto:`), y compris le bouton « Demander un
devis gratuit » du hero. L'adresse postale (section Contact, pied de page, mentions légales)
pointe vers Google Maps.

> Note : `resend` et `@upstash/ratelimit` sont présents dans les dépendances et `lib/ratelimit.ts`
> existe comme brique prête à l'emploi, mais aucune route API ne les utilise actuellement — il n'y a
> pas d'envoi d'email serveur sur ce site. La page `/politique-confidentialite` mentionne Resend ;
> à corriger si ce service n'est finalement pas utilisé.

## Points à surveiller côté contenu

- `ASSURANCE_RCP` dans `lib/constants.ts` contient encore un texte à compléter par le client
  (assureur, n° de contrat).
- `GALLERY_IMAGES` dans `lib/constants.ts` utilise des photos libres de droits (Pexels) en
  attendant de vraies photos de chantiers du client.

## Déploiement

Voir la skill `vercel-deploy` DesCodes pour la procédure de mise en ligne via Vercel + GitHub.
