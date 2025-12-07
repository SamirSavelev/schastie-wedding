import { Container } from '@shared/ui/Container/Container';
import { WeddingPreview } from '@widgets/WeddingPreview/WeddingPreview';

import headerImage from '@assets/portfolio/header.jpg';

import { BannerSection, PageHeader } from '@widgets';
import {
  HOME_PORTFOLIO_TITLE,
  PORTFOLIO_DETAILS,
  PORTFOLIO_WEDDINGS_PREVIEWS,
} from '@shared/constants';
import './PortfolioPage.scss';
import { Text } from '@shared/ui';

export const PortfolioPage = () => (
  <>
    <PageHeader
      backgroundImage={headerImage}
      title={HOME_PORTFOLIO_TITLE}
      bottomText="Полезные статьи о свадьбах и подготовке"
    />

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
