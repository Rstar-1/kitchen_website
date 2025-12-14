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
        title="Connect Us"
        description="We’re here to help! Whether you have questions, need support, or want more information about our products and services, reach out to us today. Our team is ready to assist you promptly."
        widthClass="w-70"
      />
      <Section2 addToRef={addToRef} />
      <Section3 addToRef={addToRef} />
    </>
  );
}

export default Connect
