import { projects, Project } from "@/lid/projects";
import GoBackButton from '../../Component/GoBackButton'
import ImageCarousel from '../../Component/ImageCarousel'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
})
{
  const { id } = await params;

  const projectId = Number(id);
  const project: Project | undefined = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4">{project.description}</p>

      <div className="mb-4">
        <h2 className="font-semibold">Technologies:</h2>
        <ul className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 mt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Live Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            GitHub
          </a>
        )}
      </div>

      {project.video &&
           project.video.map((video, index) => (
               <iframe
                       key={index}
                       width="420"
                       height="345"
                       src={video}
                       title={`Project video ${index + 1}`}
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                     />
      ))}

      <GoBackButton />
    </div>
  );
}
