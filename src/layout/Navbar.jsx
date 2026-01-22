import { useEffect, useState } from "react";

// Components
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";

const navData = [
  // { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Projects", link: "#projects" },
  { id: 4, title: "Experience", link: "#experience" },
  { id: 5, title: "Testimonials", link: "#testimonials" },
  { id: 6, title: "Contact", link: "#contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${isScrolled ? "glass-mobile py-3" : "bg-transparent py-5"} transition-all duration-300 z-50`}
    >
      <nav className="container mx-auto px-6 flex justify-between">
        <a
          href="/"
          className="text-xl tracking-tight hover:text-primary transition-all duration-300"
        >
          Jacques<span className="text-primary ml-2">Dev</span>
        </a>

        {/* Desktop Nav Menu */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center glass rounded-full px-2 py-1 gap-1">
            {navData.map((item) => (
              <div className="" key={item.id}>
                <a
                  href={item.link}
                  className="px-4 py-2 text-sm text-muted-fg hover:text-fg rounded-full hover:bg-surface transition-all duration-300"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a href="#contact" className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </a>

        {/* Mobile Nav Menu */}
        <button
          className="md:hidden p-2 text-fg cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-mobile animation-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navData.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg py-2 text-muted-fg hover:text-fg transition-all duration-300"
              >
                {item.title}
              </a>
            ))}

            {/* CTA Button */}
            <Button onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
