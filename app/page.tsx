import HomeGuideSection from "@/components/home/HomeGuideSection";
import Footer from "@/components/Footer";
import CasinoSection from "@/components/home/CasinoSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomeQuestionsSection from "@/components/home/HomeQuestionsSection";
import PromosSection from "@/components/home/PromosSection";
import SportsSection from "@/components/home/SportsSection";
import SectionDivider from "@/components/SectionDivider";
import { homeMetadata, marketBrand, marketSiteUrl } from "@/lib/market";

export const metadata = homeMetadata;

const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${marketSiteUrl}/#publisher`,
    name: marketBrand.name,
    url: marketSiteUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${marketSiteUrl}/#website`,
    name: "Melbet Mauritania",
    alternateName: ["Melbet Mauritanie"],
    url: `${marketSiteUrl}/`,
    inLanguage: ["en", "ar", "fr"],
    publisher: {
      "@id": `${marketSiteUrl}/#publisher`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${marketSiteUrl}/#webpage`,
    url: `${marketSiteUrl}/`,
    name: "Melbet Mauritania | Sports, Casino, Promotions and Gifts",
    alternateName: "Melbet Mauritanie",
    description:
      "Melbet Mauritania is the multilingual homepage hub for sports, casino, promotions, gifts, and partnership access in Mauritania for Melbet Mauritanie visitors.",
    inLanguage: ["en", "ar", "fr"],
    isPartOf: {
      "@id": `${marketSiteUrl}/#website`,
    },
    author: {
      "@id": `${marketSiteUrl}/#publisher`,
    },
    publisher: {
      "@id": `${marketSiteUrl}/#publisher`,
    },
    about: [
      { "@type": "Thing", name: "Sports" },
      { "@type": "Thing", name: "Casino" },
      { "@type": "Thing", name: "Promotions" },
      { "@type": "Thing", name: "Partnership" },
    ],
  },
] as const;

export default function HomePage() {
  return (
    <>
      <main className="pb-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
        />
        <HomeHeroSection />
        <SectionDivider />
        <HomeGuideSection />
        <SectionDivider />
        <SportsSection />
        <SectionDivider />
        <CasinoSection />
        <SectionDivider />
        <PromosSection />
        <SectionDivider />
        <HomeQuestionsSection />
      </main>
      <Footer />
    </>
  );
}
