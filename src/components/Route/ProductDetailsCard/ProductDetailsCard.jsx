import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "../../../styles/styles";
import Untitled2 from "../../../Assets/Untitled2.jpeg";

const ProductDetailsCard = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Section: Image */}
      <div className="w-full md:w-2/3 h-1/2 md:h-full flex flex-col justify-center items-center md:ml-5 md:mr-5">
        <div className="w-full h-full">
          <img
            src={Untitled2}
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full text-center mt-2">
          <h3 className={`${styles.productTitle} text-xl md:text-2xl`}>
            Kit
          </h3>
          <div className="flex justify-center mt-1">
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiOutlineStar className="text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full md:w-1/3 h-auto flex flex-col justify-start p-4 md:p-6">
        <Link to='/'>
          <RxCross1
            size={30}
            className="absolute right-4 top-4 md:right-10 md:top-10 cursor-pointer"
          />
        </Link>
        <h1 className={`${styles.productTitle} text-2xl md:text-3xl mt-5`}>
          USD 5000$
        </h1>
        <p className="text-base md:text-lg mb-5">
          This is an extended description of the product. It provides more details about the features, benefits, and usage of the product.
        </p>

        <div className="flex items-center mb-5">
          <p className="text-base md:text-lg">Dream Class Name</p>
          <div className="flex mt-1 ml-1">
            <AiFillStar className="mr-1 cursor-pointer" color="#000000" size={13} />
            <AiFillStar className="mr-1 cursor-pointer" color="#000000" size={13} />
            <AiFillStar className="mr-1 cursor-pointer" color="#000000" size={13} />
            <AiFillStar className="mr-1 cursor-pointer" color="#000000" size={13} />
            <AiOutlineStar className="mr-1 cursor-pointer" color="#000000" size={13} />
          </div>
        </div>
        
        <p className="mt-3 text-base md:text-lg">Return Dream Class Name</p>

        <div className="mt-6 rounded-md h-12 md:h-14 flex items-center justify-center text-base md:text-lg">
          <button className="w-full bg-black text-white rounded-md h-full">
            <span className="flex items-center justify-center">
              Add to cart
            </span>
          </button>
        </div>

        {/* Additional Details */}
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Item Details</h3>
          <ul className="list-disc pl-5 text-base md:text-lg">
            <li>Material: 100% Cotton</li>
            <li>Color: Black</li>
            <li>Size: Large</li>
            <li>Weight: 500g</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">About This Item</h3>
          <p className="text-base md:text-lg">
            This product is made from high-quality materials, designed to provide comfort and durability. Perfect for everyday use, it combines style with practicality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
