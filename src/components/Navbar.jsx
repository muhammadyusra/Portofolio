import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar({ introDone }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{
        y: introDone ? 0 : -40,
        opacity: introDone ? 1 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-ink-line shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6 sm:px-10">
        {/* Logo */}

        <motion.a
          href="#top"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            layoutId="portfolio-logo"
            src={Logo}
            alt="Muhammad Yusra Logo"
            className="h-10 w-auto object-contain select-none"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 22,
            }}
          />

          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{
              opacity: introDone ? 1 : 0,
              x: introDone ? 0 : -8,
            }}
            transition={{
              delay: 0.35,
              duration: 0.4,
            }}
            className="hidden sm:block font-mono text-sm text-fog"
          >
            Muhammad <span className="text-amber">Yusra</span>
          </motion.span>
        </motion.a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wide">
          {LINKS.map((item, index) => (
            <motion.li
              key={item.href}
              whileHover={{
                y: -2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <a
                href={item.href}
                className="text-fog-muted hover:text-amber transition-colors"
              >
                <span className="text-teal">
                  {String(index + 1).padStart(2, "0")}.
                </span>{" "}
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hire Button */}

        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            hidden 
            md:inline-flex 
            items-center 
            gap-2 
            rounded-full 
            border 
            border-amber/40 
            px-4 
            py-2 
            font-mono 
            text-xs 
            text-amber 
            transition-colors 
            hover:bg-amber 
            hover:text-ink
          "
        >
          open_to_work()
        </motion.a>

        {/* Mobile Button */}

        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          aria-label="Toggle Menu"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-fog text-2xl"
        >
          <motion.span
            animate={{
              rotate: open ? 90 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {open ? "×" : "☰"}
          </motion.span>
        </motion.button>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden border-t border-ink-line bg-ink-panel md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5 font-mono text-sm">
              {LINKS.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{
                    x: 6,
                  }}
                  onClick={() => setOpen(false)}
                  className="text-fog-muted hover:text-amber transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}