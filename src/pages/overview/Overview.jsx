import React from "react";
import useFadeReveal from "../../utility/Fade";
import Banner from "../../components/Banner";
import Details from "./components/Details";
import Section2 from "./components/Section2";
import Section4 from "../home/components/Section4";

const Overview = () => {
  const addToRef = useFadeReveal({ delay: 20, y: 30 });
  return (
    <>
      <Banner
        title="Product Details"
        description="Bring your documents and photos to life. Vibrant colors, deep blacks, and flawless print clarity."
        widthClass="w-50"
      />
      <Details />
      <Section2 />
      <Section4 addToRef={addToRef} />
    </>
  );
};

export default Overview;
