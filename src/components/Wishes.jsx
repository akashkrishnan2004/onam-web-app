import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Wishes() {
  const [wish, setWish] = useState("");

  const [wishes, setWishes] = useState([
    {
      name: "Team OnaVerse",
      message:
        "May your home bloom with happiness, prosperity and endless joy. Happy Onam! 🌸",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!wish.trim()) return;

    setWishes([
      {
        name: "Guest",
        message: wish,
      },
      ...wishes,
    ]);

    setWish("");
  };

  return (
    <section
      id="wishes"
      className="py-24 px-6 bg-gradient-to-b from-[#FDF4D8] to-[#FFF8E7]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[5px] text-amber-600 font-semibold">
            Spread Happiness
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-800">
            Leave Your Onam Wishes
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Share your warm wishes and celebrate the joy of Onam with everyone.
          </p>
        </motion.div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-16 flex flex-col md:flex-row gap-5"
        >
          <input
            type="text"
            placeholder="Write your Onam wish..."
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            className="flex-1 rounded-2xl border border-amber-200 bg-white px-6 py-4 outline-none focus:ring-2 focus:ring-amber-400"
          />

          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition"
          >
            <FaPaperPlane />
            Send
          </button>
        </form>

        {/* Wishes */}

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {wishes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-8 border border-amber-100"
            >
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-2xl">
                🌸
              </div>

              <h3 className="text-xl font-bold mt-5 text-gray-800">
                {item.name}
              </h3>

              <p className="mt-4 text-gray-600 leading-8">{item.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
