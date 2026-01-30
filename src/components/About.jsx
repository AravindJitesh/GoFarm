// import { motion, useScroll, useTransform } from "framer-motion";

// export default function About() {
//   const { scrollY } = useScroll();

//   // Subtle floating parallax for image
//   const y = useTransform(scrollY, [0, 400], [0, -40]);

//   return (
//     <section
//       id="about"
//       className="relative section
//                  bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-900"
//     >
//       {/* SOFT GREEN BACKGROUND GLOW */}
//       <div
//         className="absolute inset-0
//                    bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.10),transparent_65%)]"
//       />

//       <div className="relative container grid md:grid-cols-2 gap-20 items-center">

//         {/* FLOATING IMAGE */}
//         <motion.img
//           src="/about.jpg"
//           alt="About NovaStack"
//           style={{ y }}
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ amount: 0.4 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="w-full rounded-2xl shadow-2xl object-cover"
//         />

//         {/* TIMELINE */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ amount: 0.4 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="relative"
//         >
//           {/* Vertical line */}
//           <div className="absolute left-3 top-0 h-full w-px bg-white/10" />

//           <div className="space-y-10 pl-12">

//             {/* ITEM 1 */}
//             <div className="relative">
//               <span className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-emerald-400" />
//               <h3 className="text-xl font-semibold text-slate-100 mb-2">
//                 Who We Are
//               </h3>
//               <p className="text-slate-400 leading-relaxed">
//                 NovaStack helps startups build{" "}
//                 <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-medium">
//                   scalable, production-ready products
//                 </span>{" "}
//                 with strong engineering fundamentals.
//               </p>
//             </div>

//             {/* ITEM 2 */}
//             <div className="relative">
//               <span className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-teal-400" />
//               <h3 className="text-xl font-semibold text-slate-100 mb-2">
//                 How We Work
//               </h3>
//               <p className="text-slate-400 leading-relaxed">
//                 We focus on{" "}
//                 <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-medium">
//                   clean architecture, performance, and maintainability
//                 </span>{" "}
//                 so products scale without rewrites.
//               </p>
//             </div>

//             {/* ITEM 3 */}
//             <div className="relative">
//               <span className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-emerald-300" />
//               <h3 className="text-xl font-semibold text-slate-100 mb-2">
//                 Why It Matters
//               </h3>
//               <p className="text-slate-400 leading-relaxed">
//                 Our approach reduces technical debt and enables{" "}
//                 <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-medium">
//                   long-term growth
//                 </span>{" "}
//                 for fast-moving teams.
//               </p>
//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
