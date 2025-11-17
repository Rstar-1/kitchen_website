const Filter = ({
  data = [],
  search = {},
  multi = {},
  status = "All",
  statusKey = "status",
}) =>
  data.filter((item) => {
    const statusVal = item?.[statusKey];
    const statusNorm =
      typeof statusVal === "boolean"
        ? statusVal
          ? "active"
          : "inactive"
        : (statusVal || "").toString().toLowerCase();

    // STATUS FILTER
    if (status !== "All" && statusNorm !== status.toLowerCase()) return false;

    // TEXT FILTERS (normal columns)
    for (const key in search) {
      if (search[key]?.trim()) {
        const val = (item[key] || "").toString().toLowerCase();
        if (!val.includes(search[key].toLowerCase())) return false;
      }
    }

    // ARRAY FILTERS
    for (const col in multi) {
      if (multi[col].length > 0) {
        const arr = Array.isArray(item[col])
          ? item[col].map((v) => v.toLowerCase())
          : [];
        const matched = multi[col].some((v) => arr.includes(v.toLowerCase()));
        if (!matched) return false;
      }
    }

    return true;
  });
  
export default Filter;
