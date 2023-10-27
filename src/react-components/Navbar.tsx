import { FC, useEffect, useRef } from "react";
import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useInView,
  useAnimation,
} from "framer-motion";

const Navbar: React.FC = (props) => {
  const { scrollYProgress } = useScroll();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    console.log(isInView);
  }, [isInView]);

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
        className="w-full h-[10vh] sticky top-0 border-transparent flex items-center justify-around border-2 rounded-b-lg border-red-50 backdrop-blur-xl z-10"
        id="navbar"
      >
        <div className="ml-10" id="navbar-logo" style={{ flexGrow: "2" }}>
          Butter Buff UI 3D Animated Logo
        </div>
        <motion.button
          className="text-center border-violet-200 border-2 text-violet-200 rounded-md"
          style={{ flexGrow: "1" }}
          whileHover={{ scale: 2 }}
          transition={{
            duration: 0.1,
            type: "spring",
          }}
        >
          Developer Tools
        </motion.button>
        <button className="text-center" style={{ flexGrow: "1" }}>
          Team Tools
        </button>
        <button className="text-center" style={{ flexGrow: "1" }}>
          Education
        </button>
        <button className="text-center" style={{ flexGrow: "1" }}>
          Solutions
        </button>
        <button className="text-center" style={{ flexGrow: "1" }}>
          Support
        </button>
        <button className="text-center" style={{ flexGrow: "1" }}>
          Store
        </button>
      </div>

      <div
        className=" p-4 text-[250px] h-screen w-[80vw] flex flex-col place-items-center absolute inset-x-0 top-0 pt-32 border-transparent border-4 px-44 text-left mx-auto text-violet-200 bg-scroll overflow-y-auto"
        id="scroll-text"
        ref={ref}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 100, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, bounce: 1, delay: 0.25 }}
        >
          Scroll.
        </motion.div>
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
