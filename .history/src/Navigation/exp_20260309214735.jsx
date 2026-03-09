import React from "react";

const Experience = () => {
  const experienceData = {
    education: [
      {
        period: "2024 - Present",
        title: "Full-Stack Development Projects",
        institution: "SETEC Institute - Year 4",
        description:
          "Building full-stack web applications using Angular, Node.js, and MongoDB. Developing admin dashboards and customer-facing interfaces with authentication and CRUD functionality.",
        achievements: [
          "Created responsive frontend designs with modern frameworks",
          "Developed RESTful APIs for seamless data integration",
          "Implemented database management with MongoDB",
          "Strengthened problem-solving skills through real projects",
        ],
      },
    ],
    work: [
      {
        period: "3 Months",
        title: "Frontend Developer",
        institution: "Ministry of Interior",
        description:
          "Worked on frontend development projects, building responsive interfaces and improving UI/UX in government web systems.",
        achievements: [
          "Collaborated with development team",
          "Applied modern frontend technologies",
          "Improved UI consistency and usability",
        ],
      },
    ],
  };

  const ExperienceCard = ({ exp }) => (
    <div className="bg-slate-800/30 border border-white/5 rounded-xl p-6 hover:border-purple-500/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
      {/* period */}
      <div className="inline-flex items-center gap-2 px-3 py-1 text-xs bg-purple-900/40 border border-purple-500/30 rounded-lg text-purple-300 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
        {exp.period}
      </div>

      {/* title */}
      <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>

      {/* institution */}
      <p className="text-sm text-purple-400 mb-3">{exp.institution}</p>

      {/* description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {exp.description}
      </p>

      {/* achievements */}
      <ul className="space-y-2">
        {exp.achievements.map((item, index) => (
          <li key={index} className="flex gap-2 text-sm text-gray-300">
            <span className="text-purple-400">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-20 flex justify-center">
      <div className="max-w-5xl w-full px-4">
        {/* section header */}
        <div className="flex items-center justify-center gap-3 mb-14">
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Experience <span className="text-purple-400">& Education</span>
          </h2>
        </div>

        <div className="flex flex-col gap-14">
          {/* Work */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="px-3 py-1 text-xs rounded-lg bg-purple-500/20 text-purple-300">
                Work
              </span>
              Professional Experience
            </h3>

            <div className="flex flex-wrap gap-6">
              {experienceData.work.map((exp, index) => (
                <div key={index} className="w-full md:w-[48%]">
                  <ExperienceCard exp={exp} />
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="px-3 py-1 text-xs rounded-lg bg-purple-500/20 text-purple-300">
                Study
              </span>
              Academic Projects
            </h3>

            <div className="flex flex-wrap gap-6">
              {experienceData.education.map((exp, index) => (
                <div key={index} className="w-full md:w-[48%]">
                  <ExperienceCard exp={exp} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
