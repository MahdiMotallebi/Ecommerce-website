import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

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
    <>
      {state.cartItems.length > 0 ? (
        <Row>
          {state.cartItems.map((item) => {
            const { id, image, title, price, count } = item;
            return (
              <Card
                className="cart-item col-lg-6 d-flex flex-row mb-4 p-2 align-items-center justify-content-around shadow"
                key={id}
              >
                <div className="container-img">
                  <Card.Img
                    src={image}
                    alt={image}
                    className="rounded-3 imgCart"
                  />
                </div>

                <div
                  className="d-flex flex-column justify-content-around
                p-2 gap-2  "
                >
                  <p className="fw-bold">{title}</p>
                  <p className="small ">Quantity: {count}</p>
                  <p className="small">Price: ${price}</p>
                </div>
                <div className=" d-flex flex-column justify-content-center justify-content-sm-end gap-2">
                  <Button
                    className="btn-common "
                    variant="dark"
                    onClick={() => handleDelete(item)}
                  >
                    x
                  </Button>
                  <Button
                    className="text-white btn-common"
                    variant="dark"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </Button>
                  <Button
                    className="text-white btn-common"
                    variant="dark"
                    disabled={count === 0 ? true : false}
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </Button>
                </div>
              </Card>
            );
          })}

          <Col xs={12} className="total-price-container">
            <p className="total-text">total Price:</p>
            <p className="total-price"> ${totalCart()}</p>
          </Col>
        </Row>
      ) : (
        <Col xs={12} className="noLike_cart">
          <p>please add some item..</p>
        </Col>
      )}
    </>
  );
};

export default Cart;
