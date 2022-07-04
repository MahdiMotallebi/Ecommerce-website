import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-arrow" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

export default PrevArrow;
