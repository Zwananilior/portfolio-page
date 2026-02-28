import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import profile from "../assets/WhatsApp Image 2026-02-27 at 01.33.41.jpeg";

const roles = ["Frontend Developer", "UI/UX Designer"];

const Hero = () => {
  const staticPrefix = "And I am ";
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter ONLY for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.slice(0, roleText.length + 1));
        if (roleText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setRoleText(currentRole.slice(0, roleText.length - 1));
        if (roleText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="scroll-mt-24 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-10 lg:px-16 pt-32 gap-12 relative"
    >
      <div className="max-w-xl">

        {/* Line 1 */}
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl"
        >
          Hello, it's me.
        </motion.h2>

        {/* Line 2 */}
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-bold mt-2 text-primary"
        >
          Luyanda Masinga
        </motion.h1>

        {/* Line 3 */}
        <motion.h3
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-2xl"
        >
          {staticPrefix}
          <span className="text-primary">
            {roleText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 text-gray-300"
        >
          I'm a Software Developer with 9 months experience creating modern
          website designs, frontend interfaces, backend systems and interactive
          digital experiences.
        </motion.p>

        {/* Social Icons + Resume */}
        <div className="flex flex-wrap items-center gap-4 mt-6">
          {[
            { icon: FaGithub, link: "https://github.com/zwananilior" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/luyanda-zwanani-8a7943358" },
            { icon: FaInstagram, link: "YOUR_INSTAGRAM_LINK_HERE" },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.2 }}
                className="text-2xl border border-primary p-3 rounded-full 
                hover:bg-primary hover:text-black transition duration-300"
              >
                <Icon />
              </motion.a>
            );
          })}

          {/* Resume Button */}
          <motion.a
            href="/Luyanda lindani zwanani Masinga_recentCv.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + 3 * 0.2 }}
            className="px-6 py-3 border border-primary text-primary 
            rounded-full font-semibold hover:bg-primary hover:text-black 
            transition duration-300 shadow-[0_0_15px_#00f0ff40]"
          >
            Download CV
          </motion.a>
        </div>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full glow-ring"
      >
        <motion.img
          src={profile}
          alt="Luyanda Masinga"
          className="w-full h-full rounded-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* Scroll To Top Arrow */}
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="fixed bottom-6 right-6 bg-primary text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        ↑
      </button>
    </section>
  );
};

export default Hero;