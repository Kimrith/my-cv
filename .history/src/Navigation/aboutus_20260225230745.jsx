export default function Aboutus() {
  const aboutData = {
    personal: {
      name: "Chey Kimrith",
      bio: [
        {
          type: "paragraph",
          content: `Hi, I'm <span class="text-purple-400 font-medium">Chey Kimrith</span>, a Frontend Developer who loves building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean interfaces using React and Tailwind CSS.`,
        },
        {
          type: "paragraph",
          content: `I am a creative and motivated Frontend Web Developer with a
        strong foundation in web technologies. With 1 year of 
        experience at the <a href="https://www.interior.gov.kh/en"
        <span class="text-purple-400 font-medium 
        underline underline-offset-4 decoration-purple-500/50 
        hover:decoration-purple-400 transition-all cursor-pointer">
        Ministry of Interior</span></a>
        , I have developed a solid
        understanding of building responsive and user-friendly web
        applications. I am passionate about creating clean interfaces, solving
        problems, and continuously improving my skills. I have experience
        working with modern frontend tools and enjoy turning ideas into
        functional designs. I am eager to apply my knowledge and grow in a
        professional environment where I can contribute to innovative and
        impactful digital solutions.`,
        },
      ],
    },
    skills: {
      frontend: {
        title: "Frontend",
        icon: (
          <svg
            className="w-4.5 h-4.5 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Tailwind",
          "Bootstrap",
          "Angular",
        ],
      },
      backend: {
        title: "Backend",
        icon: (
          <svg
            className="w-4.5 h-4.5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        ),
        skills: ["Node.js", "Express", "NestJS"],
      },
      database: {
        title: "Database",
        icon: (
          <svg
            className="w-4.5 h-4.5 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>
        ),
        skills: ["MongoDB", "MySQL"],
      },
      tools: {
        title: "Tools",
        icon: (
          <svg
            className="w-4.5 h-4.5 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V3m0 3v3m0-3h3m-3 0H9m12 6v-3m0 3v3m0-3h3m-3 0h-3m-9 6V9m0 3v3m0-3H3m3 0h3m9-9l-3 3m0 0l3 3m-3-3l-3-3m3 3l3-3"
            />
          </svg>
        ),
        skills: ["Git", "GitHub", "VS Code", "Apache Netbeans", "Figma"],
      },
    },
    stats: [
      {
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        label: "1+ Years",
        desc: "Experience",
      },
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        label: "100%",
        desc: "Dedication",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        label: "Fast",
        desc: "Learner",
      },
      {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        label: "Team",
        desc: "Player",
      },
    ],
    school: [
      {
        icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z",
        label: "2019 - 2024",
        desc: "Sovanaphumi",
      },
      {
        icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z",
        label: "2024 - Present (Year 4)",
        desc: "SETEC Institute",
      },
    ],
  };

  const SkillPill = ({ skill }) => (
    <span className="px-3 py-1.5 bg-purple-900/40 border border-purple-500/30 rounded-lg text-sm text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-colors cursor-default flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
      {skill}
    </span>
  );

  const StatBox = ({ stat }) => (
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
            d={stat.icon}
          />
        </svg>
      </div>
      <p className="text-white font-semibold text-sm">{stat.label}</p>
      <p className="text-gray-500 text-xs">{stat.desc}</p>
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
        {/* Section Header with Icon */}
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-purple-400">Me</span>
          </h2>
        </div>

        {/* Bio Content */}
        <div className="bg-slate-800/40 border border-white/5 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div className="space-y-4 text-left">
              {aboutData.personal.bio.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-300 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></p>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
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
                d="M12 2l3 7h7l-5.5 4.5L18 21l-6-3.5L6 21l1.5-7.5L2 9h7l3-7z"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Expertise
          </h2>
        </div>
        <div className="space-y-6">
          {Object.values(aboutData.skills).map((category) => (
            <div
              key={category.title}
              className="bg-slate-800/30 border border-white/5 rounded-xl p-5 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {aboutData.stats.map((stat) => (
            <StatBox key={stat.label} stat={stat} />
          ))}
        </div>

        {/* School */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {aboutData.school.map((stat) => (
            <StatBox key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
