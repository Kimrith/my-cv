import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  Code2,
  Database,
  Shield,
  Award,
  ChevronRight,
  GraduationCap,
  Github,
  ExternalLink,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Ministry of Interior",
      period: "3 Months",
      duration: "Internship",
      description: [
        "Developed and maintained responsive frontend interfaces for internal government systems",
        "Collaborated with the development team to implement UI/UX designs",
        "Optimized application performance and ensured cross-browser compatibility",
        "Participated in code reviews and agile development processes",
      ],
      technologies: ["Angular", "TypeScript", "Tailwind CSS"],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Full-Stack E-Commerce + POS Platform",
      description:
        "Built a complete e-commerce solution with both admin and customer interfaces",
      features: [
        "User authentication and authorization system",
        "Complete CRUD operations for products and inventory",
        "Shopping cart functionality and order management",
        "Admin dashboard with analytics and user management",
      ],
      technologies: [
        "Angular",
        "Node.js Express",
        "MongoDB",
        "JWT",
        "Chart.js",
        "Tailwind CSS",
      ],
      type: "Full-Stack Application",
    },
    {
      id: 2,
      title: "Chat Game Application",
      description:
        "Real-time chat application with integrated gaming features where users can chat and play multiplayer games",
      features: [
        "Real-time messaging with Socket.io for instant communication",
        "Multiplayer game integration within chat rooms",
        "User presence indicators and online status",
        "Private and group chat rooms with game lobbies",
        "Game score tracking and leaderboards",
        "User authentication and profile management",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Express",
        "Tailwind CSS",
      ],
      type: "Real-Time Chat & Gaming Platform",
    },
    {
      id: 3,
      title: "Point of Sale (POS) System",
      description:
        "A responsive frontend POS application that integrates with backend APIs for product management and sales processing",
      features: [
        "Mobile-first responsive design for use on tablets and smartphones",
        "Add to cart functionality with quantity management",
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "Tailwind CSS",
        "RxJS",
        "Angular Material",
      ],
      type: "Frontend POS Application",
    },
  ];

  const SkillPill = ({ skill, color = "purple" }) => (
    <span
      className={`px-3 py-1.5 bg-${color}-900/40 border border-${color}-500/30 rounded-lg text-sm text-${color}-300 hover:bg-${color}-500/20 hover:border-${color}-400 transition-colors cursor-default flex items-center gap-1.5`}
    >
      <span className={`w-1.5 h-1.5 rounded-full bg-${color}-400`}></span>
      {skill}
    </span>
  );

  const StatBox = ({ icon, label, desc, color = "purple" }) => (
    <div
      className={`bg-slate-800/30 border border-white/5 rounded-xl p-4 text-center hover:border-${color}-500/30 transition-colors`}
    >
      <div
        className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-${color}-500/20 flex items-center justify-center`}
      >
        <svg
          className={`w-5 h-5 text-${color}-400`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={icon}
          />
        </svg>
      </div>
      <p className="text-white font-semibold text-sm">{label}</p>
      <p className="text-gray-500 text-xs">{desc}</p>
    </div>
  );

  return (
    <div className="space-y-16 bg-slate-900 py-16 px-4 md:px-8">
      {/* Professional Experience Section */}
      <section className="relative">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
          style={{
            backgroundImage: "url('/path/to/your/background-pattern.svg')",
            opacity: "0.05",
          }}
        ></div>

        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Professional <span className="text-purple-400">Experience</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Practical industry experience gained through internships and
              real-world projects
            </p>
            <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Experience Card */}
          {experiences.map((exp) => (
            <div key={exp.id} className="max-w-4xl mx-auto">
              <div className="bg-slate-800/40 border border-white/5 rounded-2xl shadow-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl">
                {/* Company Header */}
                <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 px-6 py-4 border-b border-white/5">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Building className="w-5 h-5 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                      <Shield className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-300 text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Position and Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-purple-400" />
                      Key Responsibilities
                    </h5>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-purple-400 font-bold text-lg leading-5">
                            •
                          </span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-white mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-purple-900/40 border border-purple-500/30 rounded-lg text-sm text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Projects Section */}
      <section className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Academic <span className="text-purple-400">Projects</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Full-stack applications built since my second year of study,
            demonstrating practical skills
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Overview */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 p-6 rounded-2xl mb-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Technical Expertise
              </h3>
              <p className="text-gray-400 text-sm">
                Since my second year of study, I have built full-stack web
                applications using Angular, Node.js, and MongoDB. My experience
                includes both admin dashboards and customer-facing interfaces.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 px-4 py-2 rounded-full">
                <Database className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">
                  MongoDB
                </span>
              </div>
              <div className="flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 px-4 py-2 rounded-full">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">
                  Angular + Node.js
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/40 border border-white/5 rounded-xl shadow-lg overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6">
                {/* Type Badge */}
                <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium rounded-full mb-4">
                  {project.type}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-gray-300"
                      >
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-10 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Hands-on Development Experience
              </h3>
              <p className="text-gray-300 max-w-2xl">
                Through these projects, I have strengthened my problem-solving
                skills and gained hands-on experience building responsive
                frontend designs, developing RESTful APIs, and managing
                databases. I've worked on user authentication, CRUD operations,
                and e-commerce functionality.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-purple-300">
                  RESTful APIs
                </span>
              </div>
              <div className="bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-purple-300">
                  Database Design
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBox
            icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            label="3 Months"
            desc="Experience"
            color="purple"
          />
          <StatBox
            icon="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            label="100%"
            desc="Dedication"
            color="purple"
          />
          <StatBox
            icon="M13 10V3L4 14h7v7l9-11h-7z"
            label="Fast"
            desc="Learner"
            color="purple"
          />
          <StatBox
            icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            label="Team"
            desc="Player"
            color="purple"
          />
        </div>
      </section>
    </div>
  );
}
