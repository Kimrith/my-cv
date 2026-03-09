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
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Ministry of Interior",
      location: "Riyadh, Saudi Arabia",
      period: "3 Months",
      duration: "Internship",
      description: [
        "Developed and maintained responsive frontend interfaces for internal government systems",
        "Collaborated with the development team to implement UI/UX designs",
        "Optimized application performance and ensured cross-browser compatibility",
        "Participated in code reviews and agile development processes",
      ],
      technologies: ["Angular", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
      achievements: [
        "Successfully delivered 3 major frontend components ahead of schedule",
        "Received positive feedback from senior developers for code quality",
      ],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Full-Stack E-Commerce Platform",
      description:
        "Built a complete e-commerce solution with both admin and customer interfaces",
      features: [
        "User authentication and authorization system",
        "Complete CRUD operations for products and inventory",
        "Shopping cart functionality and order management",
        "Admin dashboard with analytics and user management",
      ],
      technologies: ["Angular", "Node.js", "Express", "MongoDB", "JWT"],
      type: "Full-Stack Application",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      description:
        "Developed a comprehensive admin panel for business management",
      features: [
        "Interactive data visualization with charts and graphs",
        "User role management and permissions",
        "Real-time data updates and notifications",
        "Export functionality for reports",
      ],
      technologies: ["Angular", "Node.js", "MongoDB", "Chart.js", "Socket.io"],
      type: "Full-Stack Application",
    },
    {
      id: 3,
      title: "Customer-Facing Web Application",
      description:
        "Created responsive customer interfaces with modern design principles",
      features: [
        "Mobile-first responsive design",
        "Product browsing and search functionality",
        "User profile management",
        "Order tracking and history",
      ],
      technologies: ["Angular", "TypeScript", "SCSS", "RESTful APIs"],
      type: "Frontend Application",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Professional Experience Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 md:px-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Professional Experience
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical industry experience gained through internships and
              real-world projects
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Experience Card */}
          {experiences.map((exp) => (
            <div key={exp.id} className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Company Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <Building className="w-6 h-6 text-white" />
                      <h3 className="text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                      <Shield className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">
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
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      Key Responsibilities
                    </h5>
                    <ul className="grid md:grid-cols-2 gap-3">
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
                  </div>

                  {/* Achievements */}
                  <div className="mb-6 bg-blue-50 p-4 rounded-xl">
                    <h5 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-blue-700"
                        >
                          <span className="text-blue-600 font-bold">⭐</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
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
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Code2 className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Academic Projects
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Full-stack applications built since my second year of study,
            demonstrating practical skills
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Overview */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl mb-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Technical Expertise
              </h3>
              <p className="text-gray-600 text-sm">
                Since my second year of study, I have built full-stack web
                applications using Angular, Node.js, and MongoDB. My experience
                includes both admin dashboards and customer-facing interfaces.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Database className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Code2 className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Angular + Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
