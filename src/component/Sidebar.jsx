import React from "react";
import { Link } from "react-router-dom";

const beautyBrands = [ "Maybelline", "Rare Beauty", "Glossier"];

const Sidebar = () => {
  return (
    <div className="w-full bg-black text-white p-4 shadow-lg">
      <div className="overflow-x-auto whitespace-nowrap">
        <ul className="flex justify-between space-x-10">
          {beautyBrands.map((brand, index) => (
            <li key={index} className="font-bold text-xl hover:text-pink-400 transition-colors duration-200 cursor-pointer">
              <Link to="/Products">
  {brand}
</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
