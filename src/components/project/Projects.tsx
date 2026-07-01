import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number] | [number, number];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "project", "projects"]) || [];

  if (!Array.isArray(allProjects) || allProjects.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "gray" }}>No projects found.</p>
    );
  }

  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter(
      (post) => post?.slug && !exclude.includes(post.slug),
    );
  }

  const sortedProjects = [...allProjects].sort((a, b) => {
    // 1. Ambil endDate dulu, kalau kosong/Present beri nilai terjauh di masa depan agar naik ke atas
    const dateEndB = b?.metadata?.endDate
      ? new Date(b.metadata.endDate).getTime()
      : Infinity;
    const dateEndA = a?.metadata?.endDate
      ? new Date(a.metadata.endDate).getTime()
      : Infinity;

    // Jika endDate berbeda, urutkan berdasarkan endDate terbaru
    if (dateEndB !== dateEndA) {
      return dateEndB - dateEndA;
    }

    // 2. Jika endDate sama (atau sama-sama Present), urutkan berdasarkan startDate terbaru
    const dateStartB = b?.metadata?.startDate
      ? new Date(b.metadata.startDate).getTime()
      : 0;
    const dateStartA = a?.metadata?.startDate
      ? new Date(a.metadata.startDate).getTime()
      : 0;

    return dateStartB - dateStartA;
  });

  const displayedProjects = range
    ? sortedProjects.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedProjects.length,
      )
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/project/${post.slug}`}
          images={post.metadata?.images}
          title={post.metadata?.title}
          description={post.metadata?.summary}
          content={post.content}
          link={post.metadata?.link || ""}
        />
      ))}
    </Column>
  );
}
