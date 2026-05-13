import EnigmaticKey from "./assets/TEK.png";
import AZSpell from "./assets/AZSpellingBee.jpg";
import TaskManager from "./assets/ToDoApp.png";
import PersonalAIDashboardLogo from "./assets/PersonalAIDashboardLogo.png";

type Project = {
  ProjectName: string;
  ProjectDescription: string;
  Image: string;
  URL: string;
};

const MyProjects: Project[] = [
  {
    ProjectName: "Task Manager",
    ProjectDescription:
      "I built this Application using React, TypeScript and Tailwind CSS. Deployed using Netlify.",
    Image: TaskManager,
    URL: "https://do-it-task-manager.netlify.app/",
  },
  {
    ProjectName: "Personal AI Financial Dashboard",
    ProjectDescription:
      "A personal AI-powered financial dashboard that allows users to track income and expenses, visualize spending patterns, and gain insights into their financial habits.",
    Image: PersonalAIDashboardLogo,
    URL: "https://personal-ai-finance-dashboard.netlify.app/",
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
      "I built this website using HTML, CSS, Bootstrap, and JavaScript and deployed it using GitHub.",
    Image: AZSpell,
    URL: "https://markmendelasis.github.io/A-Z_SpellingBee/",
  },
];

export default MyProjects;
