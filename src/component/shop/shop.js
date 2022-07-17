import React from "react";
import { useSelector } from "react-redux";
import { allState } from "../../features/shopSlice";
import Instagram from "../../component/instagram/instagram";
import Blog from "../../component/blog/blog";
import Slider from "react-slick";
import { Row, Container, Col, Image } from "react-bootstrap";
import ProductsTab from "../ProductsTab/ProductsTab";
import Products from "../products/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCar, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "react-toastify";

const Shop = () => {
  const state = useSelector(allState);

  const importAll = (r) => {
    return r.keys().map(r);
  };
  const instaImage = importAll(
    require.context("../../img/insta", false, /\.(png|jpe?g|svg)$/)
  );
  const blogImage = importAll(
    require.context("../../img/blog", false, /\.(png|jpe?g|svg)$/)
  );
  const logoImage = importAll(
    require.context("../../img/logos", false, /\.(png|jpe?g|svg)$/)
  );

  const mainShop = {
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const blog = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const instagram = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const logos = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <section className="shop my-3">
        <Container>
          <div className="special-offer text-center">
            <Row>
              <Col>
                <h6>special offer</h6>
                <h3>top collection</h3>
              </Col>
            </Row>
            <Container>
              <Row>
                <Col lg={6} className="mx-auto">
                  <p>
                    All of that said, if you take one thing from this article,
                    let it be this: email has evolved. Sending general email
                  </p>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="main-shop py-3">
            <Container>
              <Row>
                <Col>
                  <Slider {...mainShop}>
                    {state.items.map((item) => {
                      return (
                        <div className="px-2" key={uuidv4()}>
                          <Products item={item} />
                        </div>
                      );
                    })}
                  </Slider>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </section>

      <section className="section-parallex">
        <div className="parallex">
          <Row>
            <Col>
              <div className="parallex-content">
                <h2>2021</h2>
                <h3>fashion trends</h3>
                <h5>special offers</h5>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="products-tab mt-5">
        <Container fluid="md">
          <ProductsTab />
        </Container>
      </section>
      <section className="news text-center mt-5">
        <Container>
          <Row className="border-top border-bottom mx-2 mx-sm-0 p-3">
            <Col xs={12} md={4}>
              <div className="news-one  hover-news px-2">
                <div className="img-news">
                  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
                </div>
                <div className="content-news">
                  <h3>free shipping</h3>
                  <h5>free shipping world</h5>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="news-two styleBorder hover-news px-2">
                <div className="img-news">
                  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                </div>
                <div className="content-news">
                  <h3>24 x 7 service</h3>
                  <h5>online service for new customer</h5>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="news-three hover-news px-2">
                <div className="img-news">
                  <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>
                </div>
                <div className="content-news">
                  <h3>festival offer</h3>
                  <h5>new online special festival offer</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog text-center mt-5">
        <h6>our collection</h6>
        <h3>special products</h3>
        <Container>
          <Row>
            <Slider {...blog}>
              {blogImage.map((img) => {
                return <Blog img={img} key={uuidv4()} />;
              })}
            </Slider>
          </Row>
        </Container>
      </section>

      <section className="instagram mt-5 text-center">
        <h3>#instagram</h3>
        <Row>
          <Col>
            <Slider {...instagram}>
              {instaImage.map((img) => {
                return <Instagram img={img} key={uuidv4()} />;
              })}
            </Slider>
          </Col>
        </Row>
      </section>

      <section className="logos my-5">
        <Container fluid>
          <Row>
            <Col>
              <Slider {...logos}>
                {logoImage.map((img) => {
                  return (
                    <div
                      className="container-logo-img d-flex justify-content-center align-items-center"
                      key={uuidv4()}
                    >
                      <Image src={img} className="logo-img" loading="lazy" />
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </section>
    </>
  );
};

export default Shop;
