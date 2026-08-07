import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import BenefitsSection from "@/components/partnership/BenefitsSection";
import FinalCTASection from "@/components/partnership/FinalCTASection";
import HeroSection from "@/components/partnership/HeroSection";
import HowItWorksSection from "@/components/partnership/HowItWorksSection";
import PathsSection from "@/components/partnership/PathsSection";
import { marketBrand, marketMetadata, marketRoutes, marketSiteUrl } from "@/lib/market";

export const metadata = marketMetadata;

const partnershipStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${marketSiteUrl}/#publisher`,
    name: marketBrand.name,
    url: marketSiteUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${marketSiteUrl}${marketRoutes.partnership}#webpage`,
    url: `${marketSiteUrl}${marketRoutes.partnership}`,
    name: `${marketBrand.name} | ${marketBrand.network}`,
    description:
      "The Mauritania partnership page published by MR Partner for agent cashier flows, partner models, and network contact access.",
    inLanguage: ["en", "ar", "fr"],
    author: {
      "@id": `${marketSiteUrl}/#publisher`,
    },
    publisher: {
      "@id": `${marketSiteUrl}/#publisher`,
    },
    about: [
      { "@type": "Thing", name: "Agent cashier flows" },
      { "@type": "Thing", name: "Partner models" },
      { "@type": "Thing", name: "Contact routes" },
    ],
  },
] as const;

export default function PartnershipPage() {
  return (
    <>
      <main className="pb-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipStructuredData) }}
        />
        <HeroSection />
        <SectionDivider />
        <BenefitsSection />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <PathsSection />
        <SectionDivider />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
