// import { motion } from "framer-motion";
// import { FaLeaf } from "react-icons/fa";

// export default function AboutOnam() {
//   return (
//     <section
//       id="story"
//       className="relative py-24 px-6 bg-gradient-to-b from-[#FDF4D8] to-[#FFF8E7]"
//     >
//       {/* Decorative Circles */}
//       <div className="absolute top-20 left-10 w-48 h-48 bg-amber-200/30 rounded-full blur-3xl"></div>

//       <div className="absolute bottom-10 right-10 w-60 h-60 bg-green-200/30 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
//         {/* Image */}

//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="/images/about.webp"
//             alt="Onam Celebration"
//             className="rounded-3xl shadow-2xl object-fill w-full h-[550px] hover:scale-105 duration-500"
//           />
//         </motion.div>

//         {/* Content */}

//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-5 py-2 rounded-full">
//             <FaLeaf />
//             Festival of Joy
//           </div>

//           <h2 className="text-5xl font-extrabold text-gray-800 mt-6 leading-tight">
//             What is
//             <span className="text-amber-500"> Onam?</span>
//           </h2>

//           <p className="mt-8 text-gray-600 text-lg leading-9">
//             Onam is Kerala's biggest and most celebrated festival. It marks the
//             annual homecoming of the legendary King Mahabali, whose reign is
//             remembered as an era of prosperity, equality, and happiness.
//           </p>

//           <p className="mt-6 text-gray-600 text-lg leading-9">
//             Families decorate beautiful Pookalams, prepare the grand Onam Sadya,
//             enjoy Vallam Kali (snake boat races), perform traditional dances,
//             and celebrate together with love and gratitude.
//           </p>

//           <div className="grid grid-cols-2 gap-6 mt-10">
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <h3 className="text-3xl font-bold text-amber-500">10</h3>

//               <p className="text-gray-600 mt-2">Days of Celebration</p>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <h3 className="text-3xl font-bold text-amber-500">1000+</h3>

//               <p className="text-gray-600 mt-2">Years of Tradition</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  FaLeaf,
  FaCrown,
  FaUtensils,
  FaWater,
  FaArrowRight,
} from "react-icons/fa";

export default function AboutOnam() {
  const features = [
    {
      icon: <FaCrown />,
      title: "King Mahabali",
      desc: "The beloved ruler whose annual return symbolizes equality, prosperity, and happiness.",
    },
    {
      icon: <FaLeaf />,
      title: "Pookalam",
      desc: "Intricate floral carpets crafted with vibrant blossoms to warmly welcome Mahabali.",
    },
    {
      icon: <FaUtensils />,
      title: "Onam Sadya",
      desc: "A traditional feast served on banana leaves with over 20 delicious vegetarian dishes.",
    },
    {
      icon: <FaWater />,
      title: "Vallam Kali",
      desc: "Kerala's spectacular snake boat races showcasing teamwork, tradition, and excitement.",
    },
  ];

  return (
    <section
      id="story"
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Image Section */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{
            y: [0, -8, 0],
          }}
          className="relative"
        >
          {/* Decorative Border */}

          <div className="absolute -inset-4 rounded-[35px] bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 opacity-30 blur-xl"></div>

          <img
            src="/images/about.webp"
            alt="Onam Celebration"
            className="relative rounded-[30px] w-full h-full object-fill border-4 border-white shadow-[0_20px_60px_rgba(245,158,11,.35)] hover:scale-105 duration-500"
          />

          {/* Floating Badge */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -bottom-8 -right-5 bg-white rounded-2xl shadow-xl px-6 py-4"
          >
            <p className="text-amber-600 font-bold text-lg">
              🌸 Kerala's Biggest Festival
            </p>
          </motion.div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-5 py-2 rounded-full font-semibold">
            <FaLeaf />
            Festival of Joy
          </div>

          {/* Heading */}

          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight text-gray-800">
            What is{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Onam?
            </span>
          </h2>

          {/* Decorative Flowers */}

          <div className="text-2xl mt-4">🌸 🌼 🌸 🌼 🌸</div>

          {/* Description */}

          <p className="mt-8 text-lg leading-9 text-gray-700">
            Onam is Kerala's most celebrated festival, welcoming the annual
            return of the legendary King Mahabali. It symbolizes prosperity,
            unity, gratitude, and the rich cultural heritage of God's Own
            Country.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-700">
            Families decorate beautiful Pookalams, prepare the grand Onam Sadya,
            enjoy Vallam Kali (snake boat races), perform traditional dances,
            and celebrate together with love, happiness, and togetherness.
          </p>

          {/* Feature Cards */}

          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-white/70 backdrop-blur-lg rounded-2xl p-5 border border-white shadow-lg hover:shadow-amber-300/40 transition"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center text-xl">
                  {feature.icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-7">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          {/* Decorative Divider */}

          <div className="flex items-center justify-center my-12">
            <div className="h-px w-24 bg-amber-300"></div>
            <span className="mx-4 text-2xl">🌸</span>
            <div className="h-px w-24 bg-amber-300"></div>
          </div>

          {/* Statistics */}

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -8, scale: 1.04 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-amber-100 text-center"
            >
              <div className="text-4xl mb-3">📅</div>

              <h3 className="text-4xl font-black text-amber-500">10</h3>

              <p className="mt-2 text-gray-600 font-medium">
                Days of Celebration
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.04 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-amber-100 text-center"
            >
              <div className="text-4xl mb-3">👑</div>

              <h3 className="text-4xl font-black text-amber-500">1000+</h3>

              <p className="mt-2 text-gray-600 font-medium">
                Years of Tradition
              </p>
            </motion.div>
          </div>

          {/* Quote */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-8 border border-amber-200"
          >
            <p className="text-2xl italic text-amber-700 font-medium leading-relaxed">
              “Onam reminds us that happiness grows when shared with everyone.”
            </p>

            <p className="mt-4 text-gray-600">
              — A timeless tradition of Kerala
            </p>
          </motion.div>

          {/* CTA Button */}

          <motion.a
            href="#mahabali"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Discover King Mahabali
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
