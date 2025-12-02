import { Container } from '@shared/ui/Container/Container';
import {
  HOME_SERVICES_ITEMS,
  HOME_SERVICES_TITLE_LINES,
} from '@shared/constants';

import './ServicesSection.scss';

export const ServicesSection = () => {
  return (
    <section className="home-services">
      <Container>
        <header className="home-services__header">
          <h2 className="home-services__title">
            {HOME_SERVICES_TITLE_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </header>

        <div className="home-services__grid">
          {HOME_SERVICES_ITEMS.map((item) => (
            <article key={item.id} className={'home-services__item'}>
              <h3 className="home-services__item-title">{item.title}</h3>
              <p className="home-services__item-text">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
