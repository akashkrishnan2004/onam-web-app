import { motion } from "framer-motion";

const images = [
  "/images/pookalam1.webp",
  "/images/pookalam2.webp",
  "/images/pookalam3.webp",
  "/images/pookalam4.webp",
  "/images/pookalam5.webp",
  "/images/pookalam6.webp",
];

export default function Pookalam() {
  return (
    <section
      id="pookalam"
      className="py-24 px-6 bg-gradient-to-b from-[#FFF8E7] to-[#FFF3D4]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="uppercase tracking-[5px] text-amber-600 font-semibold">
            Floral Art
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-800">
            Beautiful Pookalams
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            Pookalam is a colorful floral carpet created using fresh flowers. It
            symbolizes prosperity, happiness, and the warm welcome for King
            Mahabali during Onam.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
            >
              <img
                src={image}
                alt={`Pookalam ${index + 1}`}
                className="w-full h-80 object-fill transition duration-700 group-hover:scale-110"
              />

              <div className="bg-white p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Design {index + 1}
                </h3>

                <p className="text-gray-600 mt-2">
                  Traditional floral arrangement inspired by the spirit of Onam.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
