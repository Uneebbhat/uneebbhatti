import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Uneeb Bhatti",
  initials: "UB",
  url: "https://uneebbhatti.vercel.app/",
  location: "Lahore, PK",
  locationLink: "https://www.google.com/maps/place/lahore",
  description:
    "Full-Stack Developer turned Founder. I love to build digital solutions and empower others. Probably fixing bugs as you read this.",
  summary: `I'm a **full-stack web developer** and a **BSIT student at the University of Management and Technology (UMT)**. I specialize in building modern web applications using the **MERN stack** and **Next.js** — with a particular obsession for **backend development** (yes, I actually enjoy wrestling with terminal logs).

I'm also the **Founder & CEO of Codemaven Solutions**, a service-based company where we craft web and mobile apps, design clean and intuitive interfaces, and build **AI-powered chatbots** that do more than just chat.

I've completed **two internships** across both product and service-based companies, gaining valuable experience along the way. I enjoy working on mobile apps — as long as I don't have to deal with the quirks of mobile development itself (we have a complicated relationship).

These days, I'm focused on **learning, building, and shipping** — usually with a cup of milk in one hand and a deployment pipeline in the other. I'm also exploring the world of **freelancing through Upwork** — so if you're looking for someone to bring your ideas to life, you know where to find me.
`,
  avatarUrl: "/uneeb.png",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Git",
    "GitHub",
    "MongoDB",
    "Express.js",
    "HTML",
    "CSS",
    "Postman",
    "TailwindCSS",
    "Figma",
    "Shadcn UI",
    "Adobe Illustrator",
    "Adobe Photoshop",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "uneebbhatti3@gmail.com",
    tel: "+923364769000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Uneebbhat",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/uneeb-bhatti/",
        icon: Icons.linkedin,

        navbar: true,
      },
      UpWork: {
        name: "UpWork",
        url: "https://www.upwork.com/freelancers/~013bf01b3e28523db1?mp_source=share",
        icon: "/upwork.svg",

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:uneebbhatti3@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Codemaven Solutions",
      href: "https://www.codemavensolutions.com/",
      badges: [],
      location: "Remote",
      title: "Founder & CEO",
      logoUrl: "/codemaven.png",
      start: "July 2024",
      end: "Present",
      description:
        "Leading a remote team to deliver web, mobile, and AI-driven software solutions for global clients. Overseeing end-to-end project lifecycles — from UI/UX design and development to deployment. Built scalable web applications using MERN stack and Next.js, and contributed to mobile app development using React Native. Managing client communication, team operations, and technical architecture to ensure timely and high-quality delivery.",
    },
    {
      company: "Token Talent HR",
      badges: [],
      href: "https://tokentalent.co/",
      location: "Lahore, PK",
      title: "Backend Developer",
      logoUrl: "/token.png",
      start: "August 2024",
      end: "September 2024",
      description:
        "Worked on backend development for internal HR tooling and talent-matching systems. Built and optimized REST APIs using Express.js and MongoDB, integrated third-party services, and contributed to database schema design. Collaborated with the frontend and product teams to ensure smooth data flow and consistent application logic across platforms.",
    },
    {
      company: "Concypt",
      href: "https://concypt.co.uk/",
      badges: [],
      location: "Lahore, PK",
      title: "Front-end Developer & QA Engineer",
      logoUrl: "/concypt.jpg",
      start: "July 2023",
      end: "October 2023",
      description:
        "Developed and maintained frontend features for client projects using HTML, CSS, and JavaScript. Worked closely with the design and backend teams to ensure seamless UI integration. Also contributed to QA processes by writing test cases, performing cross-browser testing, and identifying performance bottlenecks in staging environments.",
    },
  ],
  education: [
    {
      school: "University of Management and Technology (UMT)",
      href: "https://www.umt.edu.pk/",
      degree: "Bachelor of Information Technology (BSIT)",
      logoUrl: "/umt.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "Punjab Group of Colleges (PGC)",
      href: "https://pgc.edu/",
      degree: "Intermediate in Computer Science",
      logoUrl: "/pgc.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "Yousaf School System (YSS)",
      href: "https://web.facebook.com/yousafschool/?_rdc=1&_rdr",
      degree: "Primary School",
      logoUrl: "/yss.png",
      start: "2007",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Agencio",
      href: "",
      dates: "Mar 2025 - Present",
      active: true,
      description:
        "Agencio is an all-in-one agency management platform designed for businesses, freelancers, and teams to streamline client interactions, project tracking, file management, and AI chatbot",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "MongoDB",
        "Express.js",
        "Node.js",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Web Development",
        "Full-stack Development",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Uneebbhat/agencio-frontend.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/agencio.jpg",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Token Talent HR",
      href: "https://tokentalent.co/",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "TokentalentHR is a mobile app that simplifies employee attendance and leave management, allowing users to mark attendance, apply for leaves, and view payrolls with a user-friendly interface.",
      technologies: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mobile App",
        "Backend",
        "API Development",
      ],
      links: [
        {
          type: "Website",
          href: "https://tokentalent.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/token-talent.gif",
    },
    {
      title: "AlmTraders",
      href: "https://www.almtraders.org/",
      dates: "Dec 2024 - Feb 2024",
      active: true,
      description:
        "I built the AlmTraders website using TypeScript, React, NextJs, and TailwindCSS to showcase their 30+ years of expertise in wholesale IT trading and global exports.",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "React"],
      links: [
        {
          type: "Website",
          href: "https://www.almtraders.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/alm-traders.png",
    },
    {
      title: "Sysvelop",
      href: "https://www.sysvelop.com/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Sysvelop is a software house that specializes in developing custom software solutions, web applications, and digital products for businesses of all sizes.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.sysvelop.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sysvelop.png",
    },
  ],
  hackathons: [
    {
      title: "Management Team - TechVerse",
      dates: "June 2025",
      location: "Lahore, PK",
      description:
        "I had the opportunity to be part of the management team for TechVerse, a 12-hour hackathon hosted by UMT. It was an incredible experience that allowed me to contribute to event coordination, collaborate with participants and organizers, and gain firsthand exposure to managing a fast-paced tech event. On the third day, I also took part in the project evaluation process, reviewing innovative solutions built under pressure. It was a rewarding and insightful experience that strengthened both my organizational and teamwork skills.",
      image: "/techverse.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "Participant - Softcom '25 Hackathon (UMT & GIKI Collaboration)",
      dates: "Feb 2025",
      location: "Topi, KPK",
      description:
        "I participated in the Softcom '25 Hackathon, a collaboration between UMT and GIKI, as part of a team of three members, alongside two friends. This experience allowed me to dive into a competitive tech environment, where we worked together to solve complex problems and develop innovative solutions. Although we didn't win, the event was an excellent learning opportunity, helping me refine my skills in teamwork, problem-solving, and creative thinking. It was a great chance to network with other tech enthusiasts and gain insights that will guide my future projects.",
      image: "/acm.jpg",
      mlh: "",
      links: [],
    },
  ],
  upworkCatalog: [
    {
      title:
        "You will get A Full Stack Web Application (React, Express, Node, MongoDB, Next.JS)",
      description:
        "Empower your business with a scalable, high-performance MERN stack web application tailored to your unique needs. Leveraging React, Next.js, Node.js, Express.js, MongoDB, and TypeScript, I deliver secure, future-proof solutions that drive engagement, streamline operations, and boost ROI.",
      image: "/upwork-1.png",
      price: "$200",
      links: [
        {
          type: "View on UpWork",
          href: "https://www.upwork.com/services/product/development-it-a-full-stack-web-application-react-express-node-mongodb-next-js-1937020686195953071?ref=project_share",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title:
        "You will get Fully Functional MERN Stack Web App Tailored to Your Need",
      description: `Get a custom, high-performance full-stack web application tailored to your needs. I deliver scalable, user-friendly solutions with modern features, fast turnaround, and seamless management of both front-end and back-end development.`,
      image: "/upwork-2.jpg",
      price: "$149",
      links: [
        {
          type: "View on UpWork",
          href: "https://www.upwork.com/services/product/development-it-custom-full-stack-project-with-mern-stack-for-efficient-management-1840848611497964885?ref=project_share",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
