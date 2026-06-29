import {
  About,
  Blog,
  Certifications,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mutiara Angelita",
  lastName: "Muhaeni",
  name: `Enjie`,
  role: "UI/UX Design, Frontend, and Mobile Development",
  avatar: "/images/profil.jpg",
  email: "angelmuhaeni@gmail.com",
  location: "Asia/Jakarta",
  languages: ["Indonesia"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kaenjie",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mutiangel/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/mutiangell_",
    essential: false,
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@mutiangell_",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designing intuitive experiences and building them into reality</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Selected work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system", //TODO ini nanti ganti ke project utama
  },
  subline: (
    <>
      I'm Angel, an Information Systems undergraduate with a strong interest in{" "}
      <Text as="span" size="xl" weight="strong">
        UI UX Design and Software Development
      </Text>
      . I build user centered web and mobile applications that balance
      thoughtful design and clean implementation.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, UI UX focused Software Engineer`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Angel is an active Information Systems undergraduate with a strong focus
        on UI UX driven software engineering. She enjoys bridging design and
        code by translating user needs into intuitive interfaces and functional
        digital products.
        <br />
        <br />
        Her work centers on building user friendly web and mobile applications
        through well structured user flows, clean visual design, and thoughtful
        frontend implementation.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "PT. Greatsoft Solusi Indonesia",
        timeframe: "2024",
        role: "Junior Software Engineer Intern",
        achievements: [
          <>
            Contributed to the development of a PTPN mobile application using
            Flutter, implementing features with SQLite for local data handling
            and offline support.
          </>,
          <>
            Built a Material Tracking System mobile application covering
            Purchase Order, Delivery Order, approval workflows, and tracking
            processes.
          </>,
          <>
            Designed multiple UI UX projects across mobile, tablet, and web
            platforms using Figma, focusing on clear user flows and usability.
          </>,
          <>
            Supported development workflows using Git, GitHub, and Odoo system
            management.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ], //TODO ganti fotoo
      },
      {
        company: "PT. Greatsoft Solusi Indonesia",
        timeframe: "2025",
        role: "Junior Software Engineer (Contract)",
        achievements: [
          <>
            Continued supporting internal application development with a UI UX
            focused approach to improve usability and interface clarity.
          </>,
          <>
            Designed and refined wireframes and interactive prototypes for
            internal systems using Figma.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ], //TODO ganti fotoo
      },
    ],
  },

  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Universitas Negeri Surabaya",
        description: <>Information Systems undergraduate student.</>,
      },
      {
        name: "Futuremakers Youth Employability Program Scholarship",
        description: (
          <>
            Participated in the Web Programming track, gaining hands on
            experience in modern web development and backend implementation.
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "UI UX Design",
        description: (
          <>
            Designing user centered interfaces through structured user flows,
            wireframes, and interactive prototypes.
          </>
        ),
        tags: [{ name: "Figma", icon: "figma" }],
      },
      {
        title: "Frontend Web Development",
        description: (
          <>
            Building responsive and maintainable web interfaces with strong
            attention to UI consistency and design implementation.
          </>
        ),
        tags: [
          { name: "React.js", icon: "react" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
        ],
      },
      {
        title: "Mobile & Backend Development",
        description: (
          <>
            Supporting mobile applications and backend services to deliver
            complete product flows.
          </>
        ),
        tags: [
          { name: "Flutter", icon: "flutter" },
          { name: "SQLite", icon: "database" },
          { name: "Laravel", icon: "laravel" },
          { name: "Express.js", icon: "express" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const certifications: Certifications = {
  path: "/certifications",
  label: "Certifications",
  title: `Licenses & Certifications – ${person.name}`,
  description: `Licenses, awards, and achievements by ${person.name}`,
  certifications: [
    {
      category: "keahlian" as const,
      title: "Sertifikasi IT/TI - Pentingnya bagi Programmer",
      issuer: "Medium",
      date: "2024",
      description: (
        <>
          Artikel mendalam tentang mengapa sertifikasi IT/TI penting bagi seorang programmer dalam mengembangkan karir dan meningkatkan kredibilitas profesional. Membahas berbagai sertifikasi industri dan dampaknya terhadap pertumbuhan skill.
        </>
      ),
      image: "/images/certifications/medium-article.jpg",
      imageAlt: "Medium Article - Sertifikasi IT/TI",
      link: "https://medium.com/@enjelituy/sertifikasi-it-ti-apa-pentingnya-bagi-seorang-programmer-da06ff6d0b81",
    },
    {
      category: "keahlian" as const,
      title: "Frontend Web Development",
      issuer: "Self-Certified",
      date: "2024",
      description: (
        <>
          Expertise dalam membangun responsive dan maintainable web interfaces dengan React.js, Next.js, TypeScript, dan Tailwind CSS. Fokus pada UI consistency dan clean code implementation.
        </>
      ),
      image: "/images/certifications/frontend-cert.jpg",
      imageAlt: "Frontend Development Skills",
      link: "#",
    },
    {
      category: "keahlian" as const,
      title: "Mobile App Development",
      issuer: "Self-Certified",
      date: "2024",
      description: (
        <>
          Expertise dalam mobile application development menggunakan Flutter framework, termasuk state management, UI implementation, dan local database integration dengan SQLite.
        </>
      ),
      image: "/images/certifications/mobile-cert.jpg",
      imageAlt: "Mobile Development Skills",
      link: "#",
    },
    {
      category: "keahlian" as const,
      title: "UI/UX Design",
      issuer: "Self-Certified",
      date: "2024",
      description: (
        <>
          Expertise dalam user-centered design melalui structured user flows, wireframing, prototyping, dan interactive design implementation di berbagai platform.
        </>
      ),
      image: "/images/certifications/design-cert.jpg",
      imageAlt: "UI/UX Design Skills",
      link: "#",
    },
  ],
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, certifications, work, gallery };
