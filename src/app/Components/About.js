import React from "react";
import { GoDotFill } from "react-icons/go";
const About = () => {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.1" className=" w-screen h-auto  lg:w-full h-auto z-50 bg-[#cdea68] rounded-tl-xl rounded-tr-xl">
        <div className=" pt-20 lg:pt-40 pb-16 lg:pl-12">
          <p className="About-text w-full px-6 lg:w-[74.666667%] text-3xl lg:text-[3.46666875rem] leading-none tracking-tight  text-[#212121]">
            {" "}
            Ochi is a strategic partner for fast-grow­ing tech businesses that
            need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
            hire great peo­ple.
          </p>
        </div>
        <hr className="bg-white h-[1px] w-screen lg:w-full" />
        <div className="info flex flex-col pl-4 justify-center lg:flex-row  lg:px-12 text-[#212121] items-start mt-4 lg:justify-between lg:gap-64 flex-auto">
          <div className="">What you can expect:</div>
          <div>
            <p className=" w-[17rem] pb-12">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className=" w-[17rem] pb-12">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex flex-col justify-center mt-12">
            <div className="">
              S:
              <ul>
                <li>Instagram</li>
                <li>Behance</li>
                <li>Facebook</li>
                <li>Linkedin</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="w-full h-[1px] bg-slate-300" />
        <div className="flex flex-col lg:flex-row justify-between mt-5 pb-8 mx-4 lg:mx-12">
          <div>
            <p className=" text-6xl leading-tight mb-3 text-[#212121]">Our approach:</p>
            <button className="btn text-lg flex items-center px-5 py-3 rounded-full bg-[#212121] text-white">
              Read More <GoDotFill className="ml-6" size={22}/>
            </button>
          </div>
          <div className="rounded-xl overflow-hidden  mt-5">
            <img
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt="owner"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
