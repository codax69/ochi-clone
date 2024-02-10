"use client";
import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      setRotate(angle - 180);
    });
  }, []);

  return (
    <>
      <div className=" relative h-52 w-52 rounded-full bg-white flex items-center justify-center">
        <div className="w-4/6 h-4/6 bg-black rounded-full relative">
          <div
            style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
            className="absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2 w-full h-10 "
          >
            <div className="bg-white h-4/6 w-[19%] rounded-full"></div>
          </div>
            <div className=" text text-lg font-medium absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 ">Play</div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
