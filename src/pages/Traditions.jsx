import { motion } from "framer-motion";

import { traditions } from "../data/data";

export default function Traditions() {
  return (
    <section
      id="traditions"
      // className="py-24 px-6 bg-gradient-to-b from-sky-50 to-[#FFF8E7]"
      className="py-24 px-6 bg-gradient-to-b from-[#E8C76A] via-[#F8E8B5] to-[#FFFDF7]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="uppercase tracking-[5px] text-amber-600 font-semibold">
            Cultural Heritage
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-800">
            Traditional Arts of Kerala
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            Onam is not only about feasts and flowers. It is also a celebration
            of Kerala's vibrant performing arts, music, and traditions that have
            been preserved for generations.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {traditions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-100"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition duration-700 hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
