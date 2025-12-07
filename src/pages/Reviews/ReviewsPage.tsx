import { PageHeader } from '@widgets/PageHeader/PageHeader';
import { Container } from '@shared/ui/Container/Container';
import { Text } from '@shared/ui/Text/Text';

import {
  REVIEWS_ITEMS,
  REVIEWS_PAGE_BOTTOM_TEXT,
  REVIEWS_PAGE_SUBTITLE,
  REVIEWS_PAGE_TITLE,
} from '@shared/constants';

import headerImage from '@assets/hero/01.jpg';
import { ReviewCard } from './components/ReviewCard/ReviewCard';

import './ReviewsPage.scss';
import { BannerSection } from '@widgets';

export const ReviewsPage = () => {
  return (
    <section className="page page--reviews">
      <PageHeader
        backgroundImage={headerImage}
        title={REVIEWS_PAGE_TITLE}
        bottomText={REVIEWS_PAGE_BOTTOM_TEXT}
      />

      <section className="reviews">
        <Container>
          <header className="reviews__intro">
            <Text
              variant="h3"
              font="body"
              weight="semibold"
              align="center"
              textTransform="uppercase"
              className="reviews__title"
            >
              {REVIEWS_PAGE_TITLE}
            </Text>
            <Text
              variant="body2"
              font="helvetica"
              align="center"
              className="reviews__subtitle"
            >
              {REVIEWS_PAGE_SUBTITLE}
            </Text>
          </header>

          <div className="reviews__list">
            {REVIEWS_ITEMS.map((item) => (
              <ReviewCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <BannerSection />
    </section>
  );
};
