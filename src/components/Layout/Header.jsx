import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { productData } from "../../static/data";
import Navbar from "./Navbar.jsx";
import styles from "../../styles/styles";

function Header({ activeHeading }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="flex items-center justify-between p-4 bg-white shadow-md">
          <Link to="/">
            <h2 className="text-orange-500 font-normal text-3xl">Etsy</h2>
          </Link>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#000000] border-[2px] rounded-2xl"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer text-orange-500"
            />
            {searchData && searchData.length !== 0 && (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm z-[9] p-4">
                {searchData.map((i, index) => {
                  const d = i.name;
                  const Product_name = d.replace(/\s+/g, "-");
                  return (
                    <Link to={`/product/${Product_name}`} key={index}>
                      <div className="w-full flex items-start py-3">
                        <img
                          src={i.image_Url[0]?.url}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <div className='flex gap-3 items-center'>
            <Link to="/">
              <h1 className="flex">Signin</h1>
            </Link>
            <AiOutlineHeart className="cursor-pointer" color="#000000" size={23} />
            <AiOutlineShoppingCart className="cursor-pointer" color="#000000" size={23} />
          </div>
        </div>
        <div className={`${styles.section} ${isScrolled ? 'bg-white shadow-md' : ''}`}>
          <Navbar active={activeHeading} />
        </div>
      </div>
    </>
  );
}

export default Header;
