import { useCallback, useMemo, useState } from "react";

import { ImageViewer, type ViewerImage } from "@shared/ui/ImageViewer";

import "./ImageGridViewer.scss";

type LegacyItem = {
  id: string;
  src: string;
  alt?: string;
};

type ResponsiveItem = {
  id: string;
  alt?: string;
  preview: ViewerImage;
  full: ViewerImage;
};

export type ImageGridViewerItem = LegacyItem | ResponsiveItem;

interface ImageGridViewerProps {
  images: ImageGridViewerItem[];
}

const isResponsiveItem = (item: ImageGridViewerItem): item is ResponsiveItem =>
  "preview" in item;

export const ImageGridViewer = ({ images }: ImageGridViewerProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasImages = images.length > 0;

  const viewerImages: ViewerImage[] = useMemo(() => {
    return images.map((item) => {
      if (isResponsiveItem(item)) return item.full;
      return { src: item.src, alt: item.alt, sizes: "100vw" };
    });
  }, [images]);

  const gridImages: ViewerImage[] = useMemo(() => {
    return images.map((item) => {
      if (isResponsiveItem(item)) return item.preview;
      return { src: item.src, alt: item.alt };
    });
  }, [images]);

  const handleOpen = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  if (!hasImages) return null;

  return (
    <>
      <section className="image-grid-viewer">
        <div className="image-grid-viewer__grid">
          {images.map((item, index) => {
            const preview = gridImages[index];
            const ariaLabel =
              (isResponsiveItem(item) ? item.alt : item.alt) ??
              preview.alt ??
              "Просмотр фотографий в полноэкранном режиме";

            return (
              <button
                key={item.id}
                type="button"
                className="image-grid-viewer__item"
                onClick={() => handleOpen(index)}
                aria-label={ariaLabel}
              >
                <div className="image-grid-viewer__image-wrapper">
                  <img
                    src={preview.src}
                    srcSet={preview.srcSet}
                    sizes={preview.sizes}
                    alt={preview.alt ?? ""}
                    className="image-grid-viewer__image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <ImageViewer
        isOpen={activeIndex !== null}
        images={viewerImages}
        index={activeIndex ?? 0}
        onIndexChange={(next) => setActiveIndex(next)}
        onClose={handleClose}
        ariaLabel="Просмотр фотографий в полноэкранном режиме"
      />
    </>
  );
};
