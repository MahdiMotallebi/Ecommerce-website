import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import Breadcrumb from "../component/breadCrumb/breadCrumb";
import { allState, handleFindProduct } from "../features/shopSlice";
import ActionsProduct from "../component/products/actionsProduct";
const ProductDetail = () => {
  const state = useSelector(allState);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [key, setKey] = React.useState("description");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(handleFindProduct(id));
  }, []);

  return (
    <>
      <Breadcrumb />
      {state.product && (
        <Container>
          <ActionsProduct />
          <section className="my-5 product-detail-tab">
            <Tabs
              transition={false}
              defaultActiveKey={key}
              activeKey={key}
              onSelect={(k) => setKey(k)}
              id="controlled-tab-example"
            >
              <Tab eventKey="description" title="description">
                <Row>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum." sed do eiusmod tempor incididunt
                </Row>
              </Tab>
              <Tab eventKey="detail" title="detail">
                <Row>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum." sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum."
                </Row>
              </Tab>
              <Tab eventKey="write review" title="write review">
                <Row>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum." sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                </Row>
              </Tab>
            </Tabs>
          </section>
        </Container>
      )}
    </>
  );
};

export default ProductDetail;
