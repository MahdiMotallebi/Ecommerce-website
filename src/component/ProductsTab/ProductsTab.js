import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Products from "../products/products";
import { allState } from "../../features/shopSlice";
import { v4 as uuidv4 } from "uuid";
const ProductsTab = () => {
  const state = useSelector(allState);
  const [key, setKey] = useState("featured");
  return (
    <Container fluid>
      <h2 className="title-tab text-uppercase text-center">special products</h2>
      <Tabs
        defaultActiveKey={key}
        activeKey={key}
        onSelect={(k) => setKey(k)}
        id="controlled-tab-example"
        className="mb-3 react-tab"
      >
        <Tab eventKey="new arriaval" title="new arriaval">
          <Row>
            {state.filterItems.length > 0 &&
              state.filterItems.map((item) => {
                return (
                  <Col xs={12} sm={4} lg={3} key={uuidv4()}>
                    <Products item={item} />
                  </Col>
                );
              })}
          </Row>
        </Tab>
        <Tab eventKey="featured" title="featured">
          <Row>
            {state.filterItems.length > 0 &&
              state.filterItems.map((item) => {
                return (
                  <Col xs={12} sm={6} lg={3}>
                    <Products item={item} />
                  </Col>
                );
              })}
          </Row>
        </Tab>
        <Tab eventKey="special" title="special">
          <Row>
            {state.filterItems.length > 0 &&
              state.filterItems.map((item) => {
                return (
                  <Col xs={12} sm={4} lg={3}>
                    <Products item={item} />
                  </Col>
                );
              })}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ProductsTab;
