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

interface AnimatedDivProps {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedDiv: FC<AnimatedDivProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: "100vw" });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      // initial={{ opacity: 0, x: "100vw" }}
      animate={controls}
      transition={{
        x: {
          type: "tween",
          ease: "easeOut",
          duration: 1,
          delay: delay,
        },
        opacity: {
          duration: 0.5,
          delay: delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const Navbar: React.FC = (props) => {
  const { scrollYProgress } = useScroll();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    console.log("Is in view:", isInView);
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
        className=" p-4 text-[250px] h-screen w-[80vw] flex flex-col place-items-center absolute inset-x-0 top-0 pt-32 border-transparent border-4 px-44 text-left mx-auto text-violet-200 bg-scroll overflow-auto"
        id="scroll-text"
      >
        <AnimatedDiv delay={0}>Scroll.</AnimatedDiv>
        <AnimatedDiv delay={0.2}>Animations.</AnimatedDiv>
        <AnimatedDiv delay={0.4}>Are.</AnimatedDiv>
        <AnimatedDiv delay={0.6}>Cool.</AnimatedDiv>

        <div id="spacer-div-navbar" className="h-[100vh]"></div>
      </div>
    </main>
  );
};

export default Navbar;
