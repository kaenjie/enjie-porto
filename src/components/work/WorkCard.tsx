"use client";

import { Card, Column, Media, Row, Avatar, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

interface WorkCardProps {
  work: any;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function WorkCard({
  work,
  thumbnail,
  direction,
}: WorkCardProps) {
  return (
    <Card
      fillWidth
      key={work.slug}
      href={`/work/${work.slug}`}
      transition="micro-medium"
      direction={direction}
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
      gap={direction === "column" ? undefined : "24"}
      s={{ direction: "column" }}
    >
      {work.metadata.images && work.metadata.images[0] && thumbnail && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={work.metadata.images[0]}
          alt={"Thumbnail of " + work.metadata.title}
          aspectRatio="16 / 9"
        />
      )}
      <Row fillWidth>
        <Column
          maxWidth={28}
          paddingY="24"
          paddingX="l"
          gap="20"
          vertical="center"
        >
          <Row gap="24" vertical="center">
            <Row vertical="center" gap="16">
              <Avatar src={person.avatar} size="s" />
              <Text variant="label-default-s">{person.name}</Text>
            </Row>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {formatDate(work.metadata.publishedAt, false)}
            </Text>
          </Row>
          <Text variant="heading-strong-l" wrap="balance">
            {work.metadata.title}
          </Text>
          {work.metadata.summary && (
            <Text variant="body-default-m" onBackground="neutral-weak">
              {work.metadata.summary}
            </Text>
          )}
        </Column>
      </Row>
    </Card>
  );
}
