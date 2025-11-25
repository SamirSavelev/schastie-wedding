import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
  EffectFade,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './GallerySlider.scss';

type GallerySliderProps = {
  images: string[];
  title?: string;
  autoplayDelay?: number;
  effect?: 'fade' | 'slide';
};

export const GallerySlider = memo(function GallerySlider({
  images,
  title,
  autoplayDelay = 3500,
  effect = 'fade',
}: GallerySliderProps) {
  return (
    <section className="gallery-slider" aria-label={title || 'Галерея'}>
      {title ? <h3 className="gallery-slider__title">{title}</h3> : null}
      <div className="gallery-slider__container">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            Keyboard,
            Mousewheel,
            EffectFade,
          ]}
          slidesPerView={1}
          loop
          speed={800}
          effect={effect}
          fadeEffect={effect === 'fade' ? { crossFade: true } : undefined}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          pagination={{ clickable: true }}
          navigation
          preloadImages={false}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <figure className="gallery-slide">
                <img
                  src={src}
                  alt={`Слайд ${idx + 1} из ${images.length}`}
                  className="gallery-slide__img"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});
