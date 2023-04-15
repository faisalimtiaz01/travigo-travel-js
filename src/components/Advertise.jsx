import React from 'react'

function Advertise({brands}) {
  return (
  <>
<div className="my-16 lg:my-7 w-11/12 lg:w-10/12 xl:w-full mx-auto flex flex-wrap justify-between items-center xl:gap-7 overflow-x-auto scrollbar-hide">
  {brands?.map((val,i) => (
    <img key={i} src={val.iconSrc} alt="brands/icon" className="w-36 md:w-40 lg:w-44 xl:w-38 h-auto object-contain hover:scale-105 transition-all duration-300 cursor-pointer filter drop-shadow-md mx-4 md:mx-6 lg:mx-8 xl:mx-0" />
  ))}
</div>








  
  </>
  )
}

export default Advertise
