"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Projeto 1",
    description: "Descrição do projeto",
    image: "/projetos/projeto1.jpg",
    tags: ["React", "TypeScript"],
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto",
    image: "/projetos/projeto2.jpg",
    tags: ["Next.js", "Tailwind"],
  },
  // ...
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};

export default function Projetos() {
  return (
    <>
      {/* Título da seção */}
      <div className=" text-center py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Featured Work
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          My past projects showcasing my expertise.
        </p>
      </div>

      {/* Lista vertical */}
      <section className=" py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-full h-[260px] md:h-[320px] rounded-2xl 
                         bg-neutral-800 overflow-hidden group cursor-pointer flex"
            >
              <div className="relative w-1/2 md:w-2/5 h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/10 rounded-full 
                                 text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
