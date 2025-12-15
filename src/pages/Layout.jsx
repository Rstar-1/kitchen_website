import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import what from "../assets/what.png";
import arrow from "../assets/arrow.png";

const Layout = () => {
  // const [isVisible, setIsVisible] = React.useState(false);
  // const toggleVisibility = () => {
  //   if (window.pageYOffset > 200) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  // React.useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  //   return () => {
  //     window.removeEventListener("scroll", toggleVisibility);
  //   };
  // }, []);

  const message = `Discover the best deals with Mayur Computers! 🛒✨`;
  const encodedMessage = encodeURIComponent(message);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const whatsappUrl = isMobile
    ? `whatsapp://send?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?text=${encodedMessage}`;

  const handleShare = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
      <div className="fixed bottom-0 right-0 mx-10 sm-mx-5">
        <div className="cursor-pointer bg-forth rounded-full mb-8">
          <img
            src={what}
            alt="what"
            className="up-box object-contain flex"
            onClick={handleShare}
          />
        </div>
        {/* {isVisible && (
          <div
            style={{ transition: "1s ease-in" }}
            className="mb-10 up-box bg-warning rounded-full flex items-center justify-center cursor-pointer"
            onClick={scrollToTop}
          >
            <img src={arrow} alt="arrow" className="up-img object-contain" />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Layout;
