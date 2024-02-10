import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import Label from "./Label";
const Landing = () => {
  const HeadTextArray = ["WE CREATE", "EYE-OPENING", "PRESENTATIONS"];
  const LeadPageFootArray = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];
  return (
    <div>
      <div className="w-full h-screen  pt-14">
        <div className="pt-28">
          {HeadTextArray.map((value, index) => {
            return (
              <div key={index} className="ml-12 flex ">
                { index === 1 && <div className=' w-32 h-20 rounded-lg bg-white text-[#212121] mr-2'></div>}
                <h1 className="masker text-start uppercase leading-[7vw] tracking-tight text-8xl font-bold">
                  {value}
                </h1>
              </div>
            );
          })}
        </div>
        <hr className=" w-full h-[1px]  mt-28 bg-slate-500" />
        <div className="flex justify-between px-12 pt-2 items-center">
          {LeadPageFootArray.map((value, index) => {
            return (
              <h3 className=" capitalize font-light" key={index}>
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
        <Label/>
        </div>
      </div>
    </div>
  );
};

export default Landing;
