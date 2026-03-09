import React from "react";

const Experience = () => {
  const experienceData = {
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
  };

  const ExperienceCard = ({ exp, type }) => (
    <div className="bg-slate-800/30 border border-white/5 rounded-xl p-6 hover:border-purple-500/30 transition-all hover:translate-y-[-2px]">
      {/* Period Badge - matching SkillPill style */}
      <div className="inline-block px-3 py-1.5 bg-purple-900/40 border border-purple-500/30 rounded-lg text-xs text-purple-300 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block mr-1.5"></span>
        {exp.period}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2">{exp.title}</h3>

      {/* Institution with icon - matching your style */}
      <p className="text-sm text-purple-400 mb-3 flex items-center gap-1">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l14-2"
          />
        </svg>
        {exp.institution}
      </p>

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
      {/* Background Pattern - matching About Me */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/path/to/your/background-pattern.svg')",
          opacity: "0.05",
        }}
      ></div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section Header - matching About Me style */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
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

        {/* Tech Stack Stats - matching your StatBox style */}
        <div className="mt-12">
          <div className="flex items-center justify-center gap-3 mb-6">
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
            <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
          </div>

          {/* Tech Tags - matching your SkillPill style exactly */}
          <div className="bg-slate-800/30 border border-white/5 rounded-xl p-6">
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

        {/* Quick Stats - matching your StatBox style exactly */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/30 border border-white/5 rounded-xl p-4 text-center hover:border-purple-500/30 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-purple-500/20 flex items-center justify-center">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-white font-semibold text-sm">10+</p>
            <p className="text-gray-500 text-xs">Technologies</p>
          </div>

          <div className="bg-slate-800/30 border border-white/5 rounded-xl p-4 text-center hover:border-purple-500/30 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-purple-500/20 flex items-center justify-center">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <p className="text-white font-semibold text-sm">4</p>
            <p className="text-gray-500 text-xs">Projects</p>
          </div>

          <div className="bg-slate-800/30 border border-white/5 rounded-xl p-4 text-center hover:border-purple-500/30 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-purple-500/20 flex items-center justify-center">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <p className="text-white font-semibold text-sm">1+</p>
            <p className="text-gray-500 text-xs">Years Exp</p>
          </div>

          <div className="bg-slate-800/30 border border-white/5 rounded-xl p-4 text-center hover:border-purple-500/30 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-purple-500/20 flex items-center justify-center">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <p className="text-white font-semibold text-sm">Team</p>
            <p className="text-gray-500 text-xs">Player</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
