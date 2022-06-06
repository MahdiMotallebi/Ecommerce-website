import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { allState } from "../../features/shopSlice";

import { changeLike } from "../../features/shopSlice";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
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
          <Table className="cart-table">
            <thead>
              <tr>
                <th>image</th>
                <th>product name</th>
                <th>price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {state.likeItems.map((item) => {
                const { id, image, title, price, count } = item;
                return (
                  <>
                    <tr>
                      <td>
                        <Image
                          src={image}
                          alt={image}
                          className="rounded-3 imgCart"
                        />
                      </td>

                      <td>{title}</td>
                      <td>${price}</td>

                      <td>
                        <Button
                          title="remove"
                          className="btn-common mx-auto"
                          variant="dark"
                          onClick={() => handleDelete(item)}
                        >
                          x
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </Row>
      ) : (
        <Col xs={12} className="noLike_cart">
          <h4>your wishlist is empty.</h4>
          <p>explore more shortlist some items.</p>
        </Col>
      )}
    </>
  );
};

export default Like;
