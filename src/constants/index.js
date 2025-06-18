import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const TECH_CATEGORIES = {
  frontend: {
    title: "Frontend",
    description: "Creating beautiful, responsive user interfaces",
    technologies: [
      { name: "React", icon: "RiReactjsLine", color: "text-cyan-400" },
      { name: "Next.js", icon: "SiNextdotjs", color: "text-white" },
      { name: "JavaScript", icon: "DiJavascript1", color: "text-yellow-400" },
      { name: "TypeScript", icon: "SiTypescript", color: "text-blue-400" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-400" },
    ]
  },
  backend: {
    title: "Backend",
    description: "Building robust server-side applications",
    technologies: [
      { name: "Node.js", icon: "DiNodejs", color: "text-green-400" },
      { name: "Python", icon: "DiPython", color: "text-blue-400" },
      { name: "Express", icon: "SiExpress", color: "text-gray-400" },
      { name: "Django", icon: "DiDjango", color: "text-green-600" },
      { name: "REST APIs", icon: "SiPostman", color: "text-orange-400" },
    ]
  },
  infrastructure: {
    title: "Infrastructure",
    description: "Deploying and scaling applications",
    technologies: [
      { name: "MongoDB", icon: "SiMongodb", color: "text-green-500" },
      { name: "PostgreSQL", icon: "SiPostgresql", color: "text-blue-400" },
      { name: "MySQL", icon: "DiMysql", color: "text-blue-500" },
      { name: "Docker", icon: "SiDocker", color: "text-blue-400" },
      { name: "AWS", icon: "SiAmazon", color: "text-orange-400" },
    ]
  }
};

export const MyServices = [
  {
      id: "01",
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React.js, Next.js, and modern CSS frameworks like Tailwind. Expert solutions tailored to your technical challenges.",
      icon: "💻"
  },
  {
      id: "02",
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and Python to power your digital products. Scalable architecture design and implementation.",
      icon: "⚙️"
  },
  {
      id: "03",
      title: "API Development",
      description: "Design and implementation of RESTful and GraphQL APIs that enable seamless communication between systems. Comprehensive API documentation included.",
      icon: "🔗"
  },
  {
      id: "04",
      title: "Database Architecture",
      description: "Expert database design, optimization, and migration services for PostgreSQL, MongoDB, and other systems. Performance tuning and data integrity assured.",
      icon: "🗄️"
  },
  {
      id: "05",
      title: "Full-Stack Web Apps",
      description: "End-to-end development of web applications that deliver exceptional user experiences with solid architecture. Complete project lifecycle management.",
      icon: "🌐"
  },
  {
      id: "06",
      title: "Security Implementation",
      description: "Implementing robust authentication, authorization, and data protection measures for your applications. Comprehensive security audits and vulnerability assessments.",
      icon: "🔒"
  },
]