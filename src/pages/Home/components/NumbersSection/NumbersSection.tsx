// src/pages/Home/components/NumbersSection/NumbersSection.tsx
import { Container } from '@shared/ui/Container/Container';
import {
  HOME_NUMBERS_BACKGROUND,
  HOME_NUMBERS_ITEMS,
  HOME_NUMBERS_TITLE,
} from '@shared/constants';

import './NumbersSection.scss';

export const NumbersSection = () => {
  return (
    <section className="home-numbers" aria-labelledby="home-numbers-title">
      <Container>
        <div
          className="home-numbers__hero"
          style={{ backgroundImage: `url(${HOME_NUMBERS_BACKGROUND})` }}
        >
          <div className="home-numbers__overlay" aria-hidden="true" />

          <div className="home-numbers__inner">
            <h2 id="home-numbers-title" className="home-numbers__title">
              {HOME_NUMBERS_TITLE}
            </h2>

            {/* строка с цифрами */}
            <div className="home-numbers__row home-numbers__row--values">
              {HOME_NUMBERS_ITEMS.map((item) => (
                <div key={item.id} className="home-numbers__cell">
                  <div className="home-numbers__value">{item.value}</div>
                </div>
              ))}
            </div>

            {/* линия-разделитель */}
            <div className="home-numbers__line" aria-hidden="true" />

            {/* строка с подписями */}
            <div className="home-numbers__row home-numbers__row--labels">
              {HOME_NUMBERS_ITEMS.map((item) => (
                <div key={item.id} className="home-numbers__cell">
                  <p className="home-numbers__label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
