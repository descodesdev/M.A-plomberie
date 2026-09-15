# M.A Plomberie — site vitrine

Site one-page Next.js pour M.A Plomberie (Andrei Mihailescu), plombier à Monnaie (37).

## Démarrage

```bash
npm ci
cp .env.example .env.local
npm run dev
```

## À compléter avant mise en ligne définitive

- [ ] Assurance RCP (assureur, n° de contrat) — voir `lib/constants.ts` (`ASSURANCE_RCP`)
- [ ] Remplacer les photos de la galerie (`GALLERY_IMAGES` dans `lib/constants.ts`) par de vraies
      photos de chantiers du client
- [ ] Renseigner `SITE_URL` avec le nom de domaine définitif (`.env.local` + `lib/constants.ts`)
- [ ] Créer les comptes Resend (email), Cloudflare Turnstile (anti-spam) et Upstash (rate limit)
      et renseigner les clés dans `.env.local`
- [ ] Vérifier/adapter le médiateur de la consommation dans `/mentions-legales`
- [ ] Configurer SPF/DKIM/DMARC sur le domaine définitif (vérification Resend)

## Déploiement

Voir la skill `vercel-deploy` DesCodes, ou `doc/DEPLOYMENT.md` (à créer si besoin) pour la procédure
manuelle Vercel + GitHub.
