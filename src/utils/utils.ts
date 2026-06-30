import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tags: string[];
  link?: string;
  type?: string;
  startDate?: string;
  endDate?: string;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tags: data.tags || [],
    link: data.link || "",
    type: data.type || "",
    startDate: data.startDate || "",
    endDate: data.endDate || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}

export function formatProjectRange(
  startDate?: string,
  endDate?: string,
): string {
  if (!startDate) return "";

  const formatMonthYear = (dateStr: string) => {
    const [year, month] = dateStr.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const startFormatted = formatMonthYear(startDate);

  if (!endDate) {
    return `${startFormatted} - Present`;
  }

  const endFormatted = formatMonthYear(endDate);

  const startParts = startFormatted.split(" ");
  const endParts = endFormatted.split(" ");

  if (startParts[1] === endParts[1]) {
    return `${startParts[0]} - ${endParts[0]} ${endParts[1]}`;
  }

  return `${startFormatted} - ${endFormatted}`;
}
