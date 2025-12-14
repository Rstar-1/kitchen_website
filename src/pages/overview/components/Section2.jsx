import React from "react";
import useFadeReveal from "../../../utility/Fade";
import Container from "../../../utility/Container";
import { NavLink } from "react-router-dom";

const Section2 = () => {
  const simiToRef = useFadeReveal({ delay: 150, y: 30 });
  const laserToner = [
    {
      img: "https://printshop.tokotema.com/wp-content/uploads/2023/08/T-shirt-Mockup.jpg",
      title: "Samsung Cartridge ⟶",
    },
    {
      img: "https://printshop.tokotema.com/wp-content/uploads/2023/08/Business-Card-Mockup-White.jpg",
      title: "HP Cartridge ⟶",
    },
    {
      img: "https://printshop.tokotema.com/wp-content/uploads/2023/08/Post-Card-Mockup.jpg",
      title: "Canon Cartridge ⟶",
    },
    {
      img: "https://printshop.tokotema.com/wp-content/uploads/2023/08/Bucket-Hat-Mockups.jpg",
      title: "Brother Cartridge ⟶",
    },
    {
      img: "https://printshop.tokotema.com/wp-content/uploads/2023/08/Bend-Sticker-Mockup.jpg",
      title: "Canon Cartridge ⟶",
    },
  ];

  const DetailsGrid = ({ list }) => (
    <div className="w-full grid-cols-5 md-grid-cols-2 sm-grid-cols-2 gap-12 mt-20">
      {list.map((item, index) => (
        <NavLink to="/product" key={index}>
          <div className="sm-mb-14" ref={simiToRef}>
            <img
              src={item.img}
              className="w-full h-200 sm-h-150 object-cover flex rounded-5 bg-white"
              alt={item.title}
            />
            <p className="para-text text-gray font-500 mt-10 sm-mt-12 px-1">
              {item.title}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );

  return (
    <Container version="v3" className="bg-tertiary">
      <div className="w-full py-40 sm-py-30 bordb">
        <div className="px-15 sm-px-5">
          <h4 className="head-text text-darkk font-500" ref={simiToRef}>
            Similar Products
          </h4>
          <DetailsGrid title="Similar Products" list={laserToner} />
        </div>
      </div>
    </Container>
  );
};

export default Section2;
