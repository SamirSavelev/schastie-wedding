import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/Container/Container';
import {
  HOME_PORTFOLIO_ITEMS,
  HOME_PORTFOLIO_SUBTITLE,
  HOME_PORTFOLIO_TITLE,
} from '@shared/constants';

import './PortfolioSection.scss';
import { Button } from '@shared/ui/Button/Button';
import { Text } from '@shared/ui';

export const PortfolioSection = () => (
  <section className="home-portfolio">
    <Container>
      <header className="home-portfolio__header">
        <Text variant="h3" textTransform="uppercase" align="center">
          {HOME_PORTFOLIO_TITLE}
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
          >
            <div className="home-portfolio__image-wrapper">
              <img
                src={image}
                alt={title}
                className="home-portfolio__image"
                loading="lazy"
              />
            </div>
            <div className="home-portfolio__info">
              <Text variant="subtitle" textTransform="uppercase">
                {title}
              </Text>
              <div className="home-portfolio__underline" />
              <Text variant="body1" font="helvetica" weight="light">
                {tagline}
              </Text>
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
