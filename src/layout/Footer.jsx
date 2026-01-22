import { Github, Linkedin,  } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/JacquesMalan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jacques-potgieter-404bab5b/", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
                <a href="/" className="text-muted-fg">
                    &copy; {currentYear} Jacques Potgieter. All rights reserved.
                </a>
            </div>
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
                {footerLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="text-muted-fg hover:text-primary transition-colors duration-300"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-6">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href} target="_blank"
                        className="text-muted-fg hover:text-primary transition-colors duration-300"
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
        </div>
    </div>
  </footer>;
};
