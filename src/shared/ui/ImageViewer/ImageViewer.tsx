import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
} from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import "./ImageViewer.scss";

export interface ViewerImage {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt?: string;
}

interface ImageViewerProps {
  isOpen: boolean;
  images: ViewerImage[];
  onClose: () => void;
  index?: number;
  onIndexChange?: (nextIndex: number) => void;
  defaultIndex?: number;
  ariaLabel?: string;
  className?: string;
  zIndex?: number;
}

const clampIndex = (value: number, length: number) => {
  if (length <= 0) return 0;
  const normalized = ((value % length) + length) % length;
  return normalized;
};

export const ImageViewer: FC<ImageViewerProps> = ({
  isOpen,
  images,
  onClose,
  index,
  onIndexChange,
  defaultIndex = 0,
  ariaLabel = "Просмотр изображения",
  className,
  zIndex = 1400,
}) => {
  const hasImages = images.length > 0;
  const hasNavigation = images.length > 1;

  const [internalIndex, setInternalIndex] = useState(() =>
    clampIndex(defaultIndex, images.length),
  );

  const activeIndex = index ?? internalIndex;

  const setIndex = useCallback(
    (next: number) => {
      const nextIndex = clampIndex(next, images.length);

      if (onIndexChange) {
        onIndexChange(nextIndex);
      } else {
        setInternalIndex(nextIndex);
      }
    },
    [images.length, onIndexChange],
  );

  const handlePrev = useCallback(() => {
    if (!hasNavigation) return;
    setIndex(activeIndex - 1);
  }, [activeIndex, hasNavigation, setIndex]);

  const handleNext = useCallback(() => {
    if (!hasNavigation) return;
    setIndex(activeIndex + 1);
  }, [activeIndex, hasNavigation, setIndex]);

  useEffect(() => {
    if (!isOpen) return;
    if (index !== undefined) return;

    setInternalIndex(clampIndex(defaultIndex, images.length));
  }, [defaultIndex, images.length, index, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (!hasNavigation) return;

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
  }, [handleNext, handlePrev, hasNavigation, isOpen, onClose]);

  const bodyOverflowRef = useRef<string>("");
  const bodyPaddingRightRef = useRef<string>("");
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

    bodyOverflowRef.current = body.style.overflow;
    bodyPaddingRightRef.current = body.style.paddingRight;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }

    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      body.style.overflow = bodyOverflowRef.current;
      body.style.paddingRight = bodyPaddingRightRef.current;

      previouslyFocusedRef.current?.focus?.();
      previouslyFocusedRef.current = null;
    };
  }, [isOpen]);

  const current = useMemo(() => images[activeIndex], [activeIndex, images]);

  const portalRoot = typeof document !== "undefined" ? document.body : null;

  if (!isOpen || !portalRoot || !hasImages) return null;

  return createPortal(
    <div
      className={cn("image-viewer", className)}
      style={{ zIndex }}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      onClick={onClose}
    >
      <div className="image-viewer__inner" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          className="image-viewer__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.5558 18.5628C17.9899 19.1287 17.0744 19.1287 16.5168 18.5711L11.9896 14.0439L7.47063 18.5628C6.90472 19.1287 5.98928 19.1287 5.4317 18.5711C4.87411 18.0135 4.87411 17.0981 5.44002 16.5322L9.96728 12.0049L5.42338 7.46102C4.85747 6.89511 4.86579 5.98799 5.4317 5.42208C5.99761 4.85617 6.91305 4.85617 7.47063 5.41376L11.9979 9.94102L16.5252 5.41376C17.0911 4.84785 18.0065 4.84785 18.5641 5.40544C19.1217 5.96302 19.1217 6.87846 18.5558 7.44437L14.0285 11.9716L18.5558 16.4989C19.1217 17.0648 19.1134 17.9719 18.5475 18.5378L18.5558 18.5628Z"
              fill="white"
            />
          </svg>
        </button>

        {hasNavigation && (
          <>
            <button
              type="button"
              className={cn("image-viewer__arrow", "image-viewer__arrow--left")}
              onClick={handlePrev}
              aria-label="Предыдущее изображение"
            >
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.40253 10.406C3.62281 9.62627 3.62281 8.36544 4.40253 7.59401L9.44585 2.55069C10.0265 1.97005 10.0265 1.02442 9.44585 0.435484C8.86521 -0.145161 7.91958 -0.145161 7.33064 0.435484L0.877189 6.88894C-0.292396 8.05853 -0.292396 9.94977 0.877189 11.1111L7.33064 17.5645C7.91129 18.1452 8.85691 18.1452 9.44585 17.5645C10.0265 16.9839 10.0265 16.0382 9.44585 15.4493L4.40253 10.406Z"
                  fill="white"
                />
              </svg>
            </button>

            <button
              type="button"
              className={cn(
                "image-viewer__arrow",
                "image-viewer__arrow--right",
              )}
              onClick={handleNext}
              aria-label="Следующее изображение"
            >
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.47881 7.59401C6.25854 8.37373 6.25854 9.63456 5.47881 10.406L0.435495 15.4493C-0.145149 16.03 -0.145149 16.9756 0.435495 17.5645C1.01614 18.1452 1.96176 18.1452 2.5507 17.5645L9.00416 11.1111C10.1737 9.94147 10.1737 8.05023 9.00416 6.88894L2.5507 0.435484C1.97006 -0.145161 1.02444 -0.145161 0.435495 0.435484C-0.145149 1.01613 -0.145149 1.96175 0.435495 2.55069L5.47881 7.59401Z"
                  fill="white"
                />
              </svg>
            </button>
          </>
        )}

        <div className="image-viewer__content">
          <div className="image-viewer__image-wrapper">
            <img
              src={current.src}
              srcSet={current.srcSet}
              sizes={current.sizes ?? "100vw"}
              alt={current.alt ?? ""}
              className="image-viewer__image"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>,
    portalRoot,
  );
};
