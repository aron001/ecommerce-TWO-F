import React from "react";
import hululogoo from "../../../Assets/hululogoo.png";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "../../../styles/styles";

const ProductDetailsCard = () => {
  return (
    <div className="bg-[#fff] w-full h-screen flex">
      {/* Left Section: Image */}
      <div className="w-[60%] h-full ml-[5%] flex flex-col justify-center items-center">
        <div className="w-full h-[70%]">
          <img
            src={hululogoo}
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full text-center mt-2">
          <h3 className={`${styles.productTitle} text-[24px]`}>
            kit
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
      <div className="w-[40%] h-full flex flex-col justify-start p-10">
        <RxCross1
          size={30}
          className="absolute right-10 top-10 cursor-pointer"
        />

        <h1 className={`${styles.productTitle} text-[30px] mt-5`}>
          USD 5000$
        </h1>
        <p className="text-[16px] mb-5">
          This is an extended description of the product. It provides more details about the features, benefits, and usage of the product.
          It provides more detailsbenefits, and usage of the product.
        </p>

        <div className="flex items-center mb-5">
          <p className="">dream classname</p>
          <div className="flex mt-1 ml-1">
            <AiFillStar
              className="mr-1 cursor-pointer"
              color="#000000"
              size={13}
            />
            <AiFillStar
              className="mr-1 cursor-pointer"
              color="#000000"
              size={13}
            />
            <AiFillStar
              className="mr-1 cursor-pointer"
              color="#000000"
              size={13}
            />
            <AiFillStar
              className="mr-1 cursor-pointer"
              color="#000000"
              size={13}
            />
            <AiOutlineStar
              className="mr-1 cursor-pointer"
              color="#000000"
              size={13}
            />
          </div>
        </div>
        
        <p className="mt-3">return dreamdream classname classname</p>

        <div
          className="mt-6 rounded-[4px] h-14 flex items-center justify-center text-[18px]"
        >
          <button className="w-full bg-black text-white rounded-[4px] h-full">
            <span className="flex items-center justify-center">
              Add to cart
            </span>
          </button>
        </div>

        {/* Additional Details */}
        <div className="mt-2">
          <h3 className="text-[20px] font-semibold mb-3">Item Details</h3>
          <ul className="list-disc pl-5">
            <li>Material: 100% Cotton</li>
            <li>Color: Black</li>
            <li>Size: Large</li>
            <li>Weight: 500g</li>
          </ul>
        </div>

        <div className="mt-3">
          <h3 className="text-[20px] font-semibold mb-3">About This Item</h3>
          <p>
            This product is made from high-quality materials, designed to provide comfort and durability. Perfect for everyday use, it combines style with practicality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
