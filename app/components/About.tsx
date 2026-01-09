"use client";

import { Meteors } from "@/components/ui/shadcn-io/meteors";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="min-h-screen  text-white flex items-center">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6"
        >
          <motion.p
            variants={item}
            className="text-sm uppercase tracking-[0.2em] text-gray-400"
          >
            About Me
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-semibold"
          >
            Lucas — Product & Web Developer
          </motion.h1>

          <motion.p variants={item} className="text-gray-400 max-w-2xl">
            I focus on crafting intuitive, scalable digital experiences,
            combining strategy, research, and clean development to deliver
            real-world impact.
          </motion.p>

          <motion.div
            variants={item}
            className="grid gap-6 md:grid-cols-2 pt-6 border-t border-white/10 mt-4"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-white">Experience</h2>
              <p className="text-gray-400 text-sm">
                Working with React, Next.js, TypeScript and modern UI libraries
                to build performant interfaces and delightful interactions.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-medium text-white">Stack</h2>
              <p className="text-gray-400 text-sm">
                Next.js · React · TypeScript · Tailwind CSS · Framer Motion
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
