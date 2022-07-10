import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-arrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

export default PrevArrow;
