import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import theme11 from "../../assets/images/themes/theme01.png";
import theme33 from "../../assets/images/themes/theme33.JPEG";
import theme4 from "../../assets/images/themes/theme4.jpg";
import theme5 from "../../assets/images/themes/theme5.jpg";
import theme66 from "../../assets/images/themes/theme66.JPEG";
import theme77 from "../../assets/images/themes/theme77.jpg";
import theme88 from "../../assets/images/themes/theme88.JPEG";
import theme9 from "../../assets/images/themes/theme9.jpeg";
import {FaDiaspora, FaDonate, FaJoget, FaPeace, FaPeopleArrows, FaPeopleCarry, FaSatelliteDish} from 'react-icons/fa';

const blocks = [
    {
      title: "Campagne de sensibilisation",
      image: theme4,
      description: "Les campagnes de sensibilisation de WAFRICA TV visent à informer, éduquer et mobiliser le public sur des questions cruciales liées à ses domaines d'intervention. À travers des initiatives percutantes et ciblées, WAFRICA TV cherche à sensibiliser la population aux enjeux sociaux, environnementaux et humanitaires, encourageant ainsi une prise de conscience collective et des actions concrètes pour le changement. Ces campagnes sont conçues pour susciter l'empathie, inspirer l'action et promouvoir un engagement significatif envers des causes essentielles.",
    },
    {
      title: "Conférence et Forums",
      image: theme5,
      description: "Les conférences et les forums organisés par WAFRICA TV offrent des plateformes d'échange, de partage de connaissances et de débats constructifs sur des problématiques d'actualité et des enjeux sociétaux majeurs. Ces événements rassemblent des experts, des décideurs, des acteurs de terrain et le grand public pour discuter, réfléchir et collaborer en vue de trouver des solutions innovantes et durables. Les conférences et forums de WAFRICA TV sont des espaces privilégiés pour stimuler la réflexion, encourager la coopération et favoriser le progrès vers un avenir meilleur.",
    },
    {
      title: "WAFRICA SPRINT",
      image: theme66,
      description: "Dans le but de créer davantage de visibilité non seulement sur la fédération camerounaise d’athlétisme et ses clubs, sur ses différents meetings ainsi que sur ses athlètes, mais aussi de susciter des vocations chez les jeunes camerounais. WafricaTV a pensé créer un thème unique (WAFRICA sprint ) consacrer uniquement à l'education sportive de la jeunesse",
    },
    {
      title: "VOX FACULTY",
      image: theme33,
      description: " Voxfaculty est un Magazine de rencontres et d'échanges scientifiques :  Conférences, tables rondes, colloques etc. Il consiste à retransmettre les événements tels que des séminaires, des colloques, des symposiums, là où naissent les idées qui façonnent notre avenir,c'est une émission qui plonge dans les coulisses des institutions scientifiques les plus prestigieuses. Entre Rencontres avec des chercheurs passionnés et découvertes des innovations qui transforment notre compréhension du monde. De la médecine de pointe à l'intelligence artificielle, en passant par les avancées environnementales et technologiques, à la Pointe de la Connaissance, nous prenons part à un voyage au cœur de la recherche et de l'éducation. Chaque épisode de 26 minutes comprendra des reportages sur le terrain, des interviews avec des chercheurs de renom, des démonstrations de technologies émergentes, et des discussions sur les enjeux éthiques et sociaux. L'approche sera à la fois informative et immersive, offrant aux téléspectateurs une compréhension approfondie du sujet traité et des développements actuels dans le domaine concerné. Ce programme est diffusé et rediffusé selon la programmation de la grille, sur WafricaTV et toutes ses plateformes numériques à l’occurrence sa chaîne YouTube, sa chaîne WhatsApp, Facebook, Télégramme et Instagram.",
    },
    {
      title: "Action de proximité",
      image: theme77,
      description: "Les actions de proximité de WAFRICA TV sont des interventions locales et communautaires visant à répondre aux besoins spécifiques des populations dans les régions où l'entreprise est implantée. En s'engageant directement auprès des communautés, Wafrica TV favorise le dialogue, la collaboration et la mise en place de solutions adaptées aux réalités locales. Ces actions de proximité renforcent les liens avec les bénéficiaires, favorisent l'inclusion sociale et contribuent au développement durable des communautés.",
    },
    {
      title: "AfriGlam",
      image: theme88,
      description:"L'Actu Mode , dans le but de promouvoir la mode africaine et ses créateurs, quel que soit le secteur, WafricaTV a conçu l'émission ‘Glam Up’ pour dire glamour,‘Glam up’ est une émission de 26 minutes qui permet à tous les créateurs de mode africains de venir parler de leurs créations et de les présenter. L'émission comprend un animateur et un invité. L'invité est un artiste, soit un styliste, un coiffeur, un producteur d'accessoires avec des tissus africains, des chaussures, afin qu'il puisse mieux illustré l'ensemble de tout ses accessoires et produits quil propose !. ",
    },
];

function Themes() {

  return (
    <>
      {/* <Nav /> */}
      <div className="mb-32 w-screen h-[70vh] bg-gray-800 flex justify-center items-center -z-10 overflow-hidden bg-black">
        <img src={theme11} className="w-full bg-cover" /> 
      </div>
      <div className="relative w-2/5 h-full mx-auto" style={{marginLeft:"55%"}}>
        <div className="px-14 py-6 absolute left-0 bottom-16 w-[30rem] bg-black/80 text-white">
          <p className="text-red-700 text-lg">A la une </p>
          <div className="flex space-x-4">
            <div style={{marginTop:"7.5%"}}>
              <p className="uppercase text-xl" style={{fontSize:"190%"}}>NOS ACTUALITES </p>
            </div>
            <div>
              <a href="/actualites" className="hover:text-blue-500"><i><FaSatelliteDish size={55} /></i></a>
            </div>
          </div>
          <p className="mt-6 font-bold text-lg"> Bienvenue sur notre nouveau site internet ! </p>
          <p className="mt-6">
            Nous sommes heureux de vous compter parmis les visiteurs de notre plateforme. Découvrez en quelques mots...
          </p><br />
          <p>
            <a href="/actualites" className="text-white-600 underline">lire la suite</a>.
          </p>
          <Link to="/actualites">
            <button className="mt-6 bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">Tout nos differents articles</button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-100">
        <main className="max-w-7xl mx-auto mt-8 p-4">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{marginLeft:"5%"}}>NOS THEMES</h2>
            <p style={{marginLeft:"5%"}}>En un clic !</p>
            <div className="bg-gray-100 py-12 flex justify-center">
              <div className="max-w-6xl w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {blocks.slice(0, 3).map((block, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                      <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                      <img
                        src={block.image}
                        alt={block.title}
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <p className="text-gray-700">{block.description}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  {blocks.slice(3, 6).map((block, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                      <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                      <img
                        src={block.image}
                        alt={block.title}
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <p className="text-gray-700">{block.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
       </main>
     </div>

     <section className="mb-8 max-w-6xl mx-auto mt-8 p-4" style={{marginBottom:"5%"}}>
        <p className="" style={{fontSize:"110%"}}>→ Je suis...</p>
          <div className="flex space-x-4" style={{marginBottom:"1%"}}>
              <div style={{marginTop:"2%"}}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">Navigation par Profil</h2>
              </div>
              <a href="#" className="text-white-500"><i><FaPeopleArrows size={55} /></i></a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-orange-400 shadow rounded text-center">
                <div className="flex space-x-4">
                  <a href="#" className="text-white"><i><FaPeopleCarry size={30} /></i></a>
                  <div style={{marginTop:"2%"}}>
                    <Link to="/recrutements">
                      <h3 className="text-xl font-bold text-black">Volontaire</h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-400 shadow rounded text-center">
                <div className="flex space-x-4">
                  <a href="#" className="text-white"><i><FaDonate size={30} /></i></a>
                  <div style={{marginTop:"2%"}}>
                    <Link to="/recrutements">
                      <h3 className="text-xl font-bold text-black">Donateurs</h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-400 shadow rounded text-center">
                <div className="flex space-x-4">
                  <a href="#" className="text-white"><i><FaJoget size={30} /></i></a>
                  <div style={{marginTop:"2%"}}>
                    <Link to="/recrutements">
                      <h3 className="text-lg font-bold text-black">Demandeur d'emploi</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
     </section>
          
     <section>
            <div className="w-full flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <img
                  src={theme9}
                  alt="Descriptive Alt Text"
                  className="w-full h-[60%] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 bg-orange-400 text-white flex flex-col justify-center p-8 h-[65vh]">
                <b>Zoom sur →</b>
                <h2 className="text-3xl font-bold mb-4 uppercase">Venez participer à nos conferences et meeting et sutout assistés à tout nos evènements</h2><br />
                <p className="text-lg mb-6 text-justify">
                vous enregistrez , vous permettra de recevoir toutes nos dernières actualités et d'etre à la fut de tout nos prochains rendez-vos en fonctions de vos programmes et themes preférés sur WAFRICA TV 
                </p><br />
                <Link to="/recrutements">
                  <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Vers le formulaire
                  </button>
                </Link>
              </div>
            </div>
     </section>
    </>
  );
}

export default Themes;
