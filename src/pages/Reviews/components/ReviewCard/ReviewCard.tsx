import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { Text } from "@shared/ui/Text/Text";
import type { ReviewItemFull } from "@pages/Reviews/constants";

import "./ReviewCard.scss";

interface ReviewCardProps {
  item: ReviewItemFull;
}

export const ReviewCard = ({ item }: ReviewCardProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasGallery = item.gallery && item.gallery.length > 0;

  const handleThumbClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleCloseViewer = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (!hasGallery || activeIndex === null) return;

    setActiveIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + item.gallery.length) % item.gallery.length,
    );
  }, [activeIndex, hasGallery, item.gallery.length]);

  const handleNext = useCallback(() => {
    if (!hasGallery || activeIndex === null) return;

    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % item.gallery.length,
    );
  }, [activeIndex, hasGallery, item.gallery.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleCloseViewer();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, handleCloseViewer, handleNext, handlePrev]);

  return (
    <>
      <article className="review-card">
        <div className="review-card__top">
          <div className="review-card__left">
            <div className="review-card__main-image-wrapper">
              <img
                src={item.mainImage.src}
                srcSet={item.mainImage.srcSet}
                sizes="(max-width: 900px) 220px, 300px"
                alt={`Свадьба пары ${item.couple}`}
                className="review-card__main-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="review-card__right">
            <Text
              variant="body2"
              font="helvetica"
              className="review-card__text"
            >
              {item.review}
            </Text>

            <div className="review-card__meta">
              <Text
                variant="body2"
                font="body"
                weight="semibold"
                className="review-card__couple"
              >
                {item.couple}
              </Text>
              <Text
                variant="caption"
                font="helvetica"
                color="black"
                className="review-card__date"
              >
                {item.weddingDate}
              </Text>
            </div>
          </div>
        </div>

        {hasGallery && (
          <div className="review-card__bottom">
            {item.gallery.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                className="review-card__thumb-button"
                onClick={() => handleThumbClick(index)}
                aria-label={photo.alt || `Фотография свадьбы ${item.couple}`}
              >
                <div className="review-card__thumb-wrapper">
                  <img
                    src={photo.image.src}
                    srcSet={photo.image.srcSet}
                    sizes="(max-width: 520px) 45vw, (max-width: 900px) 30vw, 360px"
                    alt={photo.alt || ""}
                    className="review-card__thumb-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </button>
            ))}
          </div>
        )}
      </article>

      {hasGallery && activeIndex !== null && (
        <div
          className="review-card__viewer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фотографий со свадьбы"
          onClick={handleCloseViewer}
        >
          <button
            type="button"
            className="review-card__viewer-close"
            onClick={handleCloseViewer}
            aria-label="Закрыть просмотр"
          >
            ×
          </button>

          <button
            type="button"
            className={classNames(
              "review-card__viewer-arrow",
              "review-card__viewer-arrow--left",
            )}
            onClick={(event) => {
              event.stopPropagation();
              handlePrev();
            }}
            aria-label="Предыдущее фото"
          >
            ‹
          </button>

          <div
            className="review-card__viewer-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="review-card__viewer-content">
              <div className="review-card__viewer-image-wrapper">
                <img
                  src={item.gallery[activeIndex].image.src}
                  srcSet={item.gallery[activeIndex].image.srcSet}
                  sizes="100vw"
                  alt={item.gallery[activeIndex].alt || ""}
                  className="review-card__viewer-image"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className={classNames(
              "review-card__viewer-arrow",
              "review-card__viewer-arrow--right",
            )}
            onClick={(event) => {
              event.stopPropagation();
              handleNext();
            }}
            aria-label="Следующее фото"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};
