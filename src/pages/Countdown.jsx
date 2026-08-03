import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaHourglassHalf,
  FaStopwatch,
} from "react-icons/fa";

export default function Countdown() {
  // Onam 2026
  const targetDate = new Date("August 26, 2026 00:00:00").getTime();

  const calculateTime = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      label: "Days",
      value: timeLeft.days,
      icon: <FaCalendarAlt />,
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      icon: <FaClock />,
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      icon: <FaHourglassHalf />,
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
      icon: <FaStopwatch />,
    },
  ];

  return (
    <section
      id="countdown"
      // className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100"
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-[#E8C76A] via-[#F8E8B5] to-[#FFFDF7]"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto text-center"
      >
        <p className="uppercase tracking-[8px] text-amber-600 font-bold">
          Welcome
        </p>

        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mt-4">
          Countdown to Onam
        </h2>

        <div className="flex justify-center mt-5 text-2xl">🌸 🌼 🌸 🌼 🌸</div>

        <p className="mt-8 text-gray-700 max-w-3xl mx-auto text-lg leading-8">
          Every year Kerala joyfully welcomes King Mahabali with colourful
          Pookalams, delicious Sadya, vibrant celebrations, and timeless
          traditions. The festival is almost here!
        </p>

        {/* Countdown Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {items.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -12,
                scale: 1.05,
                rotate: 1.5,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-white shadow-xl hover:shadow-amber-300/50 duration-300"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center text-2xl shadow-lg">
                  {item.icon}
                </div>
              </div>

              <motion.h1
                key={item.value}
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="text-5xl font-black text-amber-500 mt-6"
              >
                {String(item.value).padStart(2, "0")}
              </motion.h1>

              <p className="mt-4 uppercase tracking-[4px] text-gray-600 font-semibold text-xs">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-amber-700">
            ✨ Every second brings us closer to the grand celebration of Onam ✨
          </h3>

          <p className="mt-4 text-gray-600 text-lg">
            Let's welcome King Mahabali with happiness, unity, and prosperity.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
