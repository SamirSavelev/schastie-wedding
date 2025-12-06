import { useState } from 'react';
import { Container } from '@shared/ui/Container/Container';
import {
  HOME_REVIEWS_ITEMS,
  HOME_REVIEWS_SUBTITLE,
  HOME_REVIEWS_TITLE,
} from '@shared/constants';

import './ReviewsSection.scss';
import { Text } from '@shared/ui';
import { Button } from '@shared/ui/Button/Button';

export const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = HOME_REVIEWS_ITEMS.length;
  const { image, couple, quote } = HOME_REVIEWS_ITEMS[activeIndex];

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);

  const handleDotClick = (index: number) => setActiveIndex(index);
  return (
    <section className="home-reviews" aria-labelledby="home-reviews-title">
      <Container>
        <header className="home-reviews__header">
          <Text
            variant="h3"
            color="black"
            textTransform="uppercase"
            align="center"
          >
            {HOME_REVIEWS_TITLE}
          </Text>
          <Text variant="body1" font="helvetica" weight="light" align="center">
            {HOME_REVIEWS_SUBTITLE}
          </Text>
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
              <img className="home-reviews__photo" src={image} alt={couple} />
            </div>

            <div className="home-reviews__content">
              <Text variant="body1" font="helvetica" weight="light">
                {quote}
              </Text>
              <Text variant="body1" textTransform="uppercase" weight="bold">
                {couple}
              </Text>
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
          <Button as="link" to="/reviews" variant="outline" size="lg">
            Читать все отзывы
          </Button>
        </div>
      </Container>
    </section>
  );
};
