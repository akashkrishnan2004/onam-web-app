import { motion } from "framer-motion";

export default function Arrow({ startX, startY, endX, endY }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      preserveAspectRatio="none"
    >
      {/* Arrow Head */}
      <defs>

        <marker
          id="arrowHead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#F59E0B" />
        </marker>
      </defs>

      {/* Animated Arrow */}
      <motion.line
        x1={`${startX}%`}
        y1={`${startY}%`}
        x2={`${endX}%`}
        y2={`${endY}%`}
        stroke="#F59E0B"
        strokeWidth="3"
        strokeLinecap="round"
        markerEnd="url(#arrowHead)"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}
