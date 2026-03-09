import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chatbot",
    description:
      "An intelligent chatbot built using React and Gemini API, capable of responding dynamically to user prompts with real-time AI interaction.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    github: "https://github.com/zwananilior",
    live: "https://soft-babka-fc82d7.netlify.app/",
  },
  {
    title: "Restaurant Mobile App",
    description:
      "A React Native restaurant application featuring menu browsing, smooth navigation, and user-friendly UI design.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    github: "https://github.com/zwananilior/Restaurant-app.git",
    live: "https://astounding-smakager-5181ef.netlify.app/",
  },
  {
    title: "Live Hosted Project",
    description:
      "A deployed production-ready web application showcasing full-stack functionality and responsive modern design.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    github: "https://github.com/zwananilior/shopping-list-app.git",
    live: "https://shopping-list-app-sage.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 min-h-screen bg-[#081b29] flex flex-col items-center justify-center px-16"
    >
      <h2 className="text-4xl font-bold mb-16">
        Latest <span className="text-primary">Project</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative group rounded-xl overflow-hidden shadow-[0_0_40px_#00f0ff20]"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0a0f1c]/90 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-6">
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border border-primary rounded-full text-primary hover:bg-primary hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 border border-primary rounded-full text-primary hover:bg-primary hover:text-black transition"
                >
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
