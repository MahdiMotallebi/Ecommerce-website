import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { allState } from "../../features/shopSlice";
import {
  handleFilterBySize,
  handleFilterBySort,
  handleFilterByPrice,
  handleSetFilteritems,
  setFilterPrice,
  setFilterSize,
  setFilterSort,
} from "../../features/shopSlice";
const Category = () => {
  const state = useSelector(allState);
  const dispatch = useDispatch();

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
    state.filterValues.size && dispatch(handleFilterBySize());
    state.filterValues.sort && dispatch(handleFilterBySort());
    state.filterValues.price && dispatch(handleFilterByPrice());
    dispatch(handleSetFilteritems());
  }, [
    state.filterValues.size,
    state.filterValues.sort,
    state.filterValues.price,
  ]);

  const defaultValueSize = (optionSize, sizeVal) => {
    if (sizeVal === "ALL") {
      defaultValueSort(sort, state.filterValues.sort);
    }
    const result = optionSize.find((option) => option.value === sizeVal);
    return result;
  };

  const defaultValueSort = (optionSort, sortVal) => {
    const result = optionSort.find((option) => option.value === sortVal);
    return result;
  };
  const handleSize = (e) => {
    dispatch(setFilterSize(e.value));
  };

  const handleSort = (e) => {
    dispatch(setFilterSort(e.value));
  };

  const handlePrice = (e) => {
    dispatch(setFilterPrice(e.target.value));
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "none",
      border: "1px solid #bbb",
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
    <div className="filterProduct border p-3 p-lg-4 my-3 rounded">
      <h3 className="text-capitalize fw-bold mb-3">filters</h3>
      <Row className="category d-flex flex-column justify-content-center gap-3">
        <Col xs={12}>
          <div className="sort">
            <h5 className="text-capitalize">size</h5>

            <Select
              styles={customStyles}
              name="size"
              options={size}
              placeholder="Select size"
              value={defaultValueSize(size, state.filterValues.size)}
              onChange={(e) => handleSize(e)}
              placeholder="Filter By Size"
            />
          </div>
        </Col>
        <Col xs={12}>
          <div className="sort">
            <h5 className="text-capitalize">sort</h5>
            <Select
              styles={customStyles}
              name="sort"
              options={sort}
              placeholder="Select sort"
              value={defaultValueSort(sort, state.filterValues.sort)}
              onChange={(e) => handleSort(e)}
              placeholder="Filter By Price"
            />
          </div>
        </Col>
        <Col xs={12}>
          <div className="sort">
            <h5 className="text-capitalize">
              price: ${state.filterValues.price}
            </h5>
            <div className="wrapper d-flex flex-column flex-sm-row gap-2">
              <span>$0</span>
              <input
                type="range"
                className="range-input"
                onInput={(e) => handlePrice(e)}
              />
              <span>$100</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Category;
