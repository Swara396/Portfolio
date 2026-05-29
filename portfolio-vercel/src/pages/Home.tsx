import React from "react";
import { motion } from "framer-motion";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Github, Linkedin, Mail, ExternalLink, BookOpen, Star, Award, Zap, Layers, Code2, FlaskConical, Globe, Video, FileText, ImageIcon, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

type WorkItem = {
  id: number;
  title: string;
  tags: string[];
  tagColor: string;
  shortDesc: string;
  color: string;
  glowColor: string;
  icon: React.ReactNode;
  overview: string;
  problem?: string;
  solution?: string;
  features: string[];
  tech: string[];
  contribution: string;
  learnings: string[];
  impact: string;
  links: { github?: string; live?: string; certificate?: string; demo?: string };
  hasDemo?: boolean;
  hasMedia?: boolean;
  videoSrc?: string;
  team?: string[];
  certificateSrc?: string;
  stats?: string[];
  findings?: string[];
  notebookLink?: string;
  visualSrc?: string;
};

const WORK_ITEMS: WorkItem[] = [
  {
    id: 1,
    title: "FOSS Hackathon – Research Rover",
    tags: ["Hackathon", "UI/UX", "Frontend"],
    tagColor: "text-emerald-400",
    shortDesc: "A dynamic research paper analytics tool — blending innovation with powerful visualizations. Built at FOSSHack 2025.",
    color: "from-emerald-500/20 to-teal-500/20",
    glowColor: "bg-emerald-500/20",
    icon: <Zap className="w-5 h-5 text-emerald-400" />,
    overview: "Research Rover is a dynamic tool that blends innovation with powerful analytics, making research papers intuitive and insightful. Built during FOSSHack 2025 as my first hackathon, it bridges the gap between researchers and data-driven decision-making through seamless management and visualization of research publications.",
    problem: "In the ever-evolving world of research, keeping track of publications, trends, and insights is challenging. Researchers lack a unified platform that combines tracking, analytics, and visualization — making academic progress review tedious and fragmented.",
    solution: "Built a web platform that integrates powerful visual analytics with an intuitive interface, transforming raw research data into meaningful insights. Users can track their research trajectory, monitor publication trends, and gain deep insights into academic progress — all in one place.",
    features: [
      "Interactive graphs and real-time analytics for research tracking",
      "Publication trend monitoring across various topics",
      "Customizable research tracking and progress dashboard",
      "Intuitive interface designed for researchers and academicians",
      "Contributed to UI/UX design and the frontend structure",
      "Worked in a cross-functional team under hackathon time constraints"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Data Visualization", "Figma"],
    contribution: "Led UI/UX design and frontend structure. Responsible for the interface layout, user flow, visual analytics components, and ensuring the platform was intuitive for non-technical researchers.",
    learnings: [
      "Real-world development workflow in a time-constrained hackathon environment",
      "Effective team collaboration across frontend, backend, and data domains",
      "Designing for a research-focused user base with complex data needs",
      "Frontend-backend integration patterns in a rapid prototyping context",
      "First exposure to pitching and demonstrating a live product under pressure"
    ],
    impact: "Delivered a working research analytics platform within the hackathon timeframe. Selected and showcased on the official FOSS United platform. Gained foundational exposure to the full product development lifecycle — from ideation to demo.",
    team: ["RAM MITTAL", "KRRISH NITIN PARDESHI", "SWARA SHISHIR AMBEKAR", "Soham Raut"],
    links: {
      github: "https://github.com/ram-mittal/research_paper",
      live: "https://fossunited.org/hack/fosshack25/p/2q11fagcj5",
      demo: "https://youtu.be/X5hWCEzvc1c"
    },
    hasDemo: true,
    hasMedia: true,
    videoSrc: "/research-rover-demo.mp4"
  },
  {
    id: 2,
    title: "NYX Internship",
    tags: ["Internship", "Content", "Digital"],
    tagColor: "text-pink-400",
    shortDesc: "Social Media & Content Intern at NYX — building digital presence through strategy and creative execution.",
    color: "from-pink-500/20 to-rose-500/20",
    glowColor: "bg-pink-500/20",
    icon: <Layers className="w-5 h-5 text-pink-400" />,
    overview: "Worked as a Social Media & Content Intern at NYX, a startup environment where I handled content creation, scripting, visual direction, and social media management.",
    problem: "The startup needed a strong, consistent digital identity and content pipeline to grow its online presence and connect with its target audience.",
    solution: "Developed a structured content strategy and produced high-quality creative assets, scripts, and visual content for their social media platforms.",
    features: [
      "Content creation and script writing for social campaigns",
      "Directed and managed visual content production",
      "Handled day-to-day social media platform management",
      "Collaborated with the creative team on brand consistency"
    ],
    tech: ["Content Strategy", "Script Writing", "Visual Direction", "Social Media Management"],
    contribution: "Sole contributor to content pipeline — wrote scripts, created content calendars, managed posts, and guided visual direction for multiple campaigns.",
    learnings: [
      "Digital branding and how narrative shapes brand identity",
      "Content strategy — planning, creating, and analyzing performance",
      "Creative execution at a professional level",
      "Working in a fast-paced startup culture"
    ],
    impact: "Helped build a consistent brand voice and grew content engagement. Gained real-world exposure to digital marketing and creative production.",
    links: {},
    hasMedia: true
  },
  {
    id: 3,
    title: "Rural Internship – School Management System",
    tags: ["Full-Stack", "Web Dev", "Internship"],
    tagColor: "text-blue-400",
    shortDesc: "Built a faculty-only web app to fully digitize school administration — my most complete engineering project.",
    color: "from-blue-500/20 to-cyan-500/20",
    glowColor: "bg-blue-500/20",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    overview: "As part of a rural internship program, I identified real administrative pain points at a local school and built a complete faculty-only web application from scratch to digitize their manual workflows.",
    problem: "School staff managed student records, certificates, and administrative data entirely on paper — slow, error-prone, and inefficient. There was no digital system in place.",
    solution: "Designed and built a full-stack web application tailored for faculty use — featuring student search, automated certificate generation, and Excel data export to eliminate manual record-keeping.",
    features: [
      "Student search and filtering system",
      "Automated certificate generation (marksheets, character certs)",
      "Excel data export for bulk reporting",
      "Faculty-only secure access flow",
      "Responsive, clean UI for non-technical users"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    contribution: "Solo developer — handled complete design, frontend, backend, and deployment. Conducted user interviews with faculty to understand their actual needs before building.",
    learnings: [
      "Full-stack development from requirement gathering to deployment",
      "System design from scratch with real user constraints",
      "Translating non-technical user problems into software solutions",
      "Building for actual users, not hypothetical ones",
      "Express.js routing, server logic, and file handling"
    ],
    impact: "Significantly reduced manual workload for school staff. Certificate generation went from hours to seconds. Faculty adopted the system and it actively reduced administrative overhead.",
    links: { github: "#", demo: "#" },
    hasDemo: true,
    hasMedia: true,
    videoSrc: "/rural-internship-demo.mp4"
  },
  {
    id: 4,
    title: "Smart India Hackathon – MindBridge",
    tags: ["Hackathon", "UI/UX", "Health-Tech"],
    tagColor: "text-violet-400",
    shortDesc: "Mental health platform built for SIH — accessible support systems with a human-centered design approach.",
    color: "from-violet-500/20 to-purple-500/20",
    glowColor: "bg-violet-500/20",
    icon: <Award className="w-5 h-5 text-violet-400" />,
    overview: "MindBridge was developed for Smart India Hackathon — a mental health platform focused on making psychological support more accessible, structured, and stigma-free through technology.",
    problem: "Mental health resources in India are often inaccessible, expensive, or stigmatized. There's a gap between those who need support and the tools available to them.",
    solution: "Designed a platform that provides accessible mental health check-ins, resource discovery, and guided support pathways with a clean, non-clinical UI to reduce stigma.",
    features: [
      "Mental health check-in and mood tracking flow",
      "Resource discovery with curated support content",
      "Calm, approachable UI designed to reduce anxiety",
      "Presentation-ready prototype with full UX flow",
      "Team pitch and demonstration preparation"
    ],
    tech: ["Figma", "React", "Tailwind CSS", "Presentation Design"],
    contribution: "Led frontend development, UI/UX design, and the final presentation. Responsible for the complete visual language of the platform and how it was pitched to judges.",
    learnings: [
      "Problem-solving under real competitive constraints",
      "Structured system thinking — from problem to solution to pitch",
      "How to design for sensitive, human-centered use cases",
      "Presentation and pitching skills at a national level",
      "Working collaboratively with diverse team members"
    ],
    impact: "Competed at the Smart India Hackathon level. Built a complete prototype and delivered a strong presentation demonstrating both technical and communication capabilities.",
    links: { certificate: "#", live: "#" },
    hasMedia: true,
    certificateSrc: "/sih-mindbridge-certificate.jpeg"
  },
  {
    id: 5,
    title: "Smart India Hackathon – Vedyura",
    tags: ["Hackathon", "Data", "AI/Health"],
    tagColor: "text-orange-400",
    shortDesc: "AI-powered personalized wellness system using health data — SIH entry focused on data-driven health tech.",
    color: "from-orange-500/20 to-amber-500/20",
    glowColor: "bg-orange-500/20",
    icon: <FlaskConical className="w-5 h-5 text-orange-400" />,
    overview: "Vedyura is an AI-based personalized wellness system developed for Smart India Hackathon. It uses individual health data to provide tailored wellness recommendations.",
    problem: "Generic health advice doesn't account for individual needs. Most wellness platforms provide the same recommendations regardless of personal health context.",
    solution: "Designed a data-driven system that ingests user health data and generates personalized wellness plans using AI-based logic and rule-based recommendations.",
    features: [
      "Health data input and profiling system",
      "Personalized wellness recommendation engine",
      "Clean frontend for data visualization and plan display",
      "Concept architecture for AI integration",
      "Competitive hackathon presentation"
    ],
    tech: ["Python", "Data Analysis", "Figma", "React", "Presentation Design"],
    contribution: "Contributed to frontend design, concept architecture, and the final hackathon presentation. Helped define the data flow and how results would be surfaced to users.",
    learnings: [
      "Data-driven system thinking — structuring inputs to drive meaningful outputs",
      "Health-tech problem solving with ethical considerations",
      "How AI concepts can be translated into actionable product features",
      "Team collaboration across design and data disciplines"
    ],
    impact: "Competed at SIH with a working concept. Developed strong understanding of how data can personalize user experiences in health applications.",
    links: { certificate: "#" },
    hasMedia: true,
    certificateSrc: "/sih-vedyura-certificate.jpeg"
  },
  {
    id: 6,
    title: "Mini Projects – Quiz Buzzer & Smoke Sensor",
    tags: ["Hardware", "Logic", "Systems"],
    tagColor: "text-cyan-400",
    shortDesc: "Two logic-driven mini projects exploring hardware systems — buzzer response handling and sensor-based detection.",
    color: "from-cyan-500/20 to-sky-500/20",
    glowColor: "bg-cyan-500/20",
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
    overview: "Two focused mini projects built to understand hardware logic and real-world system behavior: a Quiz Buzzer for real-time response handling, and a Smoke Sensor for safety detection.",
    problem: "Understanding how software logic translates to hardware behavior and sensor-driven systems requires hands-on building beyond web development.",
    solution: "Built two distinct systems: (1) Quiz Buzzer — handles rapid response detection with priority logic, (2) Smoke Sensor — detects threshold breaches and triggers safety alerts.",
    features: [
      "Quiz Buzzer: Real-time response priority handling",
      "Quiz Buzzer: Multi-input conflict resolution logic",
      "Smoke Sensor: Threshold-based detection system",
      "Smoke Sensor: Alert triggering on safety breach",
      "Both projects built and tested on hardware"
    ],
    tech: ["C", "Hardware Logic", "Sensor Integration", "Embedded Systems Basics"],
    contribution: "Sole builder for both projects — designed the logic, built the circuits, and tested real-world behavior in controlled conditions.",
    learnings: [
      "Logic building from first principles",
      "System response handling and priority queuing",
      "Sensor-based system design and threshold logic",
      "Practical hardware-software interaction",
      "Debugging physical systems vs digital ones"
    ],
    impact: "Expanded technical understanding beyond web — now comfortable thinking about systems at the hardware level. Strengthened fundamental logic and programming skills.",
    links: {}
  },
  {
    id: 7,
    title: "Personal Portfolio Website",
    tags: ["Frontend", "UI/UX", "Design Engineering"],
    tagColor: "text-secondary",
    shortDesc: "This very website — designed and built to reflect my thinking, growth, and approach to craft.",
    color: "from-purple-500/20 to-pink-500/20",
    glowColor: "bg-purple-500/20",
    icon: <Globe className="w-5 h-5 text-secondary" />,
    overview: "Designed and developed from scratch as a personal digital statement. This portfolio is not just a resume — it's a showcase of how I think, design, and build. Every section, animation, and interaction was intentional.",
    problem: "Generic resumes and template portfolios don't communicate personality, technical depth, or design sensibility. A developer's portfolio should itself be proof of their skills.",
    solution: "Built a custom dark futuristic portfolio with particle animations, glassmorphism cards, smooth scroll interactions, and a clear information hierarchy that guides visitors through the work narrative.",
    features: [
      "Animated particle canvas hero background",
      "Scroll-triggered fade-in animations via Framer Motion",
      "Glassmorphism cards with neon glow on hover",
      "Interactive project modals with full detail views",
      "Fully responsive across all screen sizes",
      "Dark futuristic theme with electric blue and neon purple accents"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
    contribution: "Solo designer and developer. Handled every aspect — concept, visual design, component architecture, animations, and content structure.",
    learnings: [
      "UI/UX design implementation — moving from idea to polished product",
      "Personal branding through design choices, not just words",
      "Structuring information to guide a visitor's attention",
      "Advanced animation techniques with Framer Motion",
      "Performance-conscious frontend development"
    ],
    impact: "A living portfolio that actively demonstrates the skills it claims. The process of building it deepened my understanding of both design systems and React architecture.",
    links: { live: "#", github: "#" }
  },
  {
    id: 8,
    title: "Women Safety Analysis in India",
    tags: ["Data Mining", "ML Pipeline", "Python"],
    tagColor: "text-orange-400",
    shortDesc: "Data Mining & Warehousing Capstone | SY CSE | 2024–25 — End-to-end ML pipeline on real NCRB data classifying 20 Indian states by safety level across 7 years.",
    color: "from-red-500/20 to-amber-500/20",
    glowColor: "bg-red-500/20",
    icon: <FlaskConical className="w-5 h-5 text-orange-400" />,
    overview: "Built an end-to-end ML pipeline using real NCRB data (2016–2022) to classify 20 Indian states as Safe, Moderate, or Unsafe based on crime rates against women. Includes a Star Schema Data Warehouse, Decision Tree + Random Forest classifiers, and a State × Year crime rate heatmap.",
    problem: "Crime data on women's safety in India exists but is rarely structured for ML-based analysis. Raw NCRB reports don't translate directly into actionable, state-level safety classifications.",
    solution: "Built a full pipeline — from NCRB data ingestion through preprocessing, Star Schema warehousing, ML classification (Decision Tree + Random Forest), to 6 visualisations including the signature State × Year heatmap.",
    features: [
      "Real NCRB dataset: 20 states × 7 years of crime rates per lakh women",
      "Star Schema Data Warehouse with fact table + 3 dimension tables (location, time, safety)",
      "Decision Tree (max_depth=5, Gini) and Random Forest (100 estimators) classifiers",
      "Both models achieved 100% accuracy on the held-out test set",
      "Safety classification thresholds: Safe <55, Moderate 55–90, Unsafe >90 per lakh women",
      "6 visualisations: State × Year heatmap, bar chart, confusion matrices, class distribution, regional comparison"
    ],
    tech: ["Python", "scikit-learn", "pandas", "seaborn", "Decision Tree", "Random Forest", "Star Schema", "NCRB Data"],
    contribution: "Solo project — handled data sourcing, preprocessing, warehouse design, model training, evaluation, and all 6 visualisations from scratch.",
    learnings: [
      "Designing a production-style Star Schema data warehouse from first principles",
      "Decision Tree vs Random Forest — interpretability vs ensemble robustness",
      "Working with real-world government data: verifying NCRB figures against secondary sources",
      "How COVID-19 (2020) created a measurable and visible dip in recorded crime rates",
      "Regional disparity analysis — South India vs East India safety patterns"
    ],
    impact: "Both models achieved 100% classification accuracy. The heatmap clearly narrates the Safety × Time story for every Indian state. Findings: Delhi topped crime rates every year (144.4/lakh in 2022); Assam peaked at 168.3 in 2021; South India is 4× safer than East India; the COVID dip is clearly visible in 2020.",
    stats: ["20 States · 7 Years", "2 ML Models", "Real NCRB Data", "6 Visualisations"],
    findings: [
      "Delhi topped crime rate every year (144.4/lakh in 2022)",
      "Assam peaked at 168.3/lakh in 2021",
      "South India is 4× safer than East India",
      "COVID dip clearly visible in 2020 trend"
    ],
    links: { github: "https://github.com/Swara396/WomenSafetyIndia_DMW.git" },
    notebookLink: "#",
    visualSrc: "/wsi-heatmap.png"
  }
];

const SKILLS = [
  { category: "Programming", items: ["Python", "Java", "C", "JavaScript"] },
  { category: "Frontend", items: ["HTML", "CSS", "React", "Framer Motion"] },
  { category: "UI/UX", items: ["Wireframing", "Prototyping", "Figma"] },
  { category: "Backend & Data", items: ["Node.js", "Express", "Pandas", "SQLite", "Data Mining"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

type CertItem = {
  id: number;
  title: string;
  platform: string;
  category: string;
  categoryColor: string;
  accentColor: string;
  glowColor: string;
  shortDesc: string;
  overview: string;
  learned: string[];
  skills: string[];
  application: string;
  certificateSrc: string;
  verifyLink?: string;
};

const CERT_ITEMS: CertItem[] = [
  {
    id: 1,
    title: "Complete Web & Mobile Designer: UI/UX, Figma + More",
    platform: "Udemy",
    category: "UI/UX Design",
    categoryColor: "text-secondary",
    accentColor: "from-purple-500/20 to-violet-500/20",
    glowColor: "bg-secondary/20",
    shortDesc: "Comprehensive UI/UX design course covering modern design principles and user-centered approaches.",
    overview: "Completed a comprehensive UI/UX design course focused on modern design principles and user-centered design approaches. Covered the full spectrum from wireframing to high-fidelity Figma prototypes, with practical exercises throughout.",
    learned: [
      "User Experience (UX) fundamentals and research methods",
      "User Interface (UI) design principles and visual hierarchy",
      "Wireframing and low-fidelity prototyping",
      "Design thinking methodology and ideation frameworks",
      "Practical use of Figma for screen design and prototyping",
      "Responsive design for web and mobile"
    ],
    skills: ["UI/UX Design", "Figma", "Wireframing", "Prototyping", "Design Thinking", "Responsive Design"],
    application: "Applied directly to this portfolio's design system, component layout, and the Figma prototypes built during the NYX internship. Design thinking methodology was used throughout the SIH projects to structure user-centered solutions.",
    certificateSrc: "/cert-uiux.jpeg"
  },
  {
    id: 2,
    title: "Technology Commercialization: Idea Filtering System",
    platform: "University of Rochester via Coursera",
    category: "Innovation & Strategy",
    categoryColor: "text-emerald-400",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    glowColor: "bg-emerald-500/20",
    shortDesc: "Evaluating and filtering ideas to identify those with real-world commercial potential.",
    overview: "Focused on evaluating and filtering ideas to identify those with real-world commercial potential. Taught by Mark Wilson from Simon Business School, University of Rochester — this course bridged academic innovation with entrepreneurial thinking.",
    learned: [
      "Idea validation and filtering techniques for commercial viability",
      "Understanding the innovation lifecycle from concept to market",
      "Identifying scalable and sustainable solutions",
      "Strategic thinking in early-stage product development",
      "Frameworks for evaluating market fit and feasibility"
    ],
    skills: ["Innovation Thinking", "Idea Evaluation", "Business Strategy", "Market Fit Analysis", "Product Thinking"],
    application: "This course changed how I approach problem statements — especially visible in the SIH MindBridge and Vedyura projects, where I moved beyond feature lists to think about scalability, user adoption, and commercial viability.",
    certificateSrc: "/cert-tech-commercialization.jpeg",
    verifyLink: "https://coursera.org/verify/XADTUFSCCENF"
  },
  {
    id: 3,
    title: "Data Mining in Python",
    platform: "University of Michigan via Coursera",
    category: "Data Science",
    categoryColor: "text-primary",
    accentColor: "from-blue-500/20 to-cyan-500/20",
    glowColor: "bg-primary/20",
    shortDesc: "Practical data mining techniques and data analysis using Python.",
    overview: "Explored data mining techniques and practical data analysis using Python, authorized by University of Michigan. Taught by Qiaozhu Mei, PhD, School of Information — covering the full data pipeline from raw data to actionable insights.",
    learned: [
      "Data preprocessing and cleaning pipelines",
      "Data analysis using Python and Pandas",
      "Pattern identification and insights extraction",
      "Introduction to core data mining techniques",
      "Structuring datasets for meaningful output"
    ],
    skills: ["Python", "Pandas", "Data Analysis", "Data Mining", "Data Preprocessing", "Pattern Recognition"],
    application: "Directly applied in the Vedyura SIH project — used data mining concepts to design the health data processing pipeline. Also strengthened the data analysis work done during the Rural Internship school management system.",
    certificateSrc: "/cert-data-mining.jpeg",
    verifyLink: "https://coursera.org/verify/ZGS78P31MSBJ"
  }
];

function WorkModal({ item }: { item: WorkItem }) {
  return (
    <DialogContent className="sm:max-w-[680px] max-h-[90vh] bg-[#0D0D0D]/98 backdrop-blur-xl border border-white/10 p-0 overflow-hidden flex flex-col">
      <div className={`h-1 w-full bg-gradient-to-r ${item.color.replace("/20", "/80")}`} />

      <div className="overflow-y-auto flex-1 p-6 md:p-8 space-y-7">
        <DialogHeader>
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tags.map((tag) => (
              <span key={tag} className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${item.tagColor}`}>
                {tag}
              </span>
            ))}
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-white leading-tight">{item.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-sm md:text-base">
          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className={`w-1.5 h-1.5 rounded-full ${item.glowColor}`} />Overview</h4>
            <p className="text-muted-foreground font-light leading-relaxed">{item.overview}</p>
          </div>

          {item.problem && (
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />Problem</h4>
              <p className="text-muted-foreground font-light leading-relaxed">{item.problem}</p>
            </div>
          )}

          {item.solution && (
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />Solution</h4>
              <p className="text-muted-foreground font-light leading-relaxed">{item.solution}</p>
            </div>
          )}

          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/70" />Key Features / Work Done</h4>
            <ul className="space-y-2">
              {item.features.map((f, i) => (
                <li key={i} className="text-muted-foreground font-light flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/80">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary/70" />My Contribution</h4>
            <p className="text-muted-foreground font-light leading-relaxed">{item.contribution}</p>
          </div>

          {item.findings && (
            <div className="p-4 rounded-xl bg-orange-500/[0.05] border border-orange-500/20">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />Key Findings
              </h4>
              <ul className="space-y-2">
                {item.findings.map((f, i) => (
                  <li key={i} className="text-muted-foreground font-light flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-orange-400/60 shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.visualSrc && (
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-orange-400/70" /> State × Year Crime Rate Heatmap
              </h4>
              <div className="rounded-xl overflow-hidden border border-orange-500/20 bg-black">
                <img src={item.visualSrc} alt="State × Year crime rate heatmap" className="w-full object-contain" />
              </div>
            </div>
          )}

          <div className="p-4 rounded-xl bg-white/[0.03] border border-primary/20">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              Key Learnings
            </h4>
            <ul className="space-y-2">
              {item.learnings.map((l, i) => (
                <li key={i} className="text-muted-foreground font-light flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0" />{l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary/70" />Impact / Outcome</h4>
            <p className="text-muted-foreground font-light leading-relaxed">{item.impact}</p>
          </div>

          {item.team && item.team.length > 0 && (
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />Team
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.team.map((member, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    {member}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(item.links.github || item.links.live || item.videoSrc || item.links.demo || item.certificateSrc || item.links.certificate || item.notebookLink) && (
            <div className="space-y-5">
              {(item.links.github || item.links.live || item.notebookLink) && (
                <div>
                  <h4 className="text-white font-semibold mb-3">Links</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.links.github && (
                      <a href={item.links.github} target="_blank" rel="noreferrer">
                        <Button size="sm" variant="outline" className="rounded-full text-xs h-8 border-white/10 bg-white/5 hover:bg-white/10 text-white gap-1.5">
                          <Github className="w-3.5 h-3.5" /> GitHub
                        </Button>
                      </a>
                    )}
                    {item.notebookLink && (
                      <a href={item.notebookLink} target="_blank" rel="noreferrer">
                        <Button size="sm" variant="outline" className="rounded-full text-xs h-8 border-orange-500/20 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" /> View Notebook
                        </Button>
                      </a>
                    )}
                    {item.links.live && (
                      <a href={item.links.live} target="_blank" rel="noreferrer">
                        <Button size="sm" variant="outline" className="rounded-full text-xs h-8 border-primary/20 bg-primary/10 hover:bg-primary/20 text-primary gap-1.5">
                          <Globe className="w-3.5 h-3.5" /> Live Project
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {(item.videoSrc || item.links.demo) && (
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Video className="w-4 h-4 text-white/60" /> Watch Demo
                  </h4>
                  {item.videoSrc && (
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black mb-3">
                      <video
                        src={item.videoSrc}
                        controls
                        className="w-full max-h-56 object-contain"
                        preload="metadata"
                      />
                    </div>
                  )}
                  {item.links.demo && (
                    <a href={item.links.demo} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline" className="rounded-full text-xs h-8 border-white/10 bg-white/5 hover:bg-white/10 text-white gap-1.5">
                        <ExternalLink className="w-3.5 h-3.5" /> Watch on YouTube
                      </Button>
                    </a>
                  )}
                </div>
              )}

              {(item.certificateSrc || item.links.certificate) && (
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-secondary/70" /> Certificate
                  </h4>
                  {item.certificateSrc && (
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black mb-3">
                      <img
                        src={item.certificateSrc}
                        alt="Certificate"
                        className="w-full object-contain"
                      />
                    </div>
                  )}
                  {item.links.certificate && item.links.certificate !== "#" && (
                    <a href={item.links.certificate} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline" className="rounded-full text-xs h-8 border-secondary/20 bg-secondary/10 hover:bg-secondary/20 text-secondary gap-1.5">
                        <FileText className="w-3.5 h-3.5" /> View Certificate
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </DialogContent>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative"
    >
      <div className={`absolute inset-0 ${item.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`} />
      <div className="relative h-full flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.05] group-hover:border-white/20 overflow-hidden">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            {item.icon}
          </div>
          <div className="flex flex-wrap gap-1.5 justify-end">
            {item.tags.slice(0, 2).map((tag) => (
              <span key={tag} className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 ${item.tagColor}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
          {item.title}
        </h3>
        <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
          {item.shortDesc}
        </p>

        {item.stats && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.stats.map((s) => (
              <span key={s} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-500/10 border border-orange-500/20 text-orange-400">{s}</span>
            ))}
          </div>
        )}

        {item.findings && (
          <ul className="space-y-1 mb-4">
            {item.findings.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-start gap-1.5 text-[11px] text-muted-foreground font-light">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-orange-400/60 shrink-0" />{f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex gap-2 flex-wrap">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className={`rounded-full text-xs h-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 gap-1.5 cursor-pointer`}
              >
                <ExternalLink className="w-3.5 h-3.5" /> View Details
              </Button>
            </DialogTrigger>
            <WorkModal item={item} />
          </Dialog>

          {item.links.github && item.links.github !== "#" && !item.links.live && !item.links.demo && (
            <a href={item.links.github} target="_blank" rel="noreferrer">
              <Button size="sm" className="rounded-full text-xs h-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 gap-1.5">
                <Github className="w-3.5 h-3.5" /> GitHub
              </Button>
            </a>
          )}
          {item.notebookLink && (
            <a href={item.notebookLink} target="_blank" rel="noreferrer">
              <Button size="sm" className="rounded-full text-xs h-8 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/20 gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> View Notebook
              </Button>
            </a>
          )}
          {item.links.live && (
            <a href={item.links.live} target="_blank" rel="noreferrer">
              <Button size="sm" className="rounded-full text-xs h-8 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 gap-1.5">
                <Globe className="w-3.5 h-3.5" /> View Project
              </Button>
            </a>
          )}
          {item.links.demo && (
            <a href={item.links.demo} target="_blank" rel="noreferrer">
              <Button size="sm" className="rounded-full text-xs h-8 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20 gap-1.5">
                <Video className="w-3.5 h-3.5" /> Watch Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CertModal({ cert }: { cert: CertItem }) {
  return (
    <DialogContent className="sm:max-w-[640px] max-h-[90vh] bg-[#0D0D0D]/98 backdrop-blur-xl border border-white/10 p-0 overflow-hidden flex flex-col">
      <div className={`h-1 w-full bg-gradient-to-r ${cert.accentColor.replace("/20", "/80")}`} />
      <div className="overflow-y-auto flex-1 p-6 md:p-8 space-y-7">
        <DialogHeader>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${cert.categoryColor}`}>
              {cert.category}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
              {cert.platform}
            </span>
          </div>
          <DialogTitle className="text-xl md:text-2xl font-bold text-white leading-tight">{cert.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-sm md:text-base">
          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${cert.glowColor}`} />Overview
            </h4>
            <p className="text-muted-foreground font-light leading-relaxed">{cert.overview}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70" />What I Learned
            </h4>
            <ul className="space-y-2">
              {cert.learned.map((item, i) => (
                <li key={i} className="text-muted-foreground font-light flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Skills Gained</h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((s, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 ${cert.categoryColor}`}>{s}</span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-primary/20">
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />Practical Application
            </h4>
            <p className="text-muted-foreground font-light leading-relaxed">{cert.application}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${cert.glowColor}`} />Certificate
            </h4>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black mb-3">
              <img src={cert.certificateSrc} alt={`${cert.title} certificate`} className="w-full object-contain" />
            </div>
            {cert.verifyLink && (
              <a href={cert.verifyLink} target="_blank" rel="noreferrer">
                <Button size="sm" variant="outline" className={`rounded-full text-xs h-8 border-white/10 bg-white/5 hover:bg-white/10 text-white gap-1.5`}>
                  <ExternalLink className="w-3.5 h-3.5" /> Verify on Coursera
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default function Home() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
        <ParticleCanvas />
        <div className="container relative z-10 px-6 md:px-12 mx-auto max-w-5xl">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-start">
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">B.Tech CSE Student · D Y Patil International University</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-4 text-white">
              Swara
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary mb-3">
              Frontend Developer | UI/UX Designer | Data-Driven Problem Solver
            </motion.p>
            <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
              Building user-focused digital systems with design, data, and purpose.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('#work')} size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 h-14 group">
                View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => scrollToSection('#contact')} variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white text-foreground font-medium px-8 h-14 backdrop-blur-sm">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-5">
              <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Bridging <span className="text-secondary">logic</span> & <span className="text-primary">design</span>.
              </motion.h2>
            </div>
            <div className="md:col-span-7">
              <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
                I am a B.Tech Computer Science student at D Y Patil International University, Pune, focused on frontend development, UI/UX design, and data-driven applications. I have built real-world projects that reflect my ability to translate ideas into functional systems.
              </motion.p>
              <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                I am driven by innovation, continuous learning, and the goal of creating impactful digital solutions. Whether it's a polished UI, a data pipeline, or a hackathon prototype — I build with purpose.
              </motion.p>

              <motion.div variants={fadeUpVariant} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Relevant Coursework</p>
                <div className="mb-3">
                  <p className="text-xs text-white/30 mb-2 font-medium">Semester III</p>
                  <div className="flex flex-wrap gap-2">
                    {["Design & Analysis of Algorithms", "Object-Oriented Technology (Java)", "Relational Database Management System", "Modern Software Engineering & Testing"].map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full text-xs bg-primary/10 border border-primary/20 text-primary/80">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-white/30 mb-2 font-medium">Semester IV</p>
                  <div className="flex flex-wrap gap-2">
                    {["Applied Python for Computer Science", "Data Mining & Warehousing", "Digital Image Processing", "Technology Management & Commercialization"].map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full text-xs bg-secondary/10 border border-secondary/20 text-secondary/80">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED WORK & EXPERIENCE */}
      <section id="work" className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] translate-y-1/2 pointer-events-none mix-blend-screen" />

        <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Work & Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl font-light">
              A curated journey of projects, internships, and experiences reflecting my growth in building user-focused and data-driven systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {WORK_ITEMS.map((item, idx) => (
              <WorkCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-6 text-white">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-sm bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-24 md:py-32 relative overflow-hidden bg-white/[0.02] border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="mb-16 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4 block">Continuous Growth</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Certifications &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Learning</span>
            </h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
              Focused on building interdisciplinary skills across design, data, and innovation through continuous learning beyond academics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERT_ITEMS.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <div className={`group relative h-full p-6 rounded-2xl bg-gradient-to-br ${cert.accentColor} border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default flex flex-col`}>
                  <div className={`absolute inset-0 rounded-2xl ${cert.glowColor} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10`} />

                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${cert.categoryColor}`}>
                        {cert.category}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-base leading-snug mb-1">{cert.title}</h3>
                    <p className="text-xs text-white/40 font-medium">{cert.platform}</p>
                  </div>

                  <p className="text-muted-foreground text-sm font-light leading-relaxed flex-1 mb-5">{cert.shortDesc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.skills.slice(0, 3).map((s, si) => (
                      <span key={si} className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/10 text-white/60">{s}</span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className={`rounded-full text-xs h-8 flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 gap-1`}>
                          <BookOpen className="w-3.5 h-3.5" /> View Details
                        </Button>
                      </DialogTrigger>
                      <CertModal cert={cert} />
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className={`rounded-full text-xs h-8 flex-1 border-white/10 bg-white/[0.03] hover:bg-white/10 text-white/80 gap-1`}>
                          <Award className="w-3.5 h-3.5" /> Certificate
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[700px] bg-[#0D0D0D]/98 backdrop-blur-xl border border-white/10 p-4">
                        <DialogHeader className="mb-3">
                          <DialogTitle className="text-white text-base">{cert.title}</DialogTitle>
                        </DialogHeader>
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                          <img src={cert.certificateSrc} alt={`${cert.title} certificate`} className="w-full object-contain" />
                        </div>
                        {cert.verifyLink && (
                          <div className="pt-3 flex justify-center">
                            <a href={cert.verifyLink} target="_blank" rel="noreferrer">
                              <Button size="sm" variant="outline" className="rounded-full text-xs h-8 border-white/10 bg-white/5 hover:bg-white/10 text-white gap-1.5">
                                <ExternalLink className="w-3.5 h-3.5" /> Verify on Coursera
                              </Button>
                            </a>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUpVariant} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Let's build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">future.</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-4 mb-10">
              <a href="mailto:396.swara@gmail.com" className="group">
                <Button size="lg" className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 h-14 px-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Mail className="w-5 h-5 mr-3" /> Email Me
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/swara-453a2835b/" target="_blank" rel="noreferrer" className="group">
                <Button size="lg" className="rounded-full bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 text-white border border-[#0A66C2]/30 h-14 px-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0A66C2]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Linkedin className="w-5 h-5 mr-3" /> LinkedIn
                </Button>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="group">
                <Button size="lg" className="rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 h-14 px-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Github className="w-5 h-5 mr-3" /> GitHub
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-muted-foreground font-light">
              <a href="mailto:396.swara@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary/70" />
                <span>396.swara@gmail.com</span>
              </a>
              <a href="tel:+919373465682" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-secondary/70" />
                <span>+91 93734 65682</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground text-sm font-light">
        <p>© {new Date().getFullYear()} Portfolio. Designed & Engineered with precision.</p>
      </footer>
    </div>
  );
}
