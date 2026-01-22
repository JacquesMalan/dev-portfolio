import React from "react";

const experiences = [
  {
    period: "Sept 2023 - Present",
    role: "Software Developer",
    company: "TFM (Travel Find Me)",
    description:
      "Leading end-to-end feature development for multi-brand, production travel platforms. I work directly with clients and stakeholders to scope, build, and deliver scalable Angular applications, modernize legacy systems, and integrate backend services. My role blends hands-on development with technical ownership, project coordination, and client communication.",
    technologies: [
      "Angular",
      "React",
      "TypeScript",
      "HTML",
      "SCSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "MySQL",
      "Git",
      "GitHub",
      "Agile",
    ],
    current: true,
  },
  {
    period: "Apr 2022 - Sept 2023",
    role: "Junior Angular Web Developer",
    company: "TFM (Travel Find Me)",
    description:
      "Worked on client-facing Angular applications, translating frontend requirements into functional features. Contributed to modernizing legacy websites, migrating data, and building reusable UI components while collaborating closely with developers using Git-based workflows.",
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "XML",
      "XSL",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-fg text-sm uppercase font-medium tracking-wider animation-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-fg">
            Experience that{" "}
            <span className="ml-2 font-serif italic font-normal text-white">
              speaks volumes
            </span>
          </h2>
          <p className="text-muted-fg animation-fade-in animation-delay-200">
            a timeline of my professional growth and experience in software
            development, from a curious beginner to a confident developer.
          </p>
        </div>
        {/* Timeline UI */}
        <div className="relative">
          {/* Center Line */}
          <div className="timeline-glow hidden md:block absolute left-0 md:left-1/2 top-1 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Cards */}
          <div className="space-y-12 ml-3 md:ml-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative grid md:grid-cols-2 animation-fade-in`}
                >
                  <div className="absolute -left-3 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 z-10">
                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>}
                  </div>
                  {/* Card */}
                  <div
                    className={`
                    glass p-6 rounded-xl border border-border/30 hover:border-border backdrop-blur-sm
                    md:max-w-xl transition-all duration-300
                    ${isLeft ? "md:ml-auto md:mr-16 md:text-right" : "md:ml-16"}
                    ${isLeft ? "md:col-start-1" : "md:col-start-2"}
                  `}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-secondary-fg">
                          {exp.role}
                        </h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <span className="text-muted-fg text-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-fg mb-4">{exp.description}</p>

                    {/* Tech Stack */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-surface text-primary rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
