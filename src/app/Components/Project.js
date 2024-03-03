import React, { useState } from "react";
import Eyes from "./Eyes";
import { motion } from "framer-motion";

const Project = () => {
  const [EnterMouse, setEnterMouse] = useState(false)
  let textArray = ["ready", "to start", "the project?"];
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed='.02' onMouseEnter={()=>setEnterMouse(true)}  className="relative h-full w-full flex items-center py-44 bg-[#cdea68] justify-center">
        <div className="bg-[#cdea68] h-full">
          {textArray.map((text, index) => {
            return (
              <div key={index} className=" overflow-hidden">
                <motion.h2
                  initial={{y:"100%"}}
                  animate={EnterMouse && {y:"0"}}
                  className="pt-8 font-bold translate-y-full text-[9vw] text-center text-[#212121] tracking-tighter uppercase"
                  
                >
                  {text}
                </motion.h2>
              </div>
            );
          })}
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div data-scroll data-scroll-section data-scroll-speed=".2" className="flex gap-5">
              <Eyes />
              <Eyes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
