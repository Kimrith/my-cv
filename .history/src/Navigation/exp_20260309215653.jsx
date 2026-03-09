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
    <section className="py-16 w-full max-sm:py-16 max-sm:px-4 max-sm:bg-slate-900 relative">
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

        {/* Work Experience Section */}
        <div className="mb-12">
          {/* Section sub-header with icon - matching your style */}
          <div className="flex items-center gap-3 mb-6">
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white">
              Professional Experience
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experienceData.work.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} type="work" />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          {/* Section sub-header with icon - matching your style */}
          <div className="flex items-center gap-3 mb-6">
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
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white">
              Academic Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experienceData.education.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} type="education" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
