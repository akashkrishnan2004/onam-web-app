import { motion } from "framer-motion";

const onamDays = [
  {
    day: "Atham",
    color: "from-amber-400 to-orange-400",
    description: "Marks the beginning of the ten-day Onam festival.",
  },
  {
    day: "Chithira",
    color: "from-green-400 to-emerald-500",
    description: "Homes are cleaned and Pookalam designs grow larger.",
  },
  {
    day: "Chodhi",
    color: "from-pink-400 to-rose-400",
    description: "Families continue decorating with fresh flowers.",
  },
  {
    day: "Vishakam",
    color: "from-blue-400 to-cyan-500",
    description: "Markets become lively with Onam shopping.",
  },
  {
    day: "Anizham",
    color: "from-indigo-400 to-violet-500",
    description: "Snake boat race preparations begin.",
  },
  {
    day: "Thriketa",
    color: "from-yellow-400 to-amber-500",
    description: "Relatives begin arriving home for the celebrations.",
  },
  {
    day: "Moolam",
    color: "from-teal-400 to-green-500",
    description: "Traditional feasts and temple events take place.",
  },
  {
    day: "Pooradam",
    color: "from-red-400 to-orange-500",
    description: "Clay idols of Mahabali and Vamana are prepared.",
  },
  {
    day: "Uthradam",
    color: "from-purple-400 to-fuchsia-500",
    description: "Known as First Onam, with final preparations.",
  },
  {
    day: "Thiruvonam",
    color: "from-yellow-500 to-orange-600",
    description: "The grand celebration with Sadya, Pookalam, and festivities.",
  },
];

export default function TenDays() {
  return (
    <section
      id="ten-days"
      className="py-24 px-6 bg-gradient-to-b from-[#F8ECD0] to-[#FFF8E7]"
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
            Festival Journey
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-800">
            The Ten Days of Onam
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            Every day of Onam has its own traditions and significance, leading
            up to the grand celebration of Thiruvonam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-20">
          {onamDays.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-100"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

              <div className="p-8">
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold mt-6 text-gray-800">
                  {item.day}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
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
