import { motion } from "framer-motion";

import DotField from "./ui/DotField";
import Profile from "../assets/Avatar.png";


export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden flex items-center"
    >

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.3}
          dotSpacing={20}
          cursorRadius={350}
          cursorForce={0.08}
          bulgeOnly={true}
          bulgeStrength={30}
          gradientFrom="rgba(34,211,238,0.35)"
          gradientTo="rgba(251,146,60,0.25)"
          glowColor="#22d3ee"
        />
      </div>


      {/* Overlay */}
      <div className="
        absolute 
        inset-0 
        z-[1] 
        bg-gradient-to-b 
        from-transparent 
        via-[#080b12]/40 
        to-[#080b12]
      " />


      <div className="
        relative
        z-10
        mx-auto
        grid
        max-w-7xl
        grid-cols-1
        items-center
        gap-12
        px-6
        py-20
        lg:gap-20
        lg:px-6
        lg:py-32
        lg:grid-cols-[1.05fr_0.95fr]
      ">


        {/* AVATAR MOBILE + DESKTOP */}
        <motion.div
          initial={{
            opacity:0,
            scale:.85,
            x:50
          }}
          animate={{
            opacity:1,
            scale:1,
            x:0
          }}
          transition={{
            duration:.9,
            ease:"easeOut"
          }}
          className="
            relative
            flex
            justify-center
            order-first
            lg:order-last
            group
            mb-4
            lg:mb-0
          "
        >

          <div className="
            relative
            w-[220px]
            h-[220px]
            sm:w-[260px]
            sm:h-[260px]
            lg:w-[340px]
            lg:h-[340px]
          ">


            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-br
                from-amber-400
                via-orange-400
                to-cyan-400
                blur-2xl
                opacity-30
                transition
                duration-500
                group-hover:opacity-70
              "
            />


            {/* Gradient Border */}
            <div
              className="
                relative
                w-full
                h-full
                rounded-full
                bg-gradient-to-br
                from-amber-400
                via-orange-400
                to-cyan-400
                p-[3px]
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:rotate-3
              "
            >

              <img
                src={Profile}
                alt="Muhammad Yusra"
                draggable={false}
                className="
                  w-full
                  h-full
                  rounded-full
                  object-cover
                  bg-[#121820]
                "
              />

            </div>

          </div>

        </motion.div>



        {/* LEFT */}
        <motion.div
          initial={{
            opacity:0,
            x:-40
          }}
          animate={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:.8
          }}
        >

          <p className="eyebrow mb-6">
            // OPEN TO INTERNSHIP
          </p>


          <h1 className="
            font-display
            text-5xl
            font-bold
            leading-[1.02]
            tracking-tight
            text-fog
            sm:text-7xl
          ">

            Building

            <br />

            <span className="text-gradient">
              Modern Digital
            </span>

            <br />

            Experiences.

          </h1>


          <motion.p
            initial={{
              opacity:0,
              y:25
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:.2
            }}
            className="
              mt-8
              max-w-xl
              text-lg
              leading-relaxed
              text-fog-muted
            "
          >

            Hi, I'm{" "}

            <span className="font-semibold text-fog">
              Muhammad Yusra
            </span>

            {" "}— a passionate Full Stack Developer focused on crafting
            scalable, high-performance web applications with clean
            architecture and intuitive user experiences.

          </motion.p>


          <motion.div
            initial={{
              opacity:0,
              y:25
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:.35
            }}
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >

            <a
              href="#projects"
              className="
                rounded-full
                bg-amber
                px-7
                py-3
                font-medium
                text-ink
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                hover:shadow-amber/30
              "
            >
              View Projects
            </a>


            <a
              href="#contact"
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-7
                py-3
                text-fog
                backdrop-blur-md
                transition-all
                hover:border-teal
                hover:text-teal
              "
            >
              Contact Me
            </a>

          </motion.div>


          <motion.div
            initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }}
            transition={{
              delay:.6
            }}
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-4
              text-sm
              text-fog-muted
            "
          >

            <span>📍 Indonesia</span>

            <span className="h-1 w-1 rounded-full bg-fog-muted" />

            <span>Open To Work</span>

            <span className="h-1 w-1 rounded-full bg-fog-muted" />

            <span>React</span>

            <span>Laravel</span>

            <span>Node.js</span>

          </motion.div>


        </motion.div>


      </div>

    </section>
  );
}