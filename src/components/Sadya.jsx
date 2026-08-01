import { motion } from "framer-motion";

const dishes = [
  "Rice",
  "Parippu",
  "Sambar",
  "Avial",
  "Olan",
  "Kaalan",
  "Thoran",
  "Erissery",
  "Pachadi",
  "Kichadi",
  "Pappadam",
  "Banana Chips",
  "Sharkara Upperi",
  "Pickle",
  "Payasam",
];

export default function Sadya() {
  return (
    <section
      id="sadya"
      className="py-24 px-6 bg-gradient-to-b from-[#FFF3D4] to-[#FFF8E7]"
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
          <span className="uppercase tracking-[5px] text-amber-600 font-semibold">
            Traditional Feast
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-800">
            Onam Sadya
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            The Onam Sadya is a grand vegetarian feast served on a banana leaf.
            It is one of the most cherished traditions of Onam, bringing
            families together to celebrate abundance and gratitude.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-14 items-center mt-20">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/sadya.webp"
              alt="Onam Sadya"
              className="rounded-[30px] shadow-2xl hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* Dishes */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {dishes.map((dish) => (
                <motion.div
                  key={dish}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  className="bg-white border border-amber-100 rounded-2xl shadow-md p-4 text-center font-medium text-gray-700 hover:bg-amber-50 transition"
                >
                  {dish}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 bg-amber-50 border border-amber-200 rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-amber-700">
                Did You Know?
              </h3>

              <p className="mt-4 text-gray-700 leading-8">
                A traditional Onam Sadya can include more than{" "}
                <strong>26 dishes</strong>, all served in a specific order on a
                banana leaf. It represents generosity, togetherness, and the
                rich culinary heritage of Kerala.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
