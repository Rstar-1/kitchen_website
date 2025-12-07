import React from "react";
import Container from "../../../utility/Container";
import products from "../../../api/Product.json";

const Section2 = () => {
  const categories = Array.from(
    new Map(products.map((p) => [p.category.title, p.category])).values()
  );

  const CategoryGrid = ({ list }) => (
    <div className="py-10 bordb">
      <div className="w-full grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12">
        {list.map((item, index) => (
          <div key={index}>
            <div className="bg-forth rounded-5 p-10">
              <img
                src={item.img}
                className="w-full h-200 object-contain flex rounded-5 bg-white"
                alt={item.title}
              />
            </div>
            <p className="para-text text-gray font-400 mt-12 sm-mt-10 px-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Container version="v2" className="bg-white">
      <div className="w-full py-30">
        <CategoryGrid list={categories} />
      </div>
    </Container>
  );
};

export default Section2;
