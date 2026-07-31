"use client";

import { FadeUp, StaggerReveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

export default function HomeQuestionsSection() {
  const { t, isArabic } = useLanguage();
  const faq = t.home.faq;
  const editorial = t.home.editorial;

  return (
    <section
      id="questions"
      dir={isArabic ? "rtl" : "ltr"}
      className="section-shell section-shell--tight pt-0"
    >
      <div className="container-main">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} text={faq.text} />

        <StaggerReveal className="mt-8 grid gap-4 lg:grid-cols-2">
          {faq.items.map((item) => (
            <article
              key={item.question}
              className="surface-glass rounded-[24px] p-5 sm:rounded-[26px] sm:p-6"
            >
              <h3 className="lp-card-title text-[var(--foreground)]">{item.question}</h3>
              <p className="lp-body-sm mt-3 text-[var(--foreground-muted)]">{item.answer}</p>
            </article>
          ))}
        </StaggerReveal>

        <FadeUp delay={120}>
          <article className="surface-panel mt-4 rounded-[28px] p-5 sm:rounded-[30px] sm:p-7">
            <p className="lp-eyebrow text-[var(--primary)]">{editorial.eyebrow}</p>
            <h2 className="lp-section-title mt-5 text-[var(--foreground)]">{editorial.title}</h2>
            <p className="lp-body mt-4 max-w-3xl text-[var(--foreground-muted)]">
              {editorial.text}
            </p>
            <p className="lp-body-sm mt-4 max-w-3xl text-[var(--foreground-soft)]">
              {editorial.note}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
      </div>
    </section>
  );
}
