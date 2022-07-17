import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  allState,
  handleLikeItems,
  handleCompare,
} from "../../features/shopSlice";
import { Nav, Image, NavItem } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import {
  BsHeart,
  BsCheckCircle,
  BsSearch,
  BsStarFill,
  BsShuffle,
} from "react-icons/bs";
import StarRating from "../../component/star/star";
import { Link } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
const Products = ({ item, loading = 0, setLoading }) => {
  const state = useSelector(allState);
  const dispatch = useDispatch();
  if (state.loading === "succeeded") {
    setTimeout(() => {
      setLoading(0);
    }, "3000");
  }

  const { image, title, price, star, availableSizes } = item;
  const id = item._id;
  const handlePlusLikeCount = () => {
    toast.success("Product Added To Wishlist.", {
      icon: <BsCheckCircle />,
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Flip,
      className: "toast-success",
    });
    dispatch(handleLikeItems(item));
  };

  const handleAddToCompare = () => {
    let check = false;
    if (state.compare.length > 0)
      check = state.compare.some((p) => p.id === id);

    toast.success(
      `${check ? "Product Already Added." : "Product Added To Compare."}`,
      {
        icon: !check && <BsCheckCircle />,
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Flip,
        className: "toast-success",
      }
    );
    !check && dispatch(handleCompare(item));
  };
  return (
    <div className="custom-card mb-4 justify-content-between position-relative">
      {loading ? (
        <Skeleton height={260} />
      ) : (
        <div className="container-img-custom-card d-flex justify-content-center align-items-center mb-2">
          <div className="img-custom-card position-relative overflow-hidden">
            <Image src={image.asset.url} alt={title} loading="lazy" />
            <Nav className="product-tools position-absolute d-flex flex-column gap-1">
              <NavItem id={id} onClick={() => handlePlusLikeCount()}>
                <BsHeart className="like product-tool" />
              </NavItem>

              <NavItem title="quick view">
                <Link to={`/productDetail/${id}`} style={{ color: "#bbb" }}>
                  <BsSearch className="quick-view product-tool" />
                </Link>
              </NavItem>

              <NavItem title="compare" onClick={handleAddToCompare}>
                <BsShuffle className="compare product-tool" />
              </NavItem>
            </Nav>
          </div>
        </div>
      )}
      <div className="d-flex flex-column p-3 align-items-between product-content justify-content-between">
        <div className="top-product-content">
          {loading ? (
            <Skeleton width={100} />
          ) : (
            <>
              <div className="rating d-flex gap-1 mb-2">
                <StarRating star={star} />
              </div>
            </>
          )}

          <h6 className="title-product">
            {loading ? <Skeleton className="mt-2" /> : title}
          </h6>
          <div className="container-size d-flex gap-2 my-2">
            {loading ? (
              <Skeleton width={100} />
            ) : (
              <>
                {availableSizes.length > 0 &&
                  availableSizes.map((size) => {
                    return (
                      <div className="size-item" key={uuidv4()}>
                        {size}
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
        <div className="container-price d-flex gap-2  align-items-center">
          {loading ? (
            <Skeleton width={100} />
          ) : (
            <>
              <span className="new-price text-dark">${price.toFixed(1)}</span>
              <del className="old-price text-dark">$21</del>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
