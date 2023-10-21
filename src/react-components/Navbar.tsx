import { FC } from "react";
import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

const Navbar: React.FC = (props) => {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className="h-screen w-full bg-gradient-to-b relative from-violet-500 to-fuchsia-500 snap-center ">
      <div
        className="w-full h-[10vh] sticky top-0 border-transparent flex place-items-center border-2 rounded-b-lg border-red-50 backdrop-blur-md space-x-56 z-10"
        id="navbar"
      >
        <button>Developer Tools</button>
        <button>Team Tools</button>
        <button>Education</button>
        <button>Solutions</button>
        <button>Support</button>
        <button>Store</button>
      </div>

      <div
        className=" p-4 text-[250px] h-screen w-[80vw] flex flex-col place-items-center absolute inset-x-0 top-0 pt-32  border-black border-4 px-44 text-left mx-auto text-violet-200 bg-scroll overflow-y-auto"
        id="scroll-text"
      >
        <motion.div
          className="progress-bar top-[10vh] w-[80vw] left-0 right-0 h-10 bg-red-500"
          style={{ scaleX, transformOrigin: "0%" }}
        />

        <div>Scroll.</div>
        <div>Animations.</div>
        <div>Are.</div>
        <div>Cool.</div>
        <div id="spacer-div-navbar" className="h-[100vh]">
          Space
        </div>
      </div>
    </main>
  );
};

export default Navbar;
