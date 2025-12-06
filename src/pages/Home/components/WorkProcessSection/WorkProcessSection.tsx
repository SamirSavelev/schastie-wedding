import { Container } from '@shared/ui/Container/Container';
import {
  HOME_WORK_STEPS,
  HOME_WORK_SUBTITLE,
  HOME_WORK_TITLE,
} from '@shared/constants';

import './WorkProcessSection.scss';
import { Text } from '@shared/ui';

export const WorkProcessSection = () => (
  <section className="how-we-work" aria-labelledby="how-we-work-title">
    <Container>
      <header className="how-we-work__header">
        <Text variant="h3" align="center" textTransform="uppercase">
          {HOME_WORK_TITLE}
        </Text>
        <Text variant="subtitle" align="center" font="helvetica">
          {HOME_WORK_SUBTITLE}
        </Text>
      </header>

      <div className="how-we-work__timeline">
        {HOME_WORK_STEPS.map(({ id, title, text }, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={id}
              className={`how-we-work__row how-we-work__row--${
                isLeft ? 'left' : 'right'
              }`}
            >
              <div className="how-we-work__col how-we-work__col--left">
                {isLeft && (
                  <article className="how-we-work__card">
                    <Text
                      variant="subtitle"
                      textTransform="uppercase"
                      weight="semibold"
                      align="right"
                    >
                      {title}
                    </Text>

                    <Text variant="body2" font="helvetica" align="right">
                      {text}
                    </Text>
                  </article>
                )}
              </div>

              <div className="how-we-work__col how-we-work__col--center">
                <div className="how-we-work__marker" />
              </div>

              <div className="how-we-work__col how-we-work__col--right">
                {!isLeft && (
                  <article className="how-we-work__card">
                    <Text
                      variant="subtitle"
                      textTransform="uppercase"
                      weight="semibold"
                      align="left"
                    >
                      {title}
                    </Text>
                    <Text variant="body2" font="helvetica" align="left">
                      {text}
                    </Text>
                  </article>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);
