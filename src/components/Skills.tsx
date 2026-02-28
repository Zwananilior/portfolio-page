import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const technicalSkills = [
  { name: "React / React Native", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "HTML & CSS", level: 90 },
  { name: "Git & Version Control", level: 50 },
];

const professionalSkills = [
  { name: "Creativity", level: 90 },
  { name: "Communication", level: 75 },
  { name: "Problem Solving", level: 85 },
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
      className="scroll-mt-24 min-h-screen bg-[#081b29] flex flex-col items-center justify-center px-16"
    >
      <h2 className="text-4xl font-bold mb-16">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full max-w-6xl">

        {/* LEFT SIDE - Technical */}
        <div>
          <h3 className="text-xl mb-8 font-semibold">Technical Skills</h3>

          {technicalSkills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

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

        {/* RIGHT SIDE - Professional */}
        <div>
          <h3 className="text-xl mb-8 font-semibold">Professional Skills</h3>

          <div className="grid grid-cols-2 gap-10">
            {professionalSkills.map((skill, index) => {
              const circumference = 2 * Math.PI * 45;
              const offset =
                circumference - (skill.level / 100) * circumference;

              return (
                <div key={index} className="flex flex-col items-center">
                  <svg width="120" height="120">
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      stroke="#1f2937"
                      strokeWidth="8"
                      fill="transparent"
                    />

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
                  <span className="text-gray-400 text-sm">
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

