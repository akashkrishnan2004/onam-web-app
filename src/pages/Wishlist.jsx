import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import { collection, query, where, orderBy, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebase";

export default function Wishlist() {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWishes = async () => {
      try {
        const wishesQuery = query(
          collection(db, "wishes"),
          where("status", "==", "approved"),
          orderBy("createdAt", "desc"),
        );

        const snapshot = await getDocs(wishesQuery);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setWishes(data);
      } catch (error) {
        console.error("Error loading wishes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadWishes();
  }, []);

  return (
    <section className="mt-28">
      {/* Heading */}
      <div className="text-center">
        <span className="uppercase tracking-[5px] text-amber-600 font-semibold">
          From Our Visitors
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
          Onam Wishes 🌸
        </h2>

        <p className="mt-4 text-gray-600">
          Wishes shared by our wonderful visitors.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center mt-12">
          <div className="w-10 h-10 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin" />
        </div>
      )}

      {/* No Wishes */}
      {!loading && wishes.length === 0 && (
        <div className="mt-12 text-center bg-white/70 rounded-3xl p-10">
          <FaHeart className="text-4xl text-amber-400 mx-auto" />

          <p className="mt-4 text-gray-600">
            Be the first to share an Onam wish! 🌸
          </p>
        </div>
      )}
      {/* Approved Wishes */}
      {!loading && wishes.length > 0 && (
        <section className="mt-16 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
          <motion.div
            className="flex gap-6 w-max px-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...wishes, ...wishes].map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                // whileHover={{
                //   y: -8,
                //   scale: 1.02,
                // }}
                className="
            flex-shrink-0
            w-[320px]
            sm:w-[380px]
            md:w-[420px]
            lg:w-[450px]

            h-[240px]
            sm:h-[250px]
            md:h-[200px]
            lg:h-[320x]
            bg-white
            rounded-3xl
            shadow-xl
            border
            border-amber-100
            p-7
          "
              >
                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <FaHeart className="text-amber-500" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>

                    <p className="text-xs text-gray-400">
                      Shared an Onam wish 🌸
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6 relative">
                  <span className="absolute -top-5 -left-2 text-5xl text-amber-300 opacity-60 font-serif">
                    “
                  </span>

                  <p
                    className="
                    text-lg
                    leading-8
                    text-gray-700
                    font-medium
                    italic
                    px-5
                    break-words
                    whitespace-normal
                    line-clamp-4
                    "
                  >
                    {item.message}
                  </p>

                  <span className="absolute -bottom-8 right-0 text-5xl text-amber-300 opacity-60 font-serif">
                    ”
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
    </section>
  );
}
