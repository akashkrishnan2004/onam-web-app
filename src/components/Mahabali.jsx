import { motion } from "framer-motion";
import { FaCrown, FaHeart, FaHandsHelping } from "react-icons/fa";

import MahabaliViewer from "./MahabaliViewer";

const features = [
  {
    icon: <FaCrown className="text-3xl text-amber-500" />,
    title: "A Noble King",
    description:
      "Mahabali ruled Kerala with justice, equality, prosperity, and peace.",
  },
  {
    icon: <FaHeart className="text-3xl text-red-500" />,
    title: "Loved by Everyone",
    description:
      "His people cherished him because everyone was treated equally and lived happily.",
  },
  {
    icon: <FaHandsHelping className="text-3xl text-green-600" />,
    title: "The Spirit of Onam",
    description:
      "Every Onam celebrates Mahabali's annual visit to see the happiness of his people.",
  },
];

export default function Mahabali() {
  return (
    <section
      id="mahabali"
      className="py-24 px-6 bg-gradient-to-b from-[#FFF8E7] to-[#F8ECD0]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[5px] text-amber-600 font-semibold">
            The Legend
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-5 text-gray-800 leading-tight">
            King
            <span className="text-amber-500"> Mahabali</span>
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-9">
            Mahabali, also known as Maveli, was a wise and generous king whose
            reign is remembered as a golden era. His kingdom was filled with
            prosperity, equality, and happiness.
          </p>

          <p className="mt-6 text-gray-600 text-lg leading-9">
            According to tradition, Lord Vamana granted Mahabali permission to
            visit his people once every year. The people of Kerala welcome him
            with flower carpets, feasts, music, and celebrations during Onam.
          </p>

          <div className="grid gap-6 mt-12">
            {features.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.03 }}
                className="flex gap-5 bg-white rounded-3xl p-6 shadow-lg border border-amber-100"
              >
                <div>{item.icon}</div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}

        {/* <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/mahabali.webp"
            alt="King Mahabali"
            className="w-full rounded-[40px] shadow-2xl hover:scale-105 duration-500"
          />
        </motion.div> */}

        <MahabaliViewer />
      </div>
    </section>
  );
}
