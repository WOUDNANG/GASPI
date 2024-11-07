import React from "react";
import logoGaspi from "../assets/images/logo/Gaspi.png";
import logoColor from "../assets/images/logo/logo france1.PNG";


function Logo({ type }) {
  return (
    <div className="w-[6rem] h-[3rem]">
      <img
        src={
          type == "color"
            ? logoColor
            : type == "gaspi"
            ? logoGaspi
            : type == "agri"
            ? logoAgri
            : type == "footer"
            ? logoFooter
            : ""
        }
        className="object-cover w-20% h-10%"
        alt="logo"
      />
    </div>
  );
}

export default Logo;
