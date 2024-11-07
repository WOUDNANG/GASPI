import React from "react";
import { Link } from "react-router-dom";

function SpecialLink({ sublinks, name }) {
  return (
    <div className="relative group">
      <button className="uppercase text-black px-4 py-3 focus:outline-none">
        {name}
      </button>
      <div
        className="absolute left-0 mt-1 w-56 bg-purple-900 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {sublinks.map((l, i) => (
          <Link
            key={i}
            to={`/${name}/${l.toLowerCase()}`}
            className="block px-4 py-2 hover:bg-purple-700"
          >
            {l}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialLink;
