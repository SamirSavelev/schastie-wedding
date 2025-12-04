import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/Container/Container';
import {
  HOME_REVIEWS_ITEMS,
  HOME_REVIEWS_SUBTITLE,
  HOME_REVIEWS_TITLE,
} from '@shared/constants';

import './ReviewsSection.scss';

export const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = HOME_REVIEWS_ITEMS.length;
  const activeReview = HOME_REVIEWS_ITEMS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="home-reviews" aria-labelledby="home-reviews-title">
      <Container>
        <header className="home-reviews__header">
          <h2 id="home-reviews-title" className="home-reviews__title">
            {HOME_REVIEWS_TITLE}
          </h2>
          <p className="home-reviews__subtitle">{HOME_REVIEWS_SUBTITLE}</p>
        </header>

        <div className="home-reviews__slider">
          <button
            type="button"
            className="home-reviews__arrow home-reviews__arrow--prev"
            onClick={handlePrev}
            aria-label="Предыдущий отзыв"
          >
            ‹
          </button>

          <article className="home-reviews__slide">
            <div className="home-reviews__photo-wrap">
              <img
                className="home-reviews__photo"
                src={activeReview.image}
                alt={activeReview.couple}
              />
            </div>

            <div className="home-reviews__content">
              <p className="home-reviews__quote">{activeReview.quote}</p>
              <p className="home-reviews__couple">{activeReview.couple}</p>
            </div>
          </article>

          <button
            type="button"
            className="home-reviews__arrow home-reviews__arrow--next"
            onClick={handleNext}
            aria-label="Следующий отзыв"
          >
            ›
          </button>
        </div>

        <div className="home-reviews__dots" aria-hidden="true">
          {HOME_REVIEWS_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={
                'home-reviews__dot' +
                (index === activeIndex ? ' home-reviews__dot--active' : '')
              }
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        <div className="home-reviews__buttons">
          <Link to="/reviews" className="home-reviews__all-button">
            Читать все отзывы
          </Link>
        </div>
      </Container>
    </section>
  );
};
