import { Container, Text } from "@shared/ui";
import { SERVICES_CHAT_ORGANIZER_LIST } from "./constants";
import "./ServicesChatSection.scss";

export const ServicesChatSection = () => (
  <section className="services-chat" aria-label="Переписка с агентством">
    <Container>
      <div className="services-chat__inner">
        <div className="services-chat__row services-chat__row--left">
          <div className="services-chat__bubble services-chat__bubble--left">
            <div className="services-chat__meta">
              <Text textTransform="uppercase">Невеста</Text>
            </div>
            <Text font="helvetica" weight="regular">
              Где можно посмотреть более полный список того, что входит в услугу
              организация свадьбы «под ключ»?
            </Text>
          </div>
        </div>

        <div className="services-chat__row services-chat__row--right">
          <div className="services-chat__bubble services-chat__bubble--right">
            <div className="services-chat__meta services-chat__meta--right">
              <Text textTransform="uppercase">
                Свадебное агентство "Счастье Wedding"
              </Text>
            </div>

            <Text font="helvetica" weight="regular">
              Вы не поверите, но полный перечень обязанностей свадебного
              организатора в нашем агентстве состоит из 135 пунктов. Если
              описать их общими словами, то получается вот такой список:
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
