import { motion, useScroll, useTransform } from "framer-motion";

export default function PlantSketch() {
  const { scrollYProgress } = useScroll();



/* Fade in slightly earlier */
const appear = useTransform(scrollYProgress, [0.1, 0.14], [0, 1]);

/* Faster, tighter growth windows */
const stem = useTransform(scrollYProgress, [0.12, 0.22], [0, 1]);
const leaves = useTransform(scrollYProgress, [0.16, 0.26], [0, 1]);
const flower = useTransform(scrollYProgress, [0.22, 0.32], [0, 1]);

/* Gentle sway stays the same */
const sway = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);


  return (
    <motion.svg
      viewBox="0 0 800 600"
      className="absolute bottom-0 right-10 w-[520px] h-[520px]
                 pointer-events-none opacity-30"
      style={{ rotate: sway, opacity: appear }}
    >
      {/* === PLANT 1 (CENTER) === */}

      {/* STEM */}
      <motion.path
        d="M400 560 C395 460 405 360 400 240"
        fill="none"
        stroke="rgba(16,185,129,0.9)"
        strokeWidth="4"
        strokeLinecap="round"
        style={{ pathLength: stem }}
      />

      {/* LEAVES */}
      <motion.path
        d="
          M400 420 C350 390 320 360 300 330
          M400 380 C450 350 480 320 500 300
          M400 320 C350 300 330 270 310 250
          M400 280 C460 250 500 230 520 210
        "
        fill="none"
        stroke="rgba(34,197,94,0.8)"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ pathLength: leaves }}
      />

      {/* FLOWER / CROP TOP */}
      <motion.path
        d="
          M400 240
          C370 210 340 200 310 210
          M400 240
          C430 210 460 200 490 210
          M400 220
          C380 190 350 180 330 185
          M400 220
          C420 190 450 180 470 185
        "
        fill="none"
        stroke="rgba(250,204,21,0.9)"
        strokeWidth="2.6"
        strokeLinecap="round"
        style={{ pathLength: flower }}
      />

      {/* === PLANT 2 (SMALL LEFT) === */}
      <motion.path
        d="M260 560 C255 500 260 450 258 400"
        fill="none"
        stroke="rgba(16,185,129,0.6)"
        strokeWidth="2.5"
        style={{ pathLength: stem }}
      />

      <motion.path
        d="M258 450 C230 430 215 410 200 395"
        fill="none"
        stroke="rgba(34,197,94,0.6)"
        strokeWidth="2"
        style={{ pathLength: leaves }}
      />

      {/* === PLANT 3 (SMALL RIGHT) === */}
      <motion.path
        d="M540 560 C545 500 540 450 542 400"
        fill="none"
        stroke="rgba(16,185,129,0.6)"
        strokeWidth="2.5"
        style={{ pathLength: stem }}
      />

      <motion.path
        d="M542 450 C570 430 585 410 600 395"
        fill="none"
        stroke="rgba(34,197,94,0.6)"
        strokeWidth="2"
        style={{ pathLength: leaves }}
      />
    </motion.svg>
  );
}
