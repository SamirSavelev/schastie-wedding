import { Container, Text } from "@shared/ui";

import "./ServicesIntroSection.scss";

export const ServicesIntroSection = () => (
  <section className="services-intro" aria-labelledby="services-intro-title">
    <Container>
      <div className="services-intro__grid">
        <div className="services-intro__main">
          <Text variant="h3" textTransform="uppercase" align="center">
            Организация свадеб «под ключ»
          </Text>
          <Text variant="body1" font="helvetica" weight="light" align="center">
            Основной услугой свадебного агентства «Счастье Wedding» является
            организация свадеб «под ключ». Только в этом случае мы можем
            гарантировать безупречную организацию и нести ответственность за
            реализацию концепции.
          </Text>
        </div>
      </div>
    </Container>
  </section>
);
