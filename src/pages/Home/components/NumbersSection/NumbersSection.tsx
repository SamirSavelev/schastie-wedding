import { Container } from '@shared/ui/Container/Container';
import {
  HOME_NUMBERS_BACKGROUND,
  HOME_NUMBERS_ITEMS,
  HOME_NUMBERS_TITLE,
} from '@shared/constants';

import './NumbersSection.scss';
import { Text } from '@shared/ui';

export const NumbersSection = () => (
  <section className="home-numbers" aria-labelledby="home-numbers-title">
    <Container>
      <div
        className="home-numbers__hero"
        style={{ backgroundImage: `url(${HOME_NUMBERS_BACKGROUND})` }}
      >
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
      </div>
    </Container>
  </section>
);
