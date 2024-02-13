import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Power4 } from "gsap/all";
const Featured = () => {
  const [sel, setSel] = useState(false);
  const [selSecond, setSelSecond] = useState(false);
  const [selThird, setSelThird] = useState(false);
  const [selFour, setSelFour] = useState(false);
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".1"
        className="h-full w-full mb-10 bg-black"
      >
        <div className="pl-12 pt-32 pb-12">
          <h3 className="text font-medium text-6xl tracking-tight">
            Featured Project
          </h3>
        </div>
        <hr className="h-[0.5px] bg-slate-300 w-full" />
        <div className="px-12 pt-8 pb-8 flex w-full gap-10">
          <div className="w-full h-full">
            <div className="flex items-center mb-4">
              <GoDotFill className="mr-2" />
              <h4 className="text text-lg">FYDE</h4>
            </div>
            <div
              onMouseEnter={() => setSel(true)}
              onMouseLeave={() => setSel(false)}
              className=" relative cardContainer w-full h-[35vw]"
            >
              <div className=" Card w-full h-full  flex items-center  rounded-xl overflow-hidden ">
                <h3 className="absolute flex overflow-hidden left-full -translate-x-1/2 text z-[49] ">
                  {["F", "Y", "D", "E"].map((char, index) => {
                    return (
                      <motion.span
                        initial={{ y: 100 }}
                        animate={sel ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: Power4.easeInOut,
                          duration: index * 0.3,
                        }}
                        className="inline-block translate-y-full text-[#cdea68] font-bold text text-9xl"
                        key={index}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </h3>
                <img
                  className="w-full h-full"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="flex items-center mb-4">
              <GoDotFill className="mr-2" />
              <h4 className="text text-lg">VISE</h4>
            </div>
            <div
              onMouseEnter={() => setSelSecond(true)}
              onMouseLeave={() => setSelSecond(false)}
              className=" relative cardContainer w-full h-[35vw]"
            >
              <h3 className="absolute right-full flex overflow-hidden translate-x-1/2 -translate-y-1/2 top-1/2 text z-[49] ">
                {["V", "I", "S", "E"].map((char, index) => {
                  return (
                    <motion.span
                      className=" inline-block translate-y-full text-[#cdea68] font-bold text text-9xl"
                      initial={{ y: "100" }}
                      animate={selSecond ? { y: "0" } : { y: "100%" }}
                      transition={{
                        ease: Power4.easeInOut,
                        duration: index * 0.3,
                      }}
                      key={index}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </h3>
              <div className="Card w-full h-full rounded-xl overflow-clip flex items-center ">
                <img
                  className="w-full h-full"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-12 pt-8 pb-8 flex w-full gap-10">
          <div className="w-full h-full">
            <div className="flex items-center mb-4">
              <GoDotFill className="mr-2" />
              <h4 className="text text-lg">TRAWA</h4>
            </div>
            <div
              onMouseEnter={() => setSelThird(true)}
              onMouseLeave={() => setSelThird(false)}
              className=" relative  cardContainer w-full h-[35vw]"
            >
              <div className=" Card w-full h-full  flex items-center  rounded-xl overflow-hidden ">
                <h3 className="absolute flex overflow-hidden left-full -translate-x-1/2 text z-[49] ">
                  {["T", "R", "A", "W", "A"].map((char, index) => {
                    return (
                      <motion.span
                        className=" inline-block translate-y-full text-[#cdea68] font-bold text text-9xl"
                        initial={{ y: "100" }}
                        animate={selThird ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: Power4.easeInOut,
                          duration: index * 0.3,
                        }}
                        key={index}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </h3>
                <img
                  className="w-full h-full"
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="flex items-center mb-4">
              <GoDotFill className="mr-2" />
              <h4 className="text text-lg">PREMIUM BLEND</h4>
            </div>
            <div  onMouseEnter={() => setSelFour(true)}
              onMouseLeave={() => setSelFour(false)} className=" relative cardContainer w-full h-[35vw]">
              <h3 className="absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text z-[49] ">
                {[
                  "P",
                  "R",
                  "E",
                  "M",
                  "I",
                  "U",
                  "M",
                  "",
                  "B",
                  "L",
                  "E",
                  "N",
                  "D",
                ].map((char, index) => {
                  return (
                    <motion.span
                      className=" inline-block translate-y-full text-[#cdea68] font-bold text text-9xl"
                      initial={{ y: "100" }}
                      animate={selFour ? { y: "0" } : { y: "100%" }}
                      transition={{
                        ease: Power4.easeInOut,
                        duration: index * 0.2,
                      }}
                      key={index}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </h3>
              <div className="Card w-full h-full rounded-xl overflow-clip flex items-center ">
                <img
                  className="w-full h-full"
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
