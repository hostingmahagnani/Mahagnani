export interface Module {
  title: string
  topics: string[]
}

export interface Course {
  id: string
  title: string
  subtitle: string
  shortDescription: string
  learningOutcomes: string[]
  requirements: string[]
  instructor: string
  duration: string
  level: string
  image: string // added image field
  modules: Module[]
}

const courses: Course[] = [
  {
    id: "python-data-science",
    title: "Python for Data Science – Complete Course",
    subtitle: "Master Python programming for data analysis, visualization, and machine learning.",
    shortDescription:
      "Go from beginner to expert in Python for Data Science. Learn NumPy, Pandas, Matplotlib, and Scikit-Learn with hands-on projects.",
    learningOutcomes: [
      "Master Python programming from scratch",
      "Perform data analysis with Pandas",
      "Create professional visualizations with Matplotlib and Seaborn",
      "Build machine learning models with Scikit-Learn",
      "Handle large datasets efficiently with NumPy",
    ],
    requirements: [
      "Basic understanding of computers",
      "No prior programming experience required",
      "A computer with internet access",
    ],
    instructor: "Mahagnani Tech Team",
    duration: "40 hours",
    level: "Beginner to Advanced",
    image: "/courses/python-ds.jpg", // added course image path
    modules: [
      {
        title: "Module 1: Introduction to Python for Data Science",
        topics: [
          "What is Data Science?",
          "Installing Python and Jupyter Notebook",
          "Python Syntax and Variables",
          "Data Types and Operators",
        ],
      },
      {
        title: "Module 2: Advanced Python Programming",
        topics: [
          "Control Flow: Loops and Conditionals",
          "Functions and Modules",
          "Error Handling and Debugging",
          "File I/O Operations",
        ],
      },
      {
        title: "Module 3: Data Analysis with NumPy",
        topics: [
          "NumPy Arrays and Operations",
          "Indexing and Slicing",
          "Mathematical Functions",
          "Linear Algebra with NumPy",
        ],
      },
      {
        title: "Module 4: Data Manipulation with Pandas",
        topics: [
          "DataFrames and Series",
          "Reading and Writing Data",
          "Data Cleaning and Preparation",
          "Groupby and Pivot Tables",
        ],
      },
      {
        title: "Module 5: Data Visualization",
        topics: [
          "Plotting with Matplotlib",
          "Statistical Visualization with Seaborn",
          "Interactive Plots",
          "Customizing Visualizations",
        ],
      },
    ],
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering – Complete Course",
    subtitle: "Unlock the full potential of Generative AI through expert-level prompt design.",
    shortDescription:
      "Learn the art and science of prompt engineering. Master techniques for ChatGPT, Claude, and Midjourney to boost productivity.",
    learningOutcomes: [
      "Understand the mechanics of Large Language Models",
      "Master zero-shot and few-shot prompting techniques",
      "Learn to use Chain-of-Thought prompting for complex tasks",
      "Optimize AI outputs for business and technical workflows",
      "Automate repetitive tasks using advanced AI prompting",
    ],
    requirements: [
      "Familiarity with ChatGPT or similar AI tools",
      "Interest in Generative AI",
      "No technical background required",
    ],
    instructor: "Mahagnani AI Lab",
    duration: "15 hours",
    level: "Intermediate",
    image: "/courses/prompt-eng.jpg", // added course image path
    modules: [
      {
        title: "Module 1: Foundations of Prompt Engineering",
        topics: [
          "How LLMs Work",
          "The Anatomy of a Perfect Prompt",
          "Common Pitfalls and How to Avoid Them",
          "Tokenization and Context Windows",
        ],
      },
      {
        title: "Module 2: Advanced Prompting Techniques",
        topics: [
          "Chain of Thought Prompting",
          "Few-Shot and Zero-Shot Learning",
          "Prompt Chaining and Sequencing",
          "Role-Based Prompting",
        ],
      },
      {
        title: "Module 3: AI for Productivity",
        topics: [
          "Automating Email and Documentation",
          "AI-Powered Research and Synthesis",
          "Content Generation Workflows",
          "Debugging and Refining AI Outputs",
        ],
      },
    ],
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst – HandsOn Course",
    subtitle: "Protect digital assets and defend against cyber threats with practical security skills.",
    shortDescription:
      "Become a certified Cybersecurity Analyst. Learn network security, ethical hacking, and incident response through hands-on labs.",
    learningOutcomes: [
      "Identify and mitigate security vulnerabilities",
      "Secure networks and infrastructure",
      "Understand the principles of ethical hacking",
      "Perform risk assessments and security audits",
      "Respond effectively to cyber incidents",
    ],
    requirements: [
      "Basic knowledge of networking (recommended)",
      "Strong problem-solving skills",
      "A passion for digital security",
    ],
    instructor: "Mahagnani Security Squad",
    duration: "45 hours",
    level: "Intermediate",
    image: "/courses/cybersecurity.jpg", // added course image path
    modules: [
      {
        title: "Module 1: Introduction to Cybersecurity",
        topics: [
          "The Threat Landscape",
          "Security Principles (CIA Triad)",
          "Legal and Ethical Frameworks",
          "Cybersecurity Roles and Responsibilities",
        ],
      },
      {
        title: "Module 2: Network Security",
        topics: [
          "TCP/IP Fundamentals",
          "Firewalls and Intrusion Detection Systems",
          "VPNs and Secure Access",
          "Network Monitoring Tools",
        ],
      },
      {
        title: "Module 3: Ethical Hacking and Vulnerability Assessment",
        topics: [
          "Scanning and Enumeration",
          "Vulnerability Scanning",
          "Exploitation Basics",
          "Report Writing and Mitigation",
        ],
      },
    ],
  },
  {
    id: "ai-web-dev-bootcamp",
    title: "AI-Enhanced Web Development Bootcamp",
    subtitle: "Build modern, intelligent web applications using React, Next.js, and AI integrations.",
    shortDescription:
      "Combine traditional web development with modern AI. Master React and Next.js while learning to integrate AI features into your apps.",
    learningOutcomes: [
      "Build responsive web apps with React and Next.js",
      "Integrate AI SDKs for text and image generation",
      "Master modern styling with Tailwind CSS",
      "Deploy scalable applications to Vercel",
      "Create AI-driven user experiences",
    ],
    requirements: [
      "Basic HTML, CSS, and JavaScript knowledge",
      "A computer with Node.js installed",
      "Familiarity with VS Code",
    ],
    instructor: "Mahagnani Dev Team",
    duration: "50 hours",
    level: "Advanced",
    image: "/courses/ai-web-dev.jpg", // added course image path
    modules: [
      {
        title: "Module 1: Modern Web Foundations",
        topics: [
          "React Essentials and Hooks",
          "Next.js App Router",
          "Tailwind CSS Layouts",
          "State Management in Modern Apps",
        ],
      },
      {
        title: "Module 2: AI Integration",
        topics: [
          "Using Vercel AI SDK",
          "Prompt Engineering for Web Devs",
          "Streaming AI Responses",
          "Generating and Manipulating Images via API",
        ],
      },
      {
        title: "Module 3: Full-Stack AI Apps",
        topics: [
          "Database Integration with Neon/Supabase",
          "Authentication with Clerk/Auth.js",
          "Building an AI SaaS Project",
          "Deployment and Scaling",
        ],
      },
    ],
  },
]

export function getAllCourses(): Course[] {
  return courses
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id)
}
