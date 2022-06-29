import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col } from "react-bootstrap";
import { allState } from "../../features/shopSlice";
import Products from "../products/products";
import Category from "../category/category";
import { ToastContainer } from "react-toastify";
const AllShop = () => {
  const state = useSelector(allState);
  return (
    <div className="allShop">
      <Container>
        <Row>
          <Col lg={3}>
            <Category />
          </Col>
          <Col>
            <div className="main-shop">
              <Row className="g-0">
                {state.filterItems.length > 0 &&
                  state.filterItems.map((item) => {
                    return (
                      <Col lg={4}>
                        <Products item={item} key={uuidv4()} />
                      </Col>
                    );
                  })}
              </Row>
              <ToastContainer />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllShop;
