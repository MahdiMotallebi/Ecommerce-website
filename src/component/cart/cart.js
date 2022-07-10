import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Button, Col, Image, Container } from "react-bootstrap";
import noCart from "../../img/not-cart.png";
import { toast, Flip } from "react-toastify";
import { BsXCircle } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import {
  allState,
  handleDecCount,
  handleIncCount,
  handleRemoverFromCart,
} from "../../features/shopSlice";

const Cart = () => {
  const state = useSelector(allState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    totalCart();
  }, [state.cartItems]);
  const totalCart = () => {
    return state.cartItems
      .reduce((acc, item) => acc + item.count * item.price, 0)
      .toFixed(2);
  };

  const handleDelete = (id) => {
    toast("Product removed From Cart. ", {
      icon: <BsXCircle />,
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Flip,
      className: "toast-success",
    });
    dispatch(handleRemoverFromCart(id));
  };
  const handleIncrease = (id) => {
    dispatch(handleIncCount(id));
  };

  const handleDecrease = (id) => {
    dispatch(handleDecCount(id));
  };

  return (
    <Container className={`${state.cartItems.length > 0 ? "" : "h-100"}`}>
      {state.cartItems.length > 0 ? (
        <>
          <Row className="gx-0 d-none d-lg-flex">
            <Col>
              <div className="border  text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                image
              </div>
            </Col>
            <Col>
              <div className="border text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                name
              </div>
            </Col>
            <Col>
              <div className="border text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                price
              </div>
            </Col>
            <Col>
              <div className="border text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                quantity
              </div>
            </Col>
            <Col>
              <div className="border text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                size
              </div>
            </Col>
            <Col>
              <div className="border text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                color
              </div>
            </Col>
            <Col>
              <div className="border text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                action
              </div>
            </Col>
          </Row>
          <Row className="gx-md-0">
            {state.cartItems.map((item) => {
              const { id, image, title, price, count, size, color } = item;
              return (
                <Row
                  className="gx-0 row-wishlist d-block d-lg-flex mb-5 mb-lg-0"
                  key={uuidv4()}
                >
                  <Col>
                    <div
                      data-colName="image"
                      className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                    >
                      <div className="d-flex justify-content-center align-items-center content-wishlist">
                        <Image
                          src={image}
                          alt={image}
                          className="rounded-3 imgCart"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div
                      data-colName="name"
                      className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                    >
                      <p className="content-wishlist text-center ">{title}</p>
                    </div>
                  </Col>
                  <Col>
                    <div
                      data-colName="price"
                      className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                    >
                      <p className="content-wishlist text-center">${price}</p>
                    </div>
                  </Col>
                  <Col>
                    <div
                      data-colName="quantity"
                      className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                    >
                      <p className="content-wishlist text-center ">{count}</p>
                    </div>
                  </Col>
                  <Col>
                    <div
                      data-colName="size"
                      className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                    >
                      <p className="content-wishlist text-center ">{size}</p>
                    </div>
                  </Col>
                  <Col>
                    <div
                      data-colName="color"
                      className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                    >
                      <div className="content-wishlist d-flex justify-content-center">
                        <div
                          style={{
                            background: color,
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div
                      data-colName="action"
                      className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                    >
                      <div className="d-flex flex-lg-column gap-2 justify-content-center align-items-center content-wishlist">
                        <Button
                          title="remove"
                          className="btn-common"
                          variant="dark"
                          onClick={() => handleDelete(id)}
                        >
                          x
                        </Button>
                        <Button
                          className="text-white btn-common"
                          title="increase"
                          variant="dark"
                          onClick={() => handleIncrease(id)}
                        >
                          +
                        </Button>
                        <Button
                          className="text-white btn-common"
                          title="decrease"
                          variant="dark"
                          disabled={count === 0 ? true : false}
                          onClick={() => handleDecrease(id)}
                        >
                          -
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Row>

          <div className="total-price mt-4">
            <Row>
              <Col
                xs={12}
                sm={6}
                className="d-flex justify-content-between justify-content-sm-start gap-sm-3 align-items-center mb-3 mb-sm-0 "
              >
                <p className="total-text text-capitalize fw-bold">
                  total Price:
                </p>
                <p className="total-price"> ${totalCart()}</p>
              </Col>
              <Col xs={12} sm={6} className="text-sm-end">
                <Link
                  className="checkout-btn d-block d-sm-inline-block py-2 px-2 px-sm-4 text-white text-uppercase text-center"
                  to="/checkout"
                >
                  checkout
                </Link>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <Col xs={12} className="noLike_cart">
          <Image src={noCart} />
          <h4>your cart is empty.</h4>
          <p>explore more shortlist some items.</p>
        </Col>
      )}
    </Container>
  );
};

export default Cart;
