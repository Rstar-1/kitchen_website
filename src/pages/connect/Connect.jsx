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
        title="Connect With Ashmita Enterprises"
        description="Get in touch with Ashmita Enterprises, a leading importer, wholesaler, trader, and retailer of PVC strip curtains, rolls, sheets, films, and mounting brackets."
        widthClass="w-70"
      />
      <Section2 addToRef={addToRef} />
      <Section3 addToRef={addToRef} />
    </>
  );
}

export default Connect
