import { Container, Text } from "@shared/ui";
import type { FC } from "react";
import "./Privacy.scss";
import { Helmet } from "react-helmet-async";

export const PrivacyPage: FC = () => {
  return (
    <section className="privacy-page">
      <Helmet>
        <title>Политика в отношении обработки персональных данных</title>
      </Helmet>
      <Container>
        <h1 className="privacy-page__title">
          <Text variant="h3" color="black" weight="bold">
            Политика в отношении обработки персональных данных
          </Text>
        </h1>

        <section className="privacy-page__section">
          <Text variant="subtitle" color="black">
            1. Общие положения
          </Text>
          <Text variant="body1" color="black">
            Настоящая политика обработки персональных данных составлена в
            соответствии с требованиями Федерального закона от 27.07.2006.
            №152-ФЗ «О персональных данных» и определяет порядок обработки
            персональных данных и меры по обеспечению безопасности персональных
            данных, предпринимаемые свадебным агентством «Счастье».
          </Text>
          <Text variant="body1" color="black">
            Оператор ставит своей важнейшей целью и условием осуществления своей
            деятельности соблюдение прав и свобод человека и гражданина при
            обработке его персональных данных, в том числе защиты прав на
            неприкосновенность частной жизни, личную и семейную тайну.
          </Text>
        </section>

        <section className="privacy-page__section">
          <Text variant="subtitle" color="black">
            2. Основные понятия, используемые в Политике
          </Text>
          <Text variant="body1" color="black">
            <strong>2.1. Персональные данные</strong> – любая информация,
            относящаяся прямо или косвенно к определенному или определяемому
            Пользователю веб-сайта свадебного агентства «Счастье».
          </Text>
          <Text variant="body1" color="black">
            <strong>2.2. Обработка персональных данных</strong> – любое действие
            (операция) или совокупность действий (операций), совершаемых с
            использованием средств автоматизации или без использования таких
            средств с персональными данными, включая сбор, запись,
            систематизацию, накопление, хранение, уточнение, извлечение,
            использование, передачу и удаление персональных данных.
          </Text>
          <Text variant="body1" color="black">
            <strong>2.3. Оператор</strong> – свадебное агентство «Счастье»,
            которое осуществляет сбор и обработку персональных данных
            пользователей.
          </Text>
        </section>

        <section className="privacy-page__section">
          <Text variant="subtitle" color="black">
            3. Оператор может обрабатывать следующие персональные данные
            Пользователя
          </Text>
          <Text variant="body1" color="black">
            3.1. Фамилия, имя, отчество;
            <br />
            3.2. Электронный адрес;
            <br />
            3.3. Номера телефонов;
            <br />
            3.4. Обезличенные данные о посетителях (например, файлы cookie).
          </Text>
        </section>

        <section className="privacy-page__section">
          <Text variant="subtitle" color="black">
            4. Цели обработки персональных данных
          </Text>
          <Text variant="body1" color="black">
            Оператор обрабатывает персональные данные с целью информирования
            Пользователя о новых услугах, акциях и событиях свадебного агентства
            «Счастье». Пользователь может отказаться от получения информационных
            сообщений, направив письмо на электронный адрес Оператора.
          </Text>
        </section>

        <section className="privacy-page__section">
          <Text variant="subtitle" color="black">
            5. Порядок сбора, хранения, передачи и других видов обработки
            персональных данных
          </Text>
          <Text variant="body1" color="black">
            Оператор обеспечивает сохранность персональных данных и принимает
            все возможные меры для предотвращения несанкционированного доступа к
            ним.
          </Text>
        </section>

        <section className="privacy-page__section">
          <Text variant="subtitle" color="black">
            6. Трансграничная передача персональных данных
          </Text>
          <Text variant="body1" color="black">
            Оператор может передавать персональные данные на территории
            иностранных государств только с согласия Пользователя и в рамках
            законодательства.
          </Text>
        </section>

        <section className="privacy-page__section">
          <Text variant="subtitle" color="black">
            7. Заключительные положения
          </Text>
          <Text variant="body1" color="black">
            Пользователь может обратиться за разъяснениями по обработке своих
            персональных данных на электронную почту info@schastie-wedding.ru.
          </Text>
        </section>
      </Container>
    </section>
  );
};
