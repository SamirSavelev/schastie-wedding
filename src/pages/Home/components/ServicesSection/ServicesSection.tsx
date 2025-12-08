import { Container } from '@shared/ui/Container/Container';
import {
  HOME_SERVICES_MAIN_TEXT,
  HOME_SERVICES_TITLE_LINES,
  HOME_SERVICES_SUBTEXT,
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

      <Text align="center" font="helvetica" weight="light">
        {HOME_SERVICES_MAIN_TEXT}
      </Text>

      <Text
        className="home-services__subtext"
        variant="subtitle"
        align="center"
        weight="semibold"
      >
        {HOME_SERVICES_SUBTEXT}
      </Text>

      {/* <div className="home-services__grid">
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
      </div> */}
    </Container>
  </section>
);
