import { motion } from "framer-motion";

const images = [
  "/images/gallery1.webp",
  "/images/gallery2.webp",
  "/images/gallery3.webp",
  "/images/gallery4.webp",
  "/images/gallery5.webp",
  "/images/gallery6.webp",
  "/images/gallery7.webp",
  "/images/gallery8.webp",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-6 bg-gradient-to-b from-[#FFF8E7] to-[#FDF4D8]"
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
            Memories
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-800">
            Onam Gallery
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            Explore colorful moments from Kerala's most cherished festival,
            celebrating tradition, togetherness, culture, and joy.
          </p>
        </motion.div>

        {/* Gallery */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
