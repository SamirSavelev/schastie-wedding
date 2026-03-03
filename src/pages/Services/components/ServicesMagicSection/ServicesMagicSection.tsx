import type { FC, KeyboardEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { motion, type Variants } from "framer-motion";
import { Container, Text } from "@shared/ui";
import "./ServicesMagicSection.scss";

interface ServicesMagicSectionProps {
  circleRadius?: number;
  farDistance?: number;
  closeDistance?: number;
  animationDurationMs?: number;
  angleOffsetDeg?: number;
}

type MagicItem = {
  title: string;
  stats: string[];
};

const TEXT_LINE_HEIGHT = 4.5;

export const SERVICES_MAGIC_TITLE =
  "Работа организатора — это магия и немного чисел";

const SERVICES_MAGIC_SUBTITLE_HOVER =
  "наведите на точку, чтобы создать идеальную свадьбу";

const SERVICES_MAGIC_SUBTITLE_TAP =
  "нажмите на точку, чтобы создать идеальную свадьбу";

const MAGIC_ITEMS: MagicItem[] = [
  {
    title: "Свадебный организатор",
    stats: ["8 лет опыта", "165 площадок", "83 ведущих", "128 фотографов"],
  },
  {
    title: "Свадебные специалисты",
    stats: ["15 договоров", "17 встреч", "3 чата", "8 технических заданий"],
  },
  {
    title: "Жених и невеста",
    stats: [
      "8-часовой сон",
      "до −15% экономии бюджета",
      "24 часа с любимыми",
      "79% сохранённых нервных клеток",
    ],
  },
];

const CIRCLE_ANGLES = [0, 120, 240] as const;

const toRadians = (degrees: number): number => (Math.PI / 180) * degrees;

const getCirclePosition = (angleDeg: number, distance: number) => {
  const angleRad = toRadians(angleDeg);

  return {
    x: Math.cos(angleRad) * distance,
    y: Math.sin(angleRad) * distance,
  };
};

const labelColumnVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 3,
    transition: {
      duration: 0.2,
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.06,
      staggerDirection: 1,
    },
  },
};

const statLineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 4,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const useIsHoverCapable = (): boolean => {
  const [isHoverCapable, setIsHoverCapable] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      setIsHoverCapable(true);
      return;
    }

    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => setIsHoverCapable(Boolean(mql.matches));
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
      mqlLegacy.addListener(update);
      cleanup = () => mqlLegacy.removeListener?.(update);
    }

    return cleanup;
  }, []);

  return isHoverCapable;
};

export const ServicesMagicSection: FC<ServicesMagicSectionProps> = ({
  circleRadius = 30,
  farDistance = 38,
  closeDistance = 27,
  animationDurationMs = 1000,
  angleOffsetDeg = 90,
}) => {
  const [isActive, setIsActive] = useState(false);
  const isHoverCapable = useIsHoverCapable();
  const innerRef = useRef<HTMLDivElement | null>(null);

  const handleActivate = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleDeactivate = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isHoverCapable || !isActive) return;

    const handleDocumentPointerDown = (event: PointerEvent) => {
      const inner = innerRef.current;
      if (!inner) return;

      if (!inner.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("pointerdown", handleDocumentPointerDown, true);
    return () => {
      document.removeEventListener(
        "pointerdown",
        handleDocumentPointerDown,
        true,
      );
    };
  }, [isActive, isHoverCapable]);

  const handleKeyDown = useCallback((event: KeyboardEvent<SVGGElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsActive(false);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsActive((prev) => !prev);
    }
  }, []);

  const currentDistance = isActive ? closeDistance : farDistance;

  const halfSize = farDistance + circleRadius + 10;
  const viewBox = `${-halfSize} ${-halfSize} ${halfSize * 2} ${halfSize * 2}`;

  const hintText = isHoverCapable
    ? SERVICES_MAGIC_SUBTITLE_HOVER
    : SERVICES_MAGIC_SUBTITLE_TAP;

  return (
    <section
      className={classNames("services-magic", {
        "services-magic--touch": !isHoverCapable,
      })}
      aria-labelledby="services-magic-title"
    >
      <Container>
        <header className="services-magic__header" id="services-magic-title">
          <Text variant="h3" textTransform="uppercase" align="center">
            {SERVICES_MAGIC_TITLE}
          </Text>
        </header>

        <section className="services-magic__content">
          <div className="services-magic__inner" ref={innerRef}>
            <svg
              className="services-magic__svg"
              viewBox={viewBox}
              role="group"
              aria-label="Интерактивная диаграмма: магия и немного чисел"
            >
              {CIRCLE_ANGLES.map((baseAngle, index) => {
                const angle = baseAngle + angleOffsetDeg;
                const { x, y } = getCirclePosition(angle, currentDistance);

                const item = MAGIC_ITEMS[index];
                if (!item) return null;

                const totalLines = 1 + item.stats.length;
                const firstLineY = -((totalLines - 1) / 2) * TEXT_LINE_HEIGHT;

                return (
                  <motion.g
                    key={baseAngle}
                    initial={false}
                    animate={{ x, y }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 20,
                      duration: animationDurationMs / 1000,
                    }}
                    className="services-magic__item"
                  >
                    <circle
                      r={circleRadius}
                      className={classNames("services-magic__circle", {
                        "services-magic__circle--blue": index === 0,
                        "services-magic__circle--pink": index === 1,
                        "services-magic__circle--yellow": index === 2,
                      })}
                    />

                    <text
                      x={0}
                      y={0}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={classNames(
                        "services-magic__title",
                        "services-magic__title--single",
                        {
                          "services-magic__title--single-hidden": isActive,
                        },
                      )}
                    >
                      {item.title}
                    </text>

                    <motion.g
                      className="services-magic__label-column"
                      variants={labelColumnVariants}
                      initial="hidden"
                      animate={isActive ? "visible" : "hidden"}
                    >
                      <motion.text
                        variants={statLineVariants}
                        x={0}
                        y={firstLineY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="services-magic__title services-magic__title--with-stats"
                      >
                        {item.title}
                      </motion.text>

                      {item.stats.map((stat, statIndex) => (
                        <motion.text
                          key={stat}
                          variants={statLineVariants}
                          x={0}
                          y={firstLineY + TEXT_LINE_HEIGHT * (statIndex + 1)}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="services-magic__stat"
                        >
                          {stat}
                        </motion.text>
                      ))}
                    </motion.g>
                  </motion.g>
                );
              })}

              <g
                className={
                  "services-magic__center" +
                  (isActive ? " services-magic__center--active" : "")
                }
                onMouseEnter={isHoverCapable ? handleActivate : undefined}
                onMouseLeave={isHoverCapable ? handleDeactivate : undefined}
                onFocus={isHoverCapable ? handleActivate : undefined}
                onBlur={isHoverCapable ? handleDeactivate : undefined}
                onClick={!isHoverCapable ? handleToggle : undefined}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-label={
                  isActive
                    ? "Свернуть пересечение окружностей"
                    : "Активировать пересечение окружностей"
                }
              >
                <circle
                  r={2}
                  className={classNames("services-magic__center-dot", {
                    "services-magic__center-dot--active": isActive,
                  })}
                />

                <circle r={14} className="services-magic__center-hit-area" />
              </g>
            </svg>

            <div
              className={classNames("services-magic__hint", {
                "services-magic__hint--hidden": isActive,
              })}
            >
              <div className="services-magic__hint-bubble">
                <span className="services-magic__hint-text">{hintText}</span>
              </div>
              <div className="services-magic__hint-arrow" />
            </div>
          </div>

          {!isHoverCapable && isActive && (
            <div className="services-magic__touch-help" aria-live="polite">
              <span className="services-magic__touch-help-text">
                Нажмите ещё раз на точку или вне блока, чтобы свернуть
              </span>
            </div>
          )}
        </section>
      </Container>
    </section>
  );
};
