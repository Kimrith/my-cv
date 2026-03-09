import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description: [
        "Lead the development of responsive web applications using React and TypeScript",
        "Implemented state management solutions with Redux and Context API",
        "Mentored junior developers and conducted code reviews",
        "Optimized application performance resulting in 40% faster load times",
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Next.js"],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      location: "New York, NY",
      period: "Mar 2019 - Dec 2021",
      description: [
        "Developed and maintained multiple client websites and web applications",
        "Collaborated with UX designers to implement responsive designs",
        "Integrated RESTful APIs and handled data visualization",
        "Participated in Agile development processes and sprint planning",
      ],
      technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Creative Agency",
      location: "Austin, TX",
      period: "Jun 2017 - Feb 2019",
      description: [
        "Built responsive websites using HTML5, CSS3, and JavaScript",
        "Assisted in the development of WordPress themes and plugins",
        "Collaborated with design team to ensure pixel-perfect implementations",
        "Maintained and updated existing client websites",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800">
              Work Experience
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in the tech industry, showcasing growth and
            achievements
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-12`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content */}
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} ml-6 md:ml-0`}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  {/* Period */}
                  <div className="flex items-center gap-2 text-blue-600 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>

                  {/* Title and Company */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <span className="font-medium">{exp.company}</span>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-blue-600 font-bold text-lg leading-5">
                          •
                        </span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
