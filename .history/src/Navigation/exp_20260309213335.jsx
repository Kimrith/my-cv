import React from "react";

const Experience = () => {
  const experienceData = {
    education: [
      {
        period: "2024 - Present",
        title: "Full-Stack Development Projects",
        institution: "SETEC Institute - Year 4",
        description:
          "Building full-stack web applications using Angular, Node.js, and MongoDB. Developing admin dashboards and customer-facing interfaces with user authentication, CRUD operations, and e-commerce functionality.",
        achievements: [
          "Created responsive frontend designs with modern frameworks",
          "Developed RESTful APIs for seamless data integration",
          "Implemented database management with MongoDB",
          "Strengthened problem-solving skills through hands-on projects",
        ],
      },
    ],
    work: [
      {
        period: "3 months",
        title: "Frontend Developer",
        institution: "Ministry of Interior",
        description:
          "Contributed to frontend development projects, gaining practical experience in building responsive web applications within a government environment.",
        achievements: [
          "Collaborated with team members on frontend implementation",
          "Applied modern web technologies in real-world projects",
          "Developed user-friendly interfaces following best practices",
        ],
      },
    ],
  };

  const ExperienceCard = ({ exp }) => (
    <div className="bg-slate-800/30 border border-white/5 rounded-xl p-6 hover:border-purple-500/30 transition-all hover:translate-y-[-2px]">
      {/* Period Badge */}
      <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30 mb-4">
        {exp.period}
      </div>

      {/* Title and Institution */}
      <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
      <p className="text-sm text-purple-400 mb-3">{exp.institution}</p>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {exp.description}
      </p>

      {/* Achievements */}
      {exp.achievements && (
        <ul className="space-y-2">
          {exp.achievements.map((achievement, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <svg
                className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="py-16 max-sm:py-16 max-sm:px-4 max-sm:bg-slate-900 relative">
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/path/to/your/background-pattern.svg')", // Add a subtle background pattern
          opacity: "0.05",
        }}
      ></div>
      <div className="max-w-4xl mx-auto relative">
          <svg
            className="w-5 h-5 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Experience <span className="text-purple-400">& Education</span>
        </h2>
      </div>

      {/* Timeline Layout */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent hidden md:block"></div>

        <div className="space-y-8">
          {/* Work Experience */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <span className="text-xs font-medium text-purple-300">
                  Work
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Professional Experience
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {experienceData.work.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>
          </div>

          {/* Education Projects */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <span className="text-xs font-medium text-purple-300">
                  Study
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Academic Projects
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {experienceData.education.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Used */}
      <div className="mt-8 bg-slate-800/20 border border-white/5 rounded-xl p-6">
        <h4 className="text-sm font-medium text-gray-400 mb-3">
          Technologies I've worked with:
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Angular",
            "Node.js",
            "MongoDB",
            "RESTful APIs",
            "Authentication",
            "CRUD",
            "E-commerce",
            "Admin Dashboard",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-purple-900/20 border border-purple-500/20 rounded-lg text-xs text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
