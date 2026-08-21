export const LINKS = {
  github: "https://github.com/BhartiSahu30",
  linkedin: "https://www.linkedin.com/in/bharti-sahu-7b1184350",
  email: "mailto:bhartirdsahu@gmail.com",
  emailText: "bhartirdsahu@gmail.com",
  phone: "+91 7354976202",
  phoneHref: "tel:+917354976202",
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
  { value: "3+", label: "Internships & Training" },
];

export const SKILLS: { title: string; items: string[] }[] = [
  {
    title: "Programming",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Generative AI",
      "LLMs",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    title: "AI/ML Frameworks",
    items: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "YOLOv8",
      "LangChain",
      "LangGraph",
      "Hugging Face",
    ],
  },
  {
    title: "Web & Backend",
    items: [
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "Flask",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      "NumPy",
      "Pandas",
      "Data Cleaning",
      "Data Preprocessing",
      "EDA",
      "Statistical Analysis",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Power BI",
      "Excel",
    ],
  },
  {
    title: "Databases & Tools",
    items: [
      "MySQL",
      "MongoDB",
      "SQLite",
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "Google Colab",
      "Streamlit",
      "Postman",
      "Tableau",
    ],
  },
  {
    title: "Cloud & Deployment",
    items: ["AWS EC2", "AWS S3", "AWS Lambda"],
  },
  {
    title: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  badge?: string;
  demo?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "TravelGenie AI - Intelligent Travel Planner",
    description:
      "AI-powered travel planning web application that generates personalized itineraries and trip recommendations using Gemini AI. Includes route optimization, budget estimation, hotel recommendations, weather information, secure authentication, and PDF itinerary export.",
    tech: [
      "React",
      "TypeScript",
      "Flask",
      "MySQL",
      "Gemini AI",
      "Google Maps API",
      "Weather API",
      "JWT",
    ],
    github: "https://github.com/BhartiSahu30/AI-Travel-Planning-Agent.git",
    demo: "https://ai-travel-planning-a-43am.bolt.host/",
  },

  {
    title: "CleanCity - Smart Grievance Management System",
    description:
      "AI-enabled municipal grievance management platform for reporting, tracking, and managing garbage-related complaints. Uses YOLOv8 and computer vision to classify waste into Plastic, Household, Construction, and Hazardous categories.",
    tech: [
      "React.js",
      "TypeScript",
      "Python",
      "Flask",
      "MySQL",
      "YOLOv8",
      "OpenCV",
      "PyTorch",
      "JWT",
      "REST APIs",
    ],
    github: "https://github.com/kavitakr2130-cloud/CleanCity.git",
  },

  {
    title: "Real-Time Space Debris Detection & Tracking System",
    description:
      "Real-time computer vision system for detecting and tracking space debris using YOLOv8 and OpenCV. Includes an interactive Streamlit dashboard and visualization tools for monitoring and analysis.",
    tech: [
      "YOLOv8",
      "OpenCV",
      "Python",
      "Streamlit",
      "Matplotlib",
      "Computer Vision",
    ],
    badge: "SIH 2025 Finalist",
    github: "https://github.com/BhartiSahu30/SIH_Space_Debris_Mitigation.git",

  {
    title: "Shopify Sales & Revenue Analysis Dashboard",
    description:
      "Interactive sales and revenue analytics dashboard for analyzing Shopify product performance. Includes KPI analysis, category-wise revenue analysis, trend analysis, product performance, and dynamic filters.",
    tech: [
      "Python",
      "Pandas",
      "Plotly",
      "Streamlit",
      "Data Analysis",
    ],
    github: "https://github.com/BhartiSahu30/Shopify-Sales-and-Revenue-Dashboard.git",
  },

  {
    title: "Smart Data Cleaning & Reporting Automation System",
    description:
      "Automated data preprocessing and reporting system for CSV and Excel datasets. Performs missing-value detection, duplicate removal, format standardization, data quality checks, profiling, visualization, reporting, and cleaned dataset export.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Plotly",
      "Data Cleaning",
      "EDA",
    ],
    github: "https://github.com/BhartiSahu30/Smart_Data_Cleaning_Automation.git",
  },

  {
    title: "Indian Store Sales Forecasting Dashboard",
    description:
      "Interactive retail sales forecasting system for analyzing Indian store data. Performs preprocessing, trend analysis, category-wise and region-wise analysis, forecasting, KPI visualization, and downloadable reporting.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Plotly",
      "Streamlit",
      "Machine Learning",
    ],
    github: "https://github.com/BhartiSahu30/Predictive-Model-to-Forecast-Future-Trends.git",
  },

  {
    title: "Virtual Library System",
    description:
      "GUI-based library management system with book search, issue and return workflows, automated tracking, and structured data management using Python and PyQt.",
    tech: [
      "Python",
      "PyQt",
      "SQLite",
      "JSON",
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
    ],
    github: "#",
    demo: "#",
  },
];

export const EXPERIENCE = [
  {
    year: "2026",
    tag: "Vocational Trainee",
    role: "Vocational Trainee • IIRS (ISRO), Dehradun",
    org: "Indian Institute of Remote Sensing (IIRS), ISRO",
    points: [
      "Developed a Machine Learning and Deep Learning-based landslide detection system using Sentinel-2/Landsat satellite imagery for geospatial image analysis.",
      "Implemented and compared Random Forest, SVM, and CNN models using Python and evaluated performance using Accuracy, Precision, Recall, F1-score, and IoU.",
    ],
  },

  {
    year: "2026",
    tag: "AI Automation & Generative AI Intern",
    role: "AI Automation & Generative AI Intern • BharatCares & IBM SkillsBuild",
    org: "BharatCares (CSRBOX Group) & IBM SkillsBuild",
    points: [
      "Worked on AI Automation and Generative AI solutions involving LLMs, Prompt Engineering, AI tools, and workflow automation.",
      "Explored modern Generative AI technologies and developed AI-driven solutions to strengthen intelligent application development and problem-solving skills.",
    ],
  },

  {
    year: "2026",
    tag: "Software & App Development Intern",
    role: "Software & App Development Intern • GetSetAI Innovations, Bhilai",
    org: "GetSetAI Innovations, Bhilai",
    points: [
      "Developed and enhanced web application features using React.js, TypeScript, Node.js, Python, Flask, HTML, and CSS.",
      "Worked with REST APIs, Git, GitHub, MySQL, and VS Code for API integration, debugging, testing, and collaborative software development.",
    ],
  },

  {
    year: "2026",
    tag: "Data Analyst Intern",
    role: "Data Analyst Intern • Thiranex",
    org: "Thiranex",
    points: [
      "Performed data cleaning, preprocessing, exploratory data analysis, and visualization on real-world datasets to identify trends, patterns, and meaningful insights.",
      "Used Python, Pandas, NumPy, SQL, and data visualization techniques for data manipulation, querying, analysis, and reporting.",
    ],
  },

  {
    year: "2025",
    tag: "AI Trainee",
    role: "AI Trainee • Techonet Pvt. Ltd., Bhilai",
    org: "Techonet Pvt. Ltd., Bhilai",
    points: [
      "Developed a Virtual Library System using Python and PyQt with automated book search, issue, return, and tracking functionalities.",
      "Applied JSON and database systems for data management while gaining hands-on experience in application development, debugging, and software implementation.",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "🏆",
    text: "Smart India Hackathon 2025 – Top 5 All India Finalist",
    detail: "Real-Time Space Debris Detection & Tracking System",
  },
  {
    icon: "🥈",
    text: "RBI 90 Quiz – State Level Finalist",
    detail: "Top 10 out of 90 teams",
  },
  {
    icon: "🔐",
    text: "IIT Bhilai Cyber Security Hackathon 2026 Participant",
    detail: "Digital Identity Analysis Tool",
  },
  {
    icon: "🌍",
    text: "Prayatna 3.0 – National Hackathon Participant",
  },
];