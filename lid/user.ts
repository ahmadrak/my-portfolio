// data/user.ts

export type User = {
  name: string;
  title: string;
  objective: string;
  location?: string;
  email?: string;
  phone?:string
  social?: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
};

export const user: User = {
  name: "Ahmed Ali",
  title: "Full-Stack Developer | React.js, Next.js, Tailwind CSS, JavaScript, Express, PostgreSQL",
  objective:
    "I’m a passionate full-stack developer who builds responsive, data-driven web apps using React, Express.js, and PostgreSQL. I love turning ideas into real projects that users enjoy.",
  location: "Dubai, UAE",
  phone: "+971552945954",
  email: "ahmadrak2@gmail.com",
  social: {
    github: "https://github.com/ahmadrak",
    linkedin: "https://linkedin.com/in/ahmad-ali-578070aa",
  },
};
