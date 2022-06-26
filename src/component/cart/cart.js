import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import noCart from "../../img/not-cart.png";

import { allState, changeCount } from "../../features/shopSlice";

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

  const handleDelete = (item) => {
    const data = { count: 0 };
    dispatch(changeCount({ item, data }));
  };
  const handleIncrease = (item) => {
    const data = { count: item.count + 1 };
    dispatch(changeCount({ item, data }));
  };

  const handleDecrease = (item) => {
    const data = { count: item.count - 1 };
    dispatch(changeCount({ item, data }));
  };

  return (
    <div className="cart-section h-100">
      <Container className="h-100">
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
                  product name
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
                  action
                </div>
              </Col>
            </Row>
            <Row className="gx-md-0">
              {state.cartItems.map((item) => {
                const { id, image, title, price, count } = item;
                return (
                  <Row className="gx-0 row-wishlist d-block d-lg-flex mb-5 mb-lg-0">
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
                        data-colName="action"
                        className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                      >
                        <div className="d-flex gap-2 justify-content-center align-items-center  content-wishlist">
                          <Button
                            title="remove"
                            className="btn-common"
                            variant="dark"
                            onClick={() => handleDelete(item)}
                          >
                            x
                          </Button>
                          <Button
                            className="text-white btn-common"
                            title="increase"
                            variant="dark"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </Button>
                          <Button
                            className="text-white btn-common"
                            title="decrease"
                            variant="dark"
                            disabled={count === 0 ? true : false}
                            onClick={() => handleDecrease(item)}
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
    </div>
  );
};

export default Cart;
