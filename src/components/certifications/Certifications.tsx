"use client";

import { useState } from "react";
import { Card, Column, Row, Text, Grid, Button } from "@once-ui-system/core";
import { Certifications as CertificationsConfig } from "@/types";
import styles from "./Certifications.module.scss";

interface CertificationsProps {
  config: CertificationsConfig;
}

type CategoryType = "keahlian" | "penghargaan" | "volunteer";

const CATEGORY_LABELS: Record<CategoryType, string> = {
  keahlian: "Keahlian",
  penghargaan: "Penghargaan",
  volunteer: "Volunteer",
};

const CATEGORY_ICONS: Record<CategoryType, string> = {
  keahlian: "rocket",
  penghargaan: "star",
  volunteer: "heart",
};

export function Certifications({ config }: CertificationsProps) {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("keahlian");

  // Group certifications by category
  const groupedCerts = {
    keahlian: config.certifications.filter(
      (cert) => cert.category === "keahlian",
    ),
    penghargaan: config.certifications.filter(
      (cert) => cert.category === "penghargaan",
    ),
    volunteer: config.certifications.filter(
      (cert) => cert.category === "volunteer",
    ),
  };

  const activeCerts = groupedCerts[activeCategory];

  return (
    <Column fillWidth gap="32">
      {/* Category Tabs */}
      <Row
        gap="12"
        wrap
        horizontal="center"
        padding="24"
        radius="xl"
        background="neutral-alpha-weak"
        className={styles.tabsContainer}
      >
        {(Object.keys(CATEGORY_LABELS) as CategoryType[]).map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "primary" : "secondary"}
            size="l"
            onClick={() => setActiveCategory(category)}
            prefixIcon={CATEGORY_ICONS[category]}
          >
            {CATEGORY_LABELS[category]} ({groupedCerts[category].length})
          </Button>
        ))}
      </Row>

      {/* Certifications Grid - Similar to Projects grid */}
      {activeCerts.length > 0 ? (
        <Grid
          columns="3"
          s={{ columns: "1" }}
          m={{ columns: "2" }}
          fillWidth
          gap="24"
        >
          {activeCerts.map((cert, index) => (
            <Card
              key={index}
              fillWidth
              padding="0"
              radius="xl"
              border="neutral-alpha-weak"
              background="neutral-alpha-weak"
              overflow="hidden"
              className={styles.certificationCard}
            >
              {/* Certificate Image/Badge */}
              {cert.image && (
                <div className={styles.certificationImageContainer}>
                  <img src={cert.image} alt={cert.imageAlt || cert.title} />
                </div>
              )}

              {/* Certificate Content */}
              <Column
                fillWidth
                gap="16"
                padding="24"
                className={styles.certContent}
              >
                <Column fillWidth gap="8">
                  <Text variant="heading-strong-l" wrap="balance">
                    {cert.title}
                  </Text>
                  <Row gap="12" wrap>
                    <div className={styles.badge}>{cert.issuer}</div>
                    <div className={styles.dateBadge}>{cert.date}</div>
                  </Row>
                </Column>

                {/* Description */}
                <Text
                  variant="body-default-m"
                  onBackground="neutral-weak"
                  className={styles.description}
                >
                  {cert.description}
                </Text>

                {/* Link Button */}
                {cert.link && cert.link !== "#" && (
                  <Button
                    href={cert.link}
                    variant="secondary"
                    size="m"
                    arrowIcon
                    prefixIcon="arrowUpRightFromSquare"
                  >
                    View Certificate
                  </Button>
                )}
              </Column>
            </Card>
          ))}
        </Grid>
      ) : (
        <Card
          fillWidth
          padding="32"
          radius="l"
          background="neutral-alpha-weak"
          border="neutral-alpha-weak"
          align="center"
        >
          <Text variant="body-default-m" onBackground="neutral-weak">
            No certifications in this category yet.
          </Text>
        </Card>
      )}
    </Column>
  );
}
