import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed bottom-8 sm:bottom-40 right-8 z-50 p-3 rounded-full bg-primary text-white shadow-lg
        transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        hover:bg-primary/80
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

