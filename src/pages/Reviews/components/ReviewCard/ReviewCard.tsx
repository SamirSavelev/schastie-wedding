import { useCallback, useMemo, useState } from "react";
import { Text } from "@shared/ui/Text/Text";
import type { ReviewItemFull } from "@pages/Reviews/constants";
import { ImageViewer, type ViewerImage } from "@shared/ui/ImageViewer";

import "./ReviewCard.scss";

interface ReviewCardProps {
  item: ReviewItemFull;
}

export const ReviewCard = ({ item }: ReviewCardProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasGallery = item.gallery && item.gallery.length > 0;

  const viewerImages: ViewerImage[] = useMemo(() => {
    if (!hasGallery) return [];
    return item.gallery.map((photo) => ({
      src: photo.image.src,
      srcSet: photo.image.srcSet,
      sizes: "100vw",
      alt: photo.alt,
    }));
  }, [hasGallery, item.gallery]);

  const handleThumbClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleCloseViewer = useCallback(() => {
    setActiveIndex(null);
  }, []);

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

            <div className="review-card__meta review-card__meta--under-image">
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

          <div className="review-card__right">
            <Text
              variant="body2"
              font="helvetica"
              className="review-card__text"
            >
              {item.review}
            </Text>

            <div className="review-card__meta review-card__meta--desktop">
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

      <ImageViewer
        isOpen={hasGallery && activeIndex !== null}
        images={viewerImages}
        index={activeIndex ?? 0}
        onIndexChange={(next) => setActiveIndex(next)}
        onClose={handleCloseViewer}
        ariaLabel="Просмотр фотографий со свадьбы"
      />
    </>
  );
};
