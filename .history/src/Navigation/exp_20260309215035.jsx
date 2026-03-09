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

  const ExperienceCard = ({ exp, type }) => (
    <div className="group relative">
      {/* Gradient Border Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>

      {/* Card Content */}
      <div className="relative bg-slate-800/90 border border-white/10 rounded-xl p-6 hover:border-transparent transition-all duration-300">
        {/* Period Badge with Icon */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
            {type === "work" ? (
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            ) : (
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
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20l9-5-9-5-9 5 9 5z"
                />
              </svg>
            )}
          </div>
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-medium text-purple-300">
            {exp.period}
          </span>
        </div>

        {/* Title and Institution */}
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
          {exp.title}
        </h3>
        <p className="text-sm text-purple-400/80 mb-4 flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l14-2M9 9h6M9 13h3"
            />
          </svg>
          {exp.institution}
        </p>

        {/* Description with Quote Icon */}
        <div className="relative mb-4">
          <svg
            className="absolute -top-2 -left-1 w-4 h-4 text-purple-500/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-300 text-sm leading-relaxed pl-4">
            {exp.description}
          </p>
        </div>

        {/* Achievements with Gradient Line */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent"></div>
          {exp.achievements && (
            <ul className="space-y-2 pl-4">
              {exp.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-300 group/achievement"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 group-hover/achievement:scale-125 transition-transform"></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-transparent transform rotate-45 translate-x-6 -translate-y-6"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-20 w-full flex justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl px-4 relative z-10">
        {/* Section Header with Animation */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <svg
                className="w-6 h-6 text-white"
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
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Experience
              </span>
              <span className="text-purple-400"> & Education</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic achievements that have shaped
            my skills
          </p>
        </div>

        {/* Timeline Style Layout */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent transform md:-translate-x-1/2 hidden md:block"></div>

          {/* Work Experience */}
          <div className="relative mb-16">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-2xl font-bold text-white">
                Professional Journey
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {experienceData.work.map((exp, index) => (
                <div key={index} className="md:even:translate-y-8">
                  <ExperienceCard exp={exp} type="work" />
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 20l9-5-9-5-9 5 9 5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Academic Background
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {experienceData.education.map((exp, index) => (
                <div key={index} className="md:even:translate-y-8">
                  <ExperienceCard exp={exp} type="education" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
      </div>
    </div>
  );
};

export default Experience;
