import type { FC } from "react";
import { Button, Text } from "@shared/ui";
import "./WeddingPreview.scss";
import type { WeddingConfig } from "@pages/PortfolioWedding/constants";

export const WeddingPreview: FC<WeddingConfig> = ({
  id,
  heroImage,
  couple,
  concept,
  placeTitle,
  placeSubtitle,
  guests,
  team,
  budget,
}) => {
  const INFO = [
    {
      id: 1,
      label: "Место проведения",
      value: (
        <>
          {placeTitle}
          {!!placeSubtitle && (
            <>
              <br />
              {placeSubtitle}
            </>
          )}
        </>
      ),
    },
    {
      id: 2,
      label: "Количество гостей",
      value: <>{guests}</>,
    },
    {
      id: 3,
      label: "Команда",
      value: <>{team}</>,
    },
    {
      id: 4,
      label: "Бюджет",
      value: <>{budget}</>,
    },
  ];

  return (
    <section className="wedding-preview">
      <div className="wedding-preview__image-wrapper">
        <img
          src={heroImage}
          alt={`Свадьба ${couple}`}
          className="wedding-preview__image"
        />
      </div>

      <div className="wedding-preview__content">
        <Text
          variant="h3"
          textTransform="uppercase"
          className="wedding-preview__title"
        >
          {couple}
        </Text>
        <Text variant="subtitle" className="wedding-preview__concept">
          {concept}
        </Text>

        <div className="wedding-preview__info-grid">
          {INFO.map(({ label, value, id }) => (
            <div key={id} className="wedding-preview__info-item">
              <div className="wedding-preview__icon" aria-hidden="true" />
              <div className="wedding-preview__info-text">
                <Text>{label}</Text>
                <Text weight="bold">{value}</Text>
              </div>
            </div>
          ))}
        </div>

        <div className="wedding-preview__actions">
          <Button as="link" to={`/portfolio/${id}`} variant="black">
            Смотреть свадьбу
          </Button>
        </div>
      </div>
    </section>
  );
};
