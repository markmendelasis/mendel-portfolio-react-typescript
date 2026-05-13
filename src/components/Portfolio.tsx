import MyProjects from "../MyProjects.ts";

function Portfolio() {
  const skills: string[] = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "TypeScript",
    "Tailwind",
    "Bootstrap",
    "Node.js",
    "Git",
  ];

  return (
    <div className="min-h-screen w-full bg-sky-50 text-gray-900 font-sans">
      {/* NAVBAR */}
      <header className="w-full flex items-center justify-between px-6 py-5 bg-white shadow-sm">
        <h1 className="text-2xl font-extrabold tracking-tight cursor-pointer group">
          <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-widest">
            mark.io
          </span>

          <span className="block h-[2px] w-0 bg-gradient-to-r from-sky-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
        </h1>

        <nav className="space-x-6 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-sky-600">
            About
          </a>
          <a href="#projects" className="hover:text-sky-600">
            Projects
          </a>
          <a href="#skills" className="hover:text-sky-600">
            Skills
          </a>
          <a href="#contact" className="hover:text-sky-600">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="w-full flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-sky-100 to-sky-50">
        <p className="text-sky-600 font-medium">Hi, I’m Mark Mendel Asis</p>

        <h2 className="text-4xl md:text-6xl font-bold mt-2">
          Junior Software Developer
        </h2>

        <p className="text-gray-600 mt-5 max-w-2xl">
          I build clean, modern, and responsive web applications using React,
          TypeScript, and Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-sky-300 text-sky-700 rounded-xl hover:bg-sky-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="w-full px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* TITLE */}
          <h2 className="text-3xl font-bold text-sky-600 mb-10">About me</h2>

          {/* STORY CARD */}
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <p className="text-gray-700 leading-relaxed text-base">
              My journey as a developer began with curiosity about how websites
              work behind the scenes. I started with simple HTML and CSS,
              and over time, I discovered a strong passion for web development.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              My first professional experience taught me a great deal and
              significantly shaped my perspective on software development. It
              made me realize that I want to continue growing as a developer. I
              had the opportunity to learn from experienced colleagues and
              mentors, for which I am genuinely grateful. 
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              I'm focused on improving my skills in
              <span className="font-medium">
                {" "}
                TypeScript, React, and Tailwind CSS,&nbsp;
              </span>
              while continuing to learn backend technologies. I enjoy turning
              ideas into real projects and learning from every challenge I face.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4 italic text-sky-700">
              “I may not know everything, but I’m always willing to learn. I’m
              passionate about what I do.”
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full px-6 py-20 bg-sky-50">
        <h3 className="text-2xl font-bold text-sky-600 text-center mb-10">
          Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {MyProjects.map((project, index) => (
            <a
              key={index}
              className="flex bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition overflow-hidden"
              href={project.URL}
              target="_blank"
            >
              {/* Left Image */}
              <img
                src={project.Image}
                alt="Project"
                className="w-24 h-24 object-cover m-4 rounded-xl"
              />

              {/* Right Content */}
              <div className="flex flex-col justify-center p-4">
                <h4 className="text-lg font-semibold text-sky-700">
                  {project.ProjectName}
                </h4>

                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {project.ProjectDescription}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="w-full px-6 py-20 bg-white">
        <h3 className="text-2xl font-bold text-sky-600 mb-6">Skills</h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="w-full px-6 py-20 bg-sky-600 text-white text-center"
      >
        <h3 className="text-3xl font-bold mb-4">Let’s Work Together</h3>

        <p className="text-sky-100 mb-8">
          Open for junior developer / internship opportunities.
        </p>

        <a
          href="mailto:markmendel.asis17@gmail.com"
          className="px-6 py-3 bg-white text-sky-700 rounded-xl font-medium hover:bg-sky-100 transition"
        >
          Say Hello
        </a>
      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-6 text-gray-500 text-sm bg-white border-t">
        © 2026 mark-io — Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

export default Portfolio;
