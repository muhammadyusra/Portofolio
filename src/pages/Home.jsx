import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ConsoleDrawer from "../components/ConsoleDrawer";

export default function Home({ introDone }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: introDone ? 1 : 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <Navbar introDone={introDone} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <ConsoleDrawer />
    </motion.div>
  );
}