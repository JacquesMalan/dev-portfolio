import { useState } from "react";

// Components
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  DownloadIcon,
  Github,
  Linkedin,
} from "lucide-react";

const skillSet = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "MySql",
  "MongoDB",
  "Angular",
  "Express",
];

export const Hero = () => {
  const [dots] = useState(() =>
    Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 20}s`,
      delay: `${Math.random() * 5}s`,
    })),
  );
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg-02.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/20 via-bg/80 to-bg"></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 drift twinkle"
            style={{
              backgroundColor: "#20b2a6",
              left: dot.left,
              top: dot.top,
              animationDuration: dot.duration,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto relative z-10 px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Left Column */}
          <div className="space-y-8">
            <div className="animation-fade-in">
              <span className="inline-flex items-center rounded-full gap-2 glass text-sm text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span>Software Engineer • Full Stack</span>
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animation-fade-in animation-delay-100">
                Building{" "}
                <span className="text-primary glow-text">intelligent</span>{" "}
                products from
                <br />
                <span>idea</span> to{" "}
                <span className="font-serif italic font-normal text-white">
                  execution
                </span>
                .
              </h1>
              <p className="text-lg text-muted-fg max-w-lg animation-fade-in animation-delay-200">
                Hi, my name is Jacques. I’m a full-stack developer focused on
                building intelligent, production-ready applications from idea to
                execution. I work at the intersection of clean architecture,
                modern frameworks, and AI-driven solutions to turn real business
                needs into scalable, reliable software.
              </p>
            </div>
            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 items-center animation-fade-in transition-all duration-300 animation-delay-300">
              <Button size="lg" asChild>
                <a href="#contact" className="flex items-center">
                Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <a href="/CV/Jacques_Potgieter_CV.pdf" download
                className="flex gap-3 bg-transparent border border-border
                  text-foreground cursor-pointer hover:border-primary/50 transition-all
                  duration-300 focus: outline-none focus-visible:ring-2
                  focus-visible:ring-primary focus-visible:ring-offset-2
                  disabled: opacity-50 px-8 py-4 text-lg font-medium rounded-full overflow-visible
                  animated-border"
              >
                <DownloadIcon className="w-5 h-5 ml-2" /> Download CV
              </a>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-4 animation-fade-in animation-delay-400">
              <span className="text-sm text-muted-fg">Follow: </span>
              {[
                { icon: Linkedin, link: "https://www.linkedin.com/in/jacques-potgieter-404bab5b/" },
                { icon: Github, link: "https://github.com/JacquesMalan" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link} target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Hero Right Column */}
          <div className="relative animation-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"></div>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-jacques.png"
                  alt="Jacques Potgieter"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-small font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-fg">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skill Set */}
        <div>
          <p className="text-sm text-muted-fg text-center">Technologies I work with:</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skillSet, ...skillSet].map((skill, index) => (
               <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-fg/50 hover:text-muted-fg">{skill}</span>
               </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animation-fade-in animation-delay-600 z-50">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-fg cursor-pointer">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
