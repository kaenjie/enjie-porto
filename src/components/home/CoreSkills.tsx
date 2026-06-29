"use client";

import { Card, Column, Row, Text, Grid, Icon, Tag } from "@once-ui-system/core";
import { about } from "@/resources/content";
import { IconName } from "@/resources/icons";
import styles from "./CoreSkills.module.scss";

export function CoreSkills() {
  const skillsData = about.technical.skills;

  const mainIcons: IconName[] = ["react", "express", "postgresql", "vscode"];

  return (
    <Column fillWidth gap="40" paddingY="40">
      {/* Header */}
      <Column fillWidth gap="12" align="center" horizontal="center">
        <Text variant="heading-strong-xl">What I Do</Text>
        <Text
          variant="body-default-m"
          onBackground="neutral-weak"
          align="center"
        >
          I specialize in creating beautiful, functional digital experiences
          across web and mobile platforms.
        </Text>
      </Column>

      {/* Skills Grid */}
      <Grid
        columns="2"
        s={{ columns: "1" }}
        m={{ columns: "2" }}
        fillWidth
        gap="24"
      >
        {skillsData.map((skill, index) => (
          <Card
            key={index}
            fillWidth
            padding="24"
            radius="xl"
            background="neutral-alpha-weak"
            border="neutral-alpha-weak"
            className={styles.skillCard}
          >
            {/* Icon + Title */}
            <Row gap="16" vertical="center" marginBottom="16">
              <Row
                padding="8"
                radius="m"
                background="neutral-alpha-weak"
                align="center"
                vertical="center"
              >
                <Icon
                  name={mainIcons[index] || "code"}
                  size="m"
                  style={{ color: `var(--brand-primary)` }}
                />
              </Row>
              <Text variant="heading-strong-m">{skill.title}</Text>
            </Row>

            {/* Description */}
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              marginBottom="20"
            >
              {skill.description}
            </Text>

            {/* Tags */}
            <Row gap="8" wrap>
              {skill.tags?.map((tag, tagIndex) => (
                <Tag key={tagIndex} variant="neutral" size="m">
                  {tag.name}
                </Tag>
              ))}
            </Row>
          </Card>
        ))}
      </Grid>
    </Column>
  );
}
