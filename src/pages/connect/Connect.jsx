import React from 'react'
import useFadeReveal from "../../utility/Fade";
import Banner from '../../components/Banner'
import Section2 from './components/Section2'
import Section3 from './components/Section3';

const Connect = () => {
  const addToRef = useFadeReveal({ delay: 100, y: 30 });
  return (
    <>
      <Banner
        title="Connect With Ashmita Vinyls"
        description="Get in touch with Mumbai's trusted PVC product & fabric manufacturer. Contact us for product inquiries, catalogue requests, export detailing, or bulk pricing orders."
        widthClass="w-70"
      />
      <Section2 addToRef={addToRef} />
      <Section3 addToRef={addToRef} />
    </>
  );
}

export default Connect
