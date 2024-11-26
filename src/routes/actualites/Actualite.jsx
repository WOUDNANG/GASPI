import React, { useState } from "react";
import { Link } from "react-router-dom";
import imageHome from "../../../src/assets/images/actualités/actu.jpeg"
import actualité1 from "../../assets/images/actualités/actualité1.jpg"
import actualité2 from "../../assets/images/actualités/actualité2.png"
import actualité3 from "../../assets/images/actualités/actualité3.png"
import actualité4 from "../../assets/images/actualités/actualité4.png"
import actualité5 from "../../assets/images/actualités/actualité5.png"
import actualité6 from "../../assets/images/actualités/actualité6.png"
import actualité7 from "../../assets/images/actualités/actualité7.png"
import actualité8 from "../../assets/images/actualités/actualité8.jpeg"

const articles = [
    {
      id: 1,
      title: "« On dirait les Suds », un podcast sur le futur de l'éducation citoyenne",
      date: '24 juillet 2024',
      tags: ['Éducation à la citoyenneté', 'Autres pays'],
      content: "Découvrez une série de podcasts innovants axés sur l'éducation citoyenne et les enjeux mondiaux. 'On dirait les Suds' explore les nouvelles voies de la transition écologique en mettant en avant les initiatives inspirantes des citoyens du monde entier. Plongez dans une réflexion profonde sur l'engagement civique et la construction d'un avenir durable.",
      image: actualité1,
    },
    {
      id: 2,
      title: "Soutien à la reforestation au CAMEROUN : Un élan pour l'environnement",
      date: '10 août 2024',
      tags: ['Environnement', 'CAMEROUN'],
      content: 'Un programme de reforestation inédit voit le jour dans les régions montagneuses françaises, unissant citoyens, organisations environnementales et autorités locales pour restaurer les écosystèmes fragiles. Ensemble, contribuons à la préservation de la biodiversité et à la lutte contre le changement climatique. Engagez-vous pour un avenir vert et durable !',
      image: actualité2,
    },
    {
      id: 3,
      title: "Promotion de l'agriculture durable au CAMEROUN : Cultivons l'avenir ensemble",
      date: '15 septembre 2024',
      tags: ['Agriculture', 'CAMEROUN'],
      content: "Une initiative nationale encourage le développement de pratiques agricoles durables en France, favorisant la protection de l'environnement et la préservation des ressources naturelles. Rejoignez le mouvement pour une agriculture respectueuse du climat et garantissant une alimentation saine pour tous.",
      image: actualité3,
    },
    {
      id: 4,
      title: "Innovation technologique au service de l'éducation : Révolution numérique en classe",
      date: '5 octobre 2024',
      tags: ['Éducation', 'Technologie'],
      content: "Découvrez comment les nouvelles technologies transforment l'enseignement et l'apprentissage en proposant des outils innovants et interactifs. Plongez dans l'univers de la révolution numérique en classe pour une éducation plus dynamique et adaptée aux besoins des apprenants du 21e siècle.",
      image: actualité4,
    },
    {
      id: 5,
      title: 'Protection des océans : Ensemble pour préserver notre patrimoine marin',
      date: '20 novembre 2024',
      tags: ['Environnement', 'Océans'],
      content: 'Une mobilisation mondiale se met en place pour protéger les océans et lutter contre la pollution marine. Participez à des actions concrètes de nettoyage des plages et de sensibilisation pour préserver la biodiversité marine et assurer un avenir durable pour notre planète bleue.',
      image: actualité5,
    },
    {
      id: 6,
      title: 'Égalité des genres dans le monde du travail : Vers une société inclusive',
      date: '8 janvier 2025',
      tags: ['Égalité', 'Travail'],
      content: "Une campagne pour promouvoir l'égalité des genres sur le lieu de travail et favoriser l'accès des femmes aux postes de responsabilité se déploie dans le monde entier. Ensemble, construisons une société plus juste et inclusive où chacun a sa place et est valorisé pour ses compétences.",
      image: actualité6,
    },
    {
      id: 7,
      title: 'Sensibilisation à la préservation de la biodiversité : Protégeons notre héritage naturel',
      date: '15 février 2025',
      tags: ['Environnement', 'Biodiversité'],
      content: 'Une campagne de sensibilisation invite le public à agir pour préserver la biodiversité et protéger les espèces menacées. Découvrez comment chacun peut contribuer à la sauvegarde de notre héritage naturel et à la conservation des écosystèmes fragiles qui nous entourent.',
      image: actualité7,
    },
    {
      id: 8,
      title: "Innovation sociale pour l'inclusion des personnes en situation de handicap",
      date: '10 mars 2025',
      tags: ['Inclusion', 'Handicap'],
      content: "Des initiatives innovantes émergent pour favoriser l'inclusion des personnes en situation de handicap dans tous les aspects de la société. Explorez les projets et actions qui visent à créer un environnement plus accessible et inclusif pour tous, promouvant ainsi la diversité et l'égalité des chances.",
      image: actualité8,
    }
  
  // Ajoutez d'autres articles ici...
];

function Actualite() {

  const [articlesPerPage, setArticlesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculer les articles à afficher en fonction de la pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Calculer le nombre de pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>

      <div className='absolute w-full h-[50vh] bg-black opacity-60'>
      </div>
        <img
          src={imageHome}
          alt="interior image"
          className="h-[50vh] w-full object-cover"
      />
      <h1 className="font-bold absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl" style={{ fontSize: "180%", textAlign: "center", transform: "translate(-50%, -50%)"}}>
          VISUALISEZ NOS DIFFERENTES ACTIVITES☻♥
      </h1>

      <div className="container mx-auto p-6" style={{marginTop:"1%"}}>
      {/* Navigation principale */}
        <nav className="flex justify-center items-center py-3 border-b">
          <a href="/actualites" className="text-lg font-semibold hover:text-red-500 transition duration-300 mx-2">ACTUALITÉS</a>
          <a href="/actualites" className="text-lg font-semibold hover:text-red-500 transition duration-300 mx-2">Grille des programmes</a>
          <a href="/actualites" className="text-lg font-semibold hover:text-red-500 transition duration-300 mx-2">ÉVÉNEMENTS PASSÉS</a>
        </nav>

        {/* Section de filtres */}
        <div className="flex justify-between items-center my-6" style={{marginTop:"3%", marginLeft:"2.5%"}}>
          <div className="flex space-x-4">
            <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-orange-400 transition duration-300">Selon le type</button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-orange-400  transition duration-300">Localisation</button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-orange-400  transition duration-300">Thématique</button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-orange-400  transition duration-300">Activités</button>
          </div>
        </div>

        {/* Section d'actualité */}
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-3/4 px-4 mb-8 md:mb-0">
              {currentArticles.map(article => (
                <div key={article.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-6">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <img src={article.image} alt="Actualité" className="w-full md:w-1/3 rounded-lg object-cover" />
                    <div className="w-full md:w-2/3">
                      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                      <p className="text-gray-500 mb-4">{article.date}</p>
                      <div className="flex space-x-2 mb-4">
                        {article.tags.map(tag => (
                          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{tag}</span>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 text-justify">{article.content}</p>
                      <button className="text-red-500 font-semibold hover:underline transition duration-300">En savoir plus</button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center mt-6">
              <div>
                <label htmlFor="articlesPerPage" className="mr-2">Articles par page :</label>
                <select
                  id="articlesPerPage"
                  value={articlesPerPage}
                  onChange={(e) => setArticlesPerPage(Number(e.target.value))}
                  className="border rounded px-2 py-1"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>
              <div className="flex items-center">
                <button
                  onClick={handlePreviousPage}
                  className={`mx-1 px-2 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
                  disabled={currentPage === 1}
                >
                  Précédent
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`mx-1 px-2 py-1 rounded ${currentPage === index + 1 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={handleNextPage}
                  className={`mx-1 px-2 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
                  disabled={currentPage === totalPages}
                >
                  Suivant
                </button>
              </div>
            </div>
            </div>

            {/* Colonne "Gardons Contact" et articles les plus lus */}
            <div className="w-full md:w-1/4 px-4">
              <div className="bg-red-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-8">
                <h3 className="text-xl font-bold mb-4">GARDONS CONTACT</h3>
                <p className="mb-4">Vous souhaitez suivre notre actualité et/ou participer à nos événements ?</p>
                <button className="bg-white text-red-500 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition duration-300">DÉCOUVRIR NOS NEWSLETTERS</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold mb-4">ARTICLES LES PLUS LUS</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Appel à projets ProBioDev : les lauréats !</li>
                  <li>Lancement de la 6e édition du Social & Inclusive Business Camp !</li>
                  <li>VH à Djibouti : un retour contre le double fardeau de la maladie et du silence imposé</li>
                  <li>République du Congo : un dispositif d'insertion socio-économique durable pour les jeunes et les femmes</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
    {/* Section Agenda */}
    <section className="bg-orange-400 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ marginBottom: "2%", marginTop: "3%" }}>Grille de nos programmes</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/6 m-2">
            <h3 className="text-xl font-semibold mb-2">les Grands Reportages</h3>
            <p className="text-gray-700">De 12h à 12h30</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/6 m-2">
            <h3 className="text-xl font-semibold mb-2">Le Point</h3>
            <p className="text-gray-700">De 12h30 à 13h</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/6 m-2">
            <h3 className="text-xl font-semibold mb-2">VOX FACULTY</h3>
            <p className="text-gray-700">De 13h à 14h</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/6 m-2">
            <h3 className="text-xl font-semibold mb-2">Zen Po'o</h3>
            <p className="text-gray-700">De 14h à 15h30</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/6 m-2">
            <h3 className="text-xl font-semibold mb-2">La Grande Question </h3>
            <p className="text-gray-700">De 15h30 à 17h</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/6 m-2">
              <h3 className="text-xl font-semibold mb-2">Grand Reportages </h3>
              <p className="text-gray-700">De 17h à 17h30</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/6 m-2">
          <h3 className="text-xl font-semibold mb-2">la Efe A!</h3>
          <p className="text-gray-700">De 17h30 à19h</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/6 m-2">
              <h3 className="text-xl font-semibold mb-2">l' Entretien</h3>
              <p className="text-gray-700">De 19h à 20h</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/6 m-2">
              <h3 className="text-xl font-semibold mb-2">ProBook</h3>
              <p className="text-gray-700">De 21h à 22h</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-1/6 m-2">
              <h3 className="text-xl font-semibold mb-2">Brainstorming pour la campagne</h3>
              <p className="text-gray-700">debut 2025</p>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}

export default Actualite;
