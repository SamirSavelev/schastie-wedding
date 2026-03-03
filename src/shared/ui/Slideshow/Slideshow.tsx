import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import classNames from "classnames";
import "./Slideshow.scss";

export interface SlideshowImage {
  id?: string;
  src: string;
  srcSet?: string;
  sizes?: string;
  alt?: string;
}

type SlideshowImageInput = string | SlideshowImage;

interface SlideshowProps {
  images: SlideshowImageInput[];
  changeInterval: number;
}

const FADE_MS = 1400;

const usePrefersReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(Boolean(mql.matches));

    update();

    type MqlLegacy = {
      addEventListener?: (type: "change", listener: () => void) => void;
      removeEventListener?: (type: "change", listener: () => void) => void;
      addListener?: (listener: () => void) => void;
      removeListener?: (listener: () => void) => void;
    };

    const mqlLegacy = mql as unknown as MqlLegacy;

    let cleanup = () => {};

    if (typeof mqlLegacy.addEventListener === "function") {
      mqlLegacy.addEventListener("change", update);
      cleanup = () => mqlLegacy.removeEventListener?.("change", update);
    } else if (typeof mqlLegacy.addListener === "function") {
      // старые Safari
      mqlLegacy.addListener(update);
      cleanup = () => mqlLegacy.removeListener?.(update);
    }

    return cleanup;
  }, []);

  return reduced;
};

type Layer = {
  key: string;
  index: number;
};

export const Slideshow = ({ images, changeInterval }: SlideshowProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const normalized = useMemo<SlideshowImage[]>(
    () =>
      (images ?? []).map((item) =>
        typeof item === "string" ? { src: item } : item,
      ),
    [images],
  );

  const hasImages = normalized.length > 0;
  const hasLoop = normalized.length > 1;

  const [layers, setLayers] = useState<Layer[]>([{ key: "0-0", index: 0 }]);
  const [isFading, setIsFading] = useState(false);

  const seqRef = useRef(0);
  const fadeStartTimerRef = useRef<number | null>(null);
  const fadeEndTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    seqRef.current = 0;
    setLayers([{ key: "0-0", index: 0 }]);
    setIsFading(false);
  }, [normalized.length]);

  const currentIndex = layers[0]?.index ?? 0;

  useEffect(() => {
    if (!hasImages || !hasLoop) return;

    if (prefersReducedMotion) {
      if (fadeStartTimerRef.current)
        window.clearTimeout(fadeStartTimerRef.current);
      if (fadeEndTimerRef.current) window.clearTimeout(fadeEndTimerRef.current);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);

      fadeStartTimerRef.current = window.setTimeout(() => {
        const next = (currentIndex + 1) % normalized.length;
        seqRef.current += 1;
        setLayers([{ key: `${next}-${seqRef.current}`, index: next }]);
      }, changeInterval);

      return () => {
        if (fadeStartTimerRef.current)
          window.clearTimeout(fadeStartTimerRef.current);
      };
    }

    const clearTimers = () => {
      if (fadeStartTimerRef.current)
        window.clearTimeout(fadeStartTimerRef.current);
      if (fadeEndTimerRef.current) window.clearTimeout(fadeEndTimerRef.current);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      fadeStartTimerRef.current = null;
      fadeEndTimerRef.current = null;
      rafRef.current = null;
    };

    clearTimers();

    const safeInterval = Math.max(0, changeInterval);
    const fadeLead = Math.min(FADE_MS, safeInterval);
    const fadeStartAt = Math.max(0, safeInterval - fadeLead);

    fadeStartTimerRef.current = window.setTimeout(() => {
      const next = (currentIndex + 1) % normalized.length;

      setLayers((prev) => {
        if (prev.length >= 2) return prev;
        seqRef.current += 1;
        return [...prev, { key: `${next}-${seqRef.current}`, index: next }];
      });

      rafRef.current = window.requestAnimationFrame(() => {
        setIsFading(true);
      });
    }, fadeStartAt);

    fadeEndTimerRef.current = window.setTimeout(() => {
      setLayers((prev) => (prev.length === 2 ? [prev[1]] : prev));
      setIsFading(false);
    }, safeInterval);

    return clearTimers;
  }, [
    changeInterval,
    currentIndex,
    hasImages,
    hasLoop,
    normalized.length,
    prefersReducedMotion,
  ]);

  if (!hasImages) return null;

  const current = normalized[layers[0]?.index ?? 0];
  const incoming = layers.length > 1 ? normalized[layers[1].index] : null;

  const rootStyle: CSSProperties = {
    ["--slideshow-kenburns-duration"]: `${Math.max(0, changeInterval)}ms`,
    ["--slideshow-fade-ms"]: `${FADE_MS}ms`,
  } as CSSProperties;

  return (
    <div
      className={classNames("slideshow", { "slideshow--fading": isFading })}
      style={rootStyle}
      aria-hidden="true"
    >
      <div
        className="slideshow__slide slideshow__slide--current"
        key={layers[0].key}
      >
        <img
          className="slideshow__img"
          src={current.src}
          srcSet={current.srcSet}
          sizes={current.sizes ?? "100vw"}
          alt={current.alt ?? ""}
          decoding="async"
          loading="eager"
          fetchPriority="high"
          draggable={false}
        />
      </div>

      {incoming && (
        <div
          className="slideshow__slide slideshow__slide--incoming"
          key={layers[1].key}
        >
          <img
            className="slideshow__img"
            src={incoming.src}
            srcSet={incoming.srcSet}
            sizes={incoming.sizes ?? "100vw"}
            alt={incoming.alt ?? ""}
            decoding="async"
            loading="lazy"
            fetchPriority="low"
            draggable={false}
          />
        </div>
      )}
    </div>
  );
};
