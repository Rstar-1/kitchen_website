import React from "react";
import Banner from "../../components/Banner";
import Section2 from "./components/Section2";

const Products = () => {
  return (
    <>
      <Banner
        title="Explore Our Products"
        description="Discover high-quality printing solutions and accessories designed to bring your documents and photos to life. Enjoy vibrant colors, deep blacks, and flawless print clarity with every product."
        widthClass="w-70"
      />
      <Section2 />
    </>
  );
};

export default Products;
