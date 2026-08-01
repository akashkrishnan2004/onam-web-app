import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <motion.video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero.webp"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
          >
            Celebrate
            <br />
            <span className="text-yellow-300">The Spirit of Onam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            Experience Kerala's grand festival through traditions, colourful
            Pookalams, majestic Vallam Kali, delicious Sadya, and the timeless
            story of King Mahabali.
          </motion.p>

          {/* <motion.a
            href="#story"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-10 px-10 py-4 rounded-full text-lg font-semibold text-white bg-white/20 backdrop-blur-md border border-white/30 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 shadow-xl"
          >
            Explore Now
          </motion.a> */}

          <motion.a
            href="#story"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-10 px-10 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-orange-500 hover:to-amber-500 shadow-2xl transition-all duration-300"
          >
            Explore Now
          </motion.a>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.a
        href="#countdown"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white hover:text-yellow-300 transition"
        aria-label="Scroll Down"
      >
        <HiChevronDown size={45} />
      </motion.a>
    </section>
  );
}
