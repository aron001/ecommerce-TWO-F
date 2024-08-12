import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import hululogoo from "../../../Assets/hululogoo.png";

import {
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const ProductCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-[325px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
      <Link to={`/detail/${data.id}`}>
        <img
          src={hululogoo}
          alt={data.name}
          className="w-full h-[170px] object-contain"
        />
      </Link>
      <Link to={`/detail/${data.id}`}>
        <h4 className="pb-3 font-medium text-gray-600">
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>
      </Link>
      <Link to={`/detail/${data.id}`}>
        <div className="flex">
          <AiFillStar className="mr-1 cursor-pointer" color="#000000" size={13} />
          <AiFillStar className="mr-1 cursor-pointer" color="#000000" size={13} />
          <AiFillStar className="mr-1 cursor-pointer" color="#000000" size={13} />
          <AiFillStar className="mr-1 cursor-pointer" color="#000000" size={13} />
          <AiOutlineStar className="mr-1 cursor-pointer" color="#000000" size={13} />
        </div>
        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              USD {data.price === 0 ? data.price : data.discount_price}$
            </h5>
          </div>
        </div>
      </Link>
      <div>
        {open && <ProductDetailsCard setOpen={setOpen} data={data} />}
      </div>
      <h5 className="text-gray-600">{data.shop.name}</h5>
    </div>
  );
};

export default ProductCard;
