import elena360 from "./assets/elena-360.webp";
import elena560 from "./assets/elena-560.webp";
import lyudmila360 from "./assets/lyudmila-360.webp";
import lyudmila560 from "./assets/lyudmila-560.webp";
import header1280 from "./assets/header-1280.webp";
import header2400 from "./assets/header-2400.webp";

import { BannerSection, PageHeader } from "@widgets";
import { Container, Text } from "@shared/ui";
import { Helmet } from "react-helmet-async";

import "./AboutPage.scss";

export const AboutPage = () => (
  <>
    <Helmet>
      <title>О нас | Счастье — планирование свадеб в Казани</title>
    </Helmet>

    <div className="about__header">
      <PageHeader
        title="О нас"
        bottomText="Философия агентства «Счастье»"
        backgroundMobile={header1280}
        backgroundDesktop={header2400}
      />
    </div>

    <section className="about">
      <Container className="about__content">
        <Text
          className="about__lead"
          variant="body2"
          font="helvetica"
          align="center"
        >
          Команда «Счастье Wedding» — опытные организаторы, дизайнеры и
          координаторы.
        </Text>

        <Text
          className="about__mission"
          variant="body1"
          font="helvetica"
          align="center"
          weight="light"
        >
          Каждый человек приходит в этот мир со своей миссией. Высшее и
          нескончаемое счастье — это понять, зачем ты был рождён.
        </Text>

        <div className="about__team">
          <article className="person">
            <div className="person__media">
              <div className="person__photo">
                <img
                  src={elena560}
                  srcSet={`${elena360} 360w, ${elena560} 560w`}
                  sizes="(max-width: 720px) 70vw, 280px"
                  alt="Тихонова Елена — Организатор"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="person__content">
              <Text
                className="person__name"
                variant="body1"
                font="body"
                weight="semibold"
              >
                Тихонова Елена
              </Text>

              <Text
                className="person__role"
                variant="body3"
                font="helvetica"
                weight="medium"
              >
                Организатор
              </Text>

              <Text
                className="person__quote"
                variant="body2"
                font="helvetica"
                weight="regular"
              >
                «Что для меня “Счастье”? Это не просто любимая работа — это
                удовольствие делать людей вокруг чуточку счастливее, радовать и
                удивлять. Ежедневно нас окружает красота и любовь, настоящие и
                искренние чувства двух сердец, которые бьются в унисон. Команда
                профессионалов, с которой не первый год работает “Счастье” — это
                люди, горящие идеей, вдохновлённые творчеством. И для меня
                большая удача — быть в этом мире, создавать сказку для вас!»
              </Text>
            </div>
          </article>

          <article className="person person--reverse">
            <div className="person__media">
              <div className="person__photo">
                <img
                  src={lyudmila560}
                  srcSet={`${lyudmila360} 360w, ${lyudmila560} 560w`}
                  sizes="(max-width: 720px) 70vw, 280px"
                  alt="Соснова Людмила — Организатор"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="person__content">
              <Text
                className="person__name"
                variant="body1"
                font="body"
                weight="semibold"
              >
                Соснова Людмила
              </Text>

              <Text
                className="person__role"
                variant="body3"
                font="helvetica"
                weight="medium"
              >
                Организатор
              </Text>

              <Text
                className="person__quote"
                variant="body2"
                font="helvetica"
                weight="regular"
              >
                «Много ли нужно человеку для полного счастья? Одна лишь любовь
                может сделать человека безмерно счастливым — это точно. С самого
                детства я верила в это волшебное чувство и, повзрослев,
                убедилась, что нет прекраснее влюблённых глаз. Занимаясь любимым
                делом, я каждый день не только чувствую любовь, я её вижу,
                прикасаюсь к ней, и самым счастливым для меня всегда остаётся
                знакомство с новой историей любви, воплощение которой доверяют
                нашей команде. Профессионализм, красота и любовь — залог моего
                счастья.»
              </Text>
            </div>
          </article>
        </div>
      </Container>
      <BannerSection />
    </section>
  </>
);
