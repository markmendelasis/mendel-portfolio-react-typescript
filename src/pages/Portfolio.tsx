import { useEffect, useState } from "react";
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
import resume from "../assets/Mark_Mendel_Asis_Resume.pdf";
import ProjectCard from "../components/ProjectCard.tsx";
import { useReveal } from "../hooks/useReveal.ts";
import PersonalAIDashboardMockUp from "../assets/PersonalAIDashboardMockUp.png";

function Portfolio() {
  const navigationSections = ["about", "projects", "skills", "contact"];
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const { ref: aboutRef, visible: aboutVisible } = useReveal<HTMLDivElement>();

  const { ref: projectsHeadingRef, visible: projectsHeadingVisible } =
    useReveal<HTMLDivElement>();

  const { ref: skillsSectionRef, visible: skillsSectionVisible } =
    useReveal<HTMLDivElement>();

  const { ref: contactRef, visible: contactVisible } =
    useReveal<HTMLDivElement>();

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
        className={`sticky top-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white/0 backdrop-blur-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold tracking-tight cursor-pointer group">
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-widest">
              mark.io
            </span>
            <span className="block h-[2px] w-0 bg-gradient-to-r from-sky-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </h1>

          <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium text-gray-600">
            {navigationSections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative hover:text-sky-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-500 hover:after:w-full after:transition-all after:duration-300 capitalize"
              >
                {section}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center rounded-lg p-2 text-sky-700 hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="sm:hidden mt-4 rounded-xl border border-sky-100 bg-white/95 p-2 shadow-lg backdrop-blur-md"
          >
            {navigationSections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium capitalize text-gray-700 transition-colors hover:bg-sky-50 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {section}
              </a>
            ))}
          </nav>
        )}
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
            ref={aboutRef}
            className={`reveal ${
              aboutVisible ? "is-visible" : ""
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

      {/* FEATURED PROJECT */}
      <section
        id="featured"
        className="relative w-full py-24 px-6 scroll-mt-20 overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900"
      >
        {/* ambient accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/20 to-indigo-400/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
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
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sky-300 font-semibold tracking-wider uppercase text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              Featured Project
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
              Personal AI Finance Dashboard
            </h2>

            <p className="text-indigo-200/80 mt-4 max-w-3xl mx-auto">
              A full-stack personal finance dashboard for tracking income,
              expenses, budgets, and savings with interactive analytics and
              AI-powered financial insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT — browser mockup */}
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-tr from-sky-400/20 via-indigo-400/10 to-transparent blur-3xl rounded-full" />

              {/* floating badge — top left */}
              <div className="hidden sm:flex absolute -top-5 -left-5 z-20 items-center gap-2 bg-indigo-950/80 backdrop-blur-md border border-indigo-700/60 rounded-xl px-4 py-3 shadow-lg shadow-black/20 blob-b">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-sky-400/20 text-sky-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-indigo-300 leading-none">
                    Powered by
                  </p>
                  <p className="text-sm font-semibold text-white leading-tight">
                    AI Insights
                  </p>
                </div>
              </div>

              {/* floating badge — bottom right */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 z-20 items-center gap-2 bg-indigo-950/80 backdrop-blur-md border border-indigo-700/60 rounded-xl px-4 py-3 shadow-lg shadow-black/20 blob-a">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-emerald-400/20 text-emerald-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M3 3v18h18M7 15l4-4 3 3 5-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-indigo-300 leading-none">Live</p>
                  <p className="text-sm font-semibold text-white leading-tight">
                    Analytics
                  </p>
                </div>
              </div>

              {/* browser chrome frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-indigo-700/40 bg-white group-hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-slate-200">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 flex items-center gap-2 bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-gray-400">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    ai-finance-dashboard.app
                  </div>
                </div>

                <img
                  src={PersonalAIDashboardMockUp}
                  alt="Personal AI Finance Dashboard"
                  className="w-full"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-3xl font-bold text-white">
                Your Personal Financial Assistant
              </h3>

              <p className="mt-5 text-indigo-200/80 leading-8">
                Built with React, TypeScript, Tailwind CSS, and Supabase,
                featuring secure authentication, data visualization, and a
                responsive user interface.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-3 mt-10">
                {[
                  "Authentication",
                  "Expense Tracking",
                  "Dashboard Analytics",
                  "Savings Goals",
                  "AI Insights",
                  "Responsive Design",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white/5 border border-indigo-700/40 rounded-xl p-4 hover:bg-white/10 hover:border-sky-400/40 hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-sky-400 text-indigo-950 shrink-0">
                      <svg
                        width="12"
                        height="12"
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
                    <span className="text-indigo-100 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* TECH STACK */}
              <div className="mt-10">
                <h4 className="font-semibold mb-4 text-white">Tech Stack</h4>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Supabase",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 text-indigo-950 text-sm font-semibold shadow-sm shadow-black/20 hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-12">
                <a
                  href="https://personal-ai-finance-dashboard.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-400 text-indigo-950 font-medium shadow-md shadow-black/20 hover:bg-sky-300 hover:shadow-lg hover:-translate-y-0.5 transition-all"
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
      </section>
      <section
        id="projects"
        className="w-full px-6 py-20 bg-sky-50 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT: Projects */}
          <div className="h-full flex flex-col">
            <div
              ref={projectsHeadingRef}
              className={`reveal ${
                projectsHeadingVisible ? "is-visible" : ""
              } mb-10`}
            >
              <h3 className="text-2xl font-bold text-sky-600">Projects</h3>
              <p className="text-gray-500 mt-2">
                A few things I've built while leveling up my stack.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 w-full">
              {MyProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* RIGHT: Skills */}
          <div id="skills" className="scroll-mt-20 h-full flex flex-col">
            <div
              ref={skillsSectionRef}
              className={`reveal ${
                skillsSectionVisible ? "is-visible" : ""
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
                        skillsSectionVisible ? "is-visible" : ""
                      } group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white border border-sky-100 p-4 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-sky-200 transition-all cursor-default`}
                      style={{
                        transitionDelay: skillsSectionVisible
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
          ref={contactRef}
          className={`reveal ${contactVisible ? "is-visible" : ""}`}
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
