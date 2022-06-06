import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-modal";
import blackLogo from "../../img/black-logo.png";
import whiteLogo from "../../img/white-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faHeart,
  faUser,
  faBars,
  faPhone,
  faSearch,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { allState } from "../../features/shopSlice";
import Cart from "../cart/cart";
import Like from "../like/like";

const Header = () => {
  const state = useSelector(allState);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showLikeModal, setShowLikeModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const handleCloseLikeModal = () => {
    setShowLikeModal(false);
  };

  const handleCloseShowSearch = () => {
    setShowSearch(false);
  };
  return (
    <>
      <header>
        {/* Top header */}
        <div className="mobile-section"></div>

        <div className="top-header">
          <Container fluid>
            <Row>
              <Col>
                <div className="top-header-left d-none d-lg-flex">
                  <Nav className="d-flex  align-items-center gap-4">
                    <Nav.Item className="py-lg-3">
                      Welcome to Our store Multikart
                    </Nav.Item>
                    <Nav.Item className="py-lg-3">
                      <FontAwesomeIcon
                        className="mx-2"
                        icon={faPhone}
                      ></FontAwesomeIcon>
                      Call Us: 123 - 456 - 7890
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>

              <Col>
                <div className="top-header-right">
                  <Nav className="d-flex justify-content-end gap-3">
                    <Nav.Item
                      className="wishlist d-flex justify-content-center py-sm-3 align-items-center gap-2 text-capitalize "
                      onClick={() => setShowLikeModal(true)}
                    >
                      <FontAwesomeIcon
                        className="wishlist-icon"
                        icon={faHeart}
                      ></FontAwesomeIcon>
                      <span className="text-wishlist">wishlist</span>
                    </Nav.Item>
                    <Nav.Item className="account py-sm-3 d-sm-flex justify-content-center align-items-center gap-2 text-capitalize">
                      <FontAwesomeIcon
                        className="account-icon"
                        icon={faUser}
                      ></FontAwesomeIcon>
                      <span className="text-account">my account</span>

                      <Nav className="hover-account">
                        <LinkContainer to="login">
                          <Nav.Link>login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="register">
                          <Nav.Link>register</Nav.Link>
                        </LinkContainer>
                      </Nav>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Navbar */}
        <Navbar
          expand="lg"
          bg="dark"
          className=" algin-items-center custom-navbar"
        >
          <Container fluid>
            <Col className="d-flex align-items-center" lg={8}>
              <div className="btn-sidebar">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </div>
              <LinkContainer to="/">
                <Navbar.Brand className="logo m-0 text-white">
                  <Image
                    src={whiteLogo}
                    className="logo-header"
                    alt="logo"
                  ></Image>
                </Navbar.Brand>
              </LinkContainer>

              {/* navLinks */}
              {/* <Navbar.Collapse
                className="px-3 nav-collapse"
                id="navbarNavDropdown"
              >
                <Nav className="main-navLink">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link>about</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link>contact</Nav.Link>
                  </LinkContainer>

                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item>Action</NavDropdown.Item>
                    <NavDropdown.Item>Another action</NavDropdown.Item>
                    <NavDropdown.Item>Something else here</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse> */}
            </Col>
            {/* Right Elements */}
            <Col className="d-flex align-items-center justify-content-end gap-3 rightNavbar">
              <div className="search" onClick={() => setShowSearch(true)}>
                <FontAwesomeIcon
                  className="search-icon"
                  icon={faSearch}
                ></FontAwesomeIcon>
              </div>
              {showSearch && (
                <Modal
                  className="custom-modal-search"
                  overlayClassName="overlay"
                  isOpen={showSearch}
                  onRequestClose={handleCloseShowSearch}
                  ariaHideApp={false}
                >
                  <Button
                    className="btn-hover-search-modal shadow-none btn-search-modal"
                    onClick={handleCloseShowSearch}
                  >
                    x
                  </Button>
                  <Form className="form-search-modal">
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Search a Product"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        className="input-modal shadown-none"
                      />
                      <Button
                        type="submit"
                        className="btn-hover-search-modal shadow-none btn-submit-modalSearch"
                        id="button-addon2"
                      >
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                      </Button>
                    </InputGroup>
                  </Form>
                </Modal>
              )}
              <div className="gear">
                <FontAwesomeIcon
                  className="gear-icon "
                  icon={faGear}
                ></FontAwesomeIcon>
                <div className="hover-gear">
                  <h6>language</h6>
                  <Nav className="language d-flex flex-column">
                    <Nav.Item>english</Nav.Item>
                    <Nav.Item>french</Nav.Item>
                  </Nav>
                  <h6>currency</h6>
                  <Nav className="currency d-flex flex-column">
                    <Nav.Item>usd</Nav.Item>
                    <Nav.Item>ind</Nav.Item>
                    <Nav.Item>eur</Nav.Item>
                    <Nav.Item>gbp</Nav.Item>
                  </Nav>
                </div>
              </div>
              <div
                className="basketShop"
                onClick={() => setShowCartModal(true)}
              >
                <FontAwesomeIcon
                  className="cart-icon"
                  icon={faBasketShopping}
                ></FontAwesomeIcon>
                <span className="count-shop-item">
                  {state.cartItems.length}
                </span>
                {state.cartItems.length === 0 && (
                  <div className="hover-cart">
                    your cart is currently empty.
                  </div>
                )}
              </div>
              <Navbar.Toggle
                className="toggle-navbar custom-toggler-navbar p-0"
                data-target="#navbarNavDropdown"
                data-toggle="collapse"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="bars"
                ></FontAwesomeIcon>
              </Navbar.Toggle>
            </Col>
            {/* End Right Elements */}
          </Container>
        </Navbar>

        {showCartModal && (
          <Modal
            className="custom-modal"
            overlayClassName="overlay"
            isOpen={showCartModal}
            onRequestClose={handleCloseCartModal}
            ariaHideApp={false}
          >
            <Cart />
          </Modal>
        )}
        {showLikeModal && (
          <Modal
            className="custom-modal"
            overlayClassName="overlay"
            isOpen={showLikeModal}
            onRequestClose={handleCloseLikeModal}
            ariaHideApp={false}
          >
            <Like />
          </Modal>
        )}
      </header>
    </>
  );
};

export default Header;
