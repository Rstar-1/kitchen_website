import React from "react";
import Banner from "../../components/Banner";
import Section2 from "./components/Section2";

const Overview = () => {
  return (
    <>
      <Banner
        title="Category"
        description="Bring your documents and photos to life. Vibrant colors, deep blacks, and flawless print clarity."
        widthClass="w-50"
      />
      <Section2 />
    </>
  );
};

export default Overview;
