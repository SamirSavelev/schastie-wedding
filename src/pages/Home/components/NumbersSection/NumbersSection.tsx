import { Container } from "@shared/ui/Container/Container";
import { HOME_NUMBERS_ITEMS, HOME_NUMBERS_TITLE } from "@shared/constants";
import { Text } from "@shared/ui";

import bgNumbers360 from "@assets/backgrounds/12-360.webp";
import bgNumbers720 from "@assets/backgrounds/12-720.webp";
import bgNumbers1600 from "@assets/backgrounds/12-1600.webp";

import "./NumbersSection.scss";

const NUMBERS_BG = {
  src: bgNumbers720,
  srcSet: `${bgNumbers360} 360w, ${bgNumbers720} 720w, ${bgNumbers1600} 1600w`,
  sizes: "(max-width: 768px) 100vw, 1200px",
};

export const NumbersSection = () => (
  <section className="home-numbers" aria-labelledby="home-numbers-title">
    <Container>
      <div className="home-numbers__hero">
        <picture className="home-numbers__bg" aria-hidden="true">
          <source
            type="image/webp"
            srcSet={NUMBERS_BG.srcSet}
            sizes={NUMBERS_BG.sizes}
          />
          <img
            className="home-numbers__bg-img"
            src={NUMBERS_BG.src}
            alt=""
            decoding="async"
            loading="lazy"
          />
        </picture>

        <div className="home-numbers__overlay" aria-hidden="true" />

        <div className="home-numbers__inner">
          <Text
            variant="h3"
            color="white"
            textTransform="uppercase"
            align="center"
          >
            {HOME_NUMBERS_TITLE}
          </Text>

          {/* DESKTOP/TABLET layout: как было (значения → линия → подписи) */}
          <div className="home-numbers__desktop" aria-hidden={false}>
            <div className="home-numbers__row home-numbers__row--values">
              {HOME_NUMBERS_ITEMS.map(({ id, value }) => (
                <div key={id} className="home-numbers__cell">
                  <Text
                    variant="h1"
                    color="white"
                    align="center"
                    textTransform="uppercase"
                  >
                    {value}
                  </Text>
                </div>
              ))}
            </div>

            <div className="home-numbers__line" aria-hidden="true" />

            <div className="home-numbers__row home-numbers__row--labels">
              {HOME_NUMBERS_ITEMS.map(({ id, label }) => (
                <div key={id} className="home-numbers__cell">
                  <Text
                    variant="body1"
                    font="helvetica"
                    weight="light"
                    color="white"
                    align="center"
                  >
                    {label}
                  </Text>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE layout: карточки */}
          <div className="home-numbers__mobile">
            <div className="home-numbers__cards">
              {HOME_NUMBERS_ITEMS.map(({ id, value, label }) => (
                <div key={id} className="home-numbers__card">
                  <Text
                    variant="h2"
                    color="white"
                    align="center"
                    textTransform="uppercase"
                    className="home-numbers__card-value"
                  >
                    {value}
                  </Text>
                  <div
                    className="home-numbers__card-divider"
                    aria-hidden="true"
                  />
                  <Text
                    variant="body2"
                    font="helvetica"
                    weight="light"
                    color="white"
                    align="center"
                    className="home-numbers__card-label"
                  >
                    {label}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
