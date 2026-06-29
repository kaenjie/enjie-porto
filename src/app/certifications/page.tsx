import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, certifications } from "@/resources";
import { Certifications as CertificationsComponent } from "@/components/certifications/Certifications";

export async function generateMetadata() {
  return Meta.generate({
    title: certifications.title,
    description: certifications.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(certifications.title)}`,
    path: certifications.path,
  });
}

export default function CertificationsPage() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={certifications.path}
        title={certifications.title}
        description={certifications.description}
        image={`/api/og/generate?title=${encodeURIComponent(certifications.title)}`}
        author={{
          name: person.name,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {certifications.title}
      </Heading>
      <CertificationsComponent config={certifications} />
    </Column>
  );
}
