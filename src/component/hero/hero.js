import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import hero1 from "../../img/hero1.jpg";
import hero2 from "../../img/hero2.jpg";
import subBanner1 from "../../img/sub-banner1.jpg";
import subBanner2 from "../../img/sub-banner2.jpg";
const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="hero-slider">
        <Slider {...settings}>
          <div className="wrapper ">
            <div
              className="slick-content position-relative d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${hero1})`,
                backgroundPosition: "60%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Container>
                <Row>
                  <Col>
                    <div className="content position-absolute">
                      <h4>welcome to fashion</h4>
                      <h2>men fashion</h2>
                      <Link className="shop-now" to="/">
                        shop now
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="wrapper ">
            <div
              className="slick-content position-relative d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${hero2})`,
                backgroundPosition: "60%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Container>
                <Row>
                  <Col>
                    <div className="content position-absolute">
                      <h4>welcome to fashion</h4>
                      <h2>women fashion</h2>
                      <Link className="shop-now" to="/">
                        shop now
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Slider>
      </section>

      <section className="sub-banner-container mt-4 p-4">
        <Container>
          <Row>
            <Col md={6}>
              <Link to="#">
                <div className="sub-banner men position-relative">
                  <Image src={subBanner1} alt="men" fluid></Image>
                  <div className="sub-banner-content position-absolute">
                    <h6>save 30%</h6>
                    <h4>men</h4>
                  </div>
                </div>
              </Link>
            </Col>

            <Col md={6}>
              <Link to="#">
                <div className="sub-banner women  position-relative">
                  <Image src={subBanner2} alt="women"></Image>
                  <div className="sub-banner-content position-absolute">
                    <h6>save 60%</h6>
                    <h4>women</h4>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
