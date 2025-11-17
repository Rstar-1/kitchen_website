import React, { useState } from "react";

const Pagination = ({
  pageCount,
  onPageChange,
  forcePage = 0,
  breakLabel = "...",
  nextLabel = ">",
  previousLabel = "<",
}) => {
  const [expanded, setExpanded] = useState(false);

  const pages = (() => {
    if (pageCount <= 3 || expanded) {
      return [...Array(pageCount).keys()];
    }
    return [0, 1, breakLabel, pageCount - 1];
  })();

  const handleBreakClick = () => setExpanded(true);

  return (
    <div className="flex gap-6 justify-end items-center mt-12 pagination">
      <button
        onClick={() => onPageChange({ selected: forcePage - 1 })}
        disabled={forcePage === 0}
        className="center-div border-0 rounded-full bg-forth cursor-pointer para-text"
      >
        {previousLabel}
      </button>
      {pages.map((p, i) =>
        p === breakLabel ? (
          <span
            key={`break-${i}`}
            onClick={handleBreakClick}
            className="px-2 select-none cursor-pointer"
            title="Show all pages"
          >
            {breakLabel}
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange({ selected: p })}
            className={`center-div border-0 rounded-full cursor-pointer small-text ${
              p === forcePage ? "bg-primary text-white" : "bg-forth text-dark"
            }`}
          >
            {p + 1}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange({ selected: forcePage + 1 })}
        disabled={forcePage === pageCount - 1}
        className="center-div border-0 rounded-full bg-forth cursor-pointer para-text"
      >
        {nextLabel}
      </button>
    </div>
  );
};

export default Pagination;
