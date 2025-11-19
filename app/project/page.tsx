import { projects } from "@/lid/projects";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            {/* Project Image */}
            <div className="w-full h-48 overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Info */}
            <div className="mt-4 flex flex-col flex-grow">
              <Link href={`/project/${project.id}`}>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2 flex-grow">
                {project.description}
              </p>
              </Link>
              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-100 border border-gray-300 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
   
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
