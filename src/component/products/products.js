import React from "react";
import { useDispatch } from "react-redux";
import { changeCount, changeLike } from "../../features/shopSlice";
import Image from "react-bootstrap/Image";
import img1 from "../../img/shop/1.jpg";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCodeCompare,
  faHeart,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = ({ item }) => {
  const dispatch = useDispatch();
  const handleplusCartCount = (item) => {
    toast("Item added to cart", {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Flip,
      className: "toast-success",
    });

    if (item.count === undefined) {
      item = { ...item, count: 0 };
    }
    const data = { count: item.count + 1 };

    dispatch(changeCount({ item, data }));
  };
  const handlePlusLikeCount = (item) => {
    toast("Item added to wishlist.", {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Flip,
      className: "toast-success",
    });
    const data = { isLike: !item.isLike };
    dispatch(changeLike({ item, data }));
  };

  const { id, image, title, price, isLike } = item;
  return (
    <div className="custom-card  mx-2 justify-content-between mb-3 position-relative">
      <div className="position-relative">
        <Image src={img1} alt={title} loading="lazy"></Image>

        <Nav className="product-tools position-absolute d-flex flex-column gap-2">
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
          <ToastContainer />
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
      <div className="d-flex flex-column  align-items-between product-content justify-content-between py-3">
        <div className="top-product-content">
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
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
          </div>
          <h6 className="title-product">{title}</h6>
        </div>
        <div className="container-price d-flex gap-2  align-items-center">
          <span className="new-price text-dark">${price.toFixed(1)}</span>
          <del className="old-price text-dark">$21</del>
        </div>
      </div>
    </div>
  );
};

export default Products;
