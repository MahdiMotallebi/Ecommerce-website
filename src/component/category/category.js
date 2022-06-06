import React, { useState, useEffect } from "react";
import Select from "react-select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import {
  handleFilterBySize,
  handleFilterBySort,
} from "../../features/shopSlice";
const Category = () => {
  const dispatch = useDispatch();
  const [sizeValue, setSize] = useState("");
  const [sortValue, setSort] = useState("");
  const size = [
    { value: "ALL", label: "ALL" },
    { value: "S", label: "S" },
    { value: "L", label: "L" },
    { value: "M", label: "M" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];
  const sort = [
    { value: "Newest", label: "Newest" },
    { value: "Descending", label: "Descending" },
    { value: "Ascending", label: "Ascending" },
  ];
  useEffect(() => {
    if (sizeValue) {
      const i = dispatch(handleFilterBySize(sizeValue));
      console.log(i);
    }
    sortValue && dispatch(handleFilterBySort(sortValue));
  }, [sizeValue, sortValue]);

  const defaultValueSize = (optionSize, sizeVal) => {
    if (sizeVal === "all") {
      setSort(sort[0].value);
      defaultValueSort(sort, sortValue);
    }
    const result = optionSize.find((option) => option.value === sizeVal);
    return result;
  };

  const defaultValueSort = (optionSort, sortVal) => {
    const result = optionSort.find((option) => option.value === sortVal);
    return result;
  };
  const handleSize = (size) => {
    setSize(size);
  };

  const handleSort = (sort) => {
    setSort(sort);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#f5f5f5",
      border: "none",
      cursor: "pointer",
      outline: "none",
    }),

    option: (provided, state) => ({
      ...provided,
      background: state.isFocused ? "#f5f5f5" : "#fff",
      color: "#000",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      opacity: 0.7,
      letterSpacing: ".5px",
    }),
  };

  return (
    <Row className="category bg-secondary d-flex justify-content-center p-3">
      <Col xs={6} sm={4} className="sort">
        <Select
          styles={customStyles}
          name="size"
          options={size}
          placeholder="Select size"
          value={defaultValueSize(size, sizeValue)}
          onChange={(e) => handleSize(e.value)}
          placeholder="Filter By Size"
        />
      </Col>
      <Col xs={6} sm={4} className="sort">
        <Select
          styles={customStyles}
          name="sort"
          options={sort}
          placeholder="Select sort"
          value={defaultValueSort(sort, sortValue)}
          onChange={(e) => handleSort(e.value)}
          placeholder="Filter By Price"
        />
      </Col>
    </Row>
  );
};

export default Category;
