import { Container, Text } from '@shared/ui';
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

export const ServicesIntroSection = () => (
  <section className="services-intro" aria-labelledby="services-intro-title">
    <Container>
      <div className="services-intro__grid">
        <div className="services-intro__main">
          <Text variant="h3" textTransform="uppercase" align="center">
            {SERVICES_INTRO_TITLE}
          </Text>
          <Text variant="body1" font="helvetica" weight="light" align="center">
            {SERVICES_INTRO_MAIN_TEXT}
          </Text>

          <Text
            variant="body1"
            font="helvetica"
            weight="regular"
            align="center"
          >
            {SERVICES_INTRO_BUDGET_PREFIX}
            <strong>{SERVICES_INTRO_BUDGET_VALUE}</strong>.
          </Text>
        </div>

        <aside
          className="services-intro__aside"
          aria-label="Агентское вознаграждение"
        >
          <div className="services-intro__badge">
            <Text
              variant="body1"
              align="center"
              textTransform="uppercase"
              weight="medium"
            >
              {SERVICES_INTRO_BADGE_CAPTION}
            </Text>
            <Text
              variant="h3"
              align="center"
              textTransform="lowercase"
              weight="medium"
            >
              {SERVICES_INTRO_BADGE_PERCENT}
            </Text>

            <Text variant="body1" align="center" weight="light">
              {SERVICES_INTRO_BADGE_SUB}
            </Text>
          </div>

          <Text
            variant="body1"
            font="helvetica"
            align="center"
            weight="light"
            className="services-intro__note"
          >
            {SERVICES_INTRO_NOTE}
          </Text>
        </aside>
      </div>
    </Container>
  </section>
);
