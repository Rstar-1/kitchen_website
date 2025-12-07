import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../utility/Container";

const Footer = () => {
  const footData = [
    { href: "/about", label: "Home" },
    { href: "/expertise", label: "Products" },
    { href: "/project", label: "Category" },
    { href: "/connect", label: "Connect" },
  ];
  return (
    <Container version="v2" className="bg-dark">
      <div className="w-full py-30">
        <div className="flex sm-flex-wrap sm-justify-center items-center gap-12 py-25 bordb">
          {footData.map((e, index) => (
            <NavLink
              key={index}
              to={e?.href}
              className="font-400 text-white mx-12 para-text"
            >
              {e?.label}
            </NavLink>
          ))}
        </div>
        <p className="text-center para-text text-white capitalize pt-25">
          © Copyrights 2020 - 2021. Mayur Computers. All Rights Reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
