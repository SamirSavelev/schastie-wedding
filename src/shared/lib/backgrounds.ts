export type BackgroundSize = 360 | 720 | 1600;

export interface ResponsiveImage {
  id: string;
  src: string;
  srcSet?: string;
  sizes?: string;
  alt?: string;
}

const modules = import.meta.glob("../../assets/backgrounds/*-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const byId: Record<string, Partial<Record<BackgroundSize, string>>> = {};

Object.entries(modules).forEach(([path, url]) => {
  const filename = path.split("/").pop();
  if (!filename) return;

  const match = /^(\d+)-(\d+)\.webp$/i.exec(filename);
  if (!match) return;

  const id = match[1];
  const size = Number(match[2]) as BackgroundSize;

  if (size !== 360 && size !== 720 && size !== 1600) return;

  byId[id] ??= {};
  byId[id][size] = url;
});

export const getBackgroundImageById = (
  id: number | string,
  options: { sizes: string; alt?: string },
): ResponsiveImage | null => {
  const key = String(id);
  const sizesMap = byId[key];
  if (!sizesMap) return null;

  const src360 = sizesMap[360];
  const src720 = sizesMap[720];
  const src1600 = sizesMap[1600];

  const src = src720 ?? src360 ?? src1600 ?? "";
  if (!src) return null;

  const srcSet = [
    src360 ? `${src360} 360w` : null,
    src720 ? `${src720} 720w` : null,
    src1600 ? `${src1600} 1600w` : null,
  ]
    .filter(Boolean)
    .join(", ");

  return {
    id: key,
    src,
    srcSet: srcSet || undefined,
    sizes: options.sizes,
    alt: options.alt,
  };
};

export const makeBackgroundImagesByOrder = (
  order: Array<number | string>,
  options: { sizes: string; altPrefix?: string },
): ResponsiveImage[] => {
  const prefix = options.altPrefix ?? "Фон";

  return order
    .map((id) =>
      getBackgroundImageById(id, {
        sizes: options.sizes,
        alt: `${prefix} ${id}`,
      }),
    )
    .filter((value): value is ResponsiveImage => Boolean(value));
};
