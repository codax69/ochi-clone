"use client";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import Label from "./Label";
import { motion } from "framer-motion";
const Landing = () => {
  const HeadTextArray = ["WE CREATE", "EYE-OPENING", "PRESENTATIONS"];
  const LeadPageFootArray = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];
  return (
    <div>
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className=" w-screen lg:w-full h-screen  lg:pt-14">
        <div className="pt-28">
          {HeadTextArray.map((value, index) => {
            return (
              <div key={index} className="ml-6 lg:ml-12 flex ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: "0" }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: "backInOut", duration: 2 }}
                    className=" lg:w-32 lg:h-20 w-16 h-16  rounded-lg bg-[#004d43] flex items-center justify-center text-[#212121] mr-2 overflow-hidden"
                  >
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                  </motion.div>
                )}
                <h1 className="masker text-start uppercase leading-[7vw] tracking-tight text-5xl lg:text-8xl font-bold">
                  {value}
                </h1>
              </div>
            );
          })}
        </div>
        <hr className=" w-full h-[1px]  mt-28 bg-slate-500" />
        <div className="flex flex-col justify-between items-start px-12 pt-2 lg:flex-row lg:items-center">
          {LeadPageFootArray.map((value, index) => {
            return (
              <h3 className=" capitalize font-light my-7" key={index}>
                {value}
              </h3>
            );
          })}
          <div className="flex items-center gap-2">
            <div className=" uppercase border-[1px] px-3 py-1 rounded-3xl font-light text-sm">
              Star the Project{" "}
            </div>
            <button className=" border-[1px] p-[12px] text-center rounded-full">
              <FaArrowUpLong className="rotate-45" />
            </button>
          </div>
        </div>
        <div className=" absolute right-0 top-[15rem]">
          <Label />
        </div>
      </div>
    </div>
  );
};

export default Landing;
