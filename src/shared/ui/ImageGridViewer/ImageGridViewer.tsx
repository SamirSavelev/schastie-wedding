import { useCallback, useEffect, useState } from "react";

import {
  IMAGE_MARQUEE_VIEWER_ARIA_LABEL,
  IMAGE_MARQUEE_VIEWER_CLOSE_LABEL,
  IMAGE_MARQUEE_VIEWER_NEXT_LABEL,
  IMAGE_MARQUEE_VIEWER_PREV_LABEL,
} from "@shared/constants";

import "./ImageGridViewer.scss";

export interface ImageGridViewerItem {
  id: string;
  src: string;
  alt?: string;
}

interface ImageGridViewerProps {
  images: ImageGridViewerItem[];
}

export const ImageGridViewer = ({ images }: ImageGridViewerProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasImages = images && images.length > 0;

  const handleOpen = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  }, [activeIndex, images.length]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  }, [activeIndex, images.length]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      }
    },
    [activeIndex, handleClose, handleNext, handlePrev]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    // Отключение прокрутки страницы
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto"; // Восстановление прокрутки после закрытия
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, handleKeyDown]);

  if (!hasImages) return null;

  return (
    <>
      <section className="image-grid-viewer">
        <div className="image-grid-viewer__grid">
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className="image-grid-viewer__item"
              onClick={() => handleOpen(index)}
              aria-label={image.alt ?? IMAGE_MARQUEE_VIEWER_ARIA_LABEL}
            >
              <div className="image-grid-viewer__image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt ?? ""}
                  className="image-grid-viewer__image"
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="image-grid-viewer__viewer-backdrop"
          role="dialog"
          aria-label={IMAGE_MARQUEE_VIEWER_ARIA_LABEL}
          aria-modal="true"
          onClick={handleClose}
        >
          <button
            type="button"
            className="image-grid-viewer__viewer-close"
            onClick={handleClose}
            aria-label={IMAGE_MARQUEE_VIEWER_CLOSE_LABEL}
          >
            ×
          </button>

          <button
            type="button"
            className="image-grid-viewer__viewer-arrow image-grid-viewer__viewer-arrow--left"
            onClick={(event) => {
              event.stopPropagation();
              handlePrev();
            }}
            aria-label={IMAGE_MARQUEE_VIEWER_PREV_LABEL}
          >
            ‹
          </button>

          <div
            className="image-grid-viewer__viewer-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="image-grid-viewer__viewer-content">
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt ?? ""}
                className="image-grid-viewer__viewer-image"
              />
            </div>
          </div>

          <button
            type="button"
            className="image-grid-viewer__viewer-arrow image-grid-viewer__viewer-arrow--right"
            onClick={(event) => {
              event.stopPropagation();
              handleNext();
            }}
            aria-label={IMAGE_MARQUEE_VIEWER_NEXT_LABEL}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};
