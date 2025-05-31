"use client";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, useAnimation, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    console.log("Page scroll: ", latest)
  })
  const [beautyRef, beautyInView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  // Transform scroll progress to animation states
  const titleScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.2]);
  const x = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.6, 0.8, 1], [1,-850,-850,-850,-850,-850]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.6, 0.8, 1], [1,-100,-100,-100,-100,-100]);
  // const d = useTransform(scrollYProgress, [0, 0.4], [1, 1.2]);
  // const e = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);


  const imageScale = useTransform(scrollYProgress, [0.25, 0.5,], [1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.75], [1, 0.8]);
  const titleRotation = useTransform(scrollYProgress, [0.75, 1], [0, 5]);

  const [effectText] = useTypewriter({
    words: [
      "C.E.O of Pinetech",
      "Software Engineer",
      "Web Developer",
      "Freelancer",
      "Wordpress Developer",
      "Leet-Coder",
      "Student",
    ],
    loop: true,
    typeSpeed: 100,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="Corebackground bg-amber-700 relative min-h-screen">
      <div className="prof h-screen sticky top-0 left-0 bg-black flex flex-row items-center">
        <div className="h-2/3 font-bold w-1/2 flex flex-col">
          <motion.h1
            style={{ scale: titleScale }}
            className="font-extrabold font-mono text-7xl -mt-12 text-white ml-11"
          >
            Hi!
          </motion.h1>
          <motion.h1
            style={{ scale: titleScale, rotate: titleRotation }}
            className="font-bold font-mono text-4xl mt-5 ml-15 text-white"
          >
            I'm Faseeh Ahmad
          </motion.h1>
          <motion.h1
            style={{ opacity: textOpacity }}
            className="font-bold font-mono text-3xl mt-3 ml-15 text-cyan-300"
          >
            {effectText}
          </motion.h1>
        </div>

        <div className="h-2/3 font-bold w-1/2 flex flex-col items-center justify-center">
          <motion.div
            // initial = {{x:0, y: 0}}
            style={{ x, y }}
            // animate = {{left:xi , top: yi}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              className="rounded-full mt-10"
              src="/profile.jpg"
              width={250}
              height={250}
              alt="background image"
            />
          </motion.div>
          <motion.p
            style={{ opacity: textOpacity }}
            className="mb-4 mt-8 font-bold text-2xl font-mono text-white"
          >
            CEO Of Techpine
          </motion.p>
        </div>
      </div>
      <motion.div
        ref={beautyRef}
        initial={{ opacity: 0, y: 100 }}
        animate={beautyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="Beauty absolute bottom-0 w-full p-8"
      >
        <h2 className="text-4xl font-bold text-white text-center">The End !</h2>
      </motion.div>
    </div>
  );
}
