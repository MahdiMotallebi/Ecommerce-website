import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  Nav,
  Button,
  NavItem,
} from "react-bootstrap";

import {
  allState,
  handleCartItems,
  handleLikeItems,
  handleCompare,
} from "../../features/shopSlice";

import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BsCart,
  BsHeart,
  BsShuffle,
  BsCheck2,
  BsCheckCircle,
} from "react-icons/bs";

const ActionsProduct = () => {
  const state = useSelector(allState);
  const dispatch = useDispatch();
  const { id, image, title, description, price, availableSizes, colors } =
    state.product;
  const [count, setCount] = React.useState(1);
  const [size, setSize] = React.useState("");
  const [color, setColor] = React.useState("");

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleplusCartCount = () => {
    toast.success("Product Added To Cart.", {
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
    dispatch(handleCartItems({ id, size, count, color }));
  };
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
    dispatch(handleLikeItems(state.product));
  };

  const handleAddToCompare = () => {
    let check = false;
    if (state.compare.length > 0)
      check = state.compare.some((p) => p.id === state.product.id);

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
    !check && dispatch(handleCompare(state.product));
  };
  return (
    <>
      {state.product && (
        <Container>
          <section className="product-detail p-3 my-4">
            <Row>
              <Col xs={12} md={4}>
                <div className="product-detail-img mb-3">
                  <Image src={image} loading="lazy" alt={title} />
                </div>
              </Col>
              <Col xs={12} md={8}>
                <div className="product-detail-info">
                  <h3 className="product-detail-title text-uppercase fw-bold">
                    {title}
                  </h3>
                  <div className="product-detail-price h4">${price}</div>
                  <div className="product-detail-description mt-4">
                    <h5 className="fw-bold text-capitalize">product detail</h5>
                    <p>{description}</p>
                  </div>

                  <div data-colName="action" className="position-relative mt-4">
                    <h5 className="text-capitalize fw-bold">quantity</h5>
                    <div className="d-flex gap-2">
                      <Button
                        className="text-white btn-common"
                        title="increase"
                        variant="dark"
                        onClick={() => handleIncrease()}
                      >
                        +
                      </Button>
                      <Button
                        title="remove"
                        className="btn-common"
                        variant="dark"
                      >
                        {count}
                      </Button>
                      <Button
                        className="text-white btn-common"
                        title="decrease"
                        variant="dark"
                        disabled={count === 1 ? true : false}
                        onClick={() => handleDecrease()}
                      >
                        -
                      </Button>
                    </div>
                  </div>

                  <div className="container-size mt-4">
                    <h5 className="text-capitalize fw-bold">available size</h5>
                    <div className="d-flex gap-2">
                      {availableSizes &&
                        availableSizes.map((s, index) => {
                          return (
                            <div
                              key={index}
                              className={`size-item  ${
                                size === s && "activeSize"
                              }`}
                              onClick={() => setSize(s)}
                            >
                              {s}
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <div className="container-size mt-4">
                    <h5 className="text-capitalize fw-bold">colors</h5>
                    <div className="d-flex gap-2">
                      {colors &&
                        colors.map((c, index) => {
                          return (
                            <div
                              key={index}
                              style={
                                color === c
                                  ? {
                                      background: c,
                                      outline: "1px solid black",
                                      outlineOffset: "1px",
                                    }
                                  : {
                                      background: c,
                                      outline: "none",
                                    }
                              }
                              className="color-product position-relative"
                              onClick={() => setColor(c)}
                            ></div>
                          );
                        })}
                    </div>
                  </div>
                  <div className="actions mt-4">
                    <h5 className="text-capitalize fw-bold">actions</h5>

                    <Nav className="d-flex gap-3 product-tools">
                      <NavItem
                        title="add to cart"
                        id={id}
                        onClick={() => handleplusCartCount()}
                      >
                        <BsCart className="cart-shop product-tool" />
                      </NavItem>
                      <NavItem id={id} onClick={() => handlePlusLikeCount()}>
                        <BsHeart className="like product-tool" />
                      </NavItem>

                      <NavItem title="compare" onClick={handleAddToCompare}>
                        <BsShuffle className="compare product-tool" />
                      </NavItem>
                    </Nav>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      )}
    </>
  );
};

export default ActionsProduct;
