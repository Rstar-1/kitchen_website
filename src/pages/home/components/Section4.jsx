import React from "react";
import Container from "../../../utility/Container";

const Section4 = () => {
  return (
    <Container version="v0" className="bg-tertiary">
      <div className="w-full pt-60">
        <div className="flex sm-block px-30 pb-60">
          <div className="w-50 sm-w-full pr-20">
            <p className="text-gray midpara-text">Call To Action</p>
            <h4 className="large-text text-dark font-600 w-90 pt-10">
              Let's Bring Your Ideas to Life
            </h4>
            <p className="headpara-text text-gray w-90 mt-25">
              Scelerisque in dolor donec neque velit. Risus aenean integer
              elementum odio sed adipiscing. Sem id scelerisque nunc quis.
              Imperdiet nascetur consequat.
            </p>
          </div>
          <div className="w-50 sm-w-full pl-20">
            <div
              className="bg-secondary w-full h-450 relative overflow-hidden rounded-5"
              style={{
                backgroundImage:
                  'url("https://printshop.tokotema.com/wp-content/uploads/2023/08/Hero-Line-Bg.png")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                marginBottom: "-30%",
              }}
            >
              <img
                src="https://printshop.tokotema.com/wp-content/uploads/2023/08/Mockup-of-a-Smiling-Woman-Wearing-an-Embroidered-768x951.png"
                alt="arrow"
                className="w-full absolute top-0 right-0 h-600 object-contain flex"
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full pt-40 pb-60">
          <div className="flex px-30 items-center gap-12">
            <div>
              <h4 className="title-text text-dark font-500">Contact Us</h4>
              <p className="para-text text-gray mt-6">+91 987654321</p>
            </div>
            <div className="mx-20">
              <h4 className="title-text text-dark font-500">Email Us</h4>
              <p className="para-text text-gray mt-6">hi@printshop.com</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section4;
