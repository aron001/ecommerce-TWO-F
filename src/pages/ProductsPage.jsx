import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { productData } from "../static/data";
import BestDeals from "../components/Route/BestDeals/BestDeals";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d = productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d = productData && productData.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, [categoryData]);

  return (
    <>
      <Header activeHeading={3} />
      <BestDeals />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-12">
          {data && data.map((i, index) => (
            <ProductCard data={i} key={index} />
          ))}
        </div>
        {data && data.length === 0 && (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
