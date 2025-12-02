import { useRef } from 'react';
import './ArticleHero.scss';

interface ArticleHeroProps {
  backgroundImage: string;
  title: string;
  description: string;
}

export const ArticleHero = ({
  backgroundImage,
  title,
  description,
}: ArticleHeroProps) => {
  const heroRef = useRef<HTMLElement | null>(null);

  const handleScrollDown = () => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const next = heroEl.nextElementSibling as HTMLElement | null;
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="article-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      role="banner"
    >
      <div className="article-hero__overlay" />

      <div className="article-hero__inner">
        <div className="article-hero__content">
          <h1 className="article-hero__title">{title}</h1>
          <p className="article-hero__description">{description}</p>
        </div>

        <button
          type="button"
          className="article-hero__scroll"
          onClick={handleScrollDown}
        >
          <span className="article-hero__scroll-text">Читать статью</span>
          <span className="article-hero__scroll-icon" aria-hidden="true">
            {/* стрелка без центральной линии, увеличена в 2 раза */}
            <svg width="36" height="36" viewBox="0 0 24 24" role="presentation">
              <path
                d="M6 10l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
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
