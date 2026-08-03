import { motion } from "framer-motion";
import { FaWater, FaTrophy, FaUsers } from "react-icons/fa";

const facts = [
  {
    icon: <FaWater className="text-3xl text-blue-500" />,
    title: "Snake Boats",
    description:
      "The Chundan Vallam, or snake boat, can be over 100 feet long and is one of Kerala's most iconic traditional boats.",
  },
  {
    icon: <FaUsers className="text-3xl text-green-600" />,
    title: "Team Spirit",
    description:
      "Each boat is powered by around 100 oarsmen rowing in perfect rhythm with traditional boat songs.",
  },
  {
    icon: <FaTrophy className="text-3xl text-amber-500" />,
    title: "Grand Competition",
    description:
      "Vallam Kali is one of the biggest sporting and cultural events celebrated during the Onam season.",
  },
];

export default function BoatRace() {
  return (
    <section
      id="boat-race"
      className="py-24 px-6 bg-gradient-to-b from-[#FFF8E7] to-sky-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="uppercase tracking-[5px] text-sky-600 font-semibold">
            Kerala Tradition
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-800">
            Vallam Kali
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            Vallam Kali, the famous snake boat race, is one of Kerala's most
            spectacular traditions. Hundreds of rowers race together in perfect
            harmony, creating an unforgettable celebration of teamwork and
            culture.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/vallamkali.webp"
              alt="Vallam Kali"
              className="rounded-[30px] shadow-2xl hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* Facts */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {facts.map((fact) => (
              <motion.div
                key={fact.title}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-sky-100 flex gap-5"
              >
                <div>{fact.icon}</div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {fact.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
