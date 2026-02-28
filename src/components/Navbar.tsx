import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 Scroll Tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach((link) => {
      const section = document.getElementById(link.href);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(link.href);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/10 z-50 px-6 sm:px-10 py-4 flex justify-between items-center">

      {/* LOGO */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl font-bold text-primary cursor-pointer"
      >
        Portfolio.
      </motion.h1>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex space-x-8 relative">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={`#${link.href}`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="relative px-4 py-2 text-white hover:text-primary transition duration-300"
          >
            {link.name}

            {/* Hover Effect */}
            <span className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md scale-0 hover:scale-100 transition-transform duration-300 -z-10"></span>

            {/* Active Indicator */}
            {active === link.href && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute inset-0 rounded-full bg-primary/20 -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </motion.a>
        ))}
      </div>

      {/* MOBILE HAMBURGER BUTTON */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#0a0f1c]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg transition ${
                    active === link.href
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;