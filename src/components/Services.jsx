import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Leaf,
  Headset,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { services } from "../data/siteData";

/* ---------- ICON MAP ---------- */
const iconMap = {
  MapPin: <MapPin size={28} />,
  Leaf: <Leaf size={28} />,
  Headset: <Headset size={28} />,
};

/* ---------- CARD ANIMATION ---------- */
const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    transition: { duration: 0.35 },
  }),
};

export default function Services() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const CARDS_PER_VIEW = 3;
  const totalPages = Math.max(services.length - CARDS_PER_VIEW, 0);
  const visibleServices = services.slice(page, page + CARDS_PER_VIEW);

  const paginate = (dir) => {
    setDirection(dir);
    setPage((p) => Math.min(Math.max(p + dir, 0), totalPages));
  };

  return (
    <section
      id="services"
      className="relative section overflow-hidden
                 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950"
    >
      {/* BACKGROUND GLOW */}
      <div
        className="absolute inset-0
        bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.10),transparent_60%)]"
      />

      <div className="relative container">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold mb-16
                     text-slate-100 tracking-tight"
        >
          What We Do
        </motion.h2>

        {/* SLIDER WRAPPER */}
        <div className="relative">
          {/* LEFT ARROW */}
          <button
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="absolute -left-14 top-1/2 -translate-y-1/2 z-10
                       p-3 rounded-full
                       bg-white/5 backdrop-blur
                       border border-white/10
                       text-slate-300
                       disabled:opacity-30
                       hover:border-emerald-400/40
                       transition"
          >
            <ChevronLeft size={22} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => paginate(1)}
            disabled={page === totalPages}
            className="absolute -right-14 top-1/2 -translate-y-1/2 z-10
                       p-3 rounded-full
                       bg-white/5 backdrop-blur
                       border border-white/10
                       text-slate-300
                       disabled:opacity-30
                       hover:border-emerald-400/40
                       transition"
          >
            <ChevronRight size={22} />
          </button>

          {/* DRAGGABLE AREA */}
          <motion.div
            className="overflow-hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) paginate(1);
              if (info.offset.x > 100) paginate(-1);
            }}
          >
            <motion.div className="grid md:grid-cols-3 gap-10 cursor-grab active:cursor-grabbing">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                {visibleServices.map((s) => (
                  <motion.div
                    key={s.title}
                    custom={direction}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="group relative"
                  >
                    {/* GLOW */}
                    <div
                      className="absolute inset-0 rounded-2xl
                                 bg-gradient-to-r from-emerald-500/20 to-teal-500/20
                                 opacity-0 blur-xl transition-opacity duration-300
                                 group-hover:opacity-100"
                    />

                    {/* CARD */}
                    <div
                      className="relative rounded-2xl p-8 text-center
                                 bg-white/5 backdrop-blur
                                 border border-white/10 shadow-lg
                                 transition-all duration-300
                                 group-hover:-translate-y-2
                                 group-hover:border-emerald-400/30"
                    >
                      {/* ICON */}
                      <div
                        className="w-14 h-14 mx-auto mb-4
                                   rounded-full
                                   bg-gradient-to-br from-emerald-500 to-green-500
                                   text-white
                                   flex items-center justify-center
                                   opacity-90
                                   group-hover:scale-110 transition-transform duration-300"
                      >
                        {iconMap[s.iconName]}
                      </div>

                      <h3 className="text-xl font-semibold mb-2 text-slate-100">
                        {s.title}
                      </h3>

                      <p className="text-slate-400 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > page ? 1 : -1);
                setPage(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300
                ${
                  page === i
                    ? "w-8 bg-emerald-400"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
