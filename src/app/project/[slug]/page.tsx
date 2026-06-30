import { notFound } from "next/navigation";
import { getPosts, formatProjectRange } from "@/utils/utils";
import {
  Meta,
  Schema,
  Button,
  Column,
  Flex,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Line,
  RevealFx,
  Badge,
  Tag,
} from "@once-ui-system/core";
import { baseURL, about, person, project } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/project/Projects";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "project", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "project", "projects"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image:
      post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `/project/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let allPostsFromFolder = getPosts(["src", "app", "project", "projects"]);

  let post = allPostsFromFolder.find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`/project/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image ||
          `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* SECTION HEADER: Judul & Navigasi Atas */}
      <Column
        fillWidth
        gap="16"
        horizontal="center"
        align="center"
        marginTop="24"
      >
        {post.metadata.type && (
          <RevealFx
            speed={0.5}
            trigger
            style={{ display: "inline-flex", width: "auto" }}
          >
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
            >
              <Row paddingY="2" gap="8" vertical="center">
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "var(--brand-solid-strong)",
                  }}
                />
                <strong style={{ textTransform: "capitalize" }}>
                  {post.metadata.type} Project
                </strong>
              </Row>
            </Badge>
          </RevealFx>
        )}

        <Text variant="body-default-xs" onBackground="neutral-weak">
          {formatProjectRange(post.metadata.startDate, post.metadata.endDate)}
        </Text>

        <Heading variant="display-strong-m" style={{ textAlign: "center" }}>
          {post.metadata.title}
        </Heading>
      </Column>

      {/* TECH STACK */}
      {post.metadata.tags && post.metadata.tags.length > 0 && (
        <Row wrap gap="8" vertical="center" horizontal="center">
          {post.metadata.tags.map((tag: string, index: number) => {
            let cleanedTagName = tag.toLowerCase().replace(/[\s.-]/g, "");
            if (cleanedTagName === "tailwindcss") cleanedTagName = "tailwind";
            return (
              <Tag
                key={`${tag}-${index}`}
                size="s"
                variant="neutral"
                prefixIcon={cleanedTagName}
              >
                {tag}
              </Tag>
            );
          })}
        </Row>
      )}

      {/* BANNER UTAMA */}
      {post.metadata.images.length > 0 && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.images[0]}
        />
      )}

      {/* ISI ARTIKEL MDX */}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>

      <ScrollToHash />
    </Column>
  );
}
