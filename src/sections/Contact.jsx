import React, { useState } from "react";

// Icons
import { Mail, MapPin, Phone, Send } from "lucide-react";

// Components
import { Button } from "@/components/Button";

// EmailJS
import emailjs from "@emailjs/browser";

const contactCard = [
  {
    icon: Mail,
    label: "Email",
    value: "jacques@malandevelopmentsystems.co.za",
    href: "mailto:jacques@malandevelopmentsystems.co.za",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 71 403 7786",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "North-West, South Africa",
  },
];

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      // Implement email sending logic here
      const serviceID = import.meta.env.VITE_MAIL_SERVICE_ID;
      const templateID = import.meta.env.VITE_MAIL_SERVICE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_MAIL_SERVICE_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Email service is not properly configured.");
      }

      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "There was an error sending your message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-fg text-sm font-medium tracking-wider uppercase animation-fade-in">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-fg animation-fade-in animation-delay-100">
            Let’s turn ideas, into
            <span className="font-serif text-white font-normal italic ml-2">
              something real.
            </span>
          </h2>
          <p className="text-muted-fg animation-fade-in animation-delay-200">
            Whether you have a clear brief or just a rough idea scribbled on a
            napkin, I’m always open to meaningful conversations, thoughtful
            collaboration, and building solutions that genuinely move the
            needle.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 max-w-5xl mx-auto">
          <div className="glass p-5 md:p-6 lg:p-8 rounded-3xl border border-border/30 animation-fade-in animation-delay-300">
            <form action="" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  required
                  placeholder="Your email..."
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder="Share your idea, challenge, wild thought, or the problem that’s been keeping you up at night..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <p
                  className={`mt-4 text-center ${submitStatus.type === "success" ? "text-green-500" : "text-red-500"}`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>

          {/* Contact Card */}
          <div className="space-y-6 animation-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-5 md:p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactCard.map((card, index) => (
                  <a
                    key={index}
                    href={card.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <card.icon />
                    </div>
                    <div>
                      <h4 className="font-medium">{card.label}</h4>
                      <p className="text-sm text-muted-foreground break-all">
                        {card.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* Additional Info Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time developer or a freelance
                consultant, let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
