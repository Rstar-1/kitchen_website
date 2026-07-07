import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../utility/Container";

const Footer = () => {
  const footData = [
    { href: "/home", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/product", label: "Products" },
    { href: "/category", label: "Category" },
    { href: "/connect", label: "Connect" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
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
        <p className="text-center para-text text-white pt-25">
          © 2026 ASHMITA VINYLS PRIVATE LIMITED. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-8 pt-10">
          <a
            href="/GST_CERTIFICATE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 para-text"
            style={{ color: "var(--gray)", textDecoration: "none" }}
            title="Verify GST Certificate"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="var(--warning)"
              strokeWidth="2"
              fill="none"
              className="flex"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>GSTIN: 27AAVCA8630Q1ZO (GST Verified)</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
