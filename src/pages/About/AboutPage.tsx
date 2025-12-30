import elena from "@assets/team/elena.png";
import lyudmila from "@assets/team/lyudmila.png";
import "./AboutPage.scss";

import headerImage from "@assets/we/header.jpg";
import {
  ABOUT_TITLE,
  ABOUT_LEAD,
  ABOUT_MISSION,
  ABOUT_PERSON_ELENA_NAME,
  ABOUT_PERSON_ELENA_ROLE,
  ABOUT_PERSON_ELENA_QUOTE,
  ABOUT_PERSON_LYUDMILA_NAME,
  ABOUT_PERSON_LYUDMILA_ROLE,
  ABOUT_PERSON_LYUDMILA_QUOTE,
} from "@shared/constants";
import { PageHeader } from "@widgets";
import { Container, Text } from "@shared/ui";
import { Helmet } from "react-helmet-async";

export const AboutPage = () => (
  <>
    <Helmet>
      <title>О нас | Счастье — планирование свадеб в Казани</title>
    </Helmet>
    <div className="about__header">
      <PageHeader
        backgroundImage={headerImage}
        title={ABOUT_TITLE}
        bottomText="Философия агентства «Счастье»"
      />
    </div>

    <Container className="content">
      <Text
        className="about__lead"
        variant="body2"
        font="helvetica"
        align="center"
      >
        {ABOUT_LEAD}
      </Text>
      <Text
        className="about__mission"
        variant="body1"
        font="helvetica"
        align="center"
        weight="light"
      >
        {ABOUT_MISSION}
      </Text>
      <div className="about__team">
        <article className="person">
          <div className="person__media">
            <div className="person__photo">
              <img
                src={elena}
                alt={`${ABOUT_PERSON_ELENA_NAME} — ${ABOUT_PERSON_ELENA_ROLE}`}
                loading="lazy"
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
              {ABOUT_PERSON_ELENA_NAME}
            </Text>
            <Text
              className="person__role"
              variant="body3"
              font="helvetica"
              weight="medium"
            >
              {ABOUT_PERSON_ELENA_ROLE}
            </Text>
            <Text
              className="person__quote"
              variant="body2"
              font="helvetica"
              weight="regular"
            >
              {ABOUT_PERSON_ELENA_QUOTE}
            </Text>
          </div>
        </article>

        <article className="person person--reverse">
          <div className="person__media">
            <div className="person__photo">
              <img
                src={lyudmila}
                alt={`${ABOUT_PERSON_LYUDMILA_NAME} — ${ABOUT_PERSON_LYUDMILA_ROLE}`}
                loading="lazy"
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
              {ABOUT_PERSON_LYUDMILA_NAME}
            </Text>
            <Text
              className="person__role"
              variant="body3"
              font="helvetica"
              weight="medium"
            >
              {ABOUT_PERSON_LYUDMILA_ROLE}
            </Text>
            <Text
              className="person__quote"
              variant="body2"
              font="helvetica"
              weight="regular"
            >
              {ABOUT_PERSON_LYUDMILA_QUOTE}
            </Text>
          </div>
        </article>
      </div>
    </Container>
  </>
);
