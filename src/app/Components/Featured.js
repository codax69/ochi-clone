import React from "react";
import { GoDotFill } from "react-icons/go";
const Featured = () => {
  return (
    <>
      <div className="h-full w-full mb-10">
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
            <div className=" relative cardContainer w-full h-[35vw]">
              <div className=" Card w-full h-full  flex items-center  rounded-xl overflow-hidden ">
                <h3 className="absolute left-full -translate-x-1/2 text z-[49] text-7xl">
                  FYDE
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
            <div className=" relative cardContainer w-full h-[35vw]">
              <h3 className="absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 text z-[49] text-7xl">
                VISE
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
            <div className=" relative cardContainer w-full h-[35vw]">
              <div className=" Card w-full h-full  flex items-center  rounded-xl overflow-hidden ">
                <h3 className="absolute left-full -translate-x-1/2 text z-[49] text-7xl">
                  TRAWA
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
            <div className=" relative cardContainer w-full h-[35vw]">
              <h3 className="absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 text z-[49] text-7xl">
                PREMIUM BLEND
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
