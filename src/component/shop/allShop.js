import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col } from "react-bootstrap";
import { allState } from "../../features/shopSlice";
import Products from "../products/products";
import Category from "../category/category";
import { ToastContainer } from "react-toastify";
import Pagination from "../pagination/pagination";
import { FaAlignLeft } from "react-icons/fa";
const AllShop = () => {
  const state = useSelector(allState);
  const [loading, setLoading] = React.useState(1);
  const [showFilter, setShowFilter] = React.useState(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.paginationValues.currentPage]);
  return (
    <div className="allShop my-4">
      <Container>
        <Row>
          <Col xl={3}>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="btn d-xl-none border-bottom text-capitalize"
            >
              <FaAlignLeft className="me-2" />
              filters
            </button>
            <div
              className={`filterPanel ${
                showFilter ? "showFilter" : "hideFilter"
              }`}
            >
              <Category setShowFilter={setShowFilter} />
            </div>
          </Col>
          <Col>
            <div className="h-100 pt-3 position-relative">
              <Row className="g-0">
                {state.filterItems.map((item, i) => {
                  return (
                    <Col xs={6} md={4} className="control-shop-product">
                      <div className="px-2">
                        <Products
                          item={item}
                          loading={loading}
                          setLoading={setLoading}
                          key={uuidv4()}
                        />
                      </div>
                    </Col>
                  );
                })}
              </Row>
              <Pagination setLoading={setLoading} />
              <ToastContainer />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllShop;
