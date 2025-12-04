// src/pages/Services/components/ServicesMagicSection/ServicesMagicSection.tsx
import { useState } from 'react';
import { Container } from '@shared/ui/Container/Container';
import {
  SERVICES_MAGIC_TITLE,
  SERVICES_MAGIC_SUBTITLE,
  SERVICES_MAGIC_ORGANIZER_STATS,
  SERVICES_MAGIC_SPECIALISTS_STATS,
  SERVICES_MAGIC_COUPLE_STATS,
  SERVICES_MAGIC_ORGANIZER_TITLE,
  SERVICES_MAGIC_SPECIALISTS_TITLE,
  SERVICES_MAGIC_COUPLE_TITLE,
} from '@shared/constants';

import './ServicesMagicSection.scss';

export const ServicesMagicSection = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDotEnter = () => setIsActive(true);
  const handleDotLeave = () => setIsActive(false);

  return (
    <section className="services-magic" aria-labelledby="services-magic-title">
      <Container>
        <header className="services-magic__header">
          <h2 id="services-magic-title" className="services-magic__title">
            {SERVICES_MAGIC_TITLE}
          </h2>
          <p className="services-magic__subtitle">{SERVICES_MAGIC_SUBTITLE}</p>
        </header>

        <div
          className={
            'services-magic__diagram' +
            (isActive ? ' services-magic__diagram--active' : '')
          }
        >
          {/* центр схемы, вокруг которого вращаются круги */}
          <div className="services-magic__center">
            <button
              type="button"
              className="services-magic__dot"
              aria-label="Создать идеальную свадьбу"
              onMouseEnter={handleDotEnter}
              onMouseLeave={handleDotLeave}
            />

            {/* Левый круг — организатор */}
            <div className="services-magic__circle services-magic__circle--organizer">
              <div className="services-magic__circle-inner">
                <p className="services-magic__circle-title">
                  {SERVICES_MAGIC_ORGANIZER_TITLE}
                </p>
                {isActive && (
                  <ul className="services-magic__circle-list">
                    {SERVICES_MAGIC_ORGANIZER_STATS.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Правый круг — специалисты */}
            <div className="services-magic__circle services-magic__circle--specialists">
              <div className="services-magic__circle-inner">
                <p className="services-magic__circle-title">
                  {SERVICES_MAGIC_SPECIALISTS_TITLE}
                </p>
                {isActive && (
                  <ul className="services-magic__circle-list">
                    {SERVICES_MAGIC_SPECIALISTS_STATS.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Нижний круг — пара */}
            <div className="services-magic__circle services-magic__circle--couple">
              <div className="services-magic__circle-inner">
                <p className="services-magic__circle-title">
                  {SERVICES_MAGIC_COUPLE_TITLE}
                </p>
                {isActive && (
                  <ul className="services-magic__circle-list">
                    {SERVICES_MAGIC_COUPLE_STATS.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
