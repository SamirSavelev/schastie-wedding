import { useRef } from "react";
import "./ArticleHero.scss";

interface ArticleHeroProps {
  backgroundImage: string;
  backgroundImageWebp?: {
    src: string;
    srcSet: string;
    sizes?: string;
  };
  title: string;
  description: string;
}

export const ArticleHero = ({
  backgroundImage,
  backgroundImageWebp,
  title,
  description,
}: ArticleHeroProps) => {
  const heroRef = useRef<HTMLElement | null>(null);

  const handleScrollDown = () => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const next = heroEl.nextElementSibling as HTMLElement | null;
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} className="article-hero" role="banner">
      <picture className="article-hero__media" aria-hidden="true">
        {backgroundImageWebp && (
          <source
            type="image/webp"
            srcSet={backgroundImageWebp.srcSet}
            sizes={backgroundImageWebp.sizes ?? "100vw"}
          />
        )}
        <img
          className="article-hero__image"
          src={backgroundImageWebp?.src ?? backgroundImage}
          alt=""
          loading="eager"
          decoding="async"
        />
      </picture>

      <div className="article-hero__overlay" />

      <div className="article-hero__inner">
        <div className="article-hero__content">
          <h1 className="article-hero__title">{title}</h1>
          {!!description && (
            <p className="article-hero__description">{description}</p>
          )}
        </div>

        <button
          type="button"
          className="article-hero__scroll"
          onClick={handleScrollDown}
        >
          <span className="article-hero__scroll-text">Смотреть фото</span>
          <span className="article-hero__scroll-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" role="presentation">
              <path
                d="M6 10l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};
