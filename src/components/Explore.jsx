import React from "react";

const Explore = ({ title, placesAPI }) => {
  return (
    <>
    <div class="relative my-7 md:mt-3">
  <div class="travigo-container">
    <div class="flex flex-col items-center justify-center text-center mb-11 md:mb-7">
      <h1 class="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold filter drop-shadow-lg text-slate-900">
        {title}
      </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {placesAPI?.map((val, i) => (
      <div key={i} class="flex items-center gap-5 sm:gap-3 rounded-lg hover:bg-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105">
        <div class="flex items-center justify-center">
          <img src={val.placeImg} alt={val.location} class="w-20 h-20 sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg" />
        </div>
        <div class="flex items-start flex-col text-slate-900">
          <h1 class="text-lg sm:text-base md:text-lg lg:text-xl font-bold">{val.location}</h1>
          <p class="font-normal text-xs sm:text-sm lg:text-base">{val.distance}</p>
        </div>
      </div>
      ))}
    </div>
  </div>
</div>
    </>
  );
};

export default Explore;
