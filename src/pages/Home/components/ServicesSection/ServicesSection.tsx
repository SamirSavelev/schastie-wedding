import { Container } from '@shared/ui/Container/Container';
import {
  HOME_SERVICES_ITEMS,
  HOME_SERVICES_TITLE_LINES,
} from '@shared/constants';

import { Text } from '@shared/ui';
import './ServicesSection.scss';

export const ServicesSection = () => (
  <section className="home-services">
    <Container>
      <header className="home-services__header">
        {HOME_SERVICES_TITLE_LINES.map((line) => (
          <Text
            variant="h3"
            textTransform="uppercase"
            align="center"
            key={line}
          >
            {line}
          </Text>
        ))}
      </header>

      <div className="home-services__grid">
        {HOME_SERVICES_ITEMS.map(({ id, title, text }) => (
          <article key={id} className="home-services__item">
            <Text
              variant="subtitle"
              textTransform="uppercase"
              weight="semibold"
            >
              {title}
            </Text>
            <Text variant="body2" font="helvetica">
              {text}
            </Text>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
