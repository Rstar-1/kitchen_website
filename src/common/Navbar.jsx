import React from "react";
import Container from "../utility/Container";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   const NavData = [
     { href: "/home", label: "Home" },
     { href: "/product", label: "Products" },
     { href: "/category", label: "Category" },
     { href: "/connect", label: "Connect" }
   ];
   const [sidebarshow, setsidebarshow] = React.useState(false);

  return (
    <Container version="v0" className="bg-white relative navbar">
      <div
        className={
          sidebarshow === true
            ? "fixed h-100 hidden md-block sm-block z-99 navview"
            : "fixed h-100 hidden md-block sm-block z-99 navhide"
        }
      >
        <div className="bg-white b-shadow w-full h-100 absolute right-0 top-0">
          <div className="bg-warning p-10 sm-p-16">
            <div className="flex items-center justify-end gap-4 pl-10 pr-10">
              <div onClick={() => setsidebarshow(false)}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="gray"
                  strokeWidth="2"
                  fill="none"
                  className="flex cursor-pointer"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-20">
            {NavData.map((item) => (
              <>
                <div className="px-20 mb-16" key={item?.label}>
                  <NavLink
                    to={item?.href}
                    activeClass="active"
                    className="text-gray flex items-center gap-8 cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="gray"
                      strokeWidth="2"
                      fill="none"
                      className="flex"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <p
                      className="my-0 ml-6 para-text"
                      onClick={() => setsidebarshow(false)}
                    >
                      {item?.label}
                    </p>
                  </NavLink>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-warning flex flex-wrap items-center py-5 px-20">
        <a href="tel:+919867264193" className="text-gray small-text mr-12">
          +91-9867264193
        </a>
        <a
          href="mailto:mayur.computers2012@gmail.com"
          className="text-gray small-text"
          aria-label="Send email to mayur.computers2012@gmail.com"
        >
          mayur.computers2012@gmail.com
        </a>
      </div>
      <div className="flex items-center justify-between py-8 px-20">
        <img
          src="https://image1.jdomni.in/storeLogo/11012020/86/08/D1/E224BC336DAF85A7C455301446_1578736750581.png?output-format=webp"
          className="object-cover flex"
          style={{ height: "50px" }}
        />
        <div className="flex sm-hidden items-center">
          {NavData.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              activeClass="active"
              className="para-text text-gray font-500 mx-14 cursor-pointer"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <svg
          viewBox="0 0 26 26"
          width="26"
          height="26"
          stroke="gray"
          strokeWidth="2"
          fill="none"
          className="cursor-pointer hidden sm-flex"
          onClick={() => setsidebarshow(true)}
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
    </Container>
  );
};

export default Navbar;
