import { motion } from "framer-motion";

export default function AuroraBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {/* Navy */}
            <motion.div
                className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[140px]"
                animate={{
                    x: [0, 80, -40, 0],
                    y: [0, 40, 80, 0],
                    scale: [1, 1.15, 0.95, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Amber */}
            <motion.div
                className="absolute bottom-[-220px] right-[-120px] w-[650px] h-[650px] rounded-full bg-amber-400/20 blur-[150px]"
                animate={{
                    x: [0, -60, 30, 0],
                    y: [0, -60, 30, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Cyan */}
            <motion.div
                className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-400/15 blur-[140px]"
                animate={{
                    x: [0, 60, -20, 0],
                    y: [0, -50, 40, 0],
                    scale: [1, 1.05, 0.95, 1],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
        </div>
    );
}