import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../../utility/Container";
import Pagination from "../../../utility/Pagination";
import product from "../../../api/Product.json";

const Section2 = () => {
  const products = product || [];

  const navigate = useNavigate();
  const itemsPerPage = 15;
  const categories = [...new Set(products?.map((p) => p.category.title))];
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(0);
  const [showCategories, setShowCategories] = React.useState(false);

  const handleCategory = (cat) => {
    setCurrentPage(0); // Reset page on filter
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };
  const filteredProducts = products
    ?.filter(
      (item) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category.title)
    )
    ?.filter((item) =>
      item?.title?.toLowerCase()?.includes(search?.toLowerCase())
    );

  const pageCount = Math.ceil(filteredProducts?.length / itemsPerPage);
  const currentItems = filteredProducts?.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const handleProductClick = (product) => {
    navigate("/product-detail", { state: { product } });
  };

  return (
    <Container version="v2" className="bg-white">
      <div className="w-full py-30 flex md-flex sm-block items-start gap-12">
        <div className="w-20 md-w-25 sm-hidden p-14 border-forth rounded-5">
          <p className="para-text bordb pb-10">Filter By Category</p>
          <div className="mt-12 grid-cols-1 gap-12">
            {categories.map((cat) => (
              <div
                key={cat}
                className="flex items-center gap-8 mt-5 cursor-pointer"
                onClick={() => handleCategory(cat)}
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategory(cat)}
                  onClick={(e) => e.stopPropagation()}
                />
                <p className="small-text text-gray">{cat}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-end hidden sm-flex w-full">
          <div onClick={() => setShowCategories(!showCategories)}>
            {showCategories ? (
              <svg
                viewBox="0 0 26 26"
                width="26"
                height="26"
                stroke="gray"
                strokeWidth="2"
                fill="none"
                className="cursor-pointer"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="gray"
                strokeWidth="2"
                fill="none"
                className="flex cursor-pointer"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
            )}
          </div>
        </div>
        {showCategories && (
          <div className="mt-4 border-forth rounded-5 w-full bg-white hidden sm-flex">
            <div className="p-8">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className="flex items-center gap-8 mt-8 cursor-pointer"
                  onClick={() => handleCategory(cat)}
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategory(cat)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <p className="small-text text-gray">{cat}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-80 md-w-75 sm-w-full sm-mt-10">
          <div className="relative w-60 md-w-80 sm-w-full">
            <input
              placeholder="Search..."
              className="border-forth rounded-5 w-full h-input"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(0);
              }}
            />
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="var(--gray)"
              strokeWidth="2"
              fill="none"
              className="flex absolute top-0 minus-right-1 my-10 px-6 bg-white"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div className="w-full grid-cols-3 md-grid-cols-2 sm-grid-cols-2 gap-12 mt-16">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer mb-10"
                onClick={() => handleProductClick(item)}
              >
                <div className="bg-tertiary">
                  <img
                    src={item.img}
                    className="w-full h-300 sm-h-200 object-contain flex"
                    style={{ background: item?.color }}
                    alt={item.title}
                  />
                </div>
                <div className="mt-10 px-1">
                  <p className="para-text text-dark font-500">{item.title}</p>
                  <p className="small-text text-gray mt-5">
                    Category:{" "}
                    <span className="font-600">{item.category.title}</span>
                  </p>
                  <p className="small-text text-gray mt-5">
                    Price: <span className="font-600">₹{item.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            pageCount={pageCount}
            forcePage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </Container>
  );
};

export default Section2;
