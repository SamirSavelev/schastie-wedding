import { Container } from '@shared/ui/Container/Container';
import { Slideshow } from '@shared/ui/Slideshow/Slideshow';
import { TypedLine } from '@shared/ui/TypedLine/TypedLine';
import {
  HOME_HERO_IMAGES,
  HOME_HERO_PHRASES,
  HOME_HERO_TITLE_LINES,
  HOME_HERO_SLIDE_CHANGE_INTERVAL,
} from '@shared/constants';

import { CtaButton, Text } from '@shared/ui';
import './HeroSection.scss';

export const HeroSection = () => (
  <section className="home-hero">
    <Slideshow
      images={HOME_HERO_IMAGES}
      changeInterval={HOME_HERO_SLIDE_CHANGE_INTERVAL}
    />

    <div className="home-hero__overlay" aria-hidden="true" />

    <div className="home-hero__inner">
      <Container>
        <div className="home-hero__content">
          <h1 className="home-hero__title">
            {HOME_HERO_TITLE_LINES.map((line) => (
              <Text
                key={line}
                variant="h3"
                textTransform="uppercase"
                color="white"
              >
                {line}
              </Text>
            ))}
          </h1>

          <div className="home-hero__divider" />

          <TypedLine phrases={HOME_HERO_PHRASES} />

          <div className="home-hero__cta">
            <CtaButton />
          </div>
        </div>
      </Container>
    </div>
  </section>
);
