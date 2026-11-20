import EnigmaticKey from "./assets/TEK.png";
import AZSpell from "./assets/AZSpellingBee.jpg";
import TaskManager from "./assets/ToDoApp.png";
import FinTrack from "./assets/Fintrack.png";
import ApplyTrack from "./assets/ApplyTrack.png";

type Project = {
  ProjectName: string;
  ProjectDescription: string;
  Image: string;
  URL: string;
};

const MyProjects: Project[] = [
  {
    ProjectName: "FinTrack",
    ProjectDescription:
      "I built this personal finance management application using React, TypeScript, Tailwind CSS, and Supabase. It features secure authentication, transaction management, account tracking, and PostgreSQL-powered financial validation and audit logging. Deployed using Netlify.",
    Image: FinTrack,
    URL: "https://fintrack-ledger-app.netlify.app/",
  },
  {
    ProjectName: "ApplyTrack",
    ProjectDescription:
      "I built this job application tracking application using React, TypeScript, Tailwind CSS, and Supabase. It helps users organize job applications, track application statuses, and manage their job search. Deployed using Netlify.",
    Image: ApplyTrack,
    URL: "https://applytrack-app.netlify.app/",
  },
  {
    ProjectName: "Task Manager",
    ProjectDescription:
      "I built this task management application using React, TypeScript, and Tailwind CSS. It allows users to organize, manage, and track their tasks efficiently. Deployed using Netlify.",
    Image: TaskManager,
    URL: "https://do-it-task-manager.netlify.app/",
  },
  {
    ProjectName: "The Enigmatic Key: Paths of Destiny",
    ProjectDescription:
      "The interactive text-based game was built using HTML, CSS, JavaScript, and jQuery, offering an engaging and immersive experience.",
    Image: EnigmaticKey,
    URL: "https://markmendelasis.github.io/TheEnigmaticKeyPathsOfDestiny/",
  },
  {
    ProjectName: "A-Z Spelling Bee",
    ProjectDescription:
      "I built this interactive spelling bee application using HTML, CSS, Bootstrap, and JavaScript. It helps users practice spelling through interactive activities. Deployed using GitHub Pages.",
    Image: AZSpell,
    URL: "https://markmendelasis.github.io/A-Z_SpellingBee/",
  },
];

export default MyProjects;
