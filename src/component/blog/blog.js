import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Blog = ({ img }) => {
  return (
    <Row className="m-0">
      <Col>
        <Link to="/singleBlog">
          <div className="blog-img position-relative">
            <Image src={img}></Image>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
          </div>
          <div className="blog-body">
            <h6 className="my-2">25 June 2018</h6>
            <p className="mb-2">Some quick example</p>
            <small>by: jhon diom, 2 comments</small>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default Blog;
