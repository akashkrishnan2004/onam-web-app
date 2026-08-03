// import { useState } from "react";
// import { motion } from "framer-motion";

// import { dishes } from "../data/dishes";
// import SadyaHotspot from "../components/SadyaHotspot";
// import Arrow from "../components/Arrow";

// export default function Sadya() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section
//       id="sadya"
//       className="relative py-24 overflow-hidden bg-gradient-to-b from-[#FFF8E8] via-[#FFF4D6] to-[#FFEFC5]"
//     >
//       {/* Background Decoration */}

//       <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-amber-200/30 blur-3xl"></div>

//       <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-200/30 blur-3xl"></div>

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center"
//         >
//           <p className="uppercase tracking-[6px] text-amber-600 font-semibold">
//             Traditional Feast
//           </p>

//           <h2 className="mt-4 text-4xl md:text-6xl font-black text-gray-800">
//             Interactive Onam Sadya
//           </h2>

//           <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
//             Click or hover over the dishes to discover their names and
//             experience Kerala's traditional Onam Sadya.
//           </p>
//         </motion.div>

//         {/* Sadya Image */}

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative mt-20"
//         >
//           <img
//             src="/images/sadya.webp"
//             alt="Onam Sadya"
//             className="
//               w-full
//               rounded-[40px]
//               shadow-2xl
//               border-8
//               border-white
//               select-none
//             "
//             draggable="false"
//           />

//           {/* Hotspots */}

//           {dishes.map((dish) => (
//             <SadyaHotspot
//               key={dish.id}
//               dish={dish}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           ))}

//           {/* Arrow */}

//           {selected && (
//             <Arrow
//               startX={selected.x}
//               startY={selected.y}
//               endX={selected.labelX}
//               endY={selected.labelY}
//             />
//           )}
//           {/* Instruction */}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="absolute bottom-6 left-1/2 -translate-x-1/2"
//           >
//             <div className="bg-white/90 backdrop-blur-lg px-6 py-3 rounded-full shadow-xl border border-amber-200">
//               <p className="text-sm md:text-base font-medium text-gray-700">
//                 👆 Hover or Tap on any hotspot to identify the dish
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Legend */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-16 flex flex-wrap justify-center gap-6"
//         >
//           <div className="flex items-center gap-2">
//             <span className="w-4 h-4 rounded-full bg-red-500"></span>
//             <span className="text-gray-700">Hotspot</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <span className="w-4 h-4 rounded-full bg-amber-500 shadow-lg"></span>
//             <span className="text-gray-700">Selected Dish</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <span className="text-amber-500 text-xl">➜</span>
//             <span className="text-gray-700">Animated Pointer</span>
//           </div>
//         </motion.div>

//         {/* Footer Note */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="mt-10 text-center"
//         >
//           <p className="text-gray-500 italic text-sm md:text-base">
//             🌿 Every dish in a traditional Onam Sadya has a unique place on the
//             banana leaf and a special role in Kerala's rich culinary heritage.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";

import { dishes } from "../data/dishes";
import Hotspot from "../components/Hotspot";
import SadyaHotspot from "../components/SadyaHotspot";
import Arrow from "../components/Arrow";

export default function Sadya() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="sadya"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#FFF8E7] via-[#FFF4D6] to-[#FFE9BF]"
    >
      {/* Background Decorations */}

      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-amber-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="uppercase tracking-[6px] text-amber-600 font-semibold">
            Traditional Feast
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-5 text-gray-800">
            Interactive Onam Sadya
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            Explore the traditional Onam Sadya by hovering over or tapping each
            dish on the banana leaf.
          </p>
        </motion.div>

        {/* Image */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20"
          onMouseLeave={() => setSelected(null)}
        >
          <img
            src="/images/sadya.webp"
            alt="Onam Sadya"
            draggable="false"
            className="
              w-full
              rounded-[40px]
              border-8
              border-white
              shadow-2xl
              select-none
              cursor-crosshair
            "
          />

          {/* Arrow */}

          {selected && (
            <Arrow
              // startX={selected.x}
              // startY={selected.y}
              // endX={selected.labelX}
              // endY={selected.labelY}
              startX={selected.x}
              startY={selected.y}
              endX={selected.x}
              endY={selected.y - 25}
            />
          )}

          {/* Hotspots */}

          {dishes.map((dish) => (
            <Hotspot
              key={dish.id}
              dish={dish}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </motion.div>

        {/* Bottom Note */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 italic">
            🌿 Hover or tap on the banana leaf to discover each traditional
            delicacy served during Onam.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
