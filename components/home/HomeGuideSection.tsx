"use client";

import Link from "next/link";
import { FadeUp, StaggerReveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { marketRoutes } from "@/lib/market";
import { useLanguage } from "@/providers/LanguageProvider";

const guideLinks = [
  { href: marketRoutes.homeSports, key: "sports" },
  { href: marketRoutes.homeCasino, key: "casino" },
  { href: marketRoutes.homePromos, key: "promos" },
  { href: marketRoutes.partnership, key: "partnership" },
] as const;

export default function HomeGuideSection() {
  const { t, isArabic } = useLanguage();
  const section = t.home.guide;

  return (
    <section
      id="overview"
      dir={isArabic ? "rtl" : "ltr"}
      className="section-shell section-shell--tight"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeUp>
            <article className="surface-glass rounded-[28px] p-5 sm:rounded-[30px] sm:p-7">
              <p className="lp-body text-[var(--foreground-muted)]">{section.answerBlock}</p>

              <div className="mt-6">
                <p className="lp-eyebrow text-[var(--primary)]">{section.quickLinksLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {guideLinks.map((link) => (
                    <Link key={link.key} href={link.href} className="button-secondary lp-button">
                      {section.links[link.key]}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </FadeUp>

          <StaggerReveal className="grid gap-4">
            {section.cards.map((card) => (
              <article
                key={card.title}
                className="surface-accent rounded-[24px] p-5 sm:rounded-[26px] sm:p-6"
              >
                <p className="lp-card-title text-[var(--foreground)]">{card.title}</p>
                <p className="lp-body-sm mt-3 text-[var(--foreground-muted)]">{card.text}</p>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
