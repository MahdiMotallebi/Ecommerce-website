import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div className="next-arrow" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

export default NextArrow;
