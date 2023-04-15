import React from "react";

const Hero = ({ hero: { title, subtitle, btn1, btn2, text, img } }) => {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
        <div className="travigo-container grid items-start justify-items-center ">
          <div className="grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12 ">
            <h1 className="md:text-7xl font-bold lg:text-6xl text-3xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg ">
              {title}
            </h1>
            <h1 className="md:text-7xl font-bold lg:text-6xl text-4xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg ">
              {subtitle}
            </h1>
            <p className="md:text-base my-5 text-center text-sm ">{text}</p>
            <div className="items-center justify-center md:space-x-7 space-y-7 md:flex-row flex-col">
              <button
                type="button"
                className="button-emrald w-full md:w-auto"
              >
                {btn1}
              </button>
              <button type="button" className="button-light w-full md:w-auto">
                {btn2}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mb-11">
            <img
              src={img}
              alt="dashboard/img"
              className="h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emrald"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
