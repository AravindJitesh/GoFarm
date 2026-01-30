import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ---------- COPY ICON ---------- */
function CopyIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
      whileHover="hover"
    >
      <motion.rect
        x="3"
        y="7"
        width="10"
        height="10"
        rx="2"
        strokeDasharray="2 2"
        variants={{
          hover: { strokeDashoffset: -8 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <rect x="9" y="3" width="12" height="12" rx="2" />
    </motion.svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const copy = (value, type) => {
    navigator.clipboard.writeText(value);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section
      id="contact"
      className="relative section overflow-hidden
                 bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-950"
    >
      {/* BACKDROP */}
      <div
        className="absolute inset-0
        bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.15),transparent_60%)]"
      />

      <div className="relative container max-w-4xl px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl font-semibold text-slate-100 mb-4">
            Let’s Talk
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Reach us instantly through phone, email, or WhatsApp.
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-10">
          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col sm:flex-row
                       sm:items-center sm:justify-between
                       gap-4
                       rounded-2xl px-6 sm:px-8 py-6
                       bg-white/5 backdrop-blur
                       border border-white/10
                       hover:border-emerald-400/40"
          >
            {/* CLICKABLE PHONE */}
            <a
              href="tel:+918157909781"
              className="flex items-center gap-4 flex-1"
            >
              <div
                className="h-14 w-14 flex items-center justify-center
                           rounded-full bg-emerald-500 text-white"
              >
                ☎
              </div>

              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="text-lg font-semibold text-slate-100">
                  +91 81579 09781
                </p>
              </div>
            </a>

            {/* COPY */}
            <button
              onClick={() => copy("+918157909781", "phone")}
              className="self-end sm:self-auto
                         relative p-2 rounded-lg
                         text-slate-400 hover:text-emerald-400
                         hover:bg-white/5 transition"
            >
              <CopyIcon />
              <AnimatePresence>
                {copied === "phone" && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute -top-6 right-0
                               text-xs text-emerald-400"
                  >
                    Copied ✓
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col sm:flex-row
                       sm:items-center sm:justify-between
                       gap-4
                       rounded-2xl px-6 sm:px-8 py-6
                       bg-white/5 backdrop-blur
                       border border-white/10
                       hover:border-emerald-400/40"
          >
            {/* CLICKABLE EMAIL */}
            <a
              href="mailto:contact@gofarm.com?subject=Inquiry&body=Hello%20GoFarm%20Team,"
              className="flex items-center gap-4 flex-1"
            >
              <div
                className="h-14 w-14 flex items-center justify-center
                           rounded-full bg-emerald-500 text-white text-xl"
              >
                ✉
              </div>

              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-lg font-semibold text-slate-100 break-all">
                  contact@gofarm.com
                </p>
              </div>
            </a>

            {/* COPY */}
            <button
              onClick={() => copy("contact@gofarm.com", "email")}
              className="self-end sm:self-auto
                         relative p-2 rounded-lg
                         text-slate-400 hover:text-emerald-400
                         hover:bg-white/5 transition"
            >
              <CopyIcon />
              <AnimatePresence>
                {copied === "email" && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute -top-6 right-0
                               text-xs text-emerald-400"
                  >
                    Copied ✓
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>

          {/* WHATSAPP CTA */}
          <motion.a
            href="https://wa.me/918157909781?text=Hello%20GoFarm%20Team,"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="block text-center rounded-2xl px-6 py-7
                       bg-gradient-to-r from-emerald-500 to-green-500
                       text-white font-semibold text-lg
                       shadow-xl shadow-emerald-500/30"
          >
            💬 Chat with us on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
}
