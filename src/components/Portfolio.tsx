import { useEffect, useRef, useState } from "react";
import MyProjects from "../MyProjects.ts";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import resume from "../assets/Mark_Mendel_Asis_Resume.pdf"

/**
 * Scroll-reveal hook.
 * Give any section a ref; it flips `visible` to true the first time
 * the element crosses into the viewport, then stops watching.
 * Respects prefers-reduced-motion by skipping the animation entirely.
 */
function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Portfolio() {
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  // Sticky navbar gains a shadow/blur once the page scrolls
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const about = useReveal<HTMLDivElement>();
  const projectsHeading = useReveal<HTMLDivElement>();
  const skillsSection = useReveal<HTMLDivElement>();
  const contact = useReveal<HTMLDivElement>();
  const stats = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen w-full bg-sky-50 text-gray-900 font-sans scroll-smooth">
      {/* Local styles: keyframes + reduced-motion handling */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-18px) translateX(10px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(14px); }
        }
        @keyframes bounceChevron {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-in {
          animation: fadeInUp 0.8s ease both;
        }
        .blob-a { animation: float 9s ease-in-out infinite; }
        .blob-b { animation: floatSlow 11s ease-in-out infinite; }
        .chevron { animation: bounceChevron 1.8s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .hero-in, .blob-a, .blob-b, .chevron {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-50 w-full flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white/0 backdrop-blur-0"
        }`}
      >
        <h1 className="text-2xl font-extrabold tracking-tight cursor-pointer group">
          <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-widest">
            mark.io
          </span>
          <span className="block h-[2px] w-0 bg-gradient-to-r from-sky-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
        </h1>

        <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium text-gray-600">
          {["about", "projects", "skills", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="relative hover:text-sky-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-500 hover:after:w-full after:transition-all after:duration-300 capitalize"
            >
              {section}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="relative w-full flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 overflow-hidden bg-gradient-to-b from-sky-100 to-sky-50">
        {/* decorative floating blobs — purely atmospheric, respects reduced motion */}
        <div
          aria-hidden="true"
          className="blob-a pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="blob-b pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-center">
          <p className="hero-in text-sky-600 font-medium">
            Hi, I'm Mark Mendel Asis
          </p>

          <h2
            className="hero-in text-4xl md:text-6xl font-bold mt-2"
            style={{ animationDelay: "0.1s" }}
          >
            Full Stack Developer
          </h2>

          <p
            className="hero-in text-gray-600 mt-5 max-w-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            I'm passionate about building modern, responsive, and scalable web
            applications. I enjoy creating intuitive user experiences, writing
            clean and maintainable code, and continuously learning new
            technologies to grow as a developer.
          </p>

          <div
            className="hero-in mt-8 flex flex-wrap justify-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-sky-600 text-white rounded-xl font-medium shadow-md shadow-sky-200 hover:bg-sky-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              View Projects
            </a>

            <a
              href={resume}
              className="px-6 py-3 border border-sky-300 text-sky-700 rounded-xl hover:bg-sky-100 hover:-translate-y-0.5 transition-all"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 text-sky-700 font-medium hover:text-sky-900 hover:-translate-y-0.5 transition-all"
            >
              Contact Me →
            </a>
          </div>
        </div>

        {/* scroll cue */}
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="chevron absolute bottom-6 left-1/2 -translate-x-1/2 text-sky-500"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M6 9l6 6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="w-full px-6 py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-sky-600 mb-10">About me</h2>

          <div
            ref={about.ref}
            className={`reveal ${
              about.visible ? "is-visible" : ""
            } bg-sky-50 border border-sky-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow`}
          >
            <p className="text-gray-700 leading-relaxed text-base">
              My journey into software development began with a curiosity about
              how websites and applications work behind the scenes. What started
              with learning HTML and CSS eventually grew into a passion for
              building modern web applications and continuously improving my
              craft.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Over the past two years, I gained professional experience
              contributing to the development and maintenance of ERP
              applications, including Warehouse Management, CRM, and Finance
              systems. Working alongside experienced developers strengthened my
              technical skills, taught me the value of clean, maintainable code,
              and showed me the importance of collaboration in delivering
              reliable software.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Today, I enjoy building full-stack web applications with
              technologies such as
              <span className="font-medium">
                {" "}
                TypeScript, React, Tailwind CSS, Supabase. &nbsp;
              </span>
              I enjoy solving real-world problems, exploring new technologies,
              and continuously challenging myself through personal projects and
              hands-on learning.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4 italic text-sky-700 border-l-2 border-sky-300 pl-4">
              "I believe that great developers are defined not only by what they
              know, but by their willingness to learn, adapt, and improve. Every
              project is an opportunity to grow, and I'm excited to keep
              building software that makes a meaningful impact."
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS + SKILLS — side by side */}
      <section
        id="projects"
        className="w-full px-6 py-20 bg-sky-50 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT: Projects */}
          <div className="h-full flex flex-col">
            <div
              ref={projectsHeading.ref}
              className={`reveal ${
                projectsHeading.visible ? "is-visible" : ""
              } mb-10`}
            >
              <h3 className="text-2xl font-bold text-sky-600">Projects</h3>
              <p className="text-gray-500 mt-2">
                A few things I've built while leveling up my stack.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 w-full">
              {MyProjects.map((project, index) => {
                const item = useReveal<HTMLAnchorElement>(0.1);
                return (
                  <a
                    key={index}
                    ref={item.ref}
                    className={`reveal ${
                      item.visible ? "is-visible" : ""
                    } group flex bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden`}
                    style={{
                      transitionDelay: item.visible ? `${index * 90}ms` : "0ms",
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

                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                        {project.ProjectDescription}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Skills */}
          <div id="skills" className="scroll-mt-20 h-full flex flex-col">
            <div
              ref={skillsSection.ref}
              className={`reveal ${
                skillsSection.visible ? "is-visible" : ""
              } flex-1 flex flex-col`}
            >
              <h3 className="text-2xl font-bold text-sky-600 mb-2">Skills</h3>
              <p className="text-gray-500 mb-10">
                Tools and technologies I work with most.
              </p>

              <div className="grid grid-cols-3 gap-5 flex-1 auto-rows-fr">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`reveal ${
                        skillsSection.visible ? "is-visible" : ""
                      } group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white border border-sky-100 p-4 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-sky-200 transition-all cursor-default`}
                      style={{
                        transitionDelay: skillsSection.visible
                          ? `${index * 60}ms`
                          : "0ms",
                      }}
                    >
                      <Icon
                        size={44}
                        color={skill.color}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-sm font-medium text-gray-600">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="w-full px-6 py-20 bg-sky-600 text-white text-center scroll-mt-20"
      >
        <div
          ref={contact.ref}
          className={`reveal ${contact.visible ? "is-visible" : ""}`}
        >
          <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>

          <p className="text-sky-100 mb-8">
            Open to Full Stack and Frontend Developer opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:markmendelasis17@gmail.com"
              className="px-6 py-3 bg-white text-sky-700 rounded-xl font-medium hover:bg-sky-100 hover:-translate-y-0.5 transition-all"
            >
              Say Hello
            </a>

            <a
              href="https://github.com/markmendelasis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-sky-300 rounded-xl font-medium hover:bg-sky-500 hover:-translate-y-0.5 transition-all"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/markmendelasis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-sky-300 rounded-xl font-medium hover:bg-sky-500 hover:-translate-y-0.5 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-6 text-gray-500 text-sm bg-white border-t">
        © 2026 mark-io — Built with React &amp; Tailwind CSS
      </footer>
    </div>
  );
}

export default Portfolio;
