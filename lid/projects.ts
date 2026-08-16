// lid/projects.ts

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string[];
  video?:string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Task Manager App",
    description:
      "A full-stack task management web app for creating, organizing, and tracking tasks with a clean, responsive interface. Built with a Next.js frontend and a Node.js/PostgreSQL backend, covering CRUD operations, task status tracking, and a persistent database layer.",
    tech: ["Nextjs", "TailwindCSS", "Node.js", "PostgreSQL"],
    image: [
      "/images/task1.png",
      "/images/task2.png",
      "/images/task3.png"
    ],
    liveUrl: "https://task-manager-a7q9.vercel.app/",
    githubUrl: "https://github.com/ahmadrak/task_manager",
  },
  {
    id: 2,
    title: "Online Store Frontend",
    description:
      "An e-commerce storefront interface featuring a product catalog, shopping cart, and checkout flow. Built with React and Redux for state management, with a fully responsive layout styled using Tailwind CSS.",
    tech: ["React", "Redux", "Tailwind CSS"],
    image: [
      "/images/store1.png",
      "/images/store2.png",
      "/images/store3.png"
    ],
    liveUrl: "https://mystore325.netlify.app",
    githubUrl: "https://github.com/ahmadrak/store",
  },
  {
    id: 3,
    title: "Reddit Clone App",
    description:
      "A simplified Reddit clone supporting post creation, browsing, and community-style interaction. Built with an Express.js backend API and a React frontend styled with Tailwind CSS.",
    tech: ["Tailwind", "ReactJS", "expressJS"],
    image: [
      "/images/reddit1.png",
      "/images/reddit2.png"
    ],
    githubUrl: "https://github.com/ahmadrak/reddit_clone",
  },
  {
    id: 4,
    title: "Dream Escape (In Progress)",
    description:
      "A full-stack flight booking platform where users can browse and book travel packages, and admins can manage packages and control user accounts. Built with Next.js, PostgreSQL, and Tailwind CSS.",
    tech: ["NextJS", "Tailwind", "PostgreSQL"],
    liveUrl: "",
    githubUrl: "https://github.com/ahmadrak/dream-escape",
  },
  {
    id: 5,
    title: "r_store - E-commerce Platform",
    description:
      "A full-stack e-commerce application with product listings, cart, and order management, built on an Express.js and PostgreSQL backend. Underwent a full security audit and hardening pass, resolving IDOR vulnerabilities, password hash leakage, and authentication gaps, with a professional README documenting the architecture and setup.",
    tech: ["Express.js", "Node.js", "PostgreSQL"],
    image: [
      "/images/rstore1.png",
      "/images/rstore2.png",
      "/images/rstore3.png"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/ahmadrak/r_store",
  },
  {
    id: 6,
    title: "securityERP - Security Company Management System",
    description:
      "A full-stack ERP system for security companies, covering guard attendance, employee records, location/contract management, and role-based admin control. Includes a NestJS + PostgreSQL backend secured with JWT auth guards, a Next.js admin dashboard, and a companion Expo mobile app for guards to check in/out and for admins to manage employees and locations on the go. Built independently while working at a security company, with a focus on production-grade security (IDOR fixes, hashed credentials, protected routes) and real-world operational needs.",
    tech: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "Expo", "React Native"],
    video: [
            "https://www.youtube.com/embed/RdzQ8IAAN_0",
            "/video/mobileapp.mp4"
],

image: [
         "/images/dashboard1.png",
         "/images/dashboard2.png"
         ],

    liveUrl: "",
    githubUrl: "https://github.com/ahmadrak/securityERP",
  },
];
