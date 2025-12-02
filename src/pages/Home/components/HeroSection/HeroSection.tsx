import { useEffect, useState } from 'react';
import { Container } from '@shared/ui/Container/Container';
import { Slideshow } from '@shared/ui/Slideshow/Slideshow';
import {
  HOME_HERO_IMAGES,
  HOME_HERO_PHRASES,
  HOME_HERO_TITLE_LINES,
  HOME_HERO_TYPING_SPEED,
  HOME_HERO_DELETING_SPEED,
  HOME_HERO_PAUSE_BEFORE_DELETE,
  HOME_HERO_PAUSE_BEFORE_NEXT,
  HOME_HERO_SLIDE_CHANGE_INTERVAL,
} from '@shared/constants';

import './HeroSection.scss';

export const HeroSection = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = HOME_HERO_PHRASES[currentPhraseIndex];
    let timeoutId: number;

    if (!isDeleting) {
      if (displayedText.length < phrase.length) {
        timeoutId = window.setTimeout(() => {
          setDisplayedText(phrase.slice(0, displayedText.length + 1));
        }, HOME_HERO_TYPING_SPEED);
      } else {
        timeoutId = window.setTimeout(() => {
          setIsDeleting(true);
        }, HOME_HERO_PAUSE_BEFORE_DELETE);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = window.setTimeout(() => {
          setDisplayedText(phrase.slice(0, displayedText.length - 1));
        }, HOME_HERO_DELETING_SPEED);
      } else {
        timeoutId = window.setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex(
            (prev) => (prev + 1) % HOME_HERO_PHRASES.length
          );
        }, HOME_HERO_PAUSE_BEFORE_NEXT);
      }
    }

    return () => window.clearTimeout(timeoutId);
  }, [currentPhraseIndex, displayedText, isDeleting]);

  const handleCtaClick = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home-hero">
      <Slideshow
        images={HOME_HERO_IMAGES}
        changeInterval={HOME_HERO_SLIDE_CHANGE_INTERVAL}
      />

      <div className="home-hero__overlay" aria-hidden="true" />

      <div className="home-hero__inner">
        <Container>
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              {HOME_HERO_TITLE_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>

            <div className="home-hero__divider" />

            <div className="home-hero__typed-line" aria-live="polite">
              <span className="home-hero__typed-text">{displayedText}</span>
              <span className="home-hero__typed-cursor" aria-hidden="true" />
            </div>

            <button
              type="button"
              className="home-hero__cta-button"
              onClick={handleCtaClick}
            >
              Записаться на встречу
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
};
