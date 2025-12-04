import { Container } from '@shared/ui/Container/Container';
import {
  HOME_WORK_STEPS,
  HOME_WORK_SUBTITLE,
  HOME_WORK_TITLE,
} from '@shared/constants';

import './WorkProcessSection.scss';

export const WorkProcessSection = () => {
  return (
    <section className="how-we-work" aria-labelledby="how-we-work-title">
      <Container>
        <header className="how-we-work__header">
          <h2 id="how-we-work-title" className="how-we-work__title">
            {HOME_WORK_TITLE}
          </h2>
          <p className="how-we-work__subtitle">{HOME_WORK_SUBTITLE}</p>
        </header>

        <div className="how-we-work__timeline">
          {HOME_WORK_STEPS.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={step.id}
                className={`how-we-work__row how-we-work__row--${
                  isLeft ? 'left' : 'right'
                }`}
              >
                <div className="how-we-work__col how-we-work__col--left">
                  {isLeft && (
                    <article className="how-we-work__card">
                      <h3 className="how-we-work__card-title">
                        {/* <span className="how-we-work__card-number">
                          {stepNumber}.
                        </span>{' '} */}
                        {step.title}
                      </h3>
                      <p className="how-we-work__card-text">{step.text}</p>
                    </article>
                  )}
                </div>

                <div className="how-we-work__col how-we-work__col--center">
                  <div className="how-we-work__marker" />
                </div>

                <div className="how-we-work__col how-we-work__col--right">
                  {!isLeft && (
                    <article className="how-we-work__card">
                      <h3 className="how-we-work__card-title">
                        {/* <span className="how-we-work__card-number">
                          {stepNumber}.
                        </span>{' '} */}
                        {step.title}
                      </h3>
                      <p className="how-we-work__card-text">{step.text}</p>
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
};
