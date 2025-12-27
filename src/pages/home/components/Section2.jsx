import React from "react";
import { NavLink } from "react-router-dom";
import useFadeReveal from "../../../utility/Fade";
import Container from "../../../utility/Container";
import product from "../../../api/Product.json";

const Section2 = ({ herocat = true }) => {
  const products = product || [];
  const catToRef = useFadeReveal({ delay: 100, y: 30 });

  const uniqueCategories = [
    ...new Map(products?.map((p) => [p.category.title, p.category])).values(),
  ];
  const displayList = herocat ? uniqueCategories.slice(0, 5) : uniqueCategories;

  const FeaturedGrid = ({ list }) => (
    <div
      className={`${
        herocat ? "grid-cols-5" : "grid-cols-4"
      } w-full md-grid-cols-2 sm-grid-cols-2 gap-12 mt-20`}
    >
      {list?.map((item, index) => (
        <NavLink to="/product" key={index}>
          <div className="sm-mb-14" ref={catToRef}>
            <img
              src={item.img}
              className={`${
                herocat ? "h-200" : "h-300"
              } w-full sm-h-150 object-contain flex rounded-5`}
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
      <div className="w-full py-50 sm-py-40 bordb">
        <div className="px-15 sm-px-5">
          <p className="text-gray midpara-text">Category</p>
          <h4 className="head-text text-darkk font-500 pt-8">Products</h4>
          <FeaturedGrid list={displayList} />
        </div>
      </div>
    </Container>
  );
};

export default Section2;
