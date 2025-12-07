import React from "react";
import Container from "../../../utility/Container";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const product = state?.product;
  const [mainImg, setMainImg] = React.useState(product?.img);

  if (!product) return <p>Product not found!</p>;

  return (
    <Container version="v2" className="bg-white">
      <div className="w-full py-40 bordb">
        <div className="flex flex-wrap items-center gap-8 w-full">
          <p className="para-text cursor-pointer text-primary mt-3">Home</p>
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
          <p className="para-text text-primary mt-3">Product</p>
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
          <p className="para-text text-gray mt-3">{product?.category?.title}</p>
        </div>
        <div className="grid-cols-2 sm-grid-cols-1 gap-12 mt-26">
          <div className="w-full flex sm-block items-start gap-12">
            <div className="w-20 sm-w-full grid-cols-1 sm-flex gap-12">
              {product?.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className={`w-full h-100px object-contain flex rounded-5 cursor-pointer ${
                    mainImg === img ? "border-primary" : "border-forth"
                  } bg-white`}
                  alt={product?.title}
                  onClick={() => setMainImg(img)}
                />
              ))}
            </div>
            <div className="w-80 sm-w-full sm-mt-12">
              <img
                src={mainImg}
                className="w-full h-450 object-contain flex rounded-5 bg-white border-forth"
                alt={product?.title}
              />
            </div>
          </div>

          <div className="px-10 py-5">
            <p className="border-primary text-primary small-text font-400 w-max px-12 py-4 mb-20">
              {product?.stock} Stock
            </p>
            <h3 className="head-text text-dark font-600">{product?.title}</h3>
            <p className="para-text text-gray font-400 line-clamp2 mt-16">
              {product?.description}
            </p>
            <h3 className="title-text text-dark font-600 pt-30">
              {product?.priceRange}
            </h3>
            <div className="grid-cols-2 w-80 sm-w-full gap-12 mt-20 sm-mt-12">
              <button className="cursor-pointer w-full py-8 para-text font-400 text-white bg-primary border-0">
                Call Now
              </button>
              <button className="cursor-pointer w-full py-8 para-text font-400 text-primary border-primary">
                Message
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 w-90 sm-w-full grid-cols-2 sm-grid-cols-1 gap-12">
          {product?.specs?.map((item, index) => (
            <div className="flex w-full" key={index}>
              <div className="p-10 w-35 border-forth">
                <p className="small-text text-dark font-600">{item?.label}</p>
              </div>
              <div className="p-10 w-65 border-forth">
                <p className="small-text text-gray">{item?.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Details;