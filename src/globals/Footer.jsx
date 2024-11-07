import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo1 from "../assets/images/footer/logo1.jpg";
import logo2 from "../assets/images/footer/logo2.png";
import logo3 from "../assets/images/footer/logo3.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8" style={{marginLeft: "10%"}}>
        <div>
          <h2 className="font-bold text-red-500" style={{fontSize:"130%", marginBottom:"3%"}}>Siège de WAFRICATV</h2>
          <p>Yaounde Tsinga derrière la polyclinique<br />B.P : 12752,Yaoundé<br />CAMEROUN.</p>
          <p>
            En cas de questions ou renseignement{' '}
            <a href="wafricaproject@gmail.com" className="text-red-600 underline">nous contacter</a>.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-red-500" style={{fontSize:"130%", marginBottom:"3%"}}>ACCÈS RAPIDES</h2>
          <ul className="space-y-2">
            <li><a href="/actualités" className="text-gray-700 hover:text-red-500">Actualités et médias</a></li>
            <li><a href="/themes" className="text-gray-700 hover:text-red-500">Nos Thèmes</a></li>
            <li><a href="/programmes" className="text-gray-700 hover:text-red-500">Nos différents Programmes</a></li>
            <li><a href="http://www.youtube.com/@WafricaTV" className="text-gray-700 hover:text-red-500">Rejoindre nos équipes</a></li>
            <li><a href="/dons" className="text-gray-700 hover:text-red-500">Faites un don</a></li>
          </ul>
        </div>
        <div>
          
          
        </div>
      </div>
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-4" style={{marginLeft: "19%", marginTop:"5%"}}>
        <div>
          <img src={logo1} alt="gaspi" className="rounded-50% w-[40%] h-[100%] object-cover"/>
        </div>
        <div>
          <img src={logo2} alt="gaspi" className="rounded-50% w-[40%] h-[100%] object-cover"/>
        </div>
        <div>
          <img src={logo3} alt="gaspi" className="rounded-50% w-[40%] h-[100%] object-cover"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
