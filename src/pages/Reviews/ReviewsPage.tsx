import { PageHeader } from "@widgets/PageHeader/PageHeader";
import { Container } from "@shared/ui/Container/Container";
import header1280 from "./assets/header-1280.webp";
import header2400 from "./assets/header-2400.webp";
import { BannerSection } from "@widgets";
import { Helmet } from "react-helmet-async";
import { ReviewCard } from "./components/ReviewCard/ReviewCard";
import { REVIEWS_ITEMS } from "./constants";

import "./ReviewsPage.scss";

export const ReviewsPage = () => (
  <section className="page">
    <Helmet>
      <title>Отзывы | Счастье — планирование свадеб в Казани</title>
    </Helmet>
    <PageHeader
      backgroundDesktop={header2400}
      backgroundMobile={header1280}
      title="Отзывы"
      bottomText="Истории наших пар"
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
