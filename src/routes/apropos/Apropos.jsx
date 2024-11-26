import Nav from "../../globals/Nav";
import Heading from "./Heading";
import nous from "../../assets/images/a propos/nous.jpeg";
import propos from "../../assets/images/a propos/propos.jpeg";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Apropos() {
  return (
    <>
      <div className="border-b-2 border-t-2 p-5 text-center text-xl font-bold" style={{marginTop:"9%", marginBottom:"2%", fontSize:"30px"}}>
        <p>Qui sommes nous ?</p>
      </div>
      {/* <Nav /> */}
      <div className="relative w-full h-[60vh] overflow-hidden flex justify-center items-center">
        <img
          src={nous}
          alt="background"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <h1 className="font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl" style={{ fontSize: "40px", textAlign: "center", transform: "translate(-50%, -50%)" }}>
                WAFRICATV : au de-là des idées recues
        </h1>
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <div className="relative p-6 rounded-xl">
          <div className="absolute -top-10 left-[50%] translate-x-[-50%] w-full max-w-4xl text-xl bg-white shadow-2xl">
            <div className="p-12 bg-[#ffffff] text-black rounded-xl">
              
                <div>
                  <div className="text-black text-xl mb-4 font-bold" style={{ fontSize: "1.5rem" }}>
                    <p>A L'ECOUTE DES BESOINS</p>
                  </div>
                  <div className="text-lg">
                    <p>
                      WAFRICA TV est un média de masse qui cherche à capter l'attention et à repondre aux questions de son public cible;elle propose des contenues varier, divertissants,informatifs et educatifs
                      en fonction des besoins et des gouts de ses spectateurs.l'ecoute du public est donc essentielle pour adapter,les programmes et la chaine mets en place des mecanismes de retour
                      (sondages,interacrions sur les reseaux sociaux) afin d'affiners ses offres et maintenir un lien constant avec son audience.
                    </p>
                    <p>
                      Que ce soit dans le domaine de l'éducation, de la santé, de la technologie, de la restauration
                      ou d'autres secteurs, WAFRICA TV s'efforce de créer des opportunités pour une participation active
                      et personnelle. Grâce à son modèle de franchise, WAFRICA TV offre la possibilité à un large public
                      de s'impliquer et de profiter des multiples avantages offerts par ses différents programmes.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-orange-400 text-white py-12" style={{marginTop:"20%"}}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center" style={{ marginBottom: "4%" }}> NOS objectifs</h2>
            <div className="" style={{marginLeft:"30%"}}>
              <div className="flex flex-column">
                <div className="mb-4" style={{marginRight:"1%"}}><FaInfoCircle size={30} color={"white"}/></div>
                <h3 className="text-xl font-semibold mb-2">fournir un programme de qualité qui informe et divertis son public</h3>
              </div>
              <div className="flex flex-column">
                <div className="mb-4" style={{marginRight:"1%"}}><FaInfoCircle size={30} color={"white"}/></div>
                <h3 className="text-xl font-semibold mb-2">propose un soutien éducatif pour tous</h3>
              </div>
              <div className="flex flex-column">
                <div className="mb-4" style={{marginRight:"1%"}}><FaInfoCircle size={30} color={"white"}/></div>
                <h3 className="text-xl font-semibold mb-2">organisation des campagnes de sensibilisation, des conférences</h3>
              </div>
              <div className="flex flex-column">
                <div className="mb-4" style={{marginRight:"1%"}}><FaInfoCircle size={30} color={"white"}/></div>
                <h3 className="text-xl font-semibold mb-2">Création des interfaces sociales interactives basées sur une certaine
                éthique</h3>
              </div>
              <div className="flex flex-column">
                <div className="mb-4" style={{marginRight:"1%"}}><FaInfoCircle size={30} color={"white"}/></div>
                <h3 className="text-xl font-semibold mb-2">Construire d'une marque forte, le devellopement d'une audience fidèle et la rentabilité économique tout en préservant sa réputation et sa responsabilité sociale</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24" style={{}}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-900" style={{ marginBottom: "" }}>ETHIQUE ET PROXIMITE</h2>
            <div className="text-black" style={{marginLeft:"10%", marginRight:"10%"}}>
              <div className="flex flex-column">
                <h3 className="text-lg font-semibold mb-2 text-justify">WAFRICA TV repose sur des principes de responsabilité de transparence et d'indépendance .fonctionne sous l'égide de plusieurs
                  documents internes régissant son activité. La société a mis en place des statuts, un règlement intérieur et une charte 
                  éthique pour encadrer ses opérations. En tant qu'entité affiliée à  International et agréée par le Comité de la 
                  charte et du don en confiance, wafrica tv se conforme à des normes strictes de gouvernance et de déontologie.</h3>
              </div><br/>
              <div className="flex flex-column">
                <h3 className="text-lg font-semibold mb-2 text-justify">Pour veiller au respect de ces principes, wafrica tv a institué un Comité d'audit, 
                  de gouvernance et d'éthique, présidé par un membre externe à l'entreprise. Les organes de gouvernance tels que le conseil 
                  d'administration et le comité d'audit, de gouvernance et d'éthique sont chargés de superviser la gestion et le développement 
                  de l'entreprise.</h3>
              </div><br/>
              <div className="flex flex-column">
                <h3 className="text-lg font-semibold mb-2 text-justify">Le conseil d'administration de wafrica tv , composé de 14 membres élus, élabore le règlement 
                  intérieur qui régit le fonctionnement de la société. Ce conseil est actuellement présidé par Monsieur..., élue pour un mandat 
                  de trois ans à partir du 18 juin 2021.</h3>
              </div><br/>
              <div className="flex flex-column">
                <h3 className="text-lg font-semibold mb-2 text-justify">Le Comité d'audit, de gouvernance et d'éthique, nommé par le conseil d'administration, 
                  formule des recommandations et des avis sur des questions de contrôle, de transparence financière, de gestion des risques et de 
                  gouvernance. Présidé par Dominique LEDOUBLE, ce comité est composé de huit membres élus.</h3>
              </div><br/>
            </div>
          </div>
        </section>

        <section className="bg-gray-500 w-full py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8">
              {/* Colonne 1 */}
              <div className="w-full sm:w-3/5 p-4">
                <div className="">
                  <h3 className="text-2xl text-white font-semibold mb-4" style={{marginBottom:"5%"}}>NOS DOMAINES D'INTERVENTIONS </h3>
                  <p className="text-white mb-4 text-justify">
                    <p></p><b>Services diversifiés</b>: offrant une gamme variée de services dans des secteurs tels que l'éducation, la santé, la technologie, la restauration et d'autres domaines.
                    <p></p><b>Accessibilité et engagement personnel</b> : permettant à chacun de s'impliquer et de bénéficier de multiples programmes au sein de la franchise.
                    <p></p><b>Éducation</b> : promouvant une éducation de qualité pour tous, en mettant l'accent sur l'égalité entre les genres.
                    <p></p><b>Santé</b> : fournissant des services de vaccination, des soins prénatals et postnatals, ainsi que des initiatives de lutte contre les maladies comme le paludisme.
                    <p></p><b>Hygiène et assainissement</b> : facilitant l'accès à l'eau potable, encourageant le lavage des mains et promouvant des installations sanitaires adéquates.
                    <p></p><b>Nutrition</b> : luttant contre la malnutrition, promouvant l'allaitement maternel et combattant les carences alimentaires.
                    <p></p><b>Protection</b> : intervenant contre le travail forcé, les mariages précoces, les violences sexuelles, la maltraitance et d'autres formes d'abus.
                    <p></p><b>Inclusion et égalité </b>: œuvrant pour l'inclusion des enfants handicapés et l'élimination de la discrimination.
                    <p></p><b>Sensibilisation au changement climatique</b> : mettant en place des programmes de prévention et de sensibilisation aux effets du changement climatique.
                    <p></p><b>Interventions d'urgence </b>: fournissant une aide rapide lors de conflits, de catastrophes naturelles et d'épidémies.
                  </p>
                </div>
              </div>
              {/* Colonne 2 */}
              <div className="w-full sm:w-1/3 p-4">
                <div className="">
                  <h3 className="text-2xl text-white font-semibold mb-4" style={{marginBottom:"5%"}}>TRANSPARENCE FINANCIERE</h3>
                  <p className="text-white mb-4 text-justify">
                    WAFRICA TV  est accréditée par le label « Confiance en franchise ». Ce label, instauré en 1989, repose sur des valeurs 
                    de transparence, d'efficacité, d'intégrité et de respect envers les donateurs. Renouvelé tous les trois ans, il fait l'objet 
                    d'une vérification annuelle par une équipe de bénévoles compétents pour garantir le respect des bonnes pratiques, de la déontologie 
                    et de l'éthique au sein de Gaspi France.

                    Afin d'assurer une transparence financière exemplaire et d'améliorer l'efficacité de ses actions, wafrica tv met en place 
                    plusieurs mécanismes de contrôle, à la fois internes et externes, conformément aux normes de Gaspi International.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full bg-white py-8" style={{ marginTop: '3%', paddingLeft:'20%' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <img src={propos} alt="New Section Image" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 h-full flex flex-col justify-center bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-bold mb-3" style={{ fontSize: "27px"}}>SE MOBILISER AU PRES DE WAFRICA TV</h2><br/><br/>
              <p className="text-sm mb-4" style={{ fontSize: "20px"}}>En vous enregistrent, vous nous permettez d’agir sur votre entourage de facon expliciteet aussi sur le monde qui vous entourent.</p><br/><br/>
              <div className="flex space-x-3">
                <Link to="/recrutements">
                <button className="bg-orange-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">s'enregistrez et participer</button><br/><br/>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Apropos;
