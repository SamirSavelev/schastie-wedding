import { type FC, type KeyboardEvent, useCallback, useState } from 'react';
import classNames from 'classnames';
import { motion, type Variants } from 'framer-motion';
import './ServicesMagicSection.scss';
import {
  SERVICES_MAGIC_ORGANIZER_TITLE,
  SERVICES_MAGIC_SPECIALISTS_TITLE,
  SERVICES_MAGIC_COUPLE_TITLE,
  SERVICES_MAGIC_ORGANIZER_STATS,
  SERVICES_MAGIC_SPECIALISTS_STATS,
  SERVICES_MAGIC_COUPLE_STATS,
  SERVICES_MAGIC_TITLE,
} from '@shared/constants';
import { Container, Text } from '@shared/ui';

export const SERVICES_MAGIC_SUBTITLE =
  '* — наведите на точку, чтобы создать идеальную свадьбу';
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

const MAGIC_ITEMS: MagicItem[] = [
  {
    title: SERVICES_MAGIC_ORGANIZER_TITLE,
    stats: SERVICES_MAGIC_ORGANIZER_STATS,
  },
  {
    title: SERVICES_MAGIC_SPECIALISTS_TITLE,
    stats: SERVICES_MAGIC_SPECIALISTS_STATS,
  },
  {
    title: SERVICES_MAGIC_COUPLE_TITLE,
    stats: SERVICES_MAGIC_COUPLE_STATS,
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

export const ServicesMagicSection: FC<ServicesMagicSectionProps> = ({
  circleRadius = 30,
  farDistance = 38,
  closeDistance = 27,
  animationDurationMs = 1000,
  angleOffsetDeg = 90,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleActivate = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleDeactivate = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent<SVGGElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsActive((prev) => !prev);
    }
  }, []);

  const currentDistance = isActive ? closeDistance : farDistance;

  const halfSize = farDistance + circleRadius + 10;
  const viewBox = `${-halfSize} ${-halfSize} ${halfSize * 2} ${halfSize * 2}`;

  return (
    <section className="services-magic" aria-labelledby="services-magic-title">
      <Container>
        <header className="services-magic__header">
          <Text variant="h3" textTransform="uppercase" align="center">
            {SERVICES_MAGIC_TITLE}
          </Text>
        </header>
        <section className="services-magic__content">
          <div className="services-magic__inner">
            <svg
              className="services-magic__svg"
              viewBox={viewBox}
              aria-hidden="true"
            >
              {CIRCLE_ANGLES.map((baseAngle, index) => {
                const angle = baseAngle + angleOffsetDeg;
                const { x, y } = getCirclePosition(angle, currentDistance);

                const item = MAGIC_ITEMS[index];
                if (!item) {
                  return null;
                }

                const totalLines = 1 + item.stats.length;
                const firstLineY = -((totalLines - 1) / 2) * TEXT_LINE_HEIGHT;

                return (
                  <motion.g
                    key={baseAngle}
                    initial={false}
                    animate={{ x, y }}
                    transition={{
                      type: 'spring',
                      stiffness: 180,
                      damping: 20,
                      duration: animationDurationMs / 1000,
                    }}
                    className="services-magic__item"
                  >
                    <circle
                      r={circleRadius}
                      className={classNames('services-magic__circle', {
                        'services-magic__circle--blue': index === 0,
                        'services-magic__circle--pink': index === 1,
                        'services-magic__circle--yellow': index === 2,
                      })}
                    />

                    <text
                      x={0}
                      y={0}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={classNames(
                        'services-magic__title',
                        'services-magic__title--single',
                        {
                          'services-magic__title--single-hidden': isActive,
                        }
                      )}
                    >
                      {item.title}
                    </text>

                    <motion.g
                      className="services-magic__label-column"
                      variants={labelColumnVariants}
                      initial="hidden"
                      animate={isActive ? 'visible' : 'hidden'}
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
                  'services-magic__center' +
                  (isActive ? ' services-magic__center--active' : '')
                }
                onMouseEnter={handleActivate}
                onMouseLeave={handleDeactivate}
                onFocus={handleActivate}
                onBlur={handleDeactivate}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-label="Активировать пересечение окружностей"
              >
                <circle r={2} className="services-magic__center-dot" />
                <circle r={12} className="services-magic__center-hit-area" />
              </g>
            </svg>
          </div>
        </section>
      </Container>
    </section>
  );
};
