import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import image from "../assets/images/logo/Gaspi.png";
import SpecialLink from "./SpecialLink";

function Nav() {
  // let programmesLinks = ["Louer", "Acheter", "Vendre"];

  return (
    <div className="fixed top-0 flex flex-row items-center bg-white w-full z-50 shadow-xl" style={{height: "15%"}}>
      <div className="w-full" style={{marginLeft: "1%", width:"8%"}}>
        <img
            src={image}
            alt="gaspi"
            className="rounded-50% w-full h-full object-cover"
          />
      </div>
      <div className="px-1 text-ls flex flex-row items-center font-bold" style={{marginTop: "3.8%", marginLeft:"13%"}}>
        <Link to="/" className="px-3 cursor-pointer ">
          ACCUEIL
        </Link>
        <Link to="/programmes" className="px-8 cursor-pointer">
          PROGRAMMES
        </Link>
        <Link to="/themes" className="px-8 cursor-pointer">
          THEMES
        </Link>
        <Link to="/actualites" className="px-8 cursor-pointer">
          ACTUALITÉS
        </Link>
        <div>
          ||
        </div>
        
        <Link to="/recrutements" className="px-8  cursor-pointer">
          RECRUTEMENTS
        </Link>
        <Link to="/apropos" className="px-8  cursor-pointer">
          A PROPOS
        </Link>
      </div>
      {/*<div className="absolute top-3 left-10 bg-white" style={{marginLeft: "90%", width:"10%"}}>
        <Logo type="color" />
      </div>*/}
    </div>
  );
}

export default Nav;
