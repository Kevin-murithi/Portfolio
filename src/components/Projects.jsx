import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiExternalLink, FiGithub, FiArrowRight, FiCode, FiStar } from "react-icons/fi";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import afriHealth from "../assets/projects/afriHealth.png"
import tamu from "../assets/projects/tamu.png";
import vinePulse from "../assets/projects/vinePulse.png";
import nannyCare from "../assets/projects/nannyCare.png"
// Mock project data with enhanced details
const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "TAMU",
    description: "TAMU is a digital platform designed to help African food businesses—from street vendors to upscale restaurants—manage, grow, and thrive in today's market. The platform provides tools for: Digital menu management, Real-time GrOrderedList, ProcessingInstruction, Customer relationship management, Analytics and insights",
    image: tamu,
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io", "React-Native"],
    category: ["Web App, Mobile App"],
    status: "Live",
    featured: true,
    stats: { stars: 89, forks: 23, commits: 156 },
    links: {
      live: "https://www.tamufoods.app/",
      github: "",
      case_study: "#"
    },
    highlights: ["Team collaboration", "Real-time sync", "Analytics dashboard"]
  },
  {
    id: 2,
    title: "NannyCare",
    description: "NannyCare is an AI-powered healthcare staffing platform designed for Africa that connects caregivers, recruiters, and care facilities to streamline the entire placement journey. It enables recruiters to post roles, review applications, manage contracts, and access insights; empowers caregivers to find meaningful jobs, upload certifications, track application status, and build professional profiles; and helps clients/facilities search qualified caregivers, review credentials, schedule interviews, and manage care teams. With a focus on “Connecting Care Through Intelligence,” NannyCare centralizes hiring and workforce management to make healthcare staffing faster, smarter, and more transparent.",
    image: nannyCare,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
    category: "Web App",
    status: "Live",
    featured: true,
    stats: { stars: 124, forks: 45, commits: 287 },
    links: {
      live: "https://chai-week-7.vercel.app/",
      github: "",
      case_study: "#"
    },
    highlights: ["Real-time inventory", "AI recommendations", "Payment gateway"]
  },
  {
    id: 3,
    title: "AfriHealth AI Hub",
    description: "AfriHealth AI Hub is a comprehensive, offline-first health information system designed to strengthen African health systems through AI-powered insights, real-time outbreak detection, and seamless data management across diverse healthcare environments.",
    image: afriHealth,
    technologies: ["Next.js", "D3.js", "Express", "TypeScript", "WebSocket"],
    category: "Web App",
    status: "Live",
    featured: false,
    stats: { stars: 156, forks: 34, commits: 198 },
    links: {
      live: "https://afrihealth-ai-hub.vercel.app/",
      github: "",
      case_study: "#"
    },
    highlights: ["Real-time data", "Custom reports", "Interactive charts"]
  },
  {
    id: 4,
    title: "VinePulse",
    description: "VinePulse is an AI-powered, 360° news platform that delivers a personalized yet balanced news experience across formats, combining a smart recommendation engine that avoids echo chambers with immersive storytelling through interactive timelines, data visualizations, and rich media. It keeps you ahead with real-time updates, trending analysis, and content tailored to your interests, while ensuring diverse perspectives that deepen understanding rather than narrow it. With a modern, engaging interface and seamless calls to action—from exploring features to joining the platform—VinePulse aims to make staying informed both insightful and enjoyable.",
    image: vinePulse,
    technologies: ["TypeScript", "Next.js", "express", "React", "Docker", "GCP", "MongoDB"],
    category: "AI/ML, Web App",
    status: "Beta",
    featured: true,
    stats: { stars: 203, forks: 67, commits: 342 },
    links: {
      live: "",
      github: "",
      case_study: "#"
    },
    highlights: ["AI-powered", "Multi-format output", "API integration"]
  }

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? FEATURED_PROJECTS : FEATURED_PROJECTS.slice(0, 4);

  return (
    <div className="border-b border-neutral-800 pb-24 pt-12 mb-20" id="Projects" ref={ref}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full mb-6"
        >
          <FiCode className="text-cyan-400" />
          <span className="text-sm font-medium text-cyan-400">Featured Work</span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
          Projects & Creations
        </h2>

        <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
          A showcase of innovative solutions and creative implementations,
          each project representing a unique challenge solved with modern technologies
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-10" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border ${
                    project.status === 'Live'
                      ? 'bg-green-500/20 border-green-500/30 text-green-400'
                      : 'bg-orange-500/20 border-orange-500/30 text-orange-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay with Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center gap-4 z-20"
                  style={{ pointerEvents: hoveredProject === project.id ? 'auto' : 'none' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (project.links?.live) {
                        window.open(project.links.live, "_blank", "noopener,noreferrer");
                      } else {
                        alert("This project is currently in beta and not publicly available.");
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-200"
                  >
                    <FiExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors duration-200"
                  >
                    <FiGithub size={16} />
                    <span className="text-sm font-medium">Source</span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FiStar size={14} />
                    <span className="text-sm font-medium">{project.stats.stars}</span>
                  </div>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-300 rounded-md"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-neutral-800/50 border border-neutral-700 text-neutral-300 rounded-md hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs text-neutral-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.1), transparent)',
                  padding: '1px',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-500/40 transition-all duration-300"
          >
            <span className="font-medium">
              {showAll ? 'Show Less Projects' : 'View More Projects'}
            </span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
