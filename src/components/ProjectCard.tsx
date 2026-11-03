import { useReveal } from "../hooks/useReveal";
import MyProjects from "../MyProjects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof MyProjects)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLAnchorElement>(0.1);

  return (
    <a
      ref={ref}
      className={`reveal ${
        visible ? "is-visible" : ""
      } group flex bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden`}
      style={{
        transitionDelay: visible ? `${index * 90}ms` : "0ms",
      }}
      href={project.URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={project.Image}
        alt={project.ProjectName}
        className="w-24 h-24 object-cover m-4 rounded-xl transition-transform duration-300 group-hover:scale-105"
      />

      <div className="flex flex-col justify-center p-4">
        <h4 className="text-lg font-semibold text-sky-700 group-hover:text-sky-600 transition-colors">
          {project.ProjectName}
        </h4>

        <p className="text-gray-600 text-sm mt-1 line-clamp-2 hover:line-clamp-none transition-all">
          {project.ProjectDescription}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;