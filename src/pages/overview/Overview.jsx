import React from "react";
import Banner from "../../components/Banner";
import Details from "./components/Details";
import Section2 from "./components/Section2";
import Section4 from "../home/components/Section4";

const Overview = () => {
  return (
    <>
      <Banner
        title="Product Details"
        description="Bring your documents and photos to life. Vibrant colors, deep blacks, and flawless print clarity."
        widthClass="w-50"
      />
      <Details />
      <Section2 />
      <Section4 />
    </>
  );
};

export default Overview;
