import { Link } from "react-router-dom";
import classNames from "classnames";

import { Container } from "@shared/ui/Container/Container";
import { Text } from "@shared/ui";
import { Button } from "@shared/ui/Button/Button";
import {
  HOME_PORTFOLIO_ITEMS,
  HOME_PORTFOLIO_SUBTITLE,
} from "@shared/constants";

import "./PortfolioSection.scss";

export const PortfolioSection = () => (
  <section className="home-portfolio" aria-labelledby="home-portfolio-title">
    <Container>
      <header className="home-portfolio__header">
        <Text variant="h3" textTransform="uppercase" align="center">
          Портфолио
        </Text>

        <Text variant="body1" font="helvetica" weight="light" align="center">
          {HOME_PORTFOLIO_SUBTITLE}
        </Text>
      </header>

      <div className="home-portfolio__grid">
        {HOME_PORTFOLIO_ITEMS.map(({ linkId, id, title, tagline, image }) => (
          <Link
            key={id}
            to={`/portfolio/${linkId}`}
            className="home-portfolio__card"
            aria-label={`Открыть кейс: ${title}`}
          >
            <div className="home-portfolio__image-wrapper">
              <picture className="home-portfolio__picture">
                <source
                  type="image/webp"
                  srcSet={image.srcSet}
                  sizes={image.sizes}
                />
                <img
                  src={image.src}
                  alt={image.alt ?? title}
                  className={classNames("home-portfolio__image", {
                    "home-portfolio__image--dark": id === 3,
                  })}
                  loading="lazy"
                  decoding="async"
                />
              </picture>

              <div
                className={classNames("home-portfolio__image-overlay", {
                  "home-portfolio__image-overlay--active": id === 3,
                })}
                aria-hidden="true"
              />
            </div>

            <div className="home-portfolio__info">
              <div className="home-portfolio__meta">
                <Text
                  variant="caption"
                  textTransform="uppercase"
                  className="home-portfolio__meta-label"
                >
                  Пары
                </Text>
              </div>

              <Text
                variant="subtitle"
                textTransform="uppercase"
                className="home-portfolio__title"
              >
                {title}
              </Text>

              <div className="home-portfolio__underline" aria-hidden="true" />

              {!!tagline && (
                <Text
                  variant="body2"
                  font="helvetica"
                  weight="light"
                  className="home-portfolio__tagline"
                >
                  {tagline}
                </Text>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="home-portfolio__actions">
        <Button as="link" to="/portfolio" variant="outline" size="lg">
          Смотреть все свадьбы
        </Button>
      </div>
    </Container>
  </section>
);
