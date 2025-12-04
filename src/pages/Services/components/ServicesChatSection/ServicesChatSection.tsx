// src/pages/Services/components/ChatSection/ServicesChatSection.tsx
import { Container } from '@shared/ui/Container/Container';
import {
  SERVICES_CHAT_BRIDE_NAME,
  SERVICES_CHAT_BRIDE_MESSAGE,
  SERVICES_CHAT_ORGANIZER_NAME,
  SERVICES_CHAT_ORGANIZER_INTRO,
  SERVICES_CHAT_ORGANIZER_LIST,
} from '@shared/constants';

import './ServicesChatSection.scss';

export const ServicesChatSection = () => {
  return (
    <section className="services-chat" aria-label="Переписка с агентством">
      <Container>
        <div className="services-chat__inner">
          {/* Сообщение невесты (слева) */}
          <div className="services-chat__row services-chat__row--left">
            <div className="services-chat__bubble services-chat__bubble--left">
              <div className="services-chat__meta">
                <span className="services-chat__author">
                  {SERVICES_CHAT_BRIDE_NAME}
                </span>
              </div>
              <p className="services-chat__text">
                {SERVICES_CHAT_BRIDE_MESSAGE}
              </p>
            </div>
          </div>

          {/* Сообщение организатора (справа) */}
          <div className="services-chat__row services-chat__row--right">
            <div className="services-chat__bubble services-chat__bubble--right">
              <div className="services-chat__meta services-chat__meta--right">
                <span className="services-chat__author services-chat__author--accent">
                  {SERVICES_CHAT_ORGANIZER_NAME}
                </span>
              </div>

              <p className="services-chat__text services-chat__text--intro">
                {SERVICES_CHAT_ORGANIZER_INTRO}
              </p>

              <ul className="services-chat__list">
                {SERVICES_CHAT_ORGANIZER_LIST.map((item) => (
                  <li key={item} className="services-chat__list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
