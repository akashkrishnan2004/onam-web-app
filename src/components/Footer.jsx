import { FaGithub, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const quickLinks = [
  "Home",
  "Story",
  "Mahabali",
  "Pookalam",
  "Sadya",
  "Gallery",
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="relative bg-[#1F3D2B] text-white pt-20 pb-10"
    >
      {/* Top Wave Decoration */}

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-green-400"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-14">
          {/* Brand */}

          <div>
            <h2 className="text-4xl font-bold text-yellow-300">Maveli Nadu</h2>

            <p className="mt-6 leading-8 text-gray-300">
              Celebrate the timeless beauty of Kerala's grand festival. OnaVerse
              is a tribute to the traditions, culture, togetherness, and joy of
              Onam.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-300 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-2xl font-semibold mb-6">Connect</h3>

            <div className="flex gap-5">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition flex items-center justify-center text-xl"
              >
                <FaGithub />
              </a>

              {/* <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-500 transition flex items-center justify-center text-xl"
              >
                <FaInstagram />
              </a> */}

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-500 transition flex items-center justify-center text-xl"
              >
                <FaLinkedin />
              </a>
            </div>

            <button
              onClick={scrollTop}
              className="mt-10 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition flex items-center gap-2"
            >
              <HiArrowUp />
              Back to Top
            </button>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} OnaVerse. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-400 md:text-xs">
            Made by{" "}
            <span className="font-semibold text-yellow-300">
              Akash Krishnan
            </span>{" "}
            with <FaHeart className="text-red-500" /> for Kerala
          </p>

          {/* <p className="flex items-center gap-2 text-gray-400">
            Crafted with <FaHeart className="text-red-500 animate-pulse" /> by{" "}
            <span className="font-semibold text-yellow-300">
              Akash Krishnan
            </span>{" "}
            • Happy Onam 🌸
          </p> */}
        </div>
      </div>
    </footer>
  );
}
