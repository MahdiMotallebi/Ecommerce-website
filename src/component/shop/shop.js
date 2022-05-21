import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  allState,
  handleCart,
  handleDeleteLikeItem,
  handleLike,
} from "../../features/shopSlice";
import { changeLike, changeCount } from "../../features/shopSlice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const state = useSelector(allState);
  const dispatch = useDispatch();

  const handleplusCartCount = (item) => {
    toast("Item added to cart", {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "toast-notification",
    });

    if (item.count === undefined) {
      item = { ...item, count: 0 };
    }
    const data = { count: item.count + 1 };

    dispatch(changeCount({ item, data }));
  };
  const handlePlusLikeCount = (item) => {
    const data = { isLike: !item.isLike };
    dispatch(changeLike({ item, data }));
  };

  return (
    <>
      <div className="row shop bg-dark justify-content-lg-auto justify-content-center p-3 text-white">
        {state.filterItems.length > 0 ? (
          state.filterItems.map((item) => {
            const { id, image, title, description, price, isLike } = item;

            return (
              <Card className="custom-card flex-row g-0 col-sm-10 col-lg-5 mx-2 justify-content-between mb-3">
                <div className="container-img-shop  col-5 col-sm-4 col-md-3 col-lg-5">
                  <Card.Img
                    className="card-img-top shop-img"
                    src={window.location.origin + image}
                    alt={title}
                    loading="lazy"
                  />
                </div>
                <div className="flex-column align-items-start justify-content-start ">
                  <Card.Body className="text p-3 ">
                    <Card.Title className="text-dark">{title}</Card.Title>
                    <p className="card-text">{description.substring(1, 120)}</p>
                  </Card.Body>
                  <div className="p-3 d-flex  justify-content-between align-items-center flex-column gap-2 ">
                    <span className="price text-dark">${price.toFixed(1)}</span>
                    <div className="btnsCart justify-content-between  d-flex w-100">
                      <Button
                        id={id}
                        onClick={() => handleplusCartCount(item)}
                        variant="secondary"
                      >
                        add to cart
                      </Button>
                      <ToastContainer />
                      <Button
                        id={id}
                        variant="transparent"
                        className={`btn-like ${
                          isLike > 0 ? "likeRed" : "likeBlack"
                        }`}
                        onClick={() => handlePlusLikeCount(item)}
                      >
                        <FontAwesomeIcon
                          className="fa-xl"
                          icon={faHeart}
                        ></FontAwesomeIcon>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <div className="text-capitalize d-flex noProduct justify-content-center align-items-center text-white">
            no product matches
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
