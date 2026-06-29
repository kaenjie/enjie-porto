import {
  About,
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
  name: `Mutiara Angel`,
  role: "UI/UX Design, Frontend, and Mobile Development",
  avatar: "/images/other/profil.jpg",
  email: "angelmuhaeni@gmail.com",
  location: "Asia/Jakarta",
  languages: ["Indonesia"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let's Connect and Collaborate!</>,
  description: (
    <>
      Open for internship opportunities, freelance projects, or just chatting
      about Frontend Development and UI/UX Design.
    </>
  ),
  buttonText: "Let's Talk",
  link: `mailto:${person.email}`,
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
  headline: (
    <>
      Transforming ideas into responsive, intuitive, and user-centered digital
      products
    </>
  ),
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
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Angel, a developer who designs and a designer who codes. Leveraging my
      dual interest in{" "}
      <Text as="span" size="xl" weight="strong">
        Frontend Development and UI/UX Design
      </Text>
      , I build intuitive web and mobile solutions that solve real-world
      problems through clean implementation.
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
    link: "https://calendar.google.com/calendar",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi! I'm {person.firstName} {person.lastName}, an Information Systems
        undergraduate at State University of Surabaya with a strong interest in
        Frontend Development and UI/UX Design. I enjoy at transforming ideas
        into responsive, intuitive, and user-centered digital products while
        continuously expanding my skills across the software development
        lifecycle.
        <br />
        <br />
        My primary expertise lies in React.js, Next.js, Tailwind CSS, Flutter,
        and Figma, complemented by hands-on experience in backend development
        using Node.js, Express.js, Laravel, PostgreSQL, and REST APIs. She
        thoroughly enjoys collaborating with cross-functional teams to build
        products that are both highly functional and deliver a great user
        experience.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "PT. Greatsoft Solusi Indonesia",
        timeframe: "Dec 2025 - Apr 2026",
        role: "Junior Fullstack Developer",
        achievements: [
          <>
            Supported the development and maintenance of applications and
            systems with an emphasis on user interface, user flow, and
            usability.
          </>,
          <>
            Designed and refined UI UX solutions for internal applications using
            Figma, including user flows, wireframes, and interactive prototypes.
          </>,
          <>
            Translated user and business requirements into structured and
            practical design solutions in collaboration with the team.
          </>,
          <>
            Contributed to the Annual Meeting 2025 organizing committee under
            the Creative and Documentation division, including visual content
            editing and event documentation through photo and video capture
            using cameras and mobile devices.
          </>,
        ],
        images: [
          {
            src: "/images/other/annual-meeting.jpeg",
            alt: "Work image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PT. Greatsoft Solusi Indonesia",
        timeframe: "Jun - Dec 2025",
        role: "Full-Stack Developer Intern",
        achievements: [
          <>
            Contributed to a PTPN mobile application project, implementing
            features that utilized SQLite for local data storage and application
            functionality.
          </>,
          <>
            Developed a Material Tracking System mobile application, handling
            features such as Purchase Order, Delivery Order, Approval workflow,
            and tracking processes.
          </>,
          <>
            Gained hands-on experience in Odoo system management, supporting
            operational and business workflows.
          </>,
          <>
            Designed 5+ UI UX projects across mobile, tablet, and web platforms,
            delivering complete and complex user flows aligned with user and
            business requirements.
          </>,
        ],
        images: [
          {
            src: "/images/other/sertifikat-intern.jpeg",
            alt: "Work image",
            width: 12,
            height: 9,
          },
          {
            src: "/images/other/intern-visit.jpeg",
            alt: "Work image",
            width: 12,
            height: 9,
          },
        ],
      },
    ],
  },

  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "State University of Surabaya",
        description: <>Undergraduate, Information Systems</>,
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
        title: "Frontend Development",
        description: (
          <>
            Crafting responsive, high-performance web and mobile interfaces
            using modern client-side technologies.
          </>
        ),
        tags: [
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "React.js", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Flutter", icon: "flutter" },
        ],
      },
      {
        title: "Backend Development",
        description: (
          <>
            Architecting scalable server-side logic, managing server operations,
            and building robust RESTful APIs.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "Laravel", icon: "laravel" },
        ],
      },
      {
        title: "Database Management",
        description: (
          <>
            Designing efficient data structures, managing relational and
            non-relational database systems securely.
          </>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "SQLite", icon: "database" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Supabase", icon: "supabase" },
        ],
      },
      {
        title: "Tools & Workflow",
        description: (
          <>
            Utilizing modern development tools, version control, and API
            platforms to streamline workflows.
          </>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Postman", icon: "postman" },
          { name: "Swagger", icon: "swagger" },
          { name: "VS Code", icon: "vscode" },
        ],
      },
    ],
  },
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
          Artikel mendalam tentang mengapa sertifikasi IT/TI penting bagi
          seorang programmer dalam mengembangkan karir dan meningkatkan
          kredibilitas profesional. Membahas berbagai sertifikasi industri dan
          dampaknya terhadap pertumbuhan skill.
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
          Expertise dalam membangun responsive dan maintainable web interfaces
          dengan React.js, Next.js, TypeScript, dan Tailwind CSS. Fokus pada UI
          consistency dan clean code implementation.
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
          Expertise dalam mobile application development menggunakan Flutter
          framework, termasuk state management, UI implementation, dan local
          database integration dengan SQLite.
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
          Expertise dalam user-centered design melalui structured user flows,
          wireframing, prototyping, dan interactive design implementation di
          berbagai platform.
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

export {
  person,
  social,
  newsletter,
  home,
  about,
  certifications,
  work,
  gallery,
};
