import React from "react";

const Memory = ({ memory: { title, text, subtitle, img, experience } }) => {
  return (
    <>
      <div className="realtive my-16 md:mb-7">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-19 md:travigo-container items-center">
          <div className="flex justify-center w-full max-w-md lg:max-w-none">
            <img
              src={img}
              alt="memory/img"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full max-w-2xl text-center md:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-2 md:mb-4">
              {title}
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
              {subtitle}
            </h2>
            <p className="text-base lg:text-lg">{text}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 xl:gap-3">
  {experience?.map((val, i) => (
    <div key={i} className="bg-gradient-to-b from-emerald-300 to-green-200 flex flex-col items-center justify-center py-7 px-5 xl:p-5 rounded-lg text-slade-900 filter cursor-pointer hover:scale-105 transition-all duration-400">
      <h1 className="text-3xl xl:text-2xl font-bold drop-shadow-lg mb-2">{val.number}</h1>
      <p className="text-base sm:text-lg xl:text-base font-medium text-center">{val.title}</p>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memory;
