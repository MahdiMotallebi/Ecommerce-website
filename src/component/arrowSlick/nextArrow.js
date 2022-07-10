import React from "react";
import { BsChevronRight } from "react-icons/bs";

const NextArrow = ({ onClick }) => {
  return (
    <div className="next-arrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

export default NextArrow;
