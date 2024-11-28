import Banner from "./components/Banner";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube, FaJoint, FaHackerNews, FaGrinBeamSweat, FaAccusoft, FaPersonBooth, FaCartPlus, FaInfo, FaThemeco, FaProcedures, FaRProject, FaProjectDiagram, FaRegCaretSquareUp, FaDonate } from 'react-icons/fa';
import home1 from "../../assets/images/home/home1.jpeg";
import home2 from "../../assets/images/home/home2.png";
import home3 from "../../assets/images/home/home3.png";
import home4 from "../../assets/images/home/home4.jpeg";
import home5 from "../../assets/images/home/home5.jpeg";
import home6 from "../../assets/images/home/home6.jpg";
import home7 from "../../assets/images/home/home7.jpeg";
import home8 from "../../assets/images/home/home8.jpg";
import home9 from "../../assets/images/home/home9.jpeg";
import home10 from "../../assets/images/home/home10.jpg";
import { getArticles } from "../../services/article";
import { useEffect } from "react";

import React, { useState } from 'react';
import { db } from '/Gaspi/Backend/firebase1';  // Importer la référence Firestore

export default function Home() {
  
  // Options de configuration de Splide

  useEffect(() => {
    getArticles();
  }, []);
  
  const home  = () => {
    const [email, setEmail] = useState('');  // Stocke l'e-mail de l'utilisateur
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        // Ajouter l'e-mail à Firestore
        await db.collection('emails').add({
          email: email,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        alert('E-mail ajouté avec succès !');
        setEmail('');  // Réinitialiser le champ
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'e-mail :', error);
        alert('Il y a eu un problème.');
      }
    } else {
      alert('Veuillez entrer un e-mail.');
    }
  };
 
  console.log(process.env.REACT_APP_API_URL);

  return (
    <div className="grow">
      {/* <Nav /> */}
      <Banner />
      
      <div>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-8" style={{marginTop:"10%"}}>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-10">
              <div className="bg-orange-400  p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center">
                <div className="mb-4"><FaThemeco size={40} color={"white"}/></div>
                
                <h3 className="text-lg-white font-bold mb-2 text-center text-white">
                  Nos différents thèmes 
                </h3>
              
              </div>
              <div className="bg-orange-400  p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center">
                <div className="mb-4"><FaProjectDiagram size={40} color={"white"}/></div>
                
                <h3 className="text-lg-white font-bold mb-2 text-center text-white">
                  Découvrez nos programmes
                </h3>
                
              </div>
              <div className="bg-orange-400  p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center">
                <div className="mb-4"><FaInfo size={40} color={"white"}/></div>
                
                <h3 className="text-lg-white font-bold mb-2 text-center text-white">
                  toutes nos dernières actualités
                </h3>
              
              </div>
              <div className="bg-orange-400 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center">
                <div className="mb-4"><FaRegCaretSquareUp size={40} color={"white"}/></div>
              
                <h3 className="text-lg-white font-bold mb-2 text-center text-white">
                  venez participer , 
                </h3>
              </div>
              <div className="bg-orange-400 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center">
                <div className="mb-4"><FaDonate size={40} color={"white"}/></div>
                
                <h3 className="text-lg-white font-bold mb-2 text-center text-white">
                  retrouvez nos articles les plus passionant!.
                </h3>
              
              </div>
              
            </div>
          </div>

          <div className="py-12 flex justify-center items-center" style={{marginTop:"3%"}}>
            <div className="container mx-auto px-4 flex flex-col items-center">
              <div className="w-full max-w-4xl">
                <h2 className="text-3xl font-bold mb-4 text-center">Wafrica TV: Au de-là des ideés recues</h2>
                <div className="">
                  <div className="mx-auto" style={{ maxWidth: 'max-content' }}>
                    <p className="text-gray-700 text-center">WAFRICA TV est une chaine télévisé mise sur pied en Mars 2021 avec pour objectifs majeur le promotion de litterature scientifique et la recherche à travers la télévision.
                      notre mission est de sensibiliser et de proposer des solutions aux divers problemes qui mines notre societé. 
                      nous aspirons à ètre un leader médiatique en Afrique, et envisageons de donner un autre type de contenu média au public en quète de connaissances en vue de comprendre les phénomènes sociaux et de pouvoir améliorer individuellement ou en communauté leurs conditions de vie. 
                      Parce que le livre est l’un des premiers outils de compréhension du monde, nous nous attèlons à faire la promotion de tous les auteurs et des environnements de recherche.</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>



          {/* Section Actus */}
          <div className="bg-gray-100 py-12 flex justify-center items-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <div className="w-full max-w-6xl">
                <h2 className="text-3xl font-bold mb-4 text-center">NOS SECTEURS D'ACTIVITES</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10"style={{marginTop:"3%"}}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center"  style={{width:"100%"}}>
                      <img src={home1} alt="Image" className="w-128 h-80 rounded-lg shadow-lg object-cover" />
                    </div>
                    <div className="md:w-2/3 md:ml-6">
                      <h3 className="text-xl font-bold mb-2">LE JOURNALISME</h3>
                      <p className="text-gray-700">Aujourd'hui l'importances du journalisme n'est plus à demontrer car le besoin , et la recherche de l'information on fait de celui ci un pilier du monde actuel.</p>
                      <Link to="/actualites">
                        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">Lire plus</button>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center"  style={{width:"100%"}}>
                      <img src={home5} alt="Image" className="w-128 h-80 rounded-lg shadow-lg object-cover" />
                    </div>
                    <div className="md:w-2/3 md:ml-6">
                      <h3 className="text-xl font-bold mb-2">la photographie et le reportage sur le terrain</h3>
                      <p className="text-gray-700">la photographie et le reportage de terrain sont des axes majeurs de l'audio-visuel et les caractéristiques principos de la télé </p>
                      <Link to="/actualites">
                        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">Lire plus</button>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center"  style={{width:"100%"}}>
                      <img src={home10} alt="Image" className="w-128 h-80 rounded-lg shadow-lg object-cover" />
                    </div>
                    <div className="md:w-2/3 md:ml-6">
                      <h3 className="text-xl font-bold mb-2">les sciences l'art et la culture</h3>
                      <p className="text-gray-700">la matinale...! nous proposons une etude matinal sur notre chaine axé sur des domaines diverses en fonction des thematiques de l'actualite.</p>
                      <Link to="/actualites">
                        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">Lire plus</button>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center"  style={{width:"100%"}}>
                      <img src={home9} alt="Image" className="w-128 h-80 rounded-lg shadow-lg object-cover" />
                    </div>
                    <div className="md:w-2/3 md:ml-6">
                      <h3 className="text-xl font-bold mb-2">SOUTIEN EDUCATIF</h3>
                      <p className="text-gray-700">Le soutien éducatif joue un rôle clé dans la sensibilisation et l'adoption de pratiques durables pour promouvoir une cohabitation harmonieuse avec la société.</p>
                      <Link to="/actualites">
                        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">Lire plus</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-6" style={{marginTop:"3%", marginBottom:"3%"}}>
                <Link to="/actualites">
                  <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">Toutes les actualités</button>
                </Link>
                </div>
              </div>
            </div>
          </div>

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

          {/* Section Réseaux */}
          <section className="bg-gray-100 py-12" style={{marginBottom:"3%", marginTop:"3%"}}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">NOS RÉSEAUX</h2>
              <div className="flex flex-wrap justify-center gap-8">
                
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-80">
                  <img src={home7} alt="Réseau 2" className="w-full h-64 rounded-lg mb-4 object-cover" />
                  <p className="text-gray-700 text-center">Suivez-nous sur nos différents réseaux pour ne rien rater en un click </p><br />
                  <div className="flex space-x-4" style={{marginLeft:"10%"}}>
                    <a href="#" className="hover:text-blue-500"><i><FaFacebook size={30} /></i></a>
                    
                    <a href="#" className="hover:text-red-500"><i><FaInstagram size={30} /></i></a>
                    
                    <a href="http://www.youtube.com/@WafricaTV" className="hover:text-red-500"><i><FaYoutube size={30} /></i></a>
                  </div>
                </div>
                
              </div>
            </div>
          </section>


          {/* Section Lettre d'informations */}
          <section className="bg-orange-400 text-white py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4 text-center">Lettre d'informations</h2>
              <h3 className="text-1xl font-regular mb-4 text-center">Nous vous tiendrons informé de tout ce qu'il y'a à savoir quant
                 à nos programmes et actualités, alors n'hesitez pas à vous abonner sur nos differents chaines</h3>
                 <form className="flex flex-col items-center"onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  // Met à jour l'état
                  className="w-full max-w-md px-4 py-2 text-black rounded mb-4 focus:outline-none"
                  placeholder="Votre email"
                />
                <button className="bg-blue-700 py-2 px-4 rounded hover:bg-blue-800 transition duration-300" type="submit">
                  S'abonner
                </button>
              </form>   
            </div>
          </section>
          
      </div>
    </div>
  );

}

}