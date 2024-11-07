import React from "react";
import Logo from "../../../globals/Logo";

function Section({ background, paragraphOne, paragraphTwo, type, image }) {
  let specialStyle = {
    background: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      className={`min-h-[30rem] mt-[10rem] flex flex-col justify-center items-center text-white text-xl relative`}
      style={specialStyle}
    >
      <div className="absolute inset-0 w-full h-full bg-black opacity-70 z-10"></div>
      <div className="relative w-full md:w-4/5 px-4 py-4 flex flex-col gap-8 z-20">
        <p>{paragraphOne}</p>
        {type && <Logo type={type} />}
        <p>{paragraphTwo}</p>
      </div>
    </div>
  );
}

export default Section;


