import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";

import Intro from "./components/Intro";
import Home from "./pages/Home";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <LayoutGroup>
      <AnimatePresence mode="sync">
        {!introDone && (
          <Intro
            key="intro"
            onFinish={() => setIntroDone(true)}
          />
        )}
      </AnimatePresence>

      <Home introDone={introDone} />
    </LayoutGroup>
  );
}