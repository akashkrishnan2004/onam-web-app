// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPaperPlane } from "react-icons/fa";

// export default function Wishes() {
//   const [wish, setWish] = useState("");

//   const [wishes, setWishes] = useState([
//     {
//       name: "Team Maveli Nadu",
//       message:
//         "May your home bloom with happiness, prosperity and endless joy. Happy Onam! 🌸",
//     },
//   ]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!wish.trim()) return;

//     setWishes([
//       {
//         name: "Guest",
//         message: wish,
//       },
//       ...wishes,
//     ]);

//     setWish("");
//   };

//   return (
//     <section
//       id="wishes"
//       className="py-24 px-6 bg-gradient-to-b from-[#FDF4D8] to-[#FFF8E7]"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <span className="uppercase tracking-[5px] text-amber-600 font-semibold">
//             Spread Happiness
//           </span>

//           <h2 className="text-5xl font-bold mt-4 text-gray-800">
//             Leave Your Onam Wishes
//           </h2>

//           <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
//             Share your warm wishes and celebrate the joy of Onam with everyone.
//           </p>
//         </motion.div>

//         {/* Form */}

//         <form
//           onSubmit={handleSubmit}
//           className="mt-16 flex flex-col md:flex-row gap-5"
//         >
//           <input
//             type="text"
//             placeholder="Write your Onam wish..."
//             value={wish}
//             onChange={(e) => setWish(e.target.value)}
//             className="flex-1 rounded-2xl border border-amber-200 bg-white px-6 py-4 outline-none focus:ring-2 focus:ring-amber-400"
//           />

//           <button
//             type="submit"
//             className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition"
//           >
//             <FaPaperPlane />
//             Send
//           </button>
//         </form>

//         {/* Wishes */}

//         <div className="grid md:grid-cols-2 gap-8 mt-16">
//           {wishes.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-3xl shadow-lg p-8 border border-amber-100"
//             >
//               <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-2xl">
//                 🌸
//               </div>

//               <h3 className="text-xl font-bold mt-5 text-gray-800">
//                 {item.name}
//               </h3>

//               <p className="mt-4 text-gray-600 leading-8">{item.message}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import { FaCrown, FaGift, FaStar } from "react-icons/fa";

const blessings = [
  "🌸 May King Mahabali bless your home with happiness and prosperity. Happy Onam!",
  "🪔 Wishing you peace, joy and good health this Onam season.",
  "🌾 May your life be as abundant as the harvest fields of Kerala.",
  "🍛 May every Sadya meal bring your family together with love.",
  "🌺 Let your home bloom with happiness like a beautiful Pookalam.",
  "💛 May this Onam fill your heart with hope, success and endless smiles.",
  "✨ Wishing you prosperity, good fortune and unforgettable memories this Onam.",
  "🌿 May Mahabali's blessings remain with you throughout the year.",
];

export default function Wishes() {
  const [message, setMessage] = useState("");

  const receiveBlessing = () => {
    const random = blessings[Math.floor(Math.random() * blessings.length)];
    setMessage(random);
  };

  return (
    <section
      id="blessing"
      className="py-24 px-6 bg-gradient-to-b from-[#FFF8E7] to-[#FDF4D8]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[5px] text-amber-600 font-semibold">
            Blessings From Mahabali
          </span>

          <h2 className="text-5xl font-bold text-gray-800 mt-4">
            Receive an Onam Blessing
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            According to tradition, King Mahabali visits Kerala during Onam.
            Receive a special blessing and celebrate the spirit of the festival.
          </p>
        </motion.div>

        {/* Crown */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="mt-14 flex justify-center"
        >
          <div className="w-36 h-36 rounded-full bg-amber-100 flex items-center justify-center shadow-2xl">
            <FaCrown className="text-6xl text-amber-500" />
          </div>
        </motion.div>

        {/* Button */}

        <button
          onClick={receiveBlessing}
          className="mt-12 inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 transition text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl"
        >
          <FaGift />
          Receive Blessing
        </button>

        {/* Blessing */}

        <AnimatePresence>
          {message && (
            <motion.div
              key={message}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="mt-14 bg-white rounded-3xl border border-amber-200 shadow-xl p-8"
            >
              <HiSparkles className="text-amber-500 text-3xl mx-auto mb-4" />

              <div className="relative">
                <span className="absolute -top-4 left-0 text-6xl text-amber-300 opacity-60 font-serif">
                  “
                </span>

                <p className="text-xl md:text-2xl leading-10 text-gray-800 font-medium italic px-8 text-center">
                  {message}
                </p>

                <span className="absolute -bottom-8 right-0 text-6xl text-amber-300 opacity-60 font-serif">
                  ”
                </span>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-amber-300"></div>

                <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm">
                  Blessings from Mahabali
                </span>

                <div className="h-px w-16 bg-amber-300"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
