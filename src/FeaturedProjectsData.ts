import FinTrackDashboard from "./assets/FinTrack-Dashboard.png";
import ApplyTrackDashboard from "./assets/ApplyTrackDashboard.png";

type Project = {
  name: string;
  subtitle: string;
  description: string;
  details: string;
  image: string;
  imageAlt: string;
  features: string[];
  techStack: string[];
  url: string;
};

const FeaturedProjectsData: Project[] = [
  {
    name: "FinTrack",
    subtitle: "Financial Integrity by Design",
    description:
      "A personal finance management application for tracking transactions, managing accounts, and maintaining financial data integrity through database-enforced business rules.",
    details:
      "Built with React, TypeScript, Tailwind CSS, and Supabase. It uses PostgreSQL functions, constraints, and Row-Level Security to enforce business rules, protect user data, and maintain reliable transaction records.",
    image: FinTrackDashboard,
    imageAlt: "FinTrack Personal Finance Dashboard",
    features: [
      "Secure Login",
      "Account Management",
      "Transaction Tracking",
      "Balance Checking",
      "Transaction History",
      "Data Security",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    url: "https://fintrack-ledger-app.netlify.app/",
  },
  {
    name: "ApplyTrack",
    subtitle: "Organize Your Job Search",
    description:
      "A job application tracking application that helps users organize job opportunities, monitor application statuses, and manage their job search in one place.",
    details:
      "Built with React, TypeScript, Tailwind CSS, and Supabase. It provides an organized way to manage job applications, company details, application progress, and job search activities.",
    image: ApplyTrackDashboard,
    imageAlt: "ApplyTrack Job Application Tracker",
    features: [
      "Secure Login",
      "Application Tracking",
      "Company Management",
      "Status Monitoring",
      "Dashboard Analytics",
      "Responsive Design",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    url: "https://applytrack-app.netlify.app/",
  },
];

export default FeaturedProjectsData;
