import recrutement1 from "../../assets/images/Recrutements/recrutement1.jpeg";
import { Link } from "react-router-dom";

import React, { useState } from 'react';

import icon1 from '../../assets/images/Recrutements/investirIcon1.png';
import icon2 from '../../assets/images/Recrutements/investirIcon2.png';
import icon3 from '../../assets/images/Recrutements/investirIcon3.png';

function Recrutements() {

    const [selectedOption, setSelectedOption] = useState('volontaire');

    const formTitles = {
        volontaire: 'Recrutement Volontaire',
        Invité: 'Recrutement invité',
        
        Stagiaire: 'Recrutement stagiaire',
    };

    const formDescriptions = {
        volontaire: 'Veuillez remplir les informations de base pour devenir un volontaire.',
        Invité : 'Veuillez remplir les informations de base pour particpez à nos émission',
        
        Stagiaire: 'Veuillez remplir les informations de base pour postuler à un emploi ( stage).',
    };

    return (
        <>
            <div className='mb-32 w-full h-[70vh] bg-gray-800 flex justify-center items-center -z-10 overflow-hidden'>
                <div className='absolute w-full h-[70vh] bg-black opacity-70'></div>
                <img src={recrutement1} className="w-full h-full object-cover" alt="Banner" />
                <div className='absolute top-25 w-full text-white' style={{paddingLeft:'23%'}}>
                    <h2 className='text-xl mb-2'>Accueil</h2>
                    <h1 className='text-4xl font-bold mb-2'>NOS OFFRES DE RECRUTEMENTS</h1>
                    <h2 className='text-xl mb-4'>WAFRICA TV est ouvert à divers recrutements, alors choisissez votre catégorie et rejoignez-nous</h2>
                    <div className='w-3/4 h-1 bg-white'></div>
                </div>
                <div className='absolute bottom-16 h-[30vh] w-full flex justify-center z-20 space-x-10'>
                    <div className='px-6 py-6 bg-white text-black w-64 flex flex-col items-center' style={{borderRadius:'5%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', minHeight: '400px'}}>
                        <img src={icon1} alt="Icon 1" className="w-12 h-12 mb-4" />
                        <h3 className='text-lg font-bold mb-2'>NOTRE SUIVIE</h3>
                        <p className='text-sm text-center'> À travers des mécanismes de surveillance rigoureux, WAFRICA TV s'engage à maintenir des normes élevées de qualité, d'efficacité et de transparence 
                        dans toutes ses opérations. Ce suivi permet à notre chaine d'ajuster ses stratégies et ses actions pour mieux répondre aux besoins de ses clients et partenaires, tout en restant fidèle à ses valeurs fondamentales.</p>
                    </div>
                    <div className='px-6 py-6 bg-white text-black w-64 flex flex-col items-center' style={{borderRadius:'5%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', minHeight: '400px'}}>
                        <img src={icon2} alt="Icon 2" className="w-12 h-12 mb-4" />
                        <h3 className='text-lg font-bold mb-2'>NOS BENEVOLS</h3>
                        <p className='text-sm text-center'>Les volontaires de WAFRICA TV représentent le cœur battant de la chaine, apportant leur dévouement, leurs compétences et leur passion pour soutenir 
                        les diverses initiatives de notre chaine. Leur engagement désintéressé et leur contribution active jouent un rôle essentiel dans la réalisation des objectifs de l'entreprise et dans la création d'un impact positif dans la communauté</p>
                    </div>
                    <div className='px-6 py-6 bg-white text-black w-64 flex flex-col items-center' style={{borderRadius:'5%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', minHeight: '400px'}}>
                        <img src={icon3} alt="Icon 3" className="w-12 h-12 mb-4" />
                        <h3 className='text-lg font-bold mb-2'>ÉQUIPES PARTENAIRES</h3>
                        <p className='text-sm text-center'>Les équipes partenaires de WAFRICA TV sont des acteurs clés dans le réseau de collaboration et de soutien de la chaine. Travaillant main dans la main avec nous, 
                        ces équipes partagent une vision commune et un engagement envers l'excellence opérationnelle et l'innovation. Ensemble, ils unissent leurs forces pour atteindre des objectifs communs, créer des synergies et maximiser l'impact de leurs actions 
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex min-h-screen w-[130vh] shadow" style={{marginLeft:"20%", marginTop:"30%", boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                {/* Sidebar */}
                <div className="w-1/4 bg-orange-400 text-white p-8">
                    <h2 className="text-2xl mb-6">Recrutement</h2>
                    <nav className="space-y-4">
                    <button
                        onClick={() => setSelectedOption('volontaire')}
                        className={`block w-full text-left py-2 px-4 rounded ${
                        selectedOption === 'volontaire' ? 'bg-gray-700' : ''
                        }`}
                    >
                        Volontaire
                    </button>
                    <button
                        onClick={() => setSelectedOption('Invité')}
                        className={`block w-full text-left py-2 px-4 rounded ${
                        selectedOption === 'Invité' ? 'bg-gray-700' : ''
                        }`}
                    >
                        Invité
                    </button>
                    <button
                        onClick={() => setSelectedOption('Stagiaire')}
                        className={`block w-full text-left py-2 px-4 rounded ${
                        selectedOption === 'Stagiaire' ? 'bg-gray-700' : ''
                        }`}
                    >
                        Stagiaire
                    </button>
                    </nav>
                </div>

                {/* Main content */}
                <div className="w-3/4 bg-gray-100 p-8">
                    <h2 className="text-2xl mb-4">{formTitles[selectedOption]}</h2>
                    <p className="mb-6">{formDescriptions[selectedOption]}</p>
                    <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Noms</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Prenom</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Genre</label>
                        <div className="flex space-x-4">
                        <label className="flex items-center">
                            <input type="radio" name="gender" value="female" className="mr-2" />
                            Femme
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="gender" value="male" className="mr-2" />
                            Homme
                        </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700">Choix de l'indice du pays</label>
                        <select className="w-full p-2 border rounded">
                        <option>Gabon</option>
                        <option>Cameroun</option>
                        <option>Tchad</option>
                        <option>Cote D'ivoire</option>
                        {/* Ajoutez d'autres options de pays ici */}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Numéro de téléphone</label>
                        <input type="tel" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Description</label>
                        <textarea className="w-full p-2 border rounded"></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700">Ajout des médias</label>
                        <input type="file" className="w-full p-2 border rounded" />
                    </div>
                    <div className="flex justify-between">
                        <button type="reset" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Effacez</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Envoyez</button>
                    </div>
                    </form>
                </div>
            </div>
            
        </>
    );
}

export default Recrutements;
