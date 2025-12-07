import { Container } from '@shared/ui/Container/Container';
import { Text } from '@shared/ui/Text/Text';
import {
  SERVICES_GUARANTEES_TITLE,
  SERVICES_GUARANTEES_ITEMS,
} from '@shared/constants';

import './ServicesGuaranteesSection.scss';

export const ServicesGuaranteesSection = () => (
  <section className="services-guarantees">
    <Container>
      <div className="services-guarantees__hero">
        <div className="services-guarantees__hero__overlay" />
        <div className="services-guarantees__header">
          <Text
            as="h2"
            variant="h3"
            font="body"
            weight="regular"
            align="center"
            textTransform="uppercase"
            className="services-guarantees__title"
            color="white"
          >
            {SERVICES_GUARANTEES_TITLE}
          </Text>
        </div>

        <div className="services-guarantees__grid">
          {SERVICES_GUARANTEES_ITEMS.map((item) => (
            <article key={item.id} className="services-guarantees__item">
              <Text
                as="h3"
                variant="body2"
                font="body"
                weight="semibold"
                align="center"
                textTransform="uppercase"
                className="services-guarantees__item-title"
              >
                {item.title}
              </Text>

              <Text
                variant="body2"
                font="helvetica"
                className="services-guarantees__item-description"
              >
                {item.description}
              </Text>

              <Text
                variant="caption"
                font="helvetica"
                className="services-guarantees__item-note"
              >
                {item.note}
              </Text>
            </article>
          ))}
        </div>

        <div className="services-guarantees__circle">
          <Text
            variant="body1"
            align="center"
            className="services-guarantees__circle-text"
            textTransform="uppercase"
          >
            Магия
          </Text>
        </div>
      </div>
    </Container>
  </section>
);
