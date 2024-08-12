import React from "react";
import { AiFillStar } from "react-icons/ai";
import hululogooo from "../../../Assets/hululogooo.png"; // Replace with the correct path to your image

// CustomCard Component
const BestDeals = () => {
  return (
    <div className="w-3/4 ml-10 rounded-lg shadow-sm p-6 mb-6 flex" style={{ height: '200px' }}>
      {/* Image on the left side */}
      <img
        src={hululogooo}
        alt="Product"
        className="w-1/3 h-full object-contain rounded-lg "
      />

      {/* Content on the right side */}
      <div className="flex flex-col justify-between w-2/3">
        {/* Star icon */}
        <AiFillStar color="#FFD700" size={30} className="mb-2" />

        {/* Description */}
        <p className="text-gray-700 mb-3 text-lg">
          Product description goes here. Product description goes here. Product description goes here. Product description goes here.
        </p>

        {/* Price */}
        <h5 className="text-gray-600 font-semibold mb-3 text-xl">
          USD 50$
        </h5>

        {/* "Shop Item" button */}
        <button className="py-1 px-2 text-sm border border-black text-black rounded-lg transition hover:bg-gray-100 max-w-max">
          Shop Item
        </button>
      </div>
    </div>
  );
};

export default BestDeals;
