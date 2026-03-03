import fg from "fast-glob";
import path from "node:path";
import { promises as fs } from "node:fs";
import sharp from "sharp";

const WIDTHS = [360, 720, 1600];
const QUALITY = 80;

const tasks = [
  {
    label: "reviews",
    inputGlob: "src/assets/reviews/home/*.{jpg,jpeg,png,webp}",
    outputDir: "src/assets/reviews/home",
  },
  {
    label: "portfolio-home",
    inputGlob: "src/assets/portfolio/home/*-1600.webp",
    outputDir: "src/assets/portfolio/home",
    // для портфолио мы режем из 1600
    onlyFrom1600: true,
  },
];

const ensureDir = async (dir) => fs.mkdir(dir, { recursive: true });

const fileExists = async (p) => {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
};

const main = async () => {
  for (const task of tasks) {
    const files = await fg(task.inputGlob);
    await ensureDir(task.outputDir);

    for (const inputPath of files) {
      const baseName = path.basename(inputPath);

      // reviews: "1.jpeg" -> "1"
      // portfolio: "1-1600.webp" -> "1"
      const stem = task.onlyFrom1600
        ? baseName.replace(/-1600\.webp$/i, "")
        : baseName.replace(/\.(jpg|jpeg|png|webp)$/i, "");

      for (const width of WIDTHS) {
        const outPath = path.join(task.outputDir, `${stem}-${width}.webp`);
        if (await fileExists(outPath)) continue;

        const pipeline = sharp(inputPath)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: QUALITY });

        await pipeline.toFile(outPath);
      }
    }

    console.log(`✅ done: ${task.label}`);
  }
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
