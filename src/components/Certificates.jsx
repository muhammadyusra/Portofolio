import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "../data/profile.js";

export default function Certificates() {
    const [selected, setSelected] = useState(null);


    // ESC untuk menutup modal
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") {
                setSelected(null);
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    }, []);



    return (
        <>


            <section
                id="certificates"
                className="
                    relative
                    py-28
                    px-6
                    sm:px-10
                    border-t
                    border-ink-line
                "
            >

                <div className="max-w-6xl mx-auto">


                    <p className="eyebrow mb-4">
                        // sertifikat
                    </p>


                    <h2
                        className="
                            font-display
                            text-3xl
                            sm:text-4xl
                            font-semibold
                            text-fog
                            mb-12
                        "
                    >
                        Sertifikat & Aktivitas Akademik
                    </h2>



                    <div
                        className="
                            grid
                            md:grid-cols-2
                            gap-8
                        "
                    >

                        {certificates.map((item, index) => (

                            <motion.article

                                key={item.id}

                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                viewport={{
                                    once: true,
                                    margin: "-80px"
                                }}

                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5
                                }}


                                whileHover={{
                                    y: -8
                                }}


                                onClick={() => setSelected(item)}

                                className="
                                    cursor-pointer
                                    group
                                    rounded-2xl
                                    overflow-hidden
                                    border
                                    border-ink-line
                                    bg-ink-panel/60
                                "
                            >


                                {/* IMAGE */}

                                <div
                                    className="
                                        relative
                                        overflow-hidden
                                    "
                                >

                                    <motion.img

                                        src={item.image}

                                        alt={item.title}
                                        
                                        loading="lazy"


                                        initial={{
                                            filter:"brightness(0.65)"
                                        }}


                                        whileHover={{
                                            scale:1.08,
                                            filter:"brightness(1)"
                                        }}


                                        transition={{
                                            duration:0.4
                                        }}


                                        className="
                                            w-full
                                            aspect-[4/3]
                                            object-cover
                                        "
                                    />


                                    {/* overlay */}

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-black/20
                                            group-hover:bg-transparent
                                            transition-all
                                            duration-500
                                        "
                                    />


                                </div>




                                {/* CONTENT */}

                                <div className="p-6">


                                    <h3
                                        className="
                                            font-display
                                            text-lg
                                            font-semibold
                                            text-fog
                                            group-hover:text-amber
                                            transition-colors
                                        "
                                    >
                                        {item.title}
                                    </h3>



                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            text-fog-muted
                                            leading-relaxed
                                        "
                                    >
                                        {item.description}
                                    </p>



                                    <div
                                        className="
                                            mt-5
                                            flex
                                            justify-between
                                            font-mono
                                            text-xs
                                        "
                                    >

                                        <span
                                            className="
                                                text-teal
                                            "
                                        >
                                            {item.organizer}
                                        </span>


                                        <span
                                            className="
                                                text-fog-dim
                                            "
                                        >
                                            {item.year}
                                        </span>


                                    </div>


                                </div>


                            </motion.article>

                        ))}


                    </div>


                </div>


            </section>






            {/* FULLSCREEN MODAL */}


            <AnimatePresence>


                {selected && (

                    <motion.div

                        initial={{
                            opacity:0
                        }}

                        animate={{
                            opacity:1
                        }}

                        exit={{
                            opacity:0
                        }}


                        onClick={() => setSelected(null)}


                        className="
                            fixed
                            inset-0
                            z-[100]
                            bg-black/80
                            backdrop-blur-md
                            flex
                            items-center
                            justify-center
                            p-6
                        "
                    >



                        <motion.div


                            initial={{
                                scale:0.85,
                                opacity:0,
                                y:40
                            }}


                            animate={{
                                scale:1,
                                opacity:1,
                                y:0
                            }}


                            exit={{
                                scale:0.85,
                                opacity:0,
                                y:40
                            }}


                            transition={{
                                type:"spring",
                                damping:25,
                                stiffness:220
                            }}



                            onClick={(e)=>e.stopPropagation()}



                            className="
                                relative
                                max-w-5xl
                                w-full
                                rounded-2xl
                                overflow-hidden
                                border
                                border-ink-line
                                bg-ink-panel
                                shadow-2xl
                            "
                        >



                            <button

                                onClick={()=>setSelected(null)}

                                className="
                                    absolute
                                    top-4
                                    right-4
                                    z-10
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-black/50
                                    text-white
                                    font-mono
                                    hover:bg-amber
                                    hover:text-ink
                                    transition
                                "
                            >
                                ✕
                            </button>





                            <img

                                src={selected.image}

                                alt={selected.title}

                                className="
                                    w-full
                                    max-h-[80vh]
                                    object-contain
                                    bg-black
                                "
                            />





                            <div className="p-6">


                                <h3
                                    className="
                                        font-display
                                        text-xl
                                        font-semibold
                                        text-fog
                                    "
                                >
                                    {selected.title}
                                </h3>



                                <p
                                    className="
                                        mt-2
                                        text-fog-muted
                                    "
                                >
                                    {selected.description}
                                </p>


                            </div>


                        </motion.div>


                    </motion.div>

                )}


            </AnimatePresence>


        </>
    );
}