import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductSkeleton = () => {
  return (
    <div className="product-skeleton border p-3 ">
      <div className="img-skeleton d-flex justify-content-center">
        <Skeleton circle width={150} height={150} className="mt-5" />
      </div>
      <div className="content-skeleton">
        <Skeleton count={3} />
      </div>
    </div>
  );
};

export default ProductSkeleton;
