// src/components/Property.jsx
import React from 'react';

function Property({ span, image }) {
  return (
    <div className={`group ${span}`}>
      <div className='group-hover:border-yellow-700 group-hover:border-2 cursor-pointer'>
        <img src={image} alt="property" className='w-full h-[25rem] object-cover' />
      </div>
      <span>Havre de paix au coeur de Yaounde</span>
    </div>
  );
}

export default Property;




// import React from 'react'
// import image from '../assets/images/photo.jpeg'


// function Property({span}) {
//   return (
//     <div className={`group ${span}`}>
//         <div className='group-hover:border-yellow-700 group-hover:border-2 cursor-pointer'>
//             <img src={image} alt="property" className='w-full h-[25rem] object-cover'/>
//         </div>
//         <span>Havre de paix au coeur de Yaounde</span>
//     </div>
//   )
// }

// export default Property