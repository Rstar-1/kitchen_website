import React from "react";
import { NavLink } from "react-router-dom";
import useFadeReveal from "../../../utility/Fade";
import Container from "../../../utility/Container";
import product from "../../../api/Product.json";

const Section2 = () => {
  const products = product || [];
  const simiToRef = useFadeReveal({ delay: 150, y: 30 });

  const uniqueCategories = [
    ...new Map(products?.map((p) => [p?.category?.title, p?.category])).values(),
  ];
  const similarList = uniqueCategories?.slice(0, 5);

  const DetailsGrid = ({ list }) => (
    <div className="w-full grid-cols-5 md-grid-cols-2 sm-grid-cols-2 gap-12 mt-20">
      {list?.map((item, index) => (
        <NavLink to="/product" key={index}>
          <div className="sm-mb-14" ref={simiToRef}>
            <img
              src={item.img}
              className="w-full h-200 sm-h-150 object-contain flex rounded-5"
              style={{ background: item?.color }}
              alt={item.title}
            />
            <p className="para-text text-gray font-500 mt-10 sm-mt-12 px-1">
              {item.title} ⟶
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );

  return (
    <Container version="v3" className="bg-white">
      <div className="w-full py-40 sm-py-30">
        <div className="px-15 sm-px-5">
          <h4 className="head-text text-darkk font-500" ref={simiToRef}>
            Similar Products
          </h4>
          <DetailsGrid title="Similar Products" list={similarList} />
        </div>
      </div>
    </Container>
  );
};

export default Section2;
