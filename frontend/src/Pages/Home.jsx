import { Box, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import CustomButtonTrigger from "../components/CustomButton";

const Home = ({ limitTags = 3 }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const options = [
    { value: 1, name: "Apple" },
    { value: 2, name: "Banana" },
    { value: 3, name: "Cherry" },
    { value: 4, name: "Date" },
    { value: 5, name: "Elderberry" },
  ];

  const filteredOptions = options.filter(
    (opt) =>
      opt.name.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedValues.some((sel) => sel.value === opt.value)
  );

  const handleSelect = (option) => {
    setSelectedValues((prev) => [...prev, option]);
    setInputValue("");
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      inputRef.current &&
      !inputRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  const clearInput = () => {
    setInputValue("");
    setIsOpen(true);
    inputRef.current?.focus();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);




  return (
    <>
      <Box sx={{ backgroundColor: "grey" }}>
        <Box sx={{ py: 1, textAlign: "center", }}>

          <marquee behavior="scroll" direction="right"><Typography variant="h2">Welcome To The Home Page</Typography></marquee>
        </Box>

        <Typography variant="h4" textAlign={"center"} sx={{ mt: 4 }}>
          MultiSelect
        </Typography>

        <div
          className="multi-select"
          style={{
            width: "300px",
            margin: "20px auto",
            position: "relative",
          }}
        >
          <div
            className="tags"
            style={{
              border: "1px solid #ccc",
              padding: "5px",
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              alignItems: "center",
            }}
          >
            {selectedValues.slice(0, limitTags).map((opt) => (
              <span
                key={opt.value}
                style={{
                  background: "#eee",
                  padding: "3px 7px",
                  borderRadius: "4px",
                }}
              >
                {opt.name}
              </span>
            ))}
            {selectedValues.length > limitTags && (
              <span
                style={{
                  background: "#eee",
                  padding: "3px 7px",
                  borderRadius: "4px",
                }}
              >
                +{selectedValues.length - limitTags}
              </span>
            )}

            {/* Input + clear icon */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                minWidth: "60px",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                placeholder="Select options..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  minWidth: "40px",
                }}
                onFocus={() => setIsOpen(true)}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {inputValue.length > 0 && (
                <span
                  style={{
                    cursor: "pointer",
                    color: "#888",
                    padding: "0 5px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    userSelect: "none",
                  }}
                  onClick={clearInput}
                >
                  ✕
                </span>
              )}
            </div>
          </div>

          {isOpen && filteredOptions.length > 0 && (
            <div
              ref={dropdownRef}
              style={{
                position: "absolute",
                background: "#fff",
                border: "1px solid #ccc",
                width: "100%",
                maxHeight: "150px",
                overflowY: "auto",
                zIndex: 100,
              }}
            >
              {filteredOptions.map((option) => (
                <div
                  key={option.value}
                  style={{
                    padding: "5px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => handleSelect(option)}
                >
                  <input
                    type="checkbox"
                    readOnly
                    checked={false}
                    style={{ marginRight: "5px" }}
                  />
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <Box sx={{ textAlign: "center" }}>
          <>
            <CustomButtonTrigger />
          </>
        </Box>
      </Box>
    </>
  );
};

export default Home;
