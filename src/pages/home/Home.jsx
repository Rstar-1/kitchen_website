import React from "react";
import useFadeReveal from "../../utility/Fade";
import HeroBanner from "./components/HeroBanner";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

const Home = () => {
  const addToRef = useFadeReveal({ delay: 20, y: 30 });
  return (
    <>
      <HeroBanner />
      <Section2 addToRef={addToRef} />
      <Section3 addToRef={addToRef} />
      <Section5 addToRef={addToRef} />
      <Section6 addToRef={addToRef} />
      <Section4 addToRef={addToRef} />
    </>
  );
};

export default Home;
