import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";

export default function Intro({ onFinish }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 1800);

    const finishTimer = setTimeout(() => {
      onFinish?.();
    }, 2400);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.985,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        >
          {/* Aurora Background */}

          <div
            className="absolute inset-0"
            style={{
              background: `
              radial-gradient(circle at center,
              rgba(245,158,11,.10) 0%,
              rgba(79,209,197,.06) 30%,
              transparent 70%)
            `,
            }}
          />

          {/* Grid */}

          <div className="absolute inset-0 grid-bg opacity-20" />

          {/* Content */}

          <div className="relative z-10 text-center px-6">
            {/* Logo */}

            <motion.img
              layoutId="portfolio-logo"
              src={Logo}
              alt="Muhammad Yusra"
              className="mx-auto mb-8 w-28 sm:w-32 logo-glow select-none"
              initial={{
                opacity: 0,
                scale: 0.85,
                filter: "blur(12px)",
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            />

            {/* Name */}

            <motion.h1
              className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-fog"
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(18px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.25,
                duration: 0.9,
              }}
            >
              Muhammad{" "}
              <span className="text-amber">
                Yusra
              </span>
            </motion.h1>

            {/* Subtitle */}

            <motion.p
              className="mt-5 font-mono text-xs uppercase tracking-[0.35em] text-fog-muted"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.6,
              }}
            >
              Full Stack Developer
            </motion.p>

            {/* Small Line */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 120,
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className="mx-auto mt-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}