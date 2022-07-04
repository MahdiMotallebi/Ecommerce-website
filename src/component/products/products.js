import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allState, changeCount, changeLike } from "../../features/shopSlice";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import Skeleton from "react-loading-skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faCodeCompare,
  faHeart,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = ({ item, loading, setLoading }) => {
  const dispatch = useDispatch();
  const state = useSelector(allState);

  if (state.loading === "succeeded") {
    setTimeout(() => {
      setLoading(0);
    }, "5000");
  }
  const handleplusCartCount = (item) => {
    toast(
      `${
        item.count === 0 || item.count === undefined
          ? "✔ Product Added Successfully."
          : "❌ This Product Already Added."
      }`,
      {
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

    if (item.count === undefined || item.count === 0) {
      item = { ...item, count: 0 };
      const data = { count: item.count + 1 };
      dispatch(changeCount({ item, data }));
    }
  };
  const handlePlusLikeCount = (item) => {
    toast(
      `${
        !item.isLike
          ? "✔ Product Added Successfully."
          : "❌ Product removed from wishlist."
      }`,
      {
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
    const data = { isLike: !item.isLike };
    dispatch(changeLike({ item, data }));
  };

  const { id, image, title, price, isLike, availableSizes } = item;

  return (
    <div className="custom-card mb-4 justify-content-between position-relative">
      {loading ? (
        <Skeleton height={260} />
      ) : (
        <div className="container-img-custom-card d-flex justify-content-center align-items-center mb-2">
          <div className="img-custom-card position-relative overflow-hidden">
            <Image src={image} alt={title} loading="lazy" />
            <Nav className="product-tools position-absolute d-flex flex-column gap-1">
              <NavItem
                title="add to cart"
                id={id}
                onClick={() => handleplusCartCount(item)}
              >
                <FontAwesomeIcon
                  className="cart-shop product-tool"
                  icon={faCartShopping}
                ></FontAwesomeIcon>
              </NavItem>
              <NavItem
                title="add to wishlist"
                id={id}
                className={` ${isLike > 0 ? "likeRed" : "likeBlack"}`}
                onClick={() => handlePlusLikeCount(item)}
              >
                <FontAwesomeIcon
                  className="like product-tool"
                  icon={faHeart}
                ></FontAwesomeIcon>
              </NavItem>
              <NavItem title="quick view">
                <FontAwesomeIcon
                  className="quick-view product-tool"
                  icon={faSearch}
                ></FontAwesomeIcon>
              </NavItem>
              <NavItem title="compare">
                <FontAwesomeIcon
                  className="compare product-tool"
                  icon={faCodeCompare}
                ></FontAwesomeIcon>
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
                <FontAwesomeIcon
                  className="star fill"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="star fill"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="star fill"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="star fill"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="star"
                  icon={faStar}
                ></FontAwesomeIcon>
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
              availableSizes.map((size) => {
                return <div className="size-item">{size} </div>;
              })
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
