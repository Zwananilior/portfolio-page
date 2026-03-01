import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt 
} from "react-icons/fa";

import { SiTypescript } from "react-icons/si";

const technicalSkills = [
  { name: "React", level: 85, icon: FaReact },
  { name: "TypeScript", level: 80, icon: SiTypescript },
  { name: "JavaScript", level: 85, icon: FaJs },
  { name: "HTML", level: 90, icon: FaHtml5 },
  { name: "CSS", level: 90, icon: FaCss3Alt },
  { name: "Git", level: 70, icon: FaGitAlt },
];

const professionalSkills = [
  { name: "Creativity", level: 90 },
  { name: "Communication", level: 75 },
  { name: "Problem Solving", level: 80 },
  { name: "Teamwork", level: 85 },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-24 min-h-screen bg-[#081b29] flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-16">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">

        {/* LEFT SIDE - Technical Skills */}
        <div>
          <h3 className="text-xl mb-8 font-semibold">
            Technical Skills
          </h3>

          {technicalSkills.map((skill, index) => (
            <div key={index} className="mb-6">

              {/* Skill Header */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <skill.icon className="text-primary text-xl drop-shadow-[0_0_6px_#00f0ff]" />
                  <span>{skill.name}</span>
                </div>
                <span>{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: animate ? `${skill.level}%` : 0 }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-primary rounded-full shadow-[0_0_10px_#00f0ff]"
                />
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT SIDE - Professional Skills */}
        <div>
          <h3 className="text-xl mb-8 font-semibold">
            Professional Skills
          </h3>

          <div className="grid grid-cols-2 gap-10">
            {professionalSkills.map((skill, index) => {
              const circumference = 2 * Math.PI * 45;
              const offset =
                circumference - (skill.level / 100) * circumference;

              return (
                <div key={index} className="flex flex-col items-center">

                  <svg width="120" height="120">
                    {/* Background Circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      stroke="#1f2937"
                      strokeWidth="8"
                      fill="transparent"
                    />

                    {/* Animated Progress Circle */}
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="45"
                      stroke="#00f0ff"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={animate ? offset : circumference}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                      transition={{ duration: 1 }}
                    />
                  </svg>

                  <span className="mt-3 font-semibold">
                    {skill.level}%
                  </span>

                  <span className="text-gray-400 text-sm text-center">
                    {skill.name}
                  </span>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
