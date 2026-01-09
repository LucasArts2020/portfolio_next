"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import avatar from "@/public/profile.jpg";
import ShinyText from "../Animation/ShinyText";
import { Meteors } from "@/components/ui/shadcn-io/meteors";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 bg-black overflow-hidden"
    >
      <Meteors number={20} />
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Avatar with circular background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Avatar container */}
          <div className="relative mb-8">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-500/20 to-gray-400/10 blur-2xl" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-500/30 to-transparent" />

              {/* Avatar image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-400/30">
                <Image
                  src={avatar}
                  alt="Lucas profile photo"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Tech icons row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 mb-8"
          ></motion.div>

          {/* Main heading with ShinyText */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="max-w-xl md:max-w-2xl text-center text-3xl md:text-5xl font-bold italic leading-tight">
              <ShinyText
                text="Hi, I'm Lucas 👋 Full Stack Developer specialized in Backend."
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
              />
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-400/10 border border-gray-400/30 text-gray-400 rounded-2xl font-medium hover:bg-gray-400/20 transition-all text-sm group"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <ShinyText
                  text="Open to Work"
                  speed={2}
                  delay={2}
                  color="#9ca3af"
                  shineColor="#ffffff"
                  spread={90}
                  direction="left"
                  pauseOnHover={true}
                />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-20deg);
          }
        }
        .animate-wave {
          animation: wave 1.5s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default Hero;
