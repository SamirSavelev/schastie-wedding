import { Container } from '@shared/ui/Container/Container';
import {
  HOME_WHY_HERO_IMAGE,
  HOME_WHY_ITEMS,
  HOME_WHY_SUBTITLE,
  HOME_WHY_TITLE,
} from '@shared/constants';

import './WhyUsSection.scss';

export const WhyUsSection = () => {
  return (
    <section className="home-why" aria-labelledby="home-why-title">
      <Container>
        <div
          className="home-why__hero"
          style={{ backgroundImage: `url(${HOME_WHY_HERO_IMAGE})` }}
        >
          <div className="home-why__hero-overlay" aria-hidden="true" />
          <div className="home-why__hero-inner">
            <h2 id="home-why-title" className="home-why__hero-title">
              {HOME_WHY_TITLE}
            </h2>

            {/* новый разделитель */}
            <div className="home-why__hero-divider" />

            <p className="home-why__hero-subtitle">{HOME_WHY_SUBTITLE}</p>
          </div>
        </div>

        <div className="home-why__grid">
          {HOME_WHY_ITEMS.map((item) => (
            <article key={item.id} className="home-why__item">
              <h3 className="home-why__item-title">{item.title}</h3>
              <div className="home-why__item-divider" />
              <p className="home-why__item-text">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
