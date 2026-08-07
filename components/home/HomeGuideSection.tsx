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
  const editorial = t.home.editorial;

  return (
    <section
      id="overview"
      dir={isArabic ? "rtl" : "ltr"}
      className="section-shell section-shell--tight"
    >
      <div className="container-main">
        <FadeUp>
          <article className="surface-panel mb-8 rounded-[28px] p-5 sm:mb-10 sm:rounded-[30px] sm:p-7">
            <p className="lp-eyebrow text-[var(--primary)]">{editorial.eyebrow}</p>
            <h2 className="lp-card-title mt-4 text-[var(--foreground)]">{editorial.title}</h2>
            <p className="lp-body-sm mt-3 max-w-3xl text-[var(--foreground-muted)]">
              {editorial.text}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {editorial.items.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border border-[var(--border)] bg-black/18 p-4"
                >
                  <p className="lp-eyebrow text-[var(--foreground-soft)]">{item.label}</p>
                  <p className="lp-body-sm mt-2 text-[var(--foreground)]">{item.value}</p>
                </div>
              ))}
            </div>
          </article>
        </FadeUp>

        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeUp>
            <article className="surface-glass rounded-[28px] p-5 sm:rounded-[30px] sm:p-7">
              <h3 className="lp-card-title text-[var(--foreground)]">{section.answerHeading}</h3>
              <p className="lp-body mt-4 text-[var(--foreground-muted)]">{section.answerBlock}</p>
              <p className="lp-body-sm mt-4 text-[var(--foreground-soft)]">
                {section.supportingText}
              </p>

              <div className="mt-6 rounded-[22px] border border-[var(--border)] bg-black/16 p-4 sm:p-5">
                <p className="lp-eyebrow text-[var(--primary)]">{section.signalsLabel}</p>
                <ul className="mt-3 grid gap-3">
                  {section.signals.map((signal) => (
                    <li key={signal} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
                      />
                      <span className="lp-body-sm text-[var(--foreground-muted)]">{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
