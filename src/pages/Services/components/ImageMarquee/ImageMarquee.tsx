import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';

import {
  IMAGE_MARQUEE_VIEWER_ARIA_LABEL,
  IMAGE_MARQUEE_VIEWER_CLOSE_LABEL,
  IMAGE_MARQUEE_VIEWER_NEXT_LABEL,
  IMAGE_MARQUEE_VIEWER_PREV_LABEL,
  MARQUEE_IMAGES,
} from '@shared/constants';

import './ImageMarquee.scss';

export const ImageMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasImages = MARQUEE_IMAGES && MARQUEE_IMAGES.length > 0;

  const loopImages = useMemo(
    () => (hasImages ? [...MARQUEE_IMAGES, ...MARQUEE_IMAGES] : []),
    [hasImages]
  );

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (activeIndex === null) {
      setIsPaused(false);
    }
  }, [activeIndex]);

  const handleImageClick = useCallback((indexInOriginal: number) => {
    setActiveIndex(indexInOriginal);
    setIsPaused(true);
  }, []);

  const handleCloseViewer = useCallback(() => {
    setActiveIndex(null);
    setIsPaused(false);
  }, []);

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + MARQUEE_IMAGES.length) % MARQUEE_IMAGES.length
    );
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % MARQUEE_IMAGES.length
    );
  }, [activeIndex]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
        setIsPaused(false);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNext();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrev();
      }
    },
    [handleNext, handlePrev]
  );

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, handleKeyDown]);

  if (!hasImages) {
    return null;
  }

  const marqueeStyle: React.CSSProperties = {
    '--image-marquee-duration': `10s`,
  } as React.CSSProperties;

  return (
    <>
      <section className={classNames('image-marquee')}>
        <div
          className={classNames('image-marquee__viewport')}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={classNames('image-marquee__track', {
              'image-marquee__track--paused': isPaused,
            })}
            style={marqueeStyle}
          >
            {loopImages.map((image, index) => (
              <button
                key={`${image.id}-${index}`}
                type="button"
                className="image-marquee__item"
                onMouseEnter={handleMouseEnter}
                onClick={() => handleImageClick(index % MARQUEE_IMAGES.length)}
                aria-label={image.alt}
              >
                <div className="image-marquee__image-wrapper">
                  <img
                    src={image.src}
                    alt={image.alt ?? ''}
                    className="image-marquee__image"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="image-marquee__viewer-backdrop"
          role="dialog"
          aria-label={IMAGE_MARQUEE_VIEWER_ARIA_LABEL}
          aria-modal="true"
        >
          <button
            type="button"
            className="image-marquee__viewer-close"
            onClick={handleCloseViewer}
            aria-label={IMAGE_MARQUEE_VIEWER_CLOSE_LABEL}
          >
            ×
          </button>

          <button
            type="button"
            className="image-marquee__viewer-arrow image-marquee__viewer-arrow--left"
            onClick={handlePrev}
            aria-label={IMAGE_MARQUEE_VIEWER_PREV_LABEL}
          >
            ‹
          </button>
          <div
            className="image-marquee__viewer-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="image-marquee__viewer-content">
              <div className="image-marquee__viewer-image-wrapper">
                <img
                  src={MARQUEE_IMAGES[activeIndex].src}
                  alt={MARQUEE_IMAGES[activeIndex].alt ?? ''}
                  className="image-marquee__viewer-image"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="image-marquee__viewer-arrow image-marquee__viewer-arrow--right"
            onClick={handleNext}
            aria-label={IMAGE_MARQUEE_VIEWER_NEXT_LABEL}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};
