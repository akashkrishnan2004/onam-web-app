import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

export default function AboutOnam() {
  return (
    <section
      id="story"
      className="relative py-24 px-6 bg-gradient-to-b from-[#FDF4D8] to-[#FFF8E7]"
    >
      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-amber-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-60 h-60 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/about.webp"
            alt="Onam Celebration"
            className="rounded-3xl shadow-2xl object-fill w-full h-[550px] hover:scale-105 duration-500"
          />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-5 py-2 rounded-full">
            <FaLeaf />
            Festival of Joy
          </div>

          <h2 className="text-5xl font-extrabold text-gray-800 mt-6 leading-tight">
            What is
            <span className="text-amber-500"> Onam?</span>
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-9">
            Onam is Kerala's biggest and most celebrated festival. It marks the
            annual homecoming of the legendary King Mahabali, whose reign is
            remembered as an era of prosperity, equality, and happiness.
          </p>

          <p className="mt-6 text-gray-600 text-lg leading-9">
            Families decorate beautiful Pookalams, prepare the grand Onam Sadya,
            enjoy Vallam Kali (snake boat races), perform traditional dances,
            and celebrate together with love and gratitude.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-3xl font-bold text-amber-500">10</h3>

              <p className="text-gray-600 mt-2">Days of Celebration</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-3xl font-bold text-amber-500">1000+</h3>

              <p className="text-gray-600 mt-2">Years of Tradition</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
