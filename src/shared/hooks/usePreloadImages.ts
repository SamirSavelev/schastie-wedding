import { imageAssets } from "@assets/index";
import { useEffect } from "react";

export const usePreloadImages = () => {
  useEffect(() => {
    const preloadImages = () => {
      imageAssets.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          preloadImages();
          observer.unobserve(entry.target);
        }
      });
    });

    const images = document.querySelectorAll("img[data-src]");
    images.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);
};
