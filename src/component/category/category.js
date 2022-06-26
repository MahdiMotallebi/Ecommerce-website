import React, { useState, useEffect } from "react";
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
} from "../../features/shopSlice";
const Category = () => {
  const state = useSelector(allState);
  const dispatch = useDispatch();
  const [sizeValue, setSize] = useState("");
  const [sortValue, setSort] = useState("");
  const [price, setPrice] = useState(0);
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
    dispatch(handleFilterBySize(sizeValue));
    sortValue && dispatch(handleFilterBySort(sortValue));
    price && dispatch(handleFilterByPrice(price));

    // dispatch(handleSetFilteritems());
  }, [sizeValue, sortValue, price]);

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
              value={defaultValueSize(size, sizeValue)}
              onChange={(e) => handleSize(e.value)}
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
              value={defaultValueSort(sort, sortValue)}
              onChange={(e) => handleSort(e.value)}
              placeholder="Filter By Price"
            />
          </div>
        </Col>
        <Col xs={12}>
          <div className="sort">
            <h5 className="text-capitalize">price: ${price}</h5>
            <div className="wrapper d-flex flex-column flex-sm-row gap-2">
              <span>$0</span>
              <input
                type="range"
                className="range-input"
                onInput={(e) => setPrice(e.target.value)}
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
