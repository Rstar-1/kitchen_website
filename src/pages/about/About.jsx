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
        title="About Wadhumal & Sons"
        description="Established in 1951, Wadhumal & Sons is a pioneer in manufacturing PVC coated tarpaulins, transparent sheeting, table covers, strip curtains, synthetic leather, and wall panels in Mumbai, serving clients across India and exporting to UAE, USA, and Bangladesh."
        widthClass="w-70"
      />
      <Section3 addToRef={addToRef} />
      <Section5 addToRef={addToRef} />
      <Section6 addToRef={addToRef} />
    </>
  );
};

export default About;
