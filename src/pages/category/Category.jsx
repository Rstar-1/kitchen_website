import React from "react";
import useFadeReveal from "../../utility/Fade";
import Banner from "../../components/Banner";
import Section2 from "../home/components/Section2";
import Section4 from "../home/components/Section4";
import Section6 from "../home/components/Section6";

const Overview = () => {
  const addToRef = useFadeReveal({ delay: 20, y: 30 });
  return (
    <>
      <Banner
        title="Category"
        description="Bring your documents and photos to life. Vibrant colors, deep blacks, and flawless print clarity."
        widthClass="w-50"
      />
      <Section2 herocat={false} />
      <Section6 quantity={false} addToRef={addToRef} />
      <Section4 addToRef={addToRef} />
    </>
  );
};

export default Overview;
