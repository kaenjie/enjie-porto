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
    const dateA = a?.metadata?.publishedAt
      ? new Date(a.metadata.publishedAt).getTime()
      : 0;
    const dateB = b?.metadata?.publishedAt
      ? new Date(b.metadata.publishedAt).getTime()
      : 0;
    return dateB - dateA;
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
