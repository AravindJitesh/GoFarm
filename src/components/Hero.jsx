import { motion, useScroll, useTransform } from "framer-motion";
import PlantSketch from "./PlantSketch";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b
                      from-green-900 via-green-800 to-stone-900" />

      {/* FARMLAND STRIPES */}
      <motion.div
  className="absolute inset-0 opacity-40"
  animate={{ backgroundPositionX: ["0px", "360px"] }}
  transition={{
    duration: 40,
    repeat: Infinity,
    ease: "linear",
  }}
  style={{
    backgroundImage: `
      repeating-linear-gradient(
        90deg,
        rgba(34,197,94,0.25) 0px,
        rgba(34,197,94,0.25) 60px,
        rgba(22,163,74,0.25) 60px,
        rgba(22,163,74,0.25) 120px,
        rgba(120,113,108,0.25) 120px,
        rgba(120,113,108,0.25) 180px
      )
    `,
    backgroundSize: "360px 100%",
  }}
/>


      {/* 🌱 GROWING PLANTS (SCROLL ONLY) */}
      <PlantSketch />

      {/* CONTENT */}
      <motion.div
        style={{ y }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="container text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Smart Solutions for{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              Modern Farming
            </span>
          </motion.h1>

          <p className="text-white/80 text-lg mb-10">
            Providing suitable land monitored for specific purposes.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-emerald-500 text-white font-medium"
            >
              Contact Us
            </a>

            <a
              href="#services"
              className="px-8 py-3 rounded-full border border-white/40 text-white"
            >
              View Services
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
