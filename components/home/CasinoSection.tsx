"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FadeUp } from "@/components/Reveal";
import { marketRoutes } from "@/lib/market";
import { prefersReducedMotion } from "@/lib/motion";
import { useLanguage } from "@/providers/LanguageProvider";

const categoryImages = [
  "/casino/casino.webp",
  "/casino/slots.webp",
  "/casino/live.webp",
] as const;

const carouselImages = [
  "/casino/carousel/aviator.webp",
  "/casino/carousel/roulette.webp",
  "/casino/carousel/blackjack.webp",
  "/casino/carousel/sweet.webp",
  "/casino/carousel/book.webp",
  "/casino/carousel/dragon.webp",
  "/casino/carousel/time.webp",
] as const;

type GameDetail = {
  description: string;
  tags: readonly string[];
  rating: string;
};

function CategoryMedia({ index, title }: { index: number; title: string }) {
  const src = categoryImages[index] ?? categoryImages[0];

  return (
    <div className="relative h-full min-h-[clamp(18rem,78vw,23.75rem)] overflow-hidden rounded-[26px] border border-[var(--border)] bg-black/20 sm:rounded-[28px]">
      <Image
        src={src}
        alt={`${title} category preview`}
        width={800}
        height={600}
        sizes="(max-width: 1024px) 100vw, 420px"
        className="h-full w-full object-cover"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(5,8,6,0.34)_100%),radial-gradient(circle_at_50%_24%,rgba(212,168,79,0.16),transparent_44%)]"
      />
      <span
        aria-hidden
        className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/35 to-transparent sm:inset-x-6 sm:top-6"
      />
      <span
        aria-hidden
        className="absolute bottom-4 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-2xl sm:bottom-6 sm:w-48"
      />
      <span className="lp-eyebrow absolute left-4 top-4 rounded-full border border-[var(--border-strong)] bg-[rgba(5,8,6,0.72)] px-3 py-1.5 text-[var(--primary-strong)] backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-2">
        {title}
      </span>
    </div>
  );
}

function GameIcon({
  name,
  index,
  imageSrc,
  decorative = false,
  activeIndex = null,
  onHover,
  onLeave,
}: {
  name: string;
  index: number;
  imageSrc: string;
  decorative?: boolean;
  activeIndex?: number | null;
  onHover?: (index: number) => void;
  onLeave?: () => void;
}) {
  const isActive = activeIndex === index;
  const isDimmed = activeIndex !== null && !isActive;

  return (
    <button
      type="button"
      className={[
        "w-[84px] shrink-0 text-center transition duration-300 focus-visible:outline-none sm:w-[104px] md:w-[116px]",
        isActive ? "scale-105" : "scale-[0.92] hover:scale-100 focus-visible:scale-100",
        isDimmed ? "opacity-42 blur-[1.6px]" : "opacity-100 blur-0",
      ].join(" ")}
      onMouseEnter={() => onHover?.(index)}
      onFocus={() => onHover?.(index)}
      onMouseLeave={onLeave}
      onBlur={onLeave}
      tabIndex={decorative ? -1 : 0}
    >
      <div className="relative mx-auto h-[64px] w-[64px] overflow-hidden rounded-[18px] border border-[var(--border)] bg-[rgba(255,255,255,0.035)] shadow-[0_16px_36px_rgba(0,0,0,0.18)] sm:h-[76px] sm:w-[76px] sm:rounded-[22px]">
        <Image
          src={imageSrc}
          alt={decorative ? "" : `${name} game thumbnail`}
          width={800}
          height={800}
          sizes="(max-width: 640px) 64px, 76px"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <p className="mt-1.5 truncate text-[11px] font-bold text-[var(--foreground-muted)] sm:mt-2 sm:text-xs">
        {name}
      </p>
    </button>
  );
}

function GameShowcase({
  name,
  index,
  details,
  previewLabel,
  ratingLabel,
  playNowLabel,
  onHold,
  onLeave,
}: {
  name: string;
  index: number;
  details: GameDetail;
  previewLabel: string;
  ratingLabel: string;
  playNowLabel: string;
  onHold: () => void;
  onLeave: () => void;
}) {
  const imageSrc = carouselImages[index] ?? carouselImages[0];

  return (
    <div
      className="surface-accent flex min-h-[clamp(18rem,78vw,23.75rem)] flex-col justify-between overflow-hidden rounded-[26px] p-5 sm:rounded-[28px] sm:p-6 lg:p-7"
      onMouseEnter={onHold}
      onMouseLeave={onLeave}
      onFocus={onHold}
      onBlur={onLeave}
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[20px] border border-[var(--border-strong)] bg-black/20 shadow-[0_18px_42px_rgba(0,0,0,0.24)] sm:h-20 sm:w-20 sm:rounded-[24px]">
          <Image
            src={imageSrc}
            alt={`${name} game preview`}
            width={800}
            height={800}
            sizes="(max-width: 640px) 64px, 80px"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="lp-eyebrow text-[var(--primary)]">{previewLabel}</p>
          <h3 className="lp-card-title mt-3 text-[var(--foreground)]">{name}</h3>
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        <p className="lp-body text-[var(--foreground-muted)]">{details.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
          <div className="flex gap-1 text-[var(--primary-strong)]" aria-hidden>
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <svg
                key={starIndex}
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="m10 1.8 2.5 5.1 5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.6-.8L10 1.8z" />
              </svg>
            ))}
          </div>
          <p className="text-sm font-bold text-[var(--foreground-muted)]">
            <span dir="ltr">{details.rating}</span> {ratingLabel}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
          {details.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] bg-white/[0.035] px-3 py-1.5 text-xs font-bold text-[var(--foreground-muted)] sm:py-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a href={marketRoutes.homePromos} className="button-primary lp-button mt-8 self-start sm:mt-9">
        {playNowLabel}
      </a>
    </div>
  );
}

export default function CasinoSection() {
  const { t, isArabic } = useLanguage();
  const section = t.home.casino;
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredGameIndex, setHoveredGameIndex] = useState<number | null>(null);
  const hideShowcaseTimerRef = useRef<number | null>(null);
  const hoveredGameName =
    hoveredGameIndex === null ? null : (section.games[hoveredGameIndex] ?? null);
  const hoveredGameDetails =
    hoveredGameIndex === null
      ? null
      : (section.gameDetails[hoveredGameIndex] ?? section.gameDetails[0]);

  useEffect(() => {
    return () => {
      if (hideShowcaseTimerRef.current !== null) {
        window.clearTimeout(hideShowcaseTimerRef.current);
      }
    };
  }, []);

  const clearShowcaseTimer = () => {
    if (hideShowcaseTimerRef.current === null) return;
    window.clearTimeout(hideShowcaseTimerRef.current);
    hideShowcaseTimerRef.current = null;
  };

  const showGameShowcase = (index: number) => {
    clearShowcaseTimer();
    setHoveredGameIndex(index);
  };

  const holdGameShowcase = () => {
    clearShowcaseTimer();
  };

  const scheduleHideGameShowcase = () => {
    clearShowcaseTimer();
    hideShowcaseTimerRef.current = window.setTimeout(() => {
      setHoveredGameIndex(null);
      hideShowcaseTimerRef.current = null;
    }, 140);
  };

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % section.categories.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [section.categories.length]);

  return (
    <section id="casino" dir={isArabic ? "rtl" : "ltr"} className="section-shell">
      <div className="container-main">
        <div className="grid items-center gap-7 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="max-w-xl">
            <FadeUp>
              <p className="lp-eyebrow text-[var(--primary)]">{section.eyebrow}</p>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="lp-section-title mt-5 text-[var(--foreground)]">
                {section.title}
              </h2>
            </FadeUp>
            <FadeUp delay={140}>
              <div className="relative mt-4 min-h-[9rem] sm:min-h-[8rem] lg:min-h-[6.5rem]">
                {section.categories.map((category, index) => (
                  <p
                    key={category.title}
                    className={[
                      "lp-body absolute inset-0 text-[var(--foreground-muted)] transition-opacity duration-500",
                      activeIndex === index ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    aria-hidden={activeIndex !== index}
                  >
                    {category.description}
                  </p>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={180}>
            <div className="surface-panel relative overflow-hidden rounded-[28px] p-5 sm:rounded-[34px] sm:p-7 lg:p-8">
              <span aria-hidden className="panel-top-line" />

              <div className="relative min-h-[clamp(18rem,78vw,23.75rem)]">
                {section.categories.map((category, index) => (
                  <article
                    key={category.title}
                    className={[
                      "absolute inset-0 transition duration-500 ease-out",
                      hoveredGameIndex === null && activeIndex === index
                        ? "translate-y-0 scale-100 opacity-100 blur-0"
                        : "pointer-events-none translate-y-2 scale-[0.985] opacity-0 blur-sm",
                    ].join(" ")}
                    aria-hidden={hoveredGameIndex !== null || activeIndex !== index}
                  >
                    <CategoryMedia index={index} title={category.title} />
                  </article>
                ))}

                {hoveredGameIndex !== null && hoveredGameName && hoveredGameDetails ? (
                  <article className="absolute inset-0 translate-y-0 scale-100 opacity-100 blur-0 transition duration-500 ease-out">
                    <GameShowcase
                      name={hoveredGameName}
                      index={hoveredGameIndex}
                      details={hoveredGameDetails}
                      previewLabel={section.gamePreview}
                      ratingLabel={section.ratingLabel}
                      playNowLabel={section.playNow}
                      onHold={holdGameShowcase}
                      onLeave={scheduleHideGameShowcase}
                    />
                  </article>
                ) : (
                  <article
                    aria-hidden
                    className="pointer-events-none absolute inset-0 translate-y-2 scale-[0.985] opacity-0 blur-sm transition duration-500 ease-out"
                  />
                )}
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={220}>
          <div className="surface-glass mt-4 overflow-hidden rounded-[26px] px-3 py-4 sm:mt-5 sm:rounded-[30px] sm:px-6 sm:py-5">
            <div dir="ltr" className="overflow-x-auto pb-1">
              <div className="flex min-w-max gap-2.5 pr-2.5 sm:gap-3 sm:pr-3">
                {section.games.map((game, index) => (
                  <GameIcon
                    key={game}
                    name={game}
                    index={index}
                    imageSrc={carouselImages[index] ?? carouselImages[0]}
                    activeIndex={hoveredGameIndex}
                    onHover={showGameShowcase}
                    onLeave={scheduleHideGameShowcase}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
