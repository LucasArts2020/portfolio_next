"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Projects",
    period: "Jan 2024 - Present",
    initials: "FD",
    color: "bg-emerald-500",
  },
  {
    role: "Web Developer Student",
    company: "Personal Development",
    period: "Jan 2023 - Present",
    initials: "ST",
    color: "bg-blue-500",
  },
];

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-20 relative overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-10 z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-8">
            <motion.div variants={item}>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Passionate about crafting beautiful and functional digital
                experiences.
              </h1>
            </motion.div>

            <motion.div
              variants={item}
              className="space-y-6 text-gray-400 text-lg leading-relaxed"
            >
              <p>
                I'm <span className="text-white font-medium">Lucas</span>, a
                Product & Web Developer. I focus on crafting intuitive, scalable
                digital experiences, combining strategy, research, and clean
                development to deliver real-world impact.
              </p>

              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                  My favorite tools that fuel my creative process include:
                </p>
                <div className="flex flex-wrap gap-2 text-white font-medium">
                  {[
                    "TypeScript",
                    "Node.js",
                    "React",
                    "Next.js",
                    "Rust",
                    "Actix",
                    "Php",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative flex items-center justify-between p-5 rounded-3xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-800/80 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-12 w-12 rounded-2xl ${exp.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {exp.initials}
                  </div>

                  <div>
                    <h3 className="text-white font-medium text-lg group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-gray-400 text-sm">{exp.company}</p>
                  </div>
                </div>

                <div className="text-gray-500 text-sm font-medium whitespace-nowrap pl-4">
                  {exp.period}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
