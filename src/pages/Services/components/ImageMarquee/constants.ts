import type { ViewerImage } from "@shared/ui/ImageViewer/ImageViewer";

export interface MarqueeImage extends ViewerImage {
  id: string;
  previewSizes: string;
}

const PREVIEW_SIZES =
  "(max-width: 420px) 200px, (max-width: 520px) 220px, (max-width: 720px) 260px, (max-width: 1024px) 300px, 370px";

type SizeKey = 360 | 720 | 1600;

const modules = import.meta.glob("../../../../assets/backgrounds/*-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const byId: Record<string, Partial<Record<SizeKey, string>>> = {};

Object.entries(modules).forEach(([path, url]) => {
  const filename = path.split("/").pop();
  if (!filename) return;

  const match = /^(\d+)-(\d+)\.webp$/i.exec(filename);
  if (!match) return;

  const id = match[1];
  const size = Number(match[2]) as SizeKey;

  if (size !== 360 && size !== 720 && size !== 1600) return;

  byId[id] ??= {};
  byId[id][size] = url;
});

const ids = Object.keys(byId)
  .map((value) => Number(value))
  .filter((value) => Number.isFinite(value))
  .sort((a, b) => a - b);

export const MARQUEE_IMAGES: MarqueeImage[] = ids.map((num) => {
  const id = String(num);
  const sizesMap = byId[id];

  const src360 = sizesMap?.[360];
  const src720 = sizesMap?.[720];
  const src1600 = sizesMap?.[1600];

  const src = src720 ?? src360 ?? src1600 ?? "";

  const srcSet = [
    src360 ? `${src360} 360w` : null,
    src720 ? `${src720} 720w` : null,
    src1600 ? `${src1600} 1600w` : null,
  ]
    .filter(Boolean)
    .join(", ");

  return {
    id,
    alt: `Свадьба ${num}`,
    src,
    srcSet: srcSet || undefined,
    sizes: "100vw", // для ImageViewer (там это максимально логично)
    previewSizes: PREVIEW_SIZES, // для превью в ленте
  };
});
