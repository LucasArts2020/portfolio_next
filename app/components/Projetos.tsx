"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    title: "LaraStore: A Laravel E-commerce",
    description:
      "A complete e-commerce project built from scratch with Laravel 12, Blade, and Tailwind CSS. Developed as a practical study focused on mastering the fundamentals and the modern Laravel ecosystem.",
    image: "/projectphp.png",
    tags: ["PHP", "Laravel"],
  },
  {
    title: "Music Connect",
    description:
      "A platform connecting artists with event organizers. The system offers an intuitive dashboard where musicians can manage their profiles, receive 'Tips of the Day' to improve engagement, and handle gig proposals in real-time.",
    image: "/Connect.png",
    tags: ["React.js", "Rust"],
  },
  {
    title: "Dealership Management System",
    description:
      "A Fullstack application for vehicle sales management. The solution encompasses a RESTful API developed with Spring Boot and an integrated responsive frontend interface.",
    image: "/projetoCrud.png",
    tags: ["Java", "Spring Boot"],
  },
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
      <div className="text-center py-20 px-4">
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

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-full h-auto md:h-[320px] rounded-2xl 
                           bg-neutral-800 overflow-hidden group cursor-pointer flex flex-col md:flex-row"
            >
              <div className="relative w-full h-64 md:h-full md:w-2/5">
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
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
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
