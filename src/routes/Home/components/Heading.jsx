import React from 'react'

function Heading({title}) {
  return (
    <div className="mx-auto w-fit">
    <h2 className="uppercase text-center font-bold">{title}</h2>
    <div className="h-[1px] mt-2 bg-yellow-700 borner-none"></div>
    <div className="h-[5px] mt-2 bg-yellow-700 borner-none"></div>
  </div>
  )
}

export default Heading