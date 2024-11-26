import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import programmes from "../../assets/images/programmes/programmes.jpg";
import programmes1 from "../../assets/images/programmes/programmes1.jpeg";
import programmes2 from "../../assets/images/programmes/programmes2.jpeg";
import programmes3 from "../../assets/images/programmes/programmes3.jpeg";
import programmes4 from "../../assets/images/programmes/programmes4.png";
import programmes5 from "../../assets/images/programmes/programmes5.jpeg";
import {FaSatelliteDish, FaHome, FaUserAlt, FaRegLightbulb, FaHeart} from 'react-icons/fa';

const icons = [
  { icon: <FaSatelliteDish />, label: 'les Grandes Questions' },
  { icon: <FaHome />, label: 'Efe A!' },
  { icon: <FaUserAlt />, label: 'VOX POP' },
  { icon: <FaRegLightbulb />, label: 'Wafrica News' },
  { icon: <FaHeart />, label: 'ONERA' },
];

function Programmes() {

  return (
    <>
      <div className="App">
      {/* Image principale avec titre */}
      <section className="relative w-full h-96 bg-cover bg-center">
        <img src={programmes} className="w-full h-96" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-2" style={{marginTop:"15%"}}>NOS DIFFERENTS PROGRAMMES</h1>
            <p className="text-lg">Connectez-vous à l'avenir</p>
          </div> 
        </div>
      </section>

     {/* Icônes sous l'image principale */}
     <div className="flex justify-around py-4 bg-white shadow-md" style={{marginLeft:"20%", marginRight:"20%"}}>
        {icons.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              {React.cloneElement(item.icon, { size: 24, className: 'text-blue-500' })}
            </div>
            <p className="text-sm text-gray-700">{item.label}</p>
          </div>
        ))}
     </div>

      {/* Section Programmes */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">En ce moment nos Programmes sur WAFRICA TV</h2>
          <div className="flex justify-between mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
             <a href="http://www.youtube.com/@WafricaTV" className="souscribe-button">
            Toutes nos programmes vidéo en un clic
             </a>
            </button>
          </div>
          <div className="bg-white p-4">
            <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-md rounded-md p-4">
                <img src={programmes1} alt="Actualité 1" className="w-full h-40 object-cover rounded-md mb-4"/>
                <h2 className="text-yellow-500 text-sm">les Grandes Questions</h2>
                <h3 className="text-xl font-bold text-gray-800">NOTRE PROGRAMME:les Grandes Questions</h3>
                <p className="text-gray-600 mt-2">Pour laisser place à l’expression de la pensée, des idées, des réflexions sur le quotidien des africains etconstruire une Afrique à partir de la science, WafricaTV a pensé le programme de télévision LA GRANDE QUESTION. </p>
              </div>
              <div className="bg-white shadow-md rounded-md p-4">
                <img src={programmes2} alt="Actualité 2" className="w-full h-40 object-cover rounded-md mb-4"/>
                <h2 className="text-yellow-500 text-sm">Efe A!</h2>
                <h3 className="text-xl font-bold text-gray-800">NOTRE PROGRAMME:Efe A!</h3>
                <p className="text-gray-600 mt-2">Dans l’optique d’amener la femme africaine à s’accepter dans son entièreté, WafricaTV a conçu l’émission « Efe A ! » 
                  qui signifie Être Femme En Afrique. Question de l’armée davantage pour faire face aux préjugés et stéréotypes 
                  qui la dévalorisent.« Efe A ! » est un programme de 1h30 minutes qui offre l’opportunité à 03 femmesde s’exprimer sur les maux qui les affectent au quotidien.  </p>
              </div>
              <div className="bg-white shadow-md rounded-md p-4">
                <img src={programmes3} alt="Actualité 3" className="w-full h-40 object-cover rounded-md mb-4"/>
                <h2 className="text-yellow-500 text-sm">VOX POP</h2>
                <h3 className="text-xl font-bold text-gray-800">NOTRE PROGRAMME:VOX POP</h3>
                <p className="text-gray-600 mt-2">La voix local ....decouvrez sur VOX POP les plus belles camerounaise et Africaine .....</p>
              </div>
              <div className="bg-white shadow-md rounded-md p-4">
                <img src={programmes4} alt="Actualité 4" className="w-full h-40 object-cover rounded-md mb-4"/>
                <h2 className="text-yellow-500 text-sm">Wafrica News</h2>
                <h3 className="text-xl font-bold text-gray-800">NOTRES PROGRAMMES :Wafrica News</h3>
                <p className="text-gray-600 mt-2">un reveil en douceur sous le regard attentifs de toutes les actualités de l'Afrique sur Wafrica News</p>
              </div>
              <div className="bg-white shadow-md rounded-md p-4">
                <img src={programmes5} alt="Actualité 4" className="w-full h-40 object-cover rounded-md mb-4"/>
                <h2 className="text-yellow-500 text-sm">ONERA</h2>
                <h3 className="text-xl font-bold text-gray-800">NOTRE PROGRAMME ONERA</h3>
                <p className="text-gray-600 mt-2">Faisons ensemble le tour de l'actualités sanitaire de l'Afrique tout les jours avec notre rebriques ONERA</p>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Section Agenda */}
          <section className="bg-orange-400 text-white py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4 text-center" style={{marginBottom:"2%", marginTop:"3%"}}>Grille des programmes</h2>
              <div className="flex justify-between">
                <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/3">
                  <h3 className="text-xl font-semibold mb-2">Les Grandes Questions</h3>
                  <p className="text-gray-700">De 15h30 à 17h</p>
                </div>
                <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/3 mx-4">
                  <h3 className="text-xl font-semibold mb-2">La Efe A!</h3>
                  <p className="text-gray-700">De 17h30 à 19h</p>
                </div>
                <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/3">
                  <h3 className="text-xl font-semibold mb-2">VOX POP</h3>
                  <p className="text-gray-700">De 13h à 14h</p>
                </div>
                <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/3 mx-4">
                  <h3 className="text-xl font-semibold mb-2">Wafrica news </h3>
                  <p className="text-gray-700">De 20h à 21h</p>
                </div>
                <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/3">
                  <h3 className="text-xl font-semibold mb-2">la Zen Po'o</h3>
                  <p className="text-gray-700">De 21h à 22h30</p>
                </div>
              </div>
              <Link to="/actualites">
                <button className="mt-6 bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300">Tous les événements</button>
              </Link>
            </div>
          </section>
    </div>
    </>
  );
}

export default Programmes;
