"use client";
import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.2" className="z-10 w-full py-20 bg-[#004d43] rounded-tl-2xl rounded-tr-2xl overflow-hidden">
        <div className="flex border-t-2 border-b-2 border-zinc-300 whitespace-nowrap " initial={{x:"0"}} animate={{x:'-100%'}} transition={{ ease:"linear", duration:10, repeat: Infinity, repeatType: "loop" }}>
          <motion.h1 className="text-[22vw] font-bold uppercase -my-10" initial={{x:"0"}} animate={{x:'-100%'}} transition={{ ease:"linear", duration:10, repeat: Infinity, repeatType: "loop" }}>we are ochi &nbsp;</motion.h1>
          <motion.h1 className="text-[22vw] font-bold uppercase -my-10" initial={{x:"0"}} animate={{x:'-100%'}} transition={{ ease:"linear", duration:10, repeat: Infinity, repeatType: "loop" }}>we are ochi &nbsp;</motion.h1>
          <motion.h1 className="text-[22vw] font-bold uppercase -my-10" initial={{x:"0"}} animate={{x:'-100%'}} transition={{ ease:"linear", duration:10, repeat: Infinity, repeatType: "loop" }}>we are ochi &nbsp;</motion.h1>
        </div>
      </div>
    </>
  );
};

export default Marquee;
