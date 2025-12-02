import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/Container/Container';
import {
  HOME_PORTFOLIO_ITEMS,
  HOME_PORTFOLIO_SUBTITLE,
  HOME_PORTFOLIO_TITLE,
} from '@shared/constants';

import './PortfolioSection.scss';
import { Button } from '@shared/ui/Button/Button';

export const PortfolioSection = () => {
  return (
    <section className="home-portfolio">
      <Container>
        <header className="home-portfolio__header">
          <h2 className="home-portfolio__title">{HOME_PORTFOLIO_TITLE}</h2>
          <p className="home-portfolio__subtitle">{HOME_PORTFOLIO_SUBTITLE}</p>
        </header>

        <div className="home-portfolio__grid">
          {HOME_PORTFOLIO_ITEMS.map((item) => (
            <Link key={item.id} to={item.link} className="home-portfolio__card">
              <div className="home-portfolio__image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="home-portfolio__image"
                  loading="lazy"
                />
              </div>

              <div className="home-portfolio__info">
                <h3 className="home-portfolio__names">{item.title}</h3>
                <div className="home-portfolio__underline" />
                <p className="home-portfolio__tagline">{item.tagline}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="home-portfolio__actions">
          <Button as="link" to="/portfolio" variant="outline" size="md">
            Смотреть все свадьбы
          </Button>
        </div>
      </Container>
    </section>
  );
};
