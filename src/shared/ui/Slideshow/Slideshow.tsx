import { useEffect, useState } from 'react';
import './Slideshow.scss';

interface SlideshowProps {
  images: string[];
  changeInterval: number;
}

export const Slideshow = ({ images, changeInterval }: SlideshowProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) {
      return;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, changeInterval);

    return () => window.clearInterval(timerId);
  }, [images, changeInterval]);

  return (
    <div className="slideshow" aria-hidden="true">
      {images.map((src, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={`${src}-${index}`}
            className={`slideshow__slide ${
              isActive ? 'slideshow__slide--active' : ''
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        );
      })}
    </div>
  );
};
