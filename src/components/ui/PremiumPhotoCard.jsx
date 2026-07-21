import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function PremiumPhotoCard({ image }) {
    const cardRef = useRef(null);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const springX = useSpring(rotateX, {
        stiffness: 180,
        damping: 18,
    });

    const springY = useSpring(rotateY, {
        stiffness: 180,
        damping: 18,
    });

    const handleMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        rotateY.set((x - centerX) / 18);
        rotateX.set(-(y - centerY) / 18);
    };

    const reset = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={{
                rotateX: springX,
                rotateY: springY,
                transformStyle: "preserve-3d",
            }}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                y: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                },
            }}
            className="relative"
        >
            {/* Glow */}

            <div className="absolute inset-0 rounded-[36px] bg-amber/20 blur-[90px] scale-95" />

            {/* Glass */}

            <div className="relative rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_30px_80px_rgba(0,0,0,.45)] overflow-hidden">

                {/* Spotlight */}

                <motion.div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300"
                    style={{
                        background:
                            "radial-gradient(circle at center, rgba(255,255,255,.18), transparent 70%)",
                    }}
                />

                {/* Image */}

                <motion.img
                    src={image}
                    alt="Profile"
                    draggable={false}
                    style={{
                        transform: "translateZ(60px)",
                    }}
                    className="rounded-3xl w-[360px] object-cover select-none"
                />

                {/* Border */}

                <div className="absolute inset-0 rounded-[34px] border border-white/10" />

            </div>

            {/* Badge */}

            <motion.div
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-6 rounded-full bg-[#10151c]/90 backdrop-blur-xl border border-white/10 px-5 py-2"
            >
                <span className="text-xs font-mono text-teal">
                    Full Stack Developer
                </span>
            </motion.div>
        </motion.div>
    );
}