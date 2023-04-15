import React from "react";

const PriceCard = ({
  plan: { planicon, title, text, plantype, plancontent,buttonText }
}) => {
  return (
   <div class="p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-200 hover:scale-105 duration-300 transition-all cursor-pointer">
  <div class="flex items-center justify-between flex-wrap lg:flex-nowrap">
    <div class="flex items-center gap-5">
      <div class="grid items-center">
        <img src={planicon} alt='plans/img' class="w-14 h-14 lg:w-12 lg:h-12 object-cover" />
      </div>
      <div class="grid items-center">
        <h1 class="text-gray-900 font-semibold text-lg filter drop-shadow-lg lg:text-base md:text-sm">{title}</h1>
        <p class="text-slate-900 font-normal text-sm lg:text-xs">{text}</p>
      </div>
    </div>
    <div class="grid items-center mt-5 lg:mt-0">
      <h1 class="text-gray-900 font-bold text-lg filter drop-shadow-lg lg:text-base md:text-sm">{plantype}</h1>
    </div>
  </div>
  <div class="h-0.5 bg-slate-200 my-5"></div>
  <div class="grid grid-cols-1 gap-3 px-5 lg:grid-cols-2">
    {plancontent?.map((val, i) => (
      <div key={i} class="flex items-center justify-start gap-5">
        <div class="grid items-center">
          <img src={val.iconbox} alt="iconbox/svg" class="w-5 h-5 lg:w-4 lg:h-4" />
        </div>
        <div class="grid items-center">
          <h1 class="font-normal text-lg text-gray-900 filter drop-shadow-lg lg:text-base hover:text-emerald-500">{val.text}</h1>
        </div>
      </div>
    ))}
  </div>
  <div class="grid items-center justify-items-center mt-7">
    <button type="button" class="button-emrald text-base">{buttonText}</button>
  </div>
</div>

  );
};

export default PriceCard;
