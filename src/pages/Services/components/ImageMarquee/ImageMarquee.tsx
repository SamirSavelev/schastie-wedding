import type { CSSProperties } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import classNames from "classnames";

import "./ImageMarquee.scss";
import { MARQUEE_IMAGES } from "./constants";
import { ImageViewer } from "@shared/ui/ImageViewer/ImageViewer";

const useIsHoverCapable = (): boolean => {
  const [isHoverCapable, setIsHoverCapable] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) {
      setIsHoverCapable(true);
      return;
    }

    const mqHoverFine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mqHoverNone = window.matchMedia("(hover: none)");
    const mqPointerCoarse = window.matchMedia("(pointer: coarse)");

    const compute = () => {
      const hasTouch =
        (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) ||
        "ontouchstart" in window;

      const isTouchMode =
        hasTouch || mqHoverNone.matches || mqPointerCoarse.matches;

      return mqHoverFine.matches && !isTouchMode;
    };

    const update = () => setIsHoverCapable(compute());
    update();

    const subscribe = (mql: MediaQueryList) => {
      if ("addEventListener" in mql) {
        mql.addEventListener("change", update);
      }
      if ("addListener" in mql) {
        mql?.addListener(update);
      }

      return () => {
        mql.removeEventListener("change", update);
        mql?.removeListener(update);
      };
    };

    const unsubs = [
      subscribe(mqHoverFine),
      subscribe(mqHoverNone),
      subscribe(mqPointerCoarse),
    ];

    return () => unsubs.forEach((unsub) => unsub());
  }, []);

  return isHoverCapable;
};

export const ImageMarquee = () => {
  const isHoverCapable = useIsHoverCapable();
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasImages = MARQUEE_IMAGES.length > 0;

  // viewerImages — ровно ViewerImage[], без лишних полей
  const viewerImages = useMemo(
    () => MARQUEE_IMAGES.map(({ ...viewerImage }) => viewerImage),
    [],
  );

  // Делаем длительность “естественной”: больше фоток → медленнее.
  // 46 * 1.6 = 73.6s — выглядит плавно и не “ускоренно”.
  const durationSeconds = useMemo(
    () => Math.max(40, MARQUEE_IMAGES.length * 4),
    [],
  );

  const marqueeStyle: CSSProperties = useMemo(
    () =>
      ({
        ["--image-marquee-duration"]: `${durationSeconds}s`,
      }) as CSSProperties,
    [durationSeconds],
  );

  const handleMouseEnter = useCallback(() => {
    if (isHoverCapable) setIsPaused(true);
  }, [isHoverCapable]);

  const handleMouseLeave = useCallback(() => {
    if (isHoverCapable && activeIndex === null) {
      setIsPaused(false);
    }
  }, [activeIndex, isHoverCapable]);

  const handleFocusCapture = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleBlurCapture = useCallback(() => {
    if (activeIndex === null) setIsPaused(false);
  }, [activeIndex]);

  const handleOpen = useCallback((index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  }, []);

  const handleClose = useCallback(() => {
    setActiveIndex(null);
    setIsPaused(false);
    setTimeout(() => {
      setIsPaused(false);
    }, 1);
  }, []);

  const safeViewerIndex = activeIndex ?? 0;
  if (!hasImages) return null;
  return (
    <>
      <section className="image-marquee" aria-label="Фотографии свадеб">
        <div
          className="image-marquee__viewport"
          onMouseLeave={handleMouseLeave}
          onFocusCapture={handleFocusCapture}
          onBlurCapture={handleBlurCapture}
        >
          <div
            className={classNames("image-marquee__track", {
              "image-marquee__track--paused": isPaused,
            })}
            style={marqueeStyle}
          >
            {/* Группа 1 */}
            <div className="image-marquee__group">
              {MARQUEE_IMAGES.map((image, index) => (
                <button
                  key={`marquee-a-${image.id}`}
                  type="button"
                  className="image-marquee__item"
                  onMouseEnter={handleMouseEnter}
                  onClick={() => handleOpen(index)}
                  aria-label={image.alt}
                >
                  <div className="image-marquee__image-wrapper">
                    <img
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes={image.previewSizes}
                      alt={image.alt ?? ""}
                      className="image-marquee__image"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      draggable={false}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Группа 2 (дубль) */}
            <div className="image-marquee__group" aria-hidden="true">
              {MARQUEE_IMAGES.map((image, index) => (
                <button
                  key={`marquee-b-${image.id}`}
                  type="button"
                  className="image-marquee__item"
                  onMouseEnter={handleMouseEnter}
                  onClick={() => handleOpen(index)}
                  tabIndex={-1}
                  aria-label={image.alt}
                >
                  <div className="image-marquee__image-wrapper">
                    <img
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes={image.previewSizes}
                      alt=""
                      className="image-marquee__image"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      draggable={false}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ImageViewer
        isOpen={activeIndex !== null}
        images={viewerImages}
        index={safeViewerIndex}
        onIndexChange={setActiveIndex}
        onClose={handleClose}
        ariaLabel="Просмотр фотографий"
      />
    </>
  );
};
