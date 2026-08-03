import { motion, AnimatePresence } from "framer-motion";

export default function Hotspot({ dish, selected, setSelected }) {
  const isSelected = selected?.id === dish.id;

  return (
    <>
      {/* Invisible Click Area */}
      <button
        onMouseEnter={() => setSelected(dish)}
        onClick={() => setSelected(dish)}
        className="absolute z-30 cursor-pointer"
        style={{
          top: `${dish.y}%`,
          left: `${dish.x}%`,
          width: "40px",
          height: "40px",
          transform: "translate(-50%, -50%)",
          background: "transparent",
        }}
      >
        {/* Selected Dot */}
        <AnimatePresence>
          {isSelected && (
            <>
              {/* Pulse Ring */}
              <motion.span
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{
                  scale: 2,
                  opacity: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full border-2 border-amber-500"
              />

              {/* Main Dot */}
              <motion.span
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                exit={{
                  scale: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-amber-500 border border-white -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(251,191,36,.8)]"
              />
            </>
          )}
        </AnimatePresence>
      </button>

      {/* Floating Label */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
            }}
            transition={{
              duration: 0.25,
            }}
            className="absolute z-40"
            style={{
              //   top: `calc(${dish.labelY}% - 25px)`,
              //   left: `calc(${dish.labelX}% + 15px)`,
              //   transform: "translate(-50%, -50%)",
              top: `calc(${dish.y}% - 80px)`,
              left: `${dish.x}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="rounded-full border border-black bg-white/70 backdrop-blur-md px-5 py-2 shadow-xl">
              <p className="text-sm md:text-base font-semibold text-gray-900 whitespace-nowrap">
                🍛 {dish.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
