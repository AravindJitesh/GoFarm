import { motion, useScroll, useTransform } from "framer-motion";
import PlantSketch from "./PlantSketch";

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] md:h-screen overflow-hidden"
    >
      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 bg-gradient-to-b
        from-green-900 via-green-800 to-stone-900"
      />

      {/* FARMLAND STRIPES */}
      <motion.div
        className="absolute inset-0 opacity-20 md:opacity-40"
        animate={{ backgroundPositionX: ["0px", "360px"] }}
        transition={{
          duration: 70,
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

      {/* 🌱 PLANTS */}
      <motion.div className="absolute inset-0 pointer-events-none">
        <PlantSketch />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ y }}
        className="relative z-10 flex items-center justify-center
                   min-h-[100svh] md:h-full"
      >
        <div className="container text-center max-w-3xl px-4">
          {/* TEXT — UNCHANGED */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl
                       font-bold text-white mb-5"
          >
            Smart Solutions for{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              Modern Farming
            </span>
          </motion.h1>

          <p className="text-white/80 text-base sm:text-lg mb-8">
            Providing suitable land monitored for specific purposes.
          </p>

          {/* CTA — ONLY WIDTH REDUCED ON MOBILE */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
  <a
    href="#contact"
    className="
      w-fit mx-auto sm:mx-0
      px-3 py-2 sm:px-7 sm:py-3
      rounded-full bg-emerald-500
      text-white font-medium text-center
      text-sm sm:text-base
    "
  >
    Contact Us
  </a>

  <a
    href="#services"
    className="
      w-fit mx-auto sm:mx-0
      px-3 py-2 sm:px-7 sm:py-3
      rounded-full border border-white/40
      text-white text-center
      text-sm sm:text-base
    "
  >
    View Services
  </a>
</div>

        </div>
      </motion.div>
    </section>
  );
}
