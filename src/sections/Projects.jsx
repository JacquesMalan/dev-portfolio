import { Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    name: "SaaS Application",
    description:
      "A secure multi-tenant SaaS dashboard that allows clients to subscribe, log in, manage content, and control their own systems independently. Built with scalable backend services, client-specific data handling, authentication, and a flexible dashboard structure designed for long-term growth.",
    image: "/projects/Saas App.png",
    tags: ["Angular", "Node.js", "Express", "MySQL", "API"],
    link: "https://platform.malandevelopmentsystems.co.za/",
    github: "https://github.com/JacquesMalan",
  },
  {
    id: 2,
    name: "Guesthouse Website",
    description:
      "A modern hospitality website for Biekiesvlei, powered by a custom API-driven backend. The platform includes dynamic accommodation management, a fully integrated booking system, event features, and responsive mobile-first design for a smooth guest experience.",
    image: "/projects/biekiesvlei.png",
    tags: ["React", "TypeScript", "Express", "MySQL", "Booking System"],
    link: "https://www.biekiesvlei.co.za/",
    github: "https://github.com/JacquesMalan",
  },
  {
    id: 3,
    name: "Blogging Website",
    description:
      "A Life Designed is a modern blog-focused platform built for clean storytelling, readable content layouts, and a smooth mobile experience. The site includes dynamic article management, category-based content, SEO-friendly structure, and API-powered publishing features.",
    image: "/projects/a-life-designed.png",
    tags: ["Angular", "Express", "API", "Blog CMS", "SEO"],
    link: "https://lines.logicandline.co.za/",
    github: "https://github.com/JacquesMalan",
  },
  {
    id: 4,
    name: "Web Design Business Website",
    description:
      "Logic & Line is a modern web design business website created to showcase services, portfolio work, and digital solutions. Built with a clean brand identity, responsive layout, SEO foundations, and a professional structure aimed at converting visitors into clients.",
    image: "/projects/logic-&-line.png",
    tags: [
      "Angular",
      "TypeScript",
      "SEO",
      "Responsive Design",
      "Business Website",
    ],
    link: "https://www.logicandline.co.za/",
    github: "https://github.com/JacquesMalan",
  },
  {
    id: 5,
    name: "Training Platform",
    description:
      "A modern learning management platform built to deliver structured online training and professional development content. The platform reads dynamically from the SaaS application, allowing centralized course management, scalable training delivery, and streamlined learner experiences across devices.",
    image: "/projects/Sucat-Training.png",
    tags: ["Angular", "LMS", "SaaS Integration", "Training Platform", "API"],
    link: "https://www.training.sucat.co.za/",
    github: "https://github.com/JacquesMalan",
  },
  {
    id: 6,
    name: "Raffle Ticketing System",
    description:
      "A lightweight raffle ticketing application built for fundraising campaigns and event promotions. Users can select available numbers, reserve entries, and submit buyer details through a clean and responsive interface designed for simplicity and speed.",
    image: "/projects/raffle-game.png",
    tags: ["React", "JavaScript", "Fundraising", "Responsive Design"],
    link: "https://sport.logicandline.co.za/",
    github: "https://github.com/JacquesMalan",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-fg text-sm font-medium tracking-wider uppercase animation-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-fg animation-fade-in animation-delay-100">
            Projects that
            <span className="font-serif text-white font-normal italic ml-2">
              make an impact
            </span>
          </h2>
          <p className="text-muted-fg animation-fade-in animation-delay-200">
            A selection of production-ready applications I’ve designed and built
            across travel, healthcare, and content-driven platforms. Each
            project reflects a focus on clarity, scalability, and delivering
            measurable value, from initial concept through to real-world use.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card-bg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-fg mb-2">
                  {project.name}
                </h3>
                <p className="text-muted-fg mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-surface text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-highlight transition-colors duration-200"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-fg hover:text-primary transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
