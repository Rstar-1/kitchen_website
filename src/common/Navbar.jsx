import React from "react";
import Container from "../utility/Container";

const Navbar = () => {
  return (
    <Container version="v0" className="bg-white">
      <div className="bg-warning flex items-center gap-12 py-5 px-20">
        <p className="text-gray small-text">+91-9867264193</p>
        <p className="text-gray small-text">mayur.computers2012@gmail.com</p>
      </div>
      <div className="flex items-center justify-between py-8 px-20">
        <img
          src="https://image1.jdomni.in/storeLogo/11012020/86/08/D1/E224BC336DAF85A7C455301446_1578736750581.png?output-format=webp"
          className="object-cover flex"
          style={{ height: "50px" }}
        />
        <div className="flex items-center">
          <p className="para-text text-gray font-500 mx-14">Home</p>
          <p className="para-text text-gray font-500 mx-14">Products</p>
          <p className="para-text text-gray font-500 mx-14">Category</p>
          <p className="para-text text-gray font-500 mx-14">Connect</p>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
