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
        title="About Us"
        description="Discover high-quality printing solutions and accessories designed to bring your documents and photos to life. Enjoy vibrant colors, deep blacks, and flawless print clarity with every product."
        widthClass="w-70"
      />
      <Section3 addToRef={addToRef} />
      <Section5 addToRef={addToRef} />
      <Section6 addToRef={addToRef} />
    </>
  );
};

export default About;
