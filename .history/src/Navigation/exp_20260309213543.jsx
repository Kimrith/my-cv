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
      {/* Period Badge - matching your skill pill style */}
      <div className="inline-block px-3 py-1.5 bg-purple-900/40 border border-purple-500/30 rounded-lg text-xs text-purple-300 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block mr-1.5"></span>
        {exp.period}
      </div>

      {/* Title and Institution */}
      <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
      <p className="text-sm text-purple-400 mb-3">{exp.institution}</p>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {exp.description}
      </p>

      {/* Achievements - matching your style */}
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
    <div className="mt-16">
      {/* Main Content Container - matching your max-w-4xl mx-auto */}
      <div className="max-w-4xl mx-auto">
        {/* Work Experience Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <span className="text-xs font-medium text-purple-300">Work</span>
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

        {/* Education Projects Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <span className="text-xs font-medium text-purple-300">Study</span>
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

        {/* Tech Stack Used - matching your skill pills style */}
        <div className="bg-slate-800/30 border border-white/5 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white">
              Technologies Used
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Angular",
              "Node.js",
              "MongoDB",
              "RESTful APIs",
              "JWT Auth",
              "CRUD Operations",
              "E-commerce",
              "Admin Dashboard",
              "Responsive Design",
              "Database Management",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-purple-900/40 border border-purple-500/30 rounded-lg text-sm text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-colors cursor-default flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
