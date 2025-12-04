// src/pages/Services/components/IntroSection/ServicesIntroSection.tsx
import { Container } from '@shared/ui/Container/Container';
import {
  SERVICES_INTRO_TITLE,
  SERVICES_INTRO_MAIN_TEXT,
  SERVICES_INTRO_BUDGET_PREFIX,
  SERVICES_INTRO_BUDGET_VALUE,
  SERVICES_INTRO_BADGE_CAPTION,
  SERVICES_INTRO_BADGE_PERCENT,
  SERVICES_INTRO_BADGE_SUB,
  SERVICES_INTRO_NOTE,
} from '@shared/constants';

import './ServicesIntroSection.scss';

export const ServicesIntroSection = () => {
  return (
    <section className="services-intro" aria-labelledby="services-intro-title">
      <Container>
        <div className="services-intro__grid">
          {/* Основной текст слева */}
          <div className="services-intro__main">
            <h2 id="services-intro-title" className="services-intro__title">
              {SERVICES_INTRO_TITLE}
            </h2>

            <p className="services-intro__text">{SERVICES_INTRO_MAIN_TEXT}</p>

            <p className="services-intro__text services-intro__text--accent">
              {SERVICES_INTRO_BUDGET_PREFIX}
              <strong>{SERVICES_INTRO_BUDGET_VALUE}</strong>.
            </p>
          </div>

          {/* Блок про агентское вознаграждение справа */}
          <aside
            className="services-intro__aside"
            aria-label="Агентское вознаграждение"
          >
            <div className="services-intro__badge">
              <p className="services-intro__badge-caption">
                {SERVICES_INTRO_BADGE_CAPTION}
              </p>
              <p className="services-intro__badge-percent">
                {SERVICES_INTRO_BADGE_PERCENT}
              </p>
              <p className="services-intro__badge-sub">
                {SERVICES_INTRO_BADGE_SUB}
              </p>
            </div>

            <p className="services-intro__note">{SERVICES_INTRO_NOTE}</p>
          </aside>
        </div>
      </Container>
    </section>
  );
};
