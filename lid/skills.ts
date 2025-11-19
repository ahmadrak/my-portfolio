// data/skills.ts

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication (Passport.js)", "Role-Based Access Control"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "SQL", "Schema Design", "Database Optimization"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Render / Vercel"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem-Solving", "Teamwork", "Communication", "Project Management"],
  },
];
