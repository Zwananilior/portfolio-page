import { motion } from "framer-motion";
import { FaCode, FaPalette } from "react-icons/fa";

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-24 min-h-screen bg-[#081b29] flex flex-col items-center justify-center px-16"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-16">
        My <span className="text-primary">Services</span>
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">

        {/* UI/UX DESIGN */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.08 }}
          className="bg-[#0a0f1c] p-10 rounded-2xl shadow-[0_0_40px_#00f0ff30] border border-primary/30 max-w-md text-center transition"
        >
          <FaPalette className="text-primary text-4xl mb-6 mx-auto" />

          <h3 className="text-2xl font-semibold mb-4">
            UI/UX Design
          </h3>

          <p className="text-gray-300 leading-relaxed">
            I design intuitive and visually engaging user interfaces
            focused on usability and accessibility. Using tools like
            Figma and modern frontend technologies, I create responsive
            layouts that enhance user experience while maintaining
            clean structure and consistency across devices.
          </p>
        </motion.div>

        {/* WEB DESIGN */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.08 }}
          className="bg-[#0a0f1c] p-10 rounded-2xl shadow-[0_0_40px_#00f0ff30] border border-primary/30 max-w-md text-center transition"
        >
          <FaCode className="text-primary text-4xl mb-6 mx-auto" />

          <h3 className="text-2xl font-semibold mb-4">
            Web Development
          </h3>

          <p className="text-gray-300 leading-relaxed">
            I build modern, scalable web applications using React,
            TypeScript, and responsive design principles. My focus is on
            performance, clean architecture, and interactive user
            experiences that deliver both functionality and strong visual impact.
          </p>
        </motion.div>
        
		
		<motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.08 }}
          className="bg-[#0a0f1c] p-10 rounded-2xl shadow-[0_0_40px_#00f0ff30] border border-primary/30 max-w-md text-center transition"
        >
          <FaCode className="text-primary text-4xl mb-6 mx-auto" />

          <h3 className="text-2xl font-semibold mb-4">
            Mobile Development
          </h3>

          <p className="text-gray-300 leading-relaxed">
             I develop responsive and cross-platform mobile applications
             focused on performance, smooth user interaction, and clean UI
               architecture. Using modern technologies like React Native and
             API integrations, I build mobile experiences that are scalable,
             user-friendly, and optimized for real-world usage.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;