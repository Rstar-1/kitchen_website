import React from "react";
import Container from "../../../utility/Container";
import useFadeReveal from "../../../utility/Fade";
import { NavLink } from "react-router-dom";

const Section2 = () => {
  const catToRef = useFadeReveal({ delay: 100, y: 30 });

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

  const FeaturedGrid = ({ list }) => (
    <div className="w-full grid-cols-5 md-grid-cols-2 sm-grid-cols-2 gap-12 mt-20">
      {list.map((item, index) => (
        <div key={index}>
          <div className="sm-mb-14" ref={catToRef}>
            <img
              src={item.img}
              className="w-full h-200 sm-h-150 object-cover flex rounded-5 bg-white"
              alt={item.title}
            />
            <p className="para-text text-gray font-500 mt-10 sm-mt-12 px-1">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Container version="v3" className="bg-white">
      <div className="w-full py-50 sm-py-40 bordb">
        <div className="px-15 sm-px-5">
          <p className="text-gray midpara-text">Category</p>
          <h4 className="head-text text-darkk font-500 pt-8">Products</h4>
          <FeaturedGrid list={laserToner} />
        </div>
      </div>
    </Container>
  );
};

export default Section2;
