import React from "react";
import Container from "../../utility/Container";
import Pagination from "../../utility/Pagination";
import Table from "../../components/Table";
import Feilds from "../../utility/Feilds";
import Filter from "../../utility/Filter";
import User from "../../api/User.json";
import Chart from "../../components/Chart";
import Generic from "../../api/Generic.json";
import Tabs from "../../utility/Tabs";

const TableStructure = ({ version = "v2" }) => {
  const { userhead } = Generic;

  // MODAL STATE
  const [modal, setModal] = React.useState({
    display: false,
    data: {},
    header: {},
  });
  const [openKeys, setOpenKeys] = React.useState({});

  // STATES
  const [currentpage, setCurrentPage] = React.useState(0);
  const [search, setSearch] = React.useState({});
  const [status, setStatus] = React.useState("All");
  const [multi, setMulti] = React.useState({});
  const [filtered, setFiltered] = React.useState(User);
  const [appliedFilters, setAppliedFilters] = React.useState([]);

  // Chart
  const months = [
    { title: "Jan", value: 5000 },
    { title: "Feb", value: 7000 },
    { title: "Mar", value: 7000 },
    { title: "Apr", value: 7600 },
    { title: "May", value: 3000 },
    { title: "Jun", value: 5000 },
    { title: "Jul", value: 9300 },
    { title: "Aug", value: 5800 },
    { title: "Sep", value: 9100 },
    { title: "Oct", value: 7800 },
    { title: "Nov", value: 4500 },
    { title: "Dec", value: 6100 },
  ];
  const ProgressData = [
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
  ];
  const ProgressData3 = [
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
  ];
  const ProgressData4 = [
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
  ];
  const tabList = ["Assending", "Desending"];

  // KEYS
  const excludeKeys = ["password"];
  const keys = Object.keys(User[0]).filter(
    (k) =>
      typeof User[0][k] !== "boolean" &&
      !Array.isArray(User[0][k]) &&
      !excludeKeys.includes(k)
  );

  const arrayKeys = Object.keys(User[0]).filter((k) =>
    Array.isArray(User[0][k])
  );

  // APPLY FILTERS
  const handleApply = () => {
    const result = Filter({
      data: User,
      search,
      multi,
      status,
      statusKey: "status",
    });

    setFiltered(result);
    setCurrentPage(0);

    const newFilters = [];

    if (status !== "All") newFilters.push({ key: "status", value: status });

    Object.entries(search).forEach(([k, v]) => {
      if (v?.trim()) newFilters.push({ key: k, value: v });
    });

    Object.entries(multi).forEach(([k, v]) => {
      if (v.length > 0) newFilters.push({ key: k, value: v.join(", ") });
    });

    setAppliedFilters(newFilters);
  };

  // REMOVE FILTER
  const removeFilter = (key) => {
    let updatedStatus = status;
    let updatedSearch = { ...search };
    let updatedMulti = { ...multi };

    if (key === "status") {
      updatedStatus = "All";
      setStatus("All");
    }

    if (updatedSearch[key] !== undefined) {
      updatedSearch[key] = "";
      setSearch(updatedSearch);
    }

    if (updatedMulti[key] !== undefined) {
      updatedMulti[key] = [];
      setMulti(updatedMulti);
    }

    const result = Filter({
      data: User,
      search: updatedSearch,
      multi: updatedMulti,
      status: updatedStatus,
      statusKey: "status",
    });

    setFiltered(result);
    setAppliedFilters((prev) => prev.filter((f) => f.key !== key));
  };

  // PAGINATION
  const itemsPerPage = 9;
  const pageCount = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice(
    currentpage * itemsPerPage,
    currentpage * itemsPerPage + itemsPerPage
  );

  const toggleCollapse = (key) => {
    setOpenKeys((prev) => {
      if (prev[key]) return {};
      return { [key]: true };
    });
  };

  // Tab Data
  function DataFlow() {
    return (
      <div className="grid-cols-1 gap-6">
        <div className="grid-cols-2 gap-8">
          <div className="bg-white rounded-5 flex items-center justify-center py-23">
            <Chart
              type="doughnut"
              label="Activity"
              value={65}
              color="primary"
              size={100}
            />
          </div>
          <div className="bg-white rounded-5 flex items-center justify-center py-23">
            <Chart
              type="doughnut"
              label="Response"
              value={65}
              color="primary"
              size={100}
            />
          </div>
        </div>
        <div className="bg-white p-10 rounded-5">
          <Chart type="heatmap" col={10} arraydata={ProgressData4} />
        </div>
      </div>
    );
  }

  return (
    <Container>
      <div className="w-full grid-cols-1 gap-8">
        <div className="flex items-start gap-8 w-full">
          <div className="w-65 grid-cols-1 gap-8">
            {version === "v4" && (
              <div className="grid-cols-2 gap-8">
                <div className="bg-white rounded-5 p-12">
                  <Chart label="Management" value={90} color="primary" />
                </div>
                <div className="bg-white rounded-5 p-12">
                  <Chart label="Management" value={90} color="warning" />
                </div>
              </div>
            )}
            {(version === "v1" || version === "v4" || version === "v5") && (
              <div className="bg-white rounded-5 p-10">
                <Table
                  header={userhead}
                  bg="primary"
                  color="white"
                  border="primary"
                  arraydata={currentItems}
                  onOpenModal={(row) => {
                    setModal({
                      display: true,
                      data: row,
                      header: {},
                    });
                    setOpenKeys({});
                  }}
                />
                <Pagination
                  pageCount={pageCount}
                  onPageChange={(e) => setCurrentPage(e.selected)}
                  forcePage={currentpage}
                />
              </div>
            )}
            {(version === "v2" || version === "v3") && (
              <div className="w-full bg-white rounded-5">
                <div className="flex items-center bordb">
                  <div className="w-60 pl-22">
                    <h5 className="head-text font-600 text-gray">
                      Yearly Position
                    </h5>
                    <p className="mini-text text-gray mt-2">
                      Only 1 Year Updates
                    </p>
                  </div>
                  <div className="w-40 grid-cols-2">
                    <div className="p-16 cursor-pointer bg-primary">
                      <p className="small-text text-white">Profit Gainer</p>
                      <h4 className="head-text text-white">43.8K</h4>
                    </div>
                    <div className="p-16 cursor-pointer">
                      <p className="small-text text-gray">Loss Taking</p>
                      <h4 className="head-text text-dark">24.3K</h4>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Chart
                    type="bar"
                    arraydata={months}
                    max={10000}
                    col={months?.length}
                    chartheight={280}
                  />
                </div>
              </div>
            )}
            {version === "v3" && (
              <div className="bg-white p-10 rounded-5">
                <Chart type="heatmap" col={20} arraydata={ProgressData3} />
              </div>
            )}
          </div>
          <div className="w-35 grid-cols-1 gap-8">
            {version === "v1" && (
              <>
                {appliedFilters.length > 0 && (
                  <div className="flex flex-wrap items-center gap-6">
                    {appliedFilters.map(({ key, value }) => {
                      const words = String(value).trim().split(/\s+/);
                      const displayValue =
                        words.length > 2
                          ? `${words[0]} ${words[1]} +${words.length - 2}`
                          : value;

                      return (
                        <div
                          key={key}
                          className="px-10 py-6 rounded-20 bg-white flex items-center gap-6"
                        >
                          <p className="small-text text-dark font-600 capitalize">
                            {key} :
                            <span className="text-gray mini-text ml-2">
                              {displayValue}
                            </span>
                          </p>
                          <svg
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="flex text-danger cursor-pointer"
                            onClick={() => removeFilter(key)}
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </div>
                      );
                    })}
                  </div>
                )}
                {modal.display ? (
                  <div className="bg-white rounded-5">
                    <div className="flex justify-between items-center bg-primary px-10 py-8 rounded-5">
                      <h6 className="title-text text-white">Details</h6>
                      <div
                        className="icon bg-white rounded-full flex items-center justify-center cursor-pointer"
                        onClick={() =>
                          setModal({
                            display: false,
                            data: {},
                            header: {},
                          })
                        }
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          className="text-primary"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-10 grid-cols-1 gap-6">
                      <div className="flex justify-end items-center gap-10">
                        {modal?.data?.status !== undefined && (
                          <div className="flex items-center gap-4">
                            <div
                              className={`dot rounded-full bg-${
                                modal?.data?.status ? "success" : "warning"
                              }`}
                            ></div>
                            <p
                              className={`text-${
                                modal?.data?.status ? "success" : "warning"
                              } small-text font-500`}
                            >
                              {modal?.data?.status ? "Active" : "Inactive"}
                            </p>
                          </div>
                        )}
                        {modal?.data?.vip !== undefined && (
                          <div
                            className={`dot rounded-full bg-${
                              modal?.data?.vip ? "primary" : "forth"
                            }`}
                          ></div>
                        )}
                      </div>
                      <div className="grid-cols-2 gap-6">
                        {Object.entries(modal.data)
                          .filter(
                            ([key, value]) =>
                              !Array.isArray(value) &&
                              key !== "status" &&
                              key !== "vip" &&
                              key !== "password"
                          )
                          .map(([key, value]) => (
                            <div
                              key={key}
                              className="border-forth rounded-5 p-10"
                            >
                              <p className="small-text text-dark font-500 capitalize">
                                {key} :
                              </p>
                              <p className="mini-text text-gray">
                                {String(value)}
                              </p>
                            </div>
                          ))}
                      </div>
                      <div className="grid-cols-1 gap-6">
                        {Object.entries(modal.data)
                          .filter(([_, value]) => Array.isArray(value))
                          .map(([key, value]) => (
                            <div
                              key={key}
                              className="border-forth rounded-5 p-10"
                            >
                              {/* Accordion Header */}
                              <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleCollapse(key)}
                              >
                                <p className="small-text text-dark font-500 capitalize">
                                  {key}
                                </p>

                                {openKeys[key] ? (
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="15"
                                    height="15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className="flex text-gray"
                                  >
                                    <polyline points="18 15 12 9 6 15"></polyline>
                                  </svg>
                                ) : (
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="15"
                                    height="15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className="flex text-gray"
                                  >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                  </svg>
                                )}
                              </div>

                              {/* Accordion Content */}
                              {openKeys[key] && (
                                <div className="grid-cols-2 gap-5 mt-5">
                                  {value.map((item, i) => (
                                    <div
                                      key={i}
                                      className="bg-forth py-6 px-10 rounded-5"
                                    >
                                      <p className="mini-text text-gray">
                                        {item}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-5">
                    <div className="flex justify-between items-center bg-primary px-10 py-8 rounded-5">
                      <h6 className="title-text text-white">Filters</h6>
                      <div className="icon bg-white rounded-full flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          onClick={handleApply}
                          className="cursor-pointer text-primary"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="grid-cols-1 gap-8 p-10">
                      <Feilds
                        type="select"
                        label="Status"
                        value={status}
                        onChange={setStatus}
                        options={["All", "Active", "Inactive"]}
                        border
                      />

                      <div className="grid-cols-1 gap-6">
                        {arrayKeys.map((col) => (
                          <Feilds
                            key={col}
                            type="multiselect"
                            label={col}
                            value={multi[col] || []}
                            onChange={(v) =>
                              setMulti((prev) => ({ ...prev, [col]: v }))
                            }
                            options={[
                              ...new Set(
                                User.flatMap((u) =>
                                  Array.isArray(u[col]) ? u[col] : []
                                )
                              ),
                            ]}
                            border
                          />
                        ))}
                      </div>

                      <div className="grid-cols-2 gap-6">
                        {keys.map((k) => (
                          <Feilds
                            key={k}
                            type="input"
                            label={k}
                            value={search[k] || ""}
                            onChange={(v) =>
                              setSearch((prev) => ({ ...prev, [k]: v }))
                            }
                            placeholder={`Search by ${k}...`}
                            border
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            {version === "v2" && (
              <div className="grid-cols-1 gap-8">
                <div className="bg-white grid-cols-1 rounded-5 p-10">
                  <h6 className="mid-text bordb pb-7 text-gray font-600">
                    Bussiness Target
                  </h6>
                  {[
                    {
                      name: "NIFTY",
                      description: "What he get",
                      value: 87,
                      color: "success",
                    },
                    {
                      name: "Sensex",
                      description: "What he get",
                      value: 12,
                      color: "danger",
                    },
                    {
                      name: "Sensex",
                      description: "What he get",
                      value: 98,
                      color: "success",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-9"
                    >
                      <div className="flex items-center gap-10">
                        <img
                          src={
                            item?.color === "success"
                              ? "https://charming-mooncake-ed24f0.netlify.app/static/media/gold.2fc0ed44a48b3ebb6ec5.png"
                              : // ? "https://charming-mooncake-ed24f0.netlify.app/static/media/copper.a57a6603bd213a91f691.png"
                                "https://charming-mooncake-ed24f0.netlify.app/static/media/silver.2bea58ef1c92c2b33a4b.png"
                          }
                          alt="coin"
                          className="flex common-img object-contain"
                        />
                        <div>
                          <p className="para-text text-dark font-500">
                            {item.name}
                          </p>
                          <p className="mini-text text-gray font-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <p className={`small-text text-success font-500`}>
                        +{item.value}K
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-white grid-cols-1 rounded-5 p-10">
                  <h6 className="mid-text bordb pb-6 text-gray font-600">
                    Company Target
                  </h6>
                  {[
                    {
                      name: "NIFTY",
                      description: "What he get",
                      value: 87,
                      color: "success",
                    },
                    {
                      name: "Sensex",
                      description: "What he get",
                      value: 12,
                      color: "danger",
                    },
                    {
                      name: "Sensex",
                      description: "What he get",
                      value: 98,
                      color: "success",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-9"
                    >
                      <div className="flex items-center gap-10">
                        <img
                          src={
                            item?.color === "success"
                              ? "https://charming-mooncake-ed24f0.netlify.app/static/media/gold.2fc0ed44a48b3ebb6ec5.png"
                              : // ? "https://charming-mooncake-ed24f0.netlify.app/static/media/copper.a57a6603bd213a91f691.png"
                                "https://charming-mooncake-ed24f0.netlify.app/static/media/silver.2bea58ef1c92c2b33a4b.png"
                          }
                          alt="coin"
                          className="flex common-img object-contain"
                        />
                        <div>
                          <p className="para-text text-dark font-500">
                            {item.name}
                          </p>
                          <p className="mini-text text-gray font-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <p className={`small-text text-success font-500`}>
                        +{item.value}K
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {version === "v3" && (
              <div className="grid-cols-1 gap-7">
                <div className="bg-white rounded-5 p-12">
                  <Chart label="Management" value={90} color="primary" />
                </div>
                <div className="bg-white rounded-5 p-12">
                  <Chart label="Management" value={90} color="warning" />
                </div>
                <div className="grid-cols-2 gap-8">
                  <div className="bg-white rounded-5 flex items-center justify-center py-23">
                    <Chart
                      type="doughnut"
                      label="Activity"
                      value={65}
                      color="primary"
                      size={100}
                    />
                  </div>
                  <div className="bg-white rounded-5 flex items-center justify-center py-23">
                    <Chart
                      type="doughnut"
                      label="Response"
                      value={65}
                      color="primary"
                      size={100}
                    />
                  </div>
                </div>
                <div className="bg-white grid-cols-1 rounded-5">
                  {[
                    { name: "Stocks", value: "90%", color: "success" },
                    { name: "Stocks", value: "90%", color: "success" },
                    { name: "Stocks", value: "90%", color: "success" },
                    { name: "Sensex", value: "90%", color: "danger" },
                    { name: "Stocks", value: "90%", color: "danger" },
                    { name: "Stocks", value: "90%", color: "danger" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bordb p-12 flex items-center justify-between"
                    >
                      <p className="small-text text-dark font-500">
                        {item.name}
                      </p>
                      <p className={`mini-text text-${item.color} font-600`}>
                        {item.color === "success" ? "▲" : "▼"}
                        {item.value}
                      </p>
                    </div>
                  ))}
                  <div className="p-12 flex items-center justify-between bg-secondary">
                    <p className="small-text text-dark font-500">Overall P&L</p>
                    <p className="small-text text-primary font-500">▲2%</p>
                  </div>
                </div>
              </div>
            )}
            {version === "v4" && (
              <Tabs tabs={tabList} tabIndex={tabList?.length}>
                <DataFlow />
                <DataFlow />
              </Tabs>
            )}
            {version === "v5" && (
              <div className="grid-cols-1 gap-6">
                <div className="grid-cols-3 gap-6 bg-white rounded-5">
                  <div className="py-12 text-center">
                    <h2 className="title-text text-success">120 K</h2>
                    <p className="mini-text text-gray">Total</p>
                  </div>
                  <div className="py-12 text-center bordl bordr">
                    <h2 className="title-text text-warning">520 L</h2>
                    <p className="mini-text text-gray">Inactive</p>
                  </div>
                  <div className="py-12 text-center">
                    <h2 className="title-text text-success">192 CR</h2>
                    <p className="mini-text text-gray">Active</p>
                  </div>
                </div>
                <div className="bg-white p-10 rounded-5">
                  <Chart type="heatmap" col={10} arraydata={ProgressData4} />
                </div>
                <div className="bg-white grid-cols-1 rounded-5">
                  {[
                    { name: "NIFTY", value: "90%", color: "danger" },
                    { name: "Sensex", value: "90%", color: "danger" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bordb p-12 flex items-center justify-between"
                    >
                      <p className="small-text text-dark font-500">
                        {item.name}
                      </p>
                      <p className={`mini-text text-${item.color} font-600`}>
                        {item.color === "success" ? "▲" : "▼"}
                        {item.value}
                      </p>
                    </div>
                  ))}
                  <div className="p-12 flex items-center justify-between bg-secondary">
                    <p className="small-text text-dark font-500">Overall P&L</p>
                    <p className="small-text text-primary font-500">▲2%</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {version === "v2" && (
          <div className="flex gap-8 items-start">
            <div className="grid-cols-1 gap-6 w-30">
              <div className="bg-white rounded-5 p-12">
                <Chart label="Management" value={90} color="primary" />
              </div>
              <div className="bg-white rounded-5 p-12">
                <Chart label="Management" value={90} color="warning" />
              </div>
            </div>
            <div className="grid-cols-1 gap-6 w-70">
              <div className="bg-white p-12 rounded-5">
                <Chart type="heatmap" col={20} arraydata={ProgressData} />
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default TableStructure;
