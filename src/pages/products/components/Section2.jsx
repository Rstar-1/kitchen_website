import React from "react";
import Container from "../../../utility/Container";
import Pagination from "../../../utility/Pagination";
import product from "../../../api/Product.json";

const Section2 = () => {
 const products = product || [];

  const itemsPerPage = 9;
  const categories = [...new Set(products?.map((p) => p.category.title))];
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(0);

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
    ?.filter((item) => item?.title?.toLowerCase()?.includes(search?.toLowerCase()));

  const pageCount = Math.ceil(filteredProducts?.length / itemsPerPage);
  const currentItems = filteredProducts?.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Container version="v2" className="bg-white">
      <div className="w-full py-30 flex md-flex sm-block items-start gap-12">
        <div className="w-20 md-w-25 sm-w-full p-14 border-forth rounded-5">
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
        <div className="w-80 md-w-75 sm-w-full">
          <input
            placeholder="Search..."
            className="border-forth rounded-5 w-60 h-input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(0);
            }}
          />

          <div className="w-full grid-cols-3 gap-12 mt-16">
            {currentItems.map((item, index) => (
              <div key={index} className="bg-forth p-10 rounded-5">
                <img
                  src={item.img}
                  className="w-full h-250 object-contain bg-white rounded-5"
                  alt={item.title}
                />
                <div className="mt-10 px-5">
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
