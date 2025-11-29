// lid/projects.ts

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string[];
  liveUrl?: string;
  githubUrl?: string;
};
export const projects: Project[] = [
  {
    id: 1,
    title: "Task Manager App",
    description: "A full-stack web app...",
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
    description: "An e-commerce interface...",
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
    title: "reddit clone App",
    description: "Simple reddit clone...",
    tech: ["Tailwind", "ReactJS", "expressJS"],
    image: [
      "/images/reddit1.png",
      "/images/reddit2.png",
      "/images/reddit3.png"
    ],
    githubUrl: "https://github.com/ahmadrak/reddit_clone",
  },
  {
    id: 4, 
    title: "Dream Escape (In Progress)",
    description: "A full-stack where the user book flights and the admin can add packages and control users, built with Nextjs, PostgreSQL, and TaikwindCSS.", tech: ["NextJS", "Tailwind", "PostgreSQL"], 
    liveUrl:"", 
    githubUrl:'https://github.com/ahmadrak/dream-escape'
  }
  
];
