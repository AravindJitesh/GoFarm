import { motion, useMotionValue, animate } from "framer-motion";
import {
  MapPin,
  Leaf,
  Headset,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useLayoutEffect } from "react";
import { services } from "../data/siteData";

/* ---------- ICON MAP ---------- */
const iconMap = {
  MapPin: <MapPin size={28} />,
  Leaf: <Leaf size={28} />,
  Headset: <Headset size={28} />,
};

/* ---------- ANIMATION VARIANTS ---------- */
const titleVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const [page, setPage] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const x = useMotionValue(0);
  const trackRef = useRef(null);

  const GAP = 32;

  /* ---------- RESPONSIVE ---------- */
  const CARDS_PER_VIEW =
    typeof window !== "undefined" && window.innerWidth < 640
      ? 1
      : window.innerWidth < 1024
      ? 2
      : 3;

  const totalPages = Math.max(services.length - CARDS_PER_VIEW, 0);

  /* ---------- MEASURE CARD WIDTH ---------- */
  useLayoutEffect(() => {
    if (!trackRef.current) return;

    const card = trackRef.current.querySelector("[data-card]");
    if (!card) return;

    const width = card.offsetWidth + GAP;
    setCardWidth(width);

    animate(x, -page * width, {
      type: "spring",
      stiffness: 70,
      damping: 35,
      mass: 1.4,
    });
  }, [CARDS_PER_VIEW]);

  /* ---------- PAGINATE ---------- */
  const goToPage = (next) => {
    setPage(next);
    animate(x, -next * cardWidth, {
      type: "spring",
      stiffness: 70,
      damping: 35,
      mass: 1.4,
    });
  };

  return (
    <section
      id="services"
      className="relative section overflow-hidden
                 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950"
    >
      {/* BACKDROP */}
      <div
        className="absolute inset-0
        bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.10),transparent_60%)]"
      />

      <div className="relative container px-4">
        {/* TITLE */}
        <motion.h2
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          className="text-center text-3xl font-semibold mb-14 text-slate-100"
        >
          What We Do
        </motion.h2>

        {/* SLIDER */}
        <div className="relative">
          {/* ARROWS */}
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2
                       p-3 rounded-full bg-white/5 border border-white/10
                       text-slate-300 disabled:opacity-30"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2
                       p-3 rounded-full bg-white/5 border border-white/10
                       text-slate-300 disabled:opacity-30"
          >
            <ChevronRight size={22} />
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden touch-pan-y">
            <motion.div
              ref={trackRef}
              className="flex gap-8"
              style={{ x }}
              drag="x"
              dragMomentum={false}
              dragElastic={0.02}
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              onDragEnd={(_, info) => {
                if (!cardWidth) return;

                const swipeThreshold = cardWidth * 0.45;
                let targetPage = page;

                if (info.offset.x < -swipeThreshold && page < totalPages) {
                  targetPage = page + 1;
                } else if (info.offset.x > swipeThreshold && page > 0) {
                  targetPage = page - 1;
                }

                goToPage(targetPage);
              }}
            >
              {services.map((s) => (
                <motion.div
                  key={s.title}
                  data-card
                  variants={cardVariant}
                  className="
                    min-w-full
                    sm:min-w-[calc(50%-1rem)]
                    lg:min-w-[calc(33.333%-1.33rem)]
                  "
                >
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="relative h-full rounded-2xl p-7 text-center
                               bg-white/5 backdrop-blur
                               border border-white/10 shadow-lg"
                  >
                    <div
                      className="absolute inset-0 rounded-2xl
                      bg-gradient-to-r from-emerald-500/20 to-teal-500/20
                      blur-xl opacity-40"
                    />

                    <div className="relative">
                      <div
                        className="w-14 h-14 mx-auto mb-4 rounded-full
                        bg-gradient-to-br from-emerald-500 to-green-500
                        text-white flex items-center justify-center"
                      >
                        {iconMap[s.iconName]}
                      </div>

                      <h3 className="text-xl font-semibold text-slate-100 mb-2">
                        {s.title}
                      </h3>

                      <p className="text-slate-400">{s.desc}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`h-2.5 rounded-full transition-all
                ${page === i ? "w-7 bg-emerald-400" : "w-2.5 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
