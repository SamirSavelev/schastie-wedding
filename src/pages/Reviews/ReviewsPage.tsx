import { PageHeader } from "@widgets/PageHeader/PageHeader";
import { Container } from "@shared/ui/Container/Container";

import {
  REVIEWS_ITEMS,
  REVIEWS_PAGE_BOTTOM_TEXT,
  REVIEWS_PAGE_TITLE,
} from "@shared/constants";

import headerImage from "@assets/hero/01.jpg";
import { ReviewCard } from "./components/ReviewCard/ReviewCard";

import "./ReviewsPage.scss";
import { BannerSection } from "@widgets";
import { Helmet } from "react-helmet-async";

export const ReviewsPage = () => {
  return (
    <section className="page page--reviews">
      <Helmet>
        <title>Отзывы | Счастье — планирование свадеб в Казани</title>
      </Helmet>
      <PageHeader
        backgroundImage={headerImage}
        title={REVIEWS_PAGE_TITLE}
        bottomText={REVIEWS_PAGE_BOTTOM_TEXT}
      />

      <section className="reviews">
        <Container>
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
