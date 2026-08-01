import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  // Set the Onam date here
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
    },
    {
      label: "Hours",
      value: timeLeft.hours,
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#FFF8E7] to-[#FDF4D8]">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="uppercase tracking-[6px] text-amber-600 font-semibold">
          Welcome
        </p>

        <h2 className="text-5xl font-bold text-gray-800 mt-4">
          Countdown to Onam
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
          Every year Kerala welcomes King Mahabali with joy, flowers, delicious
          feasts, and unforgettable celebrations. Let the countdown begin.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {items.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-3xl bg-white shadow-xl p-10 border border-amber-100"
            >
              <h1 className="text-5xl font-black text-amber-500">
                {String(item.value).padStart(2, "0")}
              </h1>

              <p className="mt-4 text-gray-600 uppercase tracking-widest">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
