import { FaHeart } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

import { links, socialLinks } from "../data/data";

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
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-300 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-2xl font-semibold mb-6">Connect</h3>

            <div className="flex gap-5">
              {socialLinks.map((items) => (
                <a
                  key={items.name}
                  href={items.href}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition flex items-center justify-center text-xl"
                >
                  {items.icon}
                </a>
              ))}
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
            © {new Date().getFullYear()} Maveli-Nadu. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-400 md:text-xs">
            Made by <span className=" text-yellow-300 md:text-xs ">Akash</span>{" "}
            with
            <FaHeart className="text-red-500 md:text-xl" /> for Kerala
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
