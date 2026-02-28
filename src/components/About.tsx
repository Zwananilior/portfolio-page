import { motion } from "framer-motion";
import profile from "../assets/WhatsApp Image 2026-02-27 at 01.33.41.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 min-h-screen flex items-center justify-center px-16 bg-[#081b29]"
    >
      <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl">

        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full blur-3xl bg-cyan-400 opacity-30 animate-pulse"></div>

          <img
            src={profile}
            alt="Luyanda Masinga"
            className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_60px_#00f0ff]"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-xl"
        >
          <h2 className="text-4xl font-bold mb-6">
            Software Developer!
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I am a passionate Software Developer based in Durban with hands-on
            experience in modern web and mobile application development.
            My expertise includes React, React Native, TypeScript, and UI/UX design.
            During my internship and academic projects, I developed real-world
            applications including restaurant and hotel platforms, focusing on
            clean architecture, responsive design, and user-friendly interfaces.
            I enjoy transforming ideas into interactive digital experiences
            that are visually engaging and technically efficient.
          </p>

          <button className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-[0_0_20px_#00f0ff]">
            More About Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;