import type { Metadata } from "next";

export const marketBrand = {
  parent: "Melbet",
  name: "MR Partner",
  network: "Mauritania Partnership Network",
} as const;

export const marketSiteUrl = "https://www.melbet-mauritania.com";

export const marketRoutes = {
  home: "/",
  homeSports: "/#sports",
  homeCasino: "/#casino",
  homePromos: "/#promos",
  partnership: "/partnership",
  benefits: "/partnership#benefits",
  steps: "/partnership#how-it-works",
  partnershipPaths: "/partnership#partnership",
  cta: "/partnership#cta",
} as const;

export const marketContactLinks = {
  telegram: "https://t.me/MRPartner",
  whatsapp: "mailto:PAYPARTNERS-NORTHAFRICA@MELBET.COM",
} as const;

export const siteMetadata: Metadata = {
  metadataBase: new URL(marketSiteUrl),
  authors: [{ name: marketBrand.name }],
  creator: marketBrand.name,
  publisher: marketBrand.name,
  robots: {
    index: true,
    follow: true,
  },
};

export const marketMetadata: Metadata = {
  metadataBase: new URL(marketSiteUrl),
  title: `${marketBrand.name} | ${marketBrand.network}`,
  description:
    "Explore the Mauritania partnership page for agent cashier flows, partner models, and network contact routes published on this site.",
  alternates: {
    canonical: `${marketSiteUrl}${marketRoutes.partnership}`,
  },
  authors: [{ name: marketBrand.name }],
  creator: marketBrand.name,
  publisher: marketBrand.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: `${marketSiteUrl}${marketRoutes.partnership}`,
    siteName: marketBrand.parent,
    title: `${marketBrand.name} | ${marketBrand.network}`,
    description:
      "Partnership routes for agents and partners in the Mauritania network published on this website.",
    locale: "ar_MR",
    alternateLocale: ["en_US", "fr_MR"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${marketBrand.name} | ${marketBrand.network}`,
    description:
      "Partnership routes for agents and partners in the Mauritania network published on this website.",
  },
};

export const homeMetadata: Metadata = {
  metadataBase: new URL(marketSiteUrl),
  title: "Melbet Mauritania | Sports, Casino, Promotions and Gifts",
  description:
    "Melbet Mauritania is the multilingual homepage hub for sports markets, casino games, weekly promotions, gifts, and partnership access in Mauritania.",
  alternates: {
    canonical: marketSiteUrl,
  },
  authors: [{ name: marketBrand.name }],
  creator: marketBrand.name,
  publisher: marketBrand.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: `${marketSiteUrl}${marketRoutes.home}`,
    siteName: marketBrand.parent,
    title: "Melbet Mauritania | Sports, Casino, Promotions and Gifts",
    description:
      "Sports, casino games, promotions, gifts, and partnership access for Mauritania in one homepage hub.",
    locale: "ar_MR",
    alternateLocale: ["en_US", "fr_MR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melbet Mauritania | Sports, Casino, Promotions and Gifts",
    description:
      "Sports, casino games, promotions, gifts, and partnership access for Mauritania in one homepage hub.",
  },
};
