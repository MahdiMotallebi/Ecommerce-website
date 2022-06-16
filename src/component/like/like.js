import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { allState } from "../../features/shopSlice";

import { changeLike } from "../../features/shopSlice";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { Row, Col, Container } from "react-bootstrap";
import roundToNearestMinutesWithOptions from "date-fns/esm/fp/roundToNearestMinutesWithOptions";
const Like = () => {
  const state = useSelector(allState);
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    const data = { isLike: false };
    dispatch(changeLike({ item, data }));
  };
  return (
    <Container>
      {state.likeItems.length > 0 && (
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
                action
              </div>
            </Col>
          </Row>
          <Row className="gx-md-0  ">
            {state.likeItems.map((item) => {
              const { id, image, title, price, count } = item;
              return (
                <Row className="gx-0 row-wishlist d-block d-lg-flex mb-5 mb-lg-0">
                  <Col>
                    <div
                      data-colName="image"
                      className="col-wishlist  position-relative d-flex justify-content-center justify-content-sm-end align-items-end align-items-sm-center  "
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
                      className="col-wishlist position-relative d-flex justify-content-center justify-content-sm-end align-items-end align-items-sm-center"
                    >
                      <p className="content-wishlist text-center ">{title}</p>
                    </div>
                  </Col>
                  <Col>
                    <div
                      data-colName="price"
                      className="col-wishlist position-relative d-flex justify-content-center justify-content-sm-end align-items-end align-items-sm-center"
                    >
                      <p className="content-wishlist text-center ">${price}</p>
                    </div>
                  </Col>
                  <Col>
                    <div
                      data-colName="action"
                      className="col-wishlist position-relative d-flex justify-content-center justify-content-sm-end align-items-end align-items-sm-center"
                    >
                      <div className="d-flex justify-content-center align-items-center content-wishlist">
                        <Button
                          title="remove"
                          className="btn-common"
                          variant="dark"
                          onClick={() => handleDelete(item)}
                        >
                          x
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Like;
