import { Container } from "@shared/ui/Container/Container";

import { Text } from "@shared/ui";
import "./ServicesSection.scss";

const HOME_SERVICES_TITLE_LINES = ["Мы создаём свадьбы", "для счастливых пар"];

export const ServicesSection = () => (
  <section className="home-services">
    <Container>
      <header className="home-services__header">
        {HOME_SERVICES_TITLE_LINES.map((line) => (
          <Text
            variant="h3"
            textTransform="uppercase"
            align="center"
            key={line}
          >
            {line}
          </Text>
        ))}
      </header>

      <Text
        align="center"
        font="helvetica"
        weight="light"
        className="home-services__text"
      >
        Мы создаём атмосферные свадьбы для счастливых пар — и делаем это с
        любовью уже с 2016 года. Наше агентство выросло из простой мечты: чтобы
        каждая пара прожила свой день легко, спокойно и красиво. Мы внимательны
        к вашим желаниям, умеем услышать самое важное и превращаем идеи в живую
        историю, наполненную эмоциями и эстетикой. Для нас свадьба — не проект,
        а уникальная вселенная двух людей, которую мы бережно собираем по
        деталям. Вы мечтаете — мы организуем. Просто, качественно и
        по-настоящему.
      </Text>

      <Text
        className="home-services__subtext"
        variant="subtitle"
        align="center"
        weight="semibold"
      >
        Счастье — агентство атмосферных свадеб.
      </Text>
    </Container>
  </section>
);
