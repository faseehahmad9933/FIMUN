"use client";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [videoSrc, setVideoSrc] = useState("AIV.mp4");
  const [showSplash, setShowSplash] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    if (latest < 0.3) {
      setVideoSrc("AIV.mp4");
    } else {
      setVideoSrc("AICHIP.mp4");
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const [beautyRef, beautyInView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <div className="Corebackground bg-amber-700 relative min-h-screen">
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "#baf5e8" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: [1, 1.08],
            }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 120,
              damping: 12,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.7,
            }}
            className="flex flex-col items-center"
          >
            <Image
              src="/logo.png"
              alt="FIMUN"
              width={120}
              height={120}
              className="drop-shadow-lg"
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, type: "spring", stiffness: 80 }}
              className="mt-6 text-4xl font-extrabold text-black tracking-widest drop-shadow-lg font-poppins"
            >
              FIMUN
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
      <div className="prof h-screen sticky top-0 left-0 bg-blue-900 flex flex-row items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: videoSrc === "AIV.mp4" ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-75"
          >
            <source src="AIV.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: videoSrc === "AICHIP.mp4" ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-75"
          >
            <source src="AICHIP.mp4" type="video/mp4" />
          </video>
        </motion.div>
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
