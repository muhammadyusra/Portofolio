import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Avatar from "./Avatar.jsx";
import useLockBodyScroll from "../hooks/useLockBodyScroll.js";
import { profile } from "../data/profile.js";

const OPEN_Y = 0;
const CLOSED_Y_OFFSET = "calc(100% - 64px)";

export default function ConsoleDrawer() {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();

  useLockBodyScroll(false);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;

      controls.start({
        y: next ? OPEN_Y : CLOSED_Y_OFFSET,
      });

      return next;
    });
  };


  const handleDragEnd = (_, info) => {
    const shouldOpen =
      info.offset.y < -60 ||
      info.velocity.y < -300;

    const shouldClose =
      info.offset.y > 60 ||
      info.velocity.y > 300;


    if (shouldOpen) {
      setOpen(true);
      controls.start({ y: OPEN_Y });

    } else if (shouldClose) {
      setOpen(false);
      controls.start({ y: CLOSED_Y_OFFSET });

    } else {
      controls.start({
        y: open ? OPEN_Y : CLOSED_Y_OFFSET,
      });
    }
  };


  return (
    <>
      {open && (
        <button
          aria-label="Tutup panel"
          onClick={toggle}
          className="
            fixed
            inset-0
            z-40
            bg-ink/50
            backdrop-blur-[2px]
          "
        />
      )}


      <motion.div
        drag="y"
        dragConstraints={{
          top:0,
          bottom:0,
        }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
        initial={{
          y:CLOSED_Y_OFFSET,
        }}
        animate={controls}
        transition={{
          type:"spring",
          damping:28,
          stiffness:260,
        }}
        className="
          fixed
          inset-x-0
          bottom-0
          z-50
          mx-auto
          w-full
          max-w-2xl
          rounded-t-3xl
          border
          border-ink-line
          bg-ink-panel/95
          backdrop-blur-md
          shadow-[0_-10px_40px_rgba(0,0,0,0.5)]
        "
        style={{
          touchAction:"none",
        }}
      >


        {/* Handle */}
        <div
          onClick={toggle}
          className="
            flex
            flex-col
            items-center
            pt-3
            pb-2
            cursor-grab
            select-none
          "
        >

          <span
            className="
              w-10
              h-1.5
              rounded-full
              bg-ink-line
            "
          />

          <div
            className="
              mt-2
              flex
              items-center
              gap-2
              font-mono
              text-[11px]
              text-fog-dim
            "
          >

            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-teal
                animate-pulse
              "
            />

            <span>
              {
                open
                ? "close_console"
                : "open_profile_console"
              }
            </span>

          </div>

        </div>



        {/* Content */}
        <div
          className="
            px-6
            sm:px-8
            pb-8
            pt-2
          "
        >


          {/* Profile */}
          <div className="flex items-center gap-4">

            <Avatar size={56}/>


            <div>

              <p
                className="
                  font-display
                  text-base
                  font-semibold
                  text-fog
                "
              >
                {profile.name}
              </p>


              <p
                className="
                  font-mono
                  text-xs
                  text-fog-muted
                "
              >
                {profile.role}
              </p>

            </div>


            <span
              className="
                ml-auto
                font-mono
                text-[10px]
                uppercase
                tracking-widest
                text-teal
                border
                border-teal/30
                rounded-full
                px-2.5
                py-1
              "
            >
              available
            </span>


          </div>




          {/* Information */}
          <div
            className="
              mt-6
              grid
              grid-cols-2
              sm:grid-cols-4
              gap-3
              font-mono
              text-[11px]
            "
          >

            <InfoCard
              title="institusi"
              value={profile.institution}
            />

            <InfoCard
              title="level"
              value={profile.level}
            />

            <InfoCard
              title="status"
              value={profile.status}
              highlight
            />

            <InfoCard
              title="lokasi"
              value={profile.location}
            />

          </div>



          {/* Social */}
          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-3
            "
          >

            <a
              href={`mailto:${profile.email}`}
              className="
                font-mono
                text-xs
                bg-amber
                text-ink
                px-4
                py-2.5
                rounded-full
                hover:bg-amber-soft
                transition-colors
              "
            >
              email.send
            </a>



            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-mono
                text-xs
                border
                border-ink-line
                text-fog-muted
                px-4
                py-2.5
                rounded-full
                hover:border-teal
                hover:text-teal
                transition-colors
              "
            >
              github.open ↗
            </a>



            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-mono
                text-xs
                border
                border-ink-line
                text-fog-muted
                px-4
                py-2.5
                rounded-full
                hover:border-teal
                hover:text-teal
                transition-colors
              "
            >
              linkedin.open ↗
            </a>


          </div>


        </div>

      </motion.div>

    </>
  );
}



function InfoCard({
  title,
  value,
  highlight=false
}) {

  return (
    <div
      className="
        rounded-xl
        border
        border-ink-line
        px-3
        py-3
      "
    >

      <p
        className="
          text-fog-dim
          uppercase
          tracking-widest
          text-[10px]
          mb-1
        "
      >
        {title}
      </p>


      <p
        className={
          highlight
          ? "text-teal leading-snug"
          : "text-fog-muted leading-snug"
        }
      >
        {value}
      </p>

    </div>
  );

}