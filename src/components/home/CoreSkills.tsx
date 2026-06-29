"use client";

import { Card, Column, Row, Text, Grid } from "@once-ui-system/core";
import styles from "./CoreSkills.module.scss";

interface Skill {
  title: string;
  description: string;
  icon: string;
  color: "frontend" | "mobile" | "design" | "backend";
  tags: string[];
}

const SKILLS: Skill[] = [
  {
    title: "Frontend Web Development",
    description:
      "Building responsive and maintainable web interfaces with modern frameworks and clean code practices.",
    icon: "code",
    color: "frontend",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications with focus on performance and user experience.",
    icon: "smartphone",
    color: "mobile",
    tags: ["Flutter", "State Management", "SQLite", "Responsive Design"],
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-centered interfaces through structured flows, prototypes, and interactive implementations.",
    icon: "palette",
    color: "design",
    tags: ["Figma", "Wireframing", "Prototyping", "User Research"],
  },
  {
    title: "Backend Development",
    description:
      "Building robust server-side applications and APIs that power modern web and mobile applications.",
    icon: "server",
    color: "backend",
    tags: ["Laravel", "Express.js", "REST APIs", "Database Design"],
  },
];

export function CoreSkills() {
  return (
    <Column fillWidth gap="32">
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
        gap="20"
      >
        {SKILLS.map((skill, index) => (
          <Card
            key={index}
            fillWidth
            padding="24"
            radius="xl"
            background="neutral-alpha-weak"
            border="neutral-alpha-weak"
            className={styles.skillCard}
            style={
              { "--skill-color": skill.color } as React.CSSProperties & {
                "--skill-color": string;
              }
            }
          >
            {/* Icon + Title */}
            <Row gap="12" vertical="center" marginBottom="16">
              <div className={`${styles.iconContainer} ${styles[skill.color]}`}>
                <span className={styles.icon}>{getIcon(skill.icon)}</span>
              </div>
              <Text variant="heading-strong-m">{skill.title}</Text>
            </Row>

            {/* Description */}
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              marginBottom="16"
            >
              {skill.description}
            </Text>

            {/* Tags */}
            <Row gap="8" wrap>
              {skill.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`${styles.tag} ${styles[skill.color]}`}
                >
                  {tag}
                </span>
              ))}
            </Row>
          </Card>
        ))}
      </Grid>
    </Column>
  );
}

// Icon mapping
function getIcon(iconName: string): React.ReactNode {
  const icons: Record<string, string> = {
    code: "💻",
    smartphone: "📱",
    palette: "🎨",
    server: "⚙️",
  };
  return icons[iconName] || "✨";
}
