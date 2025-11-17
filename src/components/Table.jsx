import React from "react";
import Generic from "../api/Generic.json";

const Table = ({
  bg = "primary",
  color = "white",
  border = "forth",
  textalign = "left",
  header = [],
  arraydata = [],
  onOpenModal,
}) => {
  const { colorMap } = Generic;

  const getValue = (v) =>
    Array.isArray(v)
      ? v
      : typeof v === "boolean"
      ? v
        ? "Active"
        : "Inactive"
      : v || "--";

  const cellClass = (v) =>
    typeof v === "boolean"
      ? `${
          v ? "bg-success px-16" : "bg-danger px-11"
        } py-3 rounded-20 w-max mx-auto text-white`
      : "text-gray";

  return (
    <div className="table-w">
      <table className="table">
        <thead>
          <tr style={{ border: `1px solid ${colorMap[border]}` }}>
            {header.map((heads, index) =>
              heads.feilds !== "actions" ? (
                <th
                  key={index}
                  className="py-10 px-12 border-0"
                  style={{
                    background: colorMap[bg],
                    color: colorMap[color],
                    border: `1px solid ${colorMap[border]}`,
                    minWidth: "120px",
                  }}
                >
                  <p
                    className={`small-text text-${
                      heads.name === "Status" ? "center" : textalign
                    }`}
                  >
                    {heads.name}
                  </p>
                </th>
              ) : (
                <th
                  key={index}
                  className="py-10 px-12 border-0 sticky top-0 right-0 bg-gray text-white"
                  style={{ minWidth: "50px" }}
                >
                  <p className="small-text text-center">Actions</p>
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {arraydata.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {header.map((head, headIndex) => {
                const key = head.feilds?.toLowerCase();
                const v = row[key];
                const val = getValue(v);

                return head.feilds !== "actions" ? (
                  <td
                    key={headIndex}
                    className={`py-8 px-12 text-${textalign}`}
                    style={{
                      border: "1px solid #ececec",
                      minWidth: "120px",
                    }}
                  >
                    {Array.isArray(v) ? (
                      <div className="flex items-center flex-wrap gap-5">
                        {v.slice(0, 1).map((item, k) => (
                          <p
                            key={k}
                            className="px-14 py-3 mini-text bg-forth text-dark rounded-20"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className={`mini-text ${cellClass(v)}`}>{val}</p>
                    )}
                  </td>
                ) : (
                  <td
                    key={headIndex}
                    className="py-8 sticky top-0 right-0 bg-white"
                    style={{
                      border: "1px solid #ececec",
                      minWidth: "50px",
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="flex cursor-pointer text-center"
                        onClick={() => onOpenModal(row)} // ✅ FIXED HERE
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
