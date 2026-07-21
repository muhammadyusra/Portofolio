import { motion } from 'framer-motion'
import { skills } from '../data/profile.js'
import LogoLoop from './ui/LogoLoop.jsx'

import reactLogo from '../assets/logos/react.svg'
import pythonLogo from '../assets/logos/python.svg'
import javascriptLogo from '../assets/logos/javascript.svg'
import tailwindLogo from '../assets/logos/tailwind.svg'
import githubLogo from '../assets/logos/github.svg'
import powerbiLogo from '../assets/logos/powerbi.svg'


const techLogos = [
  {
    src: reactLogo,
    alt: "React"
  },
  {
    src: javascriptLogo,
    alt: "JavaScript"
  },
  {
    src: pythonLogo,
    alt: "Python"
  },
  {
    src: tailwindLogo,
    alt: "Tailwind CSS"
  },
  {
    src: githubLogo,
    alt: "GitHub"
  },
  {
    src: powerbiLogo,
    alt: "Power BI"
  }
]


export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative py-28 px-6 sm:px-10 border-t border-ink-line bg-ink-soft"
    >

      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity:0,y:12 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="eyebrow mb-4"
        >
          // stack
        </motion.p>


        <motion.h2
          initial={{ opacity:0,y:12 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{delay:.05}}
          className="
            font-display
            text-3xl
            sm:text-4xl
            font-semibold
            text-fog
            mb-14
          "
        >
          Tools yang saya pakai untuk membangun sesuatu.
        </motion.h2>



        <div className="grid md:grid-cols-3 gap-6">

          {skills.map((group,gi)=>(

            <motion.div
              key={group.group}
              initial={{
                opacity:0,
                y:24
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              viewport={{
                once:true,
                margin:"-60px"
              }}
              transition={{
                duration:.5,
                delay:gi*.1
              }}

              className="
                rounded-2xl
                border
                border-ink-line
                bg-ink-panel/60
                p-6
              "
            >

              <p className="
                font-mono
                text-xs
                text-amber
                tracking-widest
                uppercase
                mb-5
              ">
                {group.group}
              </p>


              <ul className="flex flex-wrap gap-2.5">

                {group.items.map(item=>(

                  <li
                    key={item}
                    className="
                      font-mono
                      text-xs
                      text-fog-muted
                      border
                      border-ink-line
                      rounded-full
                      px-3.5
                      py-1.5
                      hover:border-teal
                      hover:text-teal
                      transition-colors
                    "
                  >
                    {item}
                  </li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>




        {/* Technology Loop */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="mt-20"

        >

          <p className="
            font-mono
            text-xs
            uppercase
            tracking-widest
            text-fog-dim
            mb-8
            text-center
          ">
            technology ecosystem
          </p>


          <LogoLoop
            logos={techLogos}
            speed={120}
            logoHeight={32}
            gap={50}
            pauseOnHover
            fadeOut
          />


        </motion.div>


      </div>

    </section>
  )
}