import React from "react";


function Professionel({image}) {
  return (
    <div
      className="border-2 border-proj-yellow flex flex-col items-center rounded-xl
      bg-gray-500 gap-4 py-4 text-white ml-4"
    >
      <div className="rounded-full h-60 w-50">
        <img
          src={image}
          alt="professional"
          className="rounded-50% w-full h-full object-cover"
        />
      </div>
      <span></span>
      <span></span>
    </div>
  );
}

export default Professionel;






// import React from "react";
// import image from "../../../assets/images/photo.jpeg";
// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

// function Professionel() {
//   let options = {
//     autoplay: true,
//     rewind: true,
//     perPage: 3,
//   };
//   return (
//     <div
//       className="border-2 border-proj-yellow flex flex-col items-center rounded-xl
//      bg-gray-500 gap-4 py-4 text-white ml-4"
//     >
//       <div className="rounded-full h-20 w-20">
//         <img
//           src={image}
//           alt="professional"
//           className="rounded-10% object-cover"
//         />
//       </div>
//       <span>Ing Gregoire Luis</span>
//       <span>Quelques realisation effectue par le professionel</span>
//     </div>
//   );
// }

// export default Professionel;
