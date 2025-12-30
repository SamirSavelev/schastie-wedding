import { Container } from "@shared/ui/Container/Container";
import {
  HOME_WHY_HERO_IMAGE,
  HOME_WHY_ITEMS,
  HOME_WHY_SUBTITLE,
  HOME_WHY_TITLE,
} from "@shared/constants";

import "./WhyUsSection.scss";
import { Text } from "@shared/ui";

export const WhyUsSection = () => (
  <section className="home-why" aria-labelledby="home-why-title">
    <Container>
      <div
        className="home-why__hero"
        style={{ backgroundImage: `url(${HOME_WHY_HERO_IMAGE})` }}
      >
        <div className="home-why__hero-overlay" aria-hidden="true" />
        <div className="home-why__hero-inner">
          <Text
            variant="h3"
            color="white"
            align="center"
            textTransform="uppercase"
            className="home-why__hero-title"
          >
            {HOME_WHY_TITLE}
          </Text>

          <div className="home-why__hero-divider" />
          <Text
            variant="subtitle"
            color="white"
            align="center"
            className="home-why__hero-subtitle"
            font="helvetica"
          >
            {HOME_WHY_SUBTITLE}
          </Text>
        </div>
      </div>

      <div className="home-why__grid">
        {HOME_WHY_ITEMS.map(({ id, title, text }) => (
          <article key={id} className="home-why__item">
            <Text
              variant="subtitle"
              textTransform="uppercase"
              weight="semibold"
            >
              {title}
            </Text>
            <div className="home-why__item-divider" />
            <Text variant="body2" font="helvetica" as="div">
              {text}
            </Text>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
