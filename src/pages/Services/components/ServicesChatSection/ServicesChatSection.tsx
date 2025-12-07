import { Container, Text } from '@shared/ui';
import {
  SERVICES_CHAT_BRIDE_NAME,
  SERVICES_CHAT_BRIDE_MESSAGE,
  SERVICES_CHAT_ORGANIZER_NAME,
  SERVICES_CHAT_ORGANIZER_INTRO,
  SERVICES_CHAT_ORGANIZER_LIST,
} from '@shared/constants';

import './ServicesChatSection.scss';

export const ServicesChatSection = () => (
  <section className="services-chat" aria-label="Переписка с агентством">
    <Container>
      <div className="services-chat__inner">
        <div className="services-chat__row services-chat__row--left">
          <div className="services-chat__bubble services-chat__bubble--left">
            <div className="services-chat__meta">
              <Text textTransform="uppercase">{SERVICES_CHAT_BRIDE_NAME}</Text>
            </div>
            <Text font="helvetica" weight="regular">
              {SERVICES_CHAT_BRIDE_MESSAGE}
            </Text>
          </div>
        </div>

        <div className="services-chat__row services-chat__row--right">
          <div className="services-chat__bubble services-chat__bubble--right">
            <div className="services-chat__meta services-chat__meta--right">
              <Text textTransform="uppercase">
                {SERVICES_CHAT_ORGANIZER_NAME}
              </Text>
            </div>

            <Text font="helvetica" weight="regular">
              {SERVICES_CHAT_ORGANIZER_INTRO}
            </Text>

            <ul className="services-chat__list">
              {SERVICES_CHAT_ORGANIZER_LIST.map((item) => (
                <li key={item}>
                  <Text variant="body2" font="helvetica" weight="regular">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
