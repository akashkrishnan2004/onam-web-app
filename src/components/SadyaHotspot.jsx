// import { motion } from "framer-motion";

// export default function SadyaHotspot({
//   dish,
//   selected,
//   setSelected,
// }) {
//   const isSelected = selected?.id === dish.id;

//   return (
//     <>
//       {/* Hotspot */}
//       <motion.button
//         whileHover={{ scale: 1.3 }}
//         whileTap={{ scale: 0.9 }}
//         onMouseEnter={() => setSelected(dish)}
//         onClick={() => setSelected(dish)}
//         className="absolute z-20"
//         style={{
//           top: `${dish.y}%`,
//           left: `${dish.x}%`,
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         {/* Pulse Ring */}
//         <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-40"></span>

//         {/* Main Dot */}
//         <span
//           className={`relative flex h-3.5 w-3.5 rounded-full border-2 border-white transition-all duration-300 ${
//             isSelected
//               ? "bg-amber-500 shadow-[0_0_25px_rgba(245,158,11,.9)]"
//               : "bg-red-500 shadow-lg"
//           }`}
//         ></span>
//       </motion.button>

//       {/* Floating Label */}
//       {isSelected && (
//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.8,
//             y: 10,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             y: 0,
//           }}
//           exit={{
//             opacity: 0,
//           }}
//           transition={{
//             duration: 0.25,
//           }}
//           className="absolute z-30"
//           style={{
//             top: `calc(${dish.labelY}% - 20px)`,
//             // left: `${dish.labelX}%`,
//             left: `calc(${dish.labelX}% + 10px)`,
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           <div className="backdrop-blur-md bg-white/85 border border-amber-300 rounded-full px-5 py-2 shadow-2xl whitespace-nowrap">

//             <p className="font-semibold text-gray-800 text-sm md:text-base">
//               🍽️ {dish.name}
//             </p>

//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// }

import { motion } from "framer-motion";

export default function SadyaHotspot({
  dish,
  selected,
  setSelected,
}) {
  const isSelected = selected?.id === dish.id;

  return (
    <>
      {/* Invisible Hotspot Area */}
      <button
        onMouseEnter={() => setSelected(dish)}
        onClick={() => setSelected(dish)}
        className="absolute z-20"
        style={{
          top: `${dish.y}%`,
          left: `${dish.x}%`,
          width: "36px",
          height: "36px",
          transform: "translate(-50%, -50%)",
          background: "transparent",
        }}
      >
        {/* Only show when selected */}
        {isSelected && (
          <>
            {/* Pulse */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1.8 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="absolute inset-0 rounded-full border-2 border-amber-500"
            />

            {/* Dot */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-amber-500 border border-white -translate-x-1/2 -translate-y-1/2"
            />
          </>
        )}
      </button>

      {/* Floating Label */}
      {isSelected && (
        <motion.div
          initial={{
            opacity: 0,
            scale: .8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="absolute z-30"
          style={{
            top: `${dish.labelY}%`,
            left: `${dish.labelX}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="backdrop-blur-md bg-white/80 border border-amber-300 rounded-full px-4 py-2 shadow-xl">

            🍛 {dish.name}

          </div>
        </motion.div>
      )}
    </>
  );
}