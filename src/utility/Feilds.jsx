import React, { useState, useEffect } from "react";

const Fields = ({
  type = "input",
  label,
  value,
  onChange,
  options = [],
  placeholder = "Enter",
  border,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMulti = type === "multiselect";

  const clsInput = `${
    border ? "border-forth" : "border-0"
  } h-input rounded-5 text-gray w-full mini-text`;
  const clsBox = `${
    border ? "border-forth" : "border-0"
  } relative w-full bg-white rounded-5`;

  if (type === "input") {
    return (
      <div className="w-full">
        {label && (
          <p className="mini-text ml-1 mb-2 text-gray capitalize">{label}</p>
        )}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={clsInput}
        />
      </div>
    );
  }

  const showValue = isMulti
    ? value?.length
      ? value.slice(0, 2).join(", ") +
        (value.length > 2 ? ` +${value.length - 2}` : "")
      : "Select"
    : value || "Select";

  useEffect(() => {
    if (!isMulti || !isOpen) return;
    const close = (e) => !e.target.closest(".dropdown-box") && setIsOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [isOpen, isMulti]);

  const toggle = () => setIsOpen(!isOpen);

  const clearMulti = (e) => {
    e.stopPropagation();
    onChange([]);
  };

  const handleSelect = (opt) => {
    if (isMulti) {
      onChange(
        value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]
      );
    } else {
      onChange(opt);
      setIsOpen(false);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <p className="mini-text ml-1 mb-2 text-gray capitalize">{label}</p>
      )}
      <div
        className={`dropdown-box ${clsBox}`}
        tabIndex={0}
        onBlur={
          !isMulti ? () => setTimeout(() => setIsOpen(false), 100) : undefined
        }
      >
        <div
          className="flex items-center justify-between px-8 cursor-pointer h-select rounded-5"
          onClick={toggle}
        >
          <p className="mini-text text-gray line-clamp1 capitalize">
            {showValue}
          </p>

          {isMulti && value?.length ? (
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="gray"
              strokeWidth="2"
              fill="none"
              className="cursor-pointer"
              onClick={clearMulti}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="gray"
              strokeWidth="2"
              fill="none"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.2s",
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
        </div>

        {isOpen && (
          <div
            className="absolute z-10 mt-4 w-full bg-white rounded-5 b-shadow overflow-auto"
            style={{ maxHeight: 145 }}
          >
            {options.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-5 p-8 cursor-pointer mini-text text-gray bordb capitalize"
              >
                <input
                  type="checkbox"
                  checked={isMulti ? value.includes(opt) : value === opt}
                  onChange={() => handleSelect(opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fields;
