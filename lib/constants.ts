export const NOM_ENTREPRISE = "M.A Plomberie";
export const NOM_DIRIGEANT = "Andrei Mihailescu";
export const FORME_JURIDIQUE = "Entrepreneur individuel";
export const SIRET = "999 972 615 00010";
export const SIREN = "999 972 615";
export const CODE_NAF = "4322A — Travaux de plomberie et d'installation sanitaire et de chauffage";
export const TVA_MENTION = "TVA non applicable, art. 293 B du CGI (franchise en base)";
export const ASSURANCE_RCP = "[À COMPLÉTER PAR LE CLIENT — assureur, n° de contrat et étendue de garantie]";

export const PHONE_DISPLAY = "06 16 99 38 51";
export const PHONE_E164 = "+33616993851";
export const EMAIL = "m.aplomberie@hotmail.com";
export const VILLE = "Monnaie";
export const CODE_POSTAL = "37380";
export const DEPARTEMENT = "Indre-et-Loire";
export const ZONE = "Monnaie et un rayon de 30 km : Tours, Vouvray, Neuillé-Pont-Pierre, Château-la-Vallière, Semblançay";
export const SECTEUR = "Plomberie, chauffage et climatisation";

export const SITE_URL = process.env.SITE_URL ?? "https://ma-plomberie-monnaie.fr";

export const COULEUR_PRIMAIRE = "#0B1330";
export const COULEUR_ACCENT_ROUGE = "#DC2626";
export const COULEUR_ACCENT_BLEU = "#2563EB";

export const DESCODES_URL = "https://www.descodes.com";

export const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(`${VILLE} ${CODE_POSTAL} ${DEPARTEMENT}`) +
  "&output=embed";

export const HERO_TITLE = "Votre plombier de confiance à Monnaie";
export const HERO_SUBTITLE =
  "Plomberie, chauffage et climatisation. Interventions soignées et devis gratuit dans le secteur de Monnaie et ses environs.";

export type Service = {
  id: number;
  icon: "wrench" | "flame" | "snowflake" | "droplet";
  title: string;
  description: string;
};

export const SERVICES: readonly Service[] = [
  {
    id: 1,
    icon: "wrench",
    title: "Plomberie générale",
    description:
      "Installation, réparation et entretien de vos équipements sanitaires : robinetterie, canalisations, WC, chauffe-eau.",
  },
  {
    id: 2,
    icon: "flame",
    title: "Chauffage",
    description:
      "Installation et entretien de chaudières et systèmes de chauffage pour un confort optimal toute l'année.",
  },
  {
    id: 3,
    icon: "snowflake",
    title: "Climatisation",
    description:
      "Pose et maintenance de climatiseurs adaptés à votre logement, pour un intérieur frais en toute saison.",
  },
  {
    id: 4,
    icon: "droplet",
    title: "Dépannage",
    description:
      "Diagnostic rapide et intervention sur vos pannes de plomberie ou de chauffage, avec devis gratuit.",
  },
] as const;

export type WhyUsItem = {
  id: number;
  title: string;
  description: string;
};

export const WHY_US: readonly WhyUsItem[] = [
  {
    id: 1,
    title: "Réponse rapide",
    description: "Prise de contact directe par téléphone et devis gratuit avant toute intervention.",
  },
  {
    id: 2,
    title: "Entreprise locale",
    description: `Basée à ${VILLE} (${DEPARTEMENT}), au plus proche de nos clients dans le secteur.`,
  },
  {
    id: 3,
    title: "Entreprise déclarée",
    description: `Entreprise individuelle immatriculée sous le SIRET ${SIRET}, vérifiée SIRENE (INSEE).`,
  },
] as const;

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

export const GALLERY_IMAGES: readonly GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Technicien réparant une unité de climatisation extérieure",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/29226620/pexels-photo-29226620/free-photo-of-professional-plumber-installing-a-radiator-pipe.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Plombier sertissant un raccord de tuyauterie sur un radiateur",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Réparation du circulateur d'une chaudière",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/16509869/pexels-photo-16509869/free-photo-of-close-up-of-man-using-a-spanner.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Dépannage d'une installation de plomberie avec une clé",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/34938442/pexels-photo-34938442/free-photo-of-technician-maintaining-heating-system-in-workshop.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Entretien d'une chaudière murale de chauffage",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/28169591/pexels-photo-28169591/free-photo-of-copper-pluming-fitting.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Raccords en cuivre pour installation de plomberie",
  },
] as const;

// Photos temporaires libres de droits (Pexels, licence commerciale, sans attribution requise) —
// à remplacer par de vraies photos de chantiers du client dès qu'il les fournit.
