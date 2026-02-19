import { Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    name: "Wedding Website",
    description: "A digital celebration of love. This custom wedding website shares Maria & Jacques’ story, wedding day schedule, important logistics, and heartfelt messages — bringing friends and family along every step of the journey.",
    image: "/projects/wedding-site.jpg",
    tags: ["Angular", "TypeScript", "Cloudinary"],
    link: "https://malanenmaria.co.za/",
    github: "https://github.com/JacquesMalan",
  },
  {
    id: 2,
    name: "Saas Application",
    description: "A secure SaaS dashboard that enables clients to subscribe, log in, and manage their own systems independently. Built to streamline client management while maintaining flexibility, scalability, and ease of use.",
    image: "/projects/Saas App.jpg",
    tags: ["Angular", "Node.js", "MySQL", "Express"],
    link: "https://platform.malandevelopmentsystems.co.za/sign-in",
    github: "https://github.com/JacquesMalan",
  },
  // {
  //   id: 3,
  //   name: "Project Three",
  //   description: "Description for project three.",
  //   image: "/path/to/image3.jpg",
  //   tags: ["Angular", "Express"],
  //   link: "#",
  //   github: "https://github.com/JacquesMalan",
  // },
  // {
  //   id: 4,
  //   name: "Project Four",
  //   description: "Description for project four.",
  //   image: "/path/to/image4.jpg",
  //   tags: ["Svelte", "Django"],
  //   link: "#",
  //   github: "https://github.com/JacquesMalan",
  // },
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
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
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
