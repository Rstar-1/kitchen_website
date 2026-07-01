import React from "react";
import useFadeReveal from "../../utility/Fade";
import Banner from "../../components/Banner";
import Section3 from "../home/components/Section3";
import Section6 from "../home/components/Section6";
import Section5 from "../home/components/Section5";

const About = () => {
  const addToRef = useFadeReveal({ delay: 20, y: 30 });
  return (
    <>
      <Banner
        title="About Ashmita Enterprises"
        description="Ashmita Enterprises is a leading importer, wholesaler, trader, and retailer of PVC strip curtains, rolls, sheets, films, mounting brackets, and cold storage curtains in Mumbai, serving commercial, cold storage, and retail clients across India."
        widthClass="w-70"
      />
      <Section3 addToRef={addToRef} />
      <Section5 addToRef={addToRef} />
      <Section6 addToRef={addToRef} />
    </>
  );
};

export default About;
