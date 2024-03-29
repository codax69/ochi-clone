import React from "react";
import Eyes from "./Eyes";

const FunEye = () => {
  return (
    <>
      <div  className="relative min-h-screen w-screen lg:w-full overflow-hidden">
        <div data-scroll data-scroll-section data-scroll-speed="-.5" className='absolute w-full bg-[#212121] h-screen bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center '>
          <div className=" flex items-center gap-5 justify-center absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2">
          <div data-scroll data-scroll-section data-scroll-speed=".3" className="flex gap-5">
              <Eyes />
              <Eyes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunEye;
