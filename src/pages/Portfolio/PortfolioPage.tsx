import { Container } from "@shared/ui/Container/Container";
import { WeddingPreview } from "@widgets/WeddingPreview/WeddingPreview";

import headerImage from "@assets/portfolio/header.jpg";

import { BannerSection, PageHeader } from "@widgets";
import {
  HOME_PORTFOLIO_TITLE,
  PORTFOLIO_DETAILS,
  PORTFOLIO_WEDDINGS_PREVIEWS,
} from "@shared/constants";
import "./PortfolioPage.scss";
import { Text } from "@shared/ui";
import { Helmet } from "react-helmet-async";

export const PortfolioPage = () => (
  <>
    <Helmet>
      <title>Портфолио | Счастье — планирование свадеб в Казани</title>
    </Helmet>
    <div className="portfolio-header">
      <PageHeader
        backgroundImage={headerImage}
        title={HOME_PORTFOLIO_TITLE}
        bottomText="Полезные статьи о свадьбах и подготовке"
      />
    </div>

    <Container>
      <div className="portfolio-head">
        <Text variant="h3" align="center">
          {HOME_PORTFOLIO_TITLE}
        </Text>
        <Text variant="subtitle" align="center">
          {PORTFOLIO_DETAILS}
        </Text>
      </div>

      <div className="portfolio-list">
        {PORTFOLIO_WEDDINGS_PREVIEWS.map((wedding) => (
          <WeddingPreview key={wedding.id} {...wedding} />
        ))}
      </div>
    </Container>
    <BannerSection />
  </>
);
