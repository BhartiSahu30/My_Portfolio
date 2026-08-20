export const LINKS = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:bharti.bsahu@gmail.com",
  emailText: "bharti.bsahu@gmail.com",
  phone: "+91 73547 96202",
  phoneHref: "tel:+917354796202",
  location: "Bhilai, India",
  resume: "#",
};

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "Top 5", label: "SIH 2025 All India Finalist" },
  { value: "3+", label: "AI/ML & Full-Stack Projects" },
  { value: "8.2", label: "CGPA / 10" },
  { value: "AWS", label: "EC2 · S3 · Lambda" },
];

export const SKILLS: { title: string; items: string[] }[] = [
  { title: "Core Language", items: ["Python"] },
  { title: "Computer Vision", items: ["YOLOv8", "OpenCV"] },
  { title: "Deep Learning", items: ["PyTorch", "Keras"] },
  { title: "Cloud & Deployment", items: ["AWS EC2", "AWS S3", "AWS Lambda"] },
  { title: "Frontend & Backend", items: ["React", "Node.js"] },
  { title: "ML Dashboards", items: ["Streamlit"] },
  { title: "Data Science", items: ["NumPy", "Pandas", "scikit-learn"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "SQLite"] },
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
    title: "Ninja Noodles – Cybersecurity Learning Platform",
    description:
      "Gamified cybersecurity learning platform with interactive challenges, badges, and real-time tracking to make security education engaging.",
    tech: ["React", "Vite", "Zustand", "Framer Motion"],
    demo: "#",
  },
  {
    title: "Real-Time Space Debris Detection System",
    description:
      "End-to-end computer vision solution for real-time space debris detection and tracking, with an interactive Streamlit dashboard for monitoring.",
    tech: ["YOLOv8", "OpenCV", "Streamlit", "AWS"],
    badge: "SIH 2025 Finalist",
    demo: "#",
  },
  {
    title: "Virtual Library System",
    description:
      "Full-stack GUI library management system with book search, issue/return workflows, and cloud deployment for scalable book management.",
    tech: ["Python", "PyQt", "SQLite", "AWS EC2/S3"],
    demo: "#",
  },
];

export const EXPERIENCE = [
  {
    year: "2025",
    tag: "AI Trainee",
    role: "AI Trainee • Techonet Pvt. Ltd., Bhilai",
    org: "Techonet Pvt. Ltd., Bhilai",
    points: [
      "Developed a Virtual Library System using Python & PyQt",
      "Implemented backend with SQLite/JSON and deployed on AWS (EC2, S3, Lambda)",
    ],
  },
  {
    year: "2025",
    tag: "Hackathon",
    role: "Smart India Hackathon 2025 • Space Debris Detection System",
    org: "Smart India Hackathon",
    points: [
      "Built real-time object detection system using OpenCV + YOLOv8",
      "Created interactive Streamlit dashboard for visualization & monitoring",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "🏆",
    text: "Smart India Hackathon 2025 – Top 5 All India Finalist",
    detail: "Space Debris Detection Project",
  },
  { icon: "🥈", text: "RBI 90 Quiz – State Level Finalist (Top 10 / 90 teams)" },
  {
    icon: "🔐",
    text: "IIT Bhilai Cyber Security Hackathon 2026 Participant",
    detail: "Digital Identity Analysis Tool",
  },
  { icon: "🌍", text: "Prayatna 3.0 – National Hackathon Participant" },
];
