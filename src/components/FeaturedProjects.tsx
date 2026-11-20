import { useState } from "react";
import featuredProjects from "../FeaturedProjectsData";

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setActiveIndex(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length,
    );
  };

  return (
    <section
      id="featuredProjects"
      className="relative w-full py-24 px-6 scroll-mt-20 overflow-hidden bg-gradient-to-br from-sky-950 via-sky-900 to-slate-900"
    >
      {/* Ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/20 to-sky-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#7dd3fc 1px, transparent 1px), linear-gradient(90deg, #7dd3fc 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-sky-200/80 mt-4 max-w-2xl mx-auto">
            A collection of applications I've designed and developed using
            modern web technologies.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 50}%)`,
              width: `${featuredProjects.length * 100}%`,
            }}
          >
            {featuredProjects.map((project, index) => (
              <div key={project.name} className="w-1/2 shrink-0 px-2">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                  {/* LEFT — Project image */}
                  <div className="w-full flex items-center justify-center">
                    <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-sky-700/40 bg-white shadow-2xl shadow-black/30 transition-transform duration-500 hover:-translate-y-1">
                      {/* Browser bar */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-slate-200">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-400" />

                        <div className="ml-3 flex-1 bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-gray-400 truncate">
                          {project.url.replace("https://", "")}
                        </div>
                      </div>

                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* RIGHT — Project details */}
                  <div className="flex flex-col justify-center w-full">
                    <p className="text-sky-300 text-sm font-semibold tracking-wide mb-3">
                      PROJECT {index + 1} / {featuredProjects.length}
                    </p>

                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                      {project.name}
                    </h3>

                    <h4 className="text-xl md:text-2xl font-semibold text-sky-200 mt-3">
                      {project.subtitle}
                    </h4>

                    <p className="mt-6 text-sky-200/90 leading-7">
                      {project.description}
                    </p>

                    <p className="mt-4 text-sky-200/70 leading-7">
                      {project.details}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mt-7">
                      {project.features.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 border border-sky-700/40 bg-white/5 rounded-lg p-3 hover:bg-white/10 hover:border-sky-400/40 transition-all"
                        >
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-sky-400 text-sky-950 shrink-0">
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
                              <path
                                d="M20 6 9 17l-5-5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          <span className="text-sky-100 text-xs sm:text-sm font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-7">
                      <h4 className="font-semibold mb-3 text-white">
                        Tech Stack
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 text-sky-950 text-xs sm:text-sm font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Live Demo */}
                    <div className="mt-7">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-400 text-sky-950 font-medium shadow-md shadow-black/20 hover:bg-sky-300 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                      >
                        Live Demo
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M7 17 17 7M7 7h10v10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-6 mt-14">
          {/* Previous */}
          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="flex items-center justify-center h-11 w-11 rounded-full border border-sky-400/30 bg-white/5 text-white hover:bg-sky-400 hover:text-sky-950 hover:border-sky-400 transition-all"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {featuredProjects.map((project, index) => (
              <button
                key={project.name}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${project.name}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-sky-400"
                    : "w-2.5 bg-sky-400/40 hover:bg-sky-300"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextProject}
            aria-label="Next project"
            className="flex items-center justify-center h-11 w-11 rounded-full border border-sky-400/30 bg-white/5 text-white hover:bg-sky-400 hover:text-sky-950 hover:border-sky-400 transition-all"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
