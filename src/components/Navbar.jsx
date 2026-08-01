import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "#home" },
  { name: "Story", href: "#story" },
  { name: "Mahabali", href: "#mahabali" },
  { name: "Pookalam", href: "#pookalam" },
  { name: "Sadya", href: "#sadya" },
  { name: "Gallery", href: "#gallery" },
  { name: "Wishes", href: "#wishes" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-white/80 backdrop-blur-lg shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-bold text-amber-600 tracking-wide"
        >
          Maveli Nadu
        </a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8 font-medium text-amber-800">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative transition duration-300 hover:text-amber-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}

        <button
          className="lg:hidden text-3xl text-amber-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b text-amber-800 border-gray-100 hover:bg-amber-50 hover:text-amber-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
