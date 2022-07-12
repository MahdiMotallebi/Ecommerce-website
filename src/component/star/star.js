import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const StarRating = ({ star }) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => {
        const halfStar = index + 0.5;
        const fullStar = index + 1;
        return (
          <span key={index}>
            {star >= fullStar ? (
              <BsStarFill className="star" />
            ) : star >= halfStar ? (
              <BsStarHalf className="star" />
            ) : (
              <BsStar className="star" />
            )}
          </span>
        );
      })}
    </>
  );
};
export default StarRating;
