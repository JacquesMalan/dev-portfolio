import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Working with Jacques felt like gaining a technical partner, not just a developer. Every decision was thoughtful, practical, and focused on real business value.",
    author: "Liam Matthews",
    role: "Founder, Northshore Digital",
    avatar: "/avatars/liam-matthews.jpg",
  },
  {
    quote:
      "Clear communication, clean execution, and zero surprises. The project ran smoothly from kickoff to launch, and the final product exceeded expectations.",
    author: "Samantha Reed",
    role: "Marketing Director, Elevate Co.",
    avatar: "/avatars/samantha-reed.jpg",
  },
  {
    quote:
      "Jacques has a rare ability to translate vague ideas into structured, usable solutions. Our platform is faster, clearer, and easier to maintain.",
    author: "Daniel Kruger",
    role: "Operations Manager, Atlas Travel",
    avatar: "/avatars/daniel-kruger.jpg",
  },
  {
    quote:
      "Deadlines were met, problems were solved early, and the end result actually helped our business grow. That combination is hard to find.",
    author: "Priya Naidoo",
    role: "Co-Founder, Fitline Studios",
    avatar: "/avatars/priya-naido.jpg",
  },
  {
    quote:
      "The attention to detail stood out immediately. From UX decisions to performance tuning, everything felt intentional and well-crafted.",
    author: "Michael O’Connor",
    role: "Product Lead, Horizon Systems",
    avatar: "/avatars/michael-oconnor.jpg",
  },
  {
    quote:
      "What impressed us most was the balance between technical skill and business awareness. Jacques builds with purpose, not just code.",
    author: "Emily van der Merwe",
    role: "Managing Director, BluePeak Consulting",
    avatar: "/avatars/emily-van-merwe.jpg",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nexButton = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevButton = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-fg text-sm font-medium tracking-wider uppercase animation-fade-in">
            What people are saying
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-fg animation-fade-in animation-delay-100">
            Kind words from
            <span className="font-serif text-white font-normal italic ml-2">
              amazing people.
            </span>
          </h2>
        </div>
        {/* Testimonials Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animation-fade-in animation-delay-200">
              <div className="absolute flex items-center justify-center -top-4 left-8 w-12 h-12 bg-primary rounded-full">
                <Quote className="w-6 h-6 text-primary-fg" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                />
                <div className="flex flex-col items-start ">
                  <div className="font-semibold">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-muted-fg">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials Carousel */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              onClick={prevButton}
            >
              <ChevronLeft />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "bg-muted-fg/30 hover:bg-muted-fg/50"}`}
                />
              ))}
            </div>
            <button
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              onClick={nexButton}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
