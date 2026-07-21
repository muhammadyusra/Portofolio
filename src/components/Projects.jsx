import { motion } from "framer-motion";
import { projects } from "../data/profile.js";


const STATUS_LABEL = {
  "in-progress": "sedang dikerjakan",
  research: "riset akademik",
  concept: "konsep",
  completed: "selesai",
};


export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 sm:px-10 border-t border-ink-line"
    >

      <div className="max-w-6xl mx-auto">


        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-4"
        >
          // proyek
        </motion.p>



        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold text-fog mb-14"
        >
          Beberapa hal yang sedang saya bangun.
        </motion.h2>




        <div className="grid md:grid-cols-3 gap-6">


          {projects.map((p, i) => (

            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                rounded-2xl
                border
                border-ink-line
                bg-ink-panel/60
                overflow-hidden
                flex
                flex-col
                transition-all
                duration-500
                hover:border-teal/50
              "
            >


              {/* Header */}
              <div className="flex items-center gap-1.5 px-5 py-3 border-b border-ink-line bg-ink/40">

                <span className="w-2 h-2 rounded-full bg-[#F2755A]" />
                <span className="w-2 h-2 rounded-full bg-amber" />
                <span className="w-2 h-2 rounded-full bg-teal" />


                <span className="ml-2 font-mono text-[11px] text-fog-dim truncate">
                  {p.name}
                </span>

              </div>





              <div className="p-6 flex flex-col flex-1">


                <div className="flex items-center justify-between mb-3">

                  <span className="font-mono text-[10px] uppercase tracking-widest text-teal">
                    {STATUS_LABEL[p.status]}
                  </span>


                  <span className="font-mono text-[10px] text-fog-dim">
                    {p.year}
                  </span>

                </div>





                <h3
                  className="
                    font-display
                    text-lg
                    font-semibold
                    text-fog
                    mb-2.5
                    group-hover:text-amber
                    transition-colors
                  "
                >
                  {p.title}
                </h3>





                <p className="text-sm text-fog-muted leading-relaxed flex-1">
                  {p.description}
                </p>





                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-ink-line">

                  {p.stack.map((s) => (

                    <span
                      key={s}
                      className="
                        font-mono
                        text-[10px]
                        text-fog-dim
                        border
                        border-ink-line
                        rounded-full
                        px-2.5
                        py-1
                      "
                    >
                      {s}
                    </span>

                  ))}

                </div>





                {/* Links */}
                {(p.github || p.demo) && (

                  <div className="flex gap-3 mt-6">


                    {p.github && (

                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex-1
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          py-2
                          text-center
                          text-xs
                          text-fog
                          transition
                          hover:border-teal
                          hover:text-teal
                        "
                      >
                        GitHub
                      </a>

                    )}




                    {p.demo && (

                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex-1
                          rounded-full
                          bg-amber
                          py-2
                          text-center
                          text-xs
                          font-medium
                          text-ink
                          transition
                          hover:scale-105
                        "
                      >
                        Demo
                      </a>

                    )}

                  </div>

                )}


              </div>


            </motion.article>

          ))}


        </div>


      </div>

    </section>
  );
}