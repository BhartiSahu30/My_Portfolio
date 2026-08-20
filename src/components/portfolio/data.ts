export const LINKS = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:bharti.sahu@example.com",
  emailText: "bharti.sahu@example.com",
  resume: "#",
};

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "SIH 2025", label: "Finalist" },
  { value: "4+", label: "AI/ML Projects" },
  { value: "Multiple", label: "Internships & Trainings" },
  { value: "CSE-AI", label: "Student" },
];

export const SKILLS: { title: string; items: string[] }[] = [
  { title: "Programming", items: ["Python", "C++", "Java"] },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "ReactJS", "Node.js"] },
  {
    title: "AI / ML",
    items: ["Scikit-learn", "PyTorch", "TensorFlow", "Keras", "OpenCV", "YOLOv8", "Ultralytics"],
  },
  { title: "Generative AI", items: ["LangChain", "LLMs", "Generative AI"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "SQLite"] },
  { title: "Cloud", items: ["AWS", "Google Cloud"] },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  badge?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "CleanCity – AI Enabled Smart Municipal Grievance Management System",
    description:
      "An AI-powered municipal grievance management platform that helps citizens report civic issues, automatically analyzes complaints using AI, provides location-based reporting and supports role-based administration.",
    tech: ["React", "TypeScript", "Flask", "Python", "MySQL", "YOLOv8", "OpenCV", "JWT"],
    demo: "#",
  },
  {
    title: "Real-Time Space Debris Detection",
    description:
      "Computer vision system for detecting and identifying space debris using YOLOv8.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    badge: "SIH 2025 Finalist",
  },
  {
    title: "Landslide Detection Using Satellite Imagery",
    description:
      "Machine learning and deep learning based system for identifying landslide-affected regions from satellite imagery.",
    tech: ["Python", "Sentinel-2/Landsat", "NDVI", "NDWI", "Random Forest", "CNN"],
  },
  {
    title: "Virtual Library System",
    description: "AI-enabled virtual library project developed during AI training.",
    tech: ["Python", "AI/ML", "Computer Vision"],
  },
];

export const EXPERIENCE = [
  {
    role: "AI/ML Trainee",
    org: "Techonet Pvt. Ltd.",
    detail: "Built an AI-based Virtual Library System.",
  },
  {
    role: "Data Analyst Intern",
    org: "Thiranex",
    detail: "Worked with data analytics and related technologies.",
  },
  { role: "AI Intern", org: "CodeAlpha", detail: "Worked on AI/ML projects." },
  {
    role: "AI Automation & Generative AI Training",
    org: "IBM SkillsBuild / BharatCares",
    detail: "",
  },
  { role: "Geoprocessing & Data Analytics Training", org: "IIRS, ISRO", detail: "" },
];

export const ACHIEVEMENTS = [
  { icon: "🏆", text: "SIH 2025 Finalist" },
  { icon: "🚀", text: "Real-Time Space Debris Detection using YOLOv8" },
  { icon: "🤖", text: "Multiple AI/ML Projects" },
  { icon: "☁️", text: "AI, Cloud and Data Analytics Training" },
];