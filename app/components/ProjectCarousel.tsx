"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Mobile Banking App",
    category: "Mobile Design",
    image: "/projects/mobile-banking.jpg",
    bgColor: "bg-gray-100",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    category: "Web Design",
    image: "/projects/dashboard.jpg",
    bgColor: "bg-gray-100",
  },
  {
    id: 3,
    title: "Recipe Discovery",
    category: "Mobile Design",
    image: "/projects/recipe-app.jpg",
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    title: "Music Player",
    category: "UI Design",
    image: "/projects/music-player.jpg",
    bgColor: "bg-purple-100",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    category: "Web Design",
    image: "/projects/ecommerce.jpg",
    bgColor: "bg-gray-100",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    category: "Mobile Design",
    image: "/projects/fitness.jpg",
    bgColor: "bg-gray-100",
  },
];

const ProjectCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            Swipe to explore my latest work
          </p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-8 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[300px] md:w-[400px] snap-center"
          >
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Project Card */}
              <div
                className={`${project.bgColor} p-8 h-[500px] flex items-center justify-center relative`}
              >
                {/* Mockup Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <span className="text-sm uppercase tracking-wider text-cyan-400 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    {project.title}
                  </h3>
                  <button className="px-6 py-2 bg-cyan-400 text-black rounded-full font-semibold hover:bg-cyan-300 transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator (opcional) */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-cyan-400 transition-colors cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;
