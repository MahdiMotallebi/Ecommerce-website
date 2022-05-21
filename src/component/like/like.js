import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  allState,
  handleDeleteLikeItem,
  handleLike,
} from "../../features/shopSlice";

import { changeLike } from "../../features/shopSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Like = () => {
  const state = useSelector(allState);
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    const data = { isLike: false };
    dispatch(changeLike({ item, data }));
  };
  return (
    <>
      {state.likeItems.length > 0 ? (
        <Row>
          {state.likeItems.map((item) => {
            const { id, image, title } = item;
            return (
              <Card
                className="col-lg-6 like-item mb-4 d-flex flex-row p-2 align-items-center justify-content-around shadow"
                key={id}
              >
                <div className="container-img">
                  <Card.Img
                    src={image}
                    alt={image}
                    className="rounded-3 imgCart"
                  />
                </div>

                <div className="p-2 text-left w-75">
                  <p className="fw-bold">{title}</p>
                </div>
                <div className=" d-flex flex-column justify-content-center justify-content-sm-end gap-2">
                  <Button
                    variant="dark"
                    className="btn-common "
                    onClick={() => handleDelete(item)}
                  >
                    x
                  </Button>
                </div>
              </Card>
            );
          })}
        </Row>
      ) : (
        <Col xs={12} className="noLike_cart">
          <p>please add some item..</p>
        </Col>
      )}
    </>
  );
};

export default Like;
