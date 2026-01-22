import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Write clean, maintainable, and efficient code following best practices.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimize applications for speed and responsiveness to enhance user experience.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work effectively within teams to deliver high-quality software solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Think creatively and implement innovative solutions to complex problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animation-fade-in">
              <span className="text-secondary-fg text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:5xl text-secondary-fg font-bold leading-tight animation-fade-in animation-delay-100">
              Building software with intent,
              <span className="font-serif italic font-normal text-white ml-2">
                from frontend to backend
              </span>
            </h2>
            <div className="space-y-4 text-muted-fg animation-fade-in animation-delay-200">
              <p className="">
                I’m Jacques, a full-stack software developer with a strong
                background in building real-world, client-facing applications
                across travel, medical, and content-driven platforms. My work
                spans modern front-end development, backend systems, and
                data-driven solutions, with a growing focus on integrating AI to
                solve practical problems. I care deeply about clean
                architecture, maintainability, and delivering software that
                scales with both users and business needs.
              </p>
              <p className="">
                Over the years, I’ve worked closely with clients and internal
                teams to take projects from early discovery through to
                production and ongoing support. This has meant designing
                flexible front-end architectures, building reliable APIs,
                working with relational databases, and maintaining systems long
                after launch. I value clear communication, realistic timelines,
                and solutions that hold up under real-world use.
              </p>

              <p className="">
                Recently, my focus has expanded into AI-assisted application
                development, where I explore ways to enhance user experiences,
                automate workflows, and surface insights from data without
                sacrificing clarity or control. I enjoy working at the
                intersection of product thinking and engineering, building
                software that feels intentional, dependable, and ready for what
                comes next.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animation-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-fg">
                "My mission is to design and build software that makes complex
                ideas usable and valuable. I aim to combine solid engineering,
                modern technologies, and AI-driven tools to create systems that
                are reliable, scalable, and genuinely helpful to the people who
                use them."
              </p>
            </div>
          </div>
          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index} 
                className="glass rounded-2xl p-6 glow-border animation-fade-in animation-delay-400"
              >
                <div className="flex items-center mb-4">
                  <item.icon className="w-8 h-8 text-secondary-fg mr-3" />
                  <h3 className="text-xl font-bold text-secondary-fg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-fg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
