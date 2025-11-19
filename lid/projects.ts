// lid/projects.ts

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Task Manager App",
    description:
      "A full-stack web app that allows users to create, update, and manage tasks with authentication and role-based access control using Passport.js and PostgreSQL.",
    tech: ["React", "Express", "Node.js", "PostgreSQL", "Passport.js"],
    liveUrl: "https://yourtaskmanager.vercel.app",
    githubUrl: "https://github.com/ahmadali/task-manager",
  },
  {
    id: 2,
    title: "Online Store Frontend",
    description:
      "An e-commerce interface built with React and Redux, featuring product listing, shopping bag functionality, and responsive design.",
    tech: ["React", "Redux", "Tailwind CSS"],
    liveUrl: "https://yourstore.vercel.app",
    githubUrl: "https://github.com/ahmadali/online-store",
  },
  {
    id: 3,
    title: "To-Do List App (Vanilla JS)",
    description:
      "A simple to-do list built with pure JavaScript classes and DOM manipulation for practicing clean code and component-based logic without frameworks.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://yourtodo.vercel.app",
    githubUrl: "https://github.com/ahmadali/todo-vanilla-js",
  },
  {
    id: 4,
    title: "Social Media Platform (In Progress)",
    description:
      "A full-stack social app with posts, comments, and authentication, built with Express.js, Passport.js, PostgreSQL, and React.",
    tech: ["React", "Express", "Node.js", "PostgreSQL"],
  },
];
