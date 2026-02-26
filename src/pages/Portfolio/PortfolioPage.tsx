import { Container } from "@shared/ui/Container/Container";
import { WeddingPreview } from "@widgets/WeddingPreview/WeddingPreview";
import headerDesktop from "@assets/portfolio/header-2400.webp";
import headerMobile from "@assets/portfolio/header-1280.webp";
import { BannerSection, PageHeader } from "@widgets";
import { Text } from "@shared/ui";
import { Helmet } from "react-helmet-async";
import { WEDDINGS } from "@pages/PortfolioWedding/constants";

import "./PortfolioPage.scss";

export const PortfolioPage = () => (
  <>
    <Helmet>
      <title>Портфолио | Счастье — планирование свадеб в Казани</title>
    </Helmet>

    <div className="portfolio-header">
      <PageHeader
        backgroundDesktop={headerDesktop}
        backgroundMobile={headerMobile}
        backgroundAlt="Портфолио свадеб"
        title="Портфолио"
        bottomText="Полезные статьи о свадьбах и подготовке"
        noScale
      />
    </div>

    <Container>
      <div className="portfolio-head">
        <Text variant="h3" align="center">
          Портфолио
        </Text>
        <Text variant="subtitle" align="center">
          Наше портфолио — не просто статичная галерея. Мы рассказываем о наших
          свадьбах в виде подробных кейсов: увлекательные истории любви,
          уникальные концепции, эскизы декора, комментарии от свадебных
          специалистов, фото и видео-экстейджи и многое другое. Приятного
          просмотра!
        </Text>
      </div>

      <div className="portfolio-list">
        {WEDDINGS.map((wedding) => (
          <WeddingPreview key={wedding.id} {...wedding} />
        ))}
      </div>
    </Container>

    <BannerSection />
  </>
);
