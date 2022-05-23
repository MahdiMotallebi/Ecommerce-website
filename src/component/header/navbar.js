import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavDropdown from "react-bootstrap/NavDropdown";

import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faHeart,
  faUser,
  faBars,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { allState } from "../../features/shopSlice";
import Cart from "../cart/cart";
import Like from "../like/like";

const NavBar = () => {
  const state = useSelector(allState);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showLikeModal, setShowLikeModal] = useState(false);

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const handleCloseLikeModal = () => {
    setShowLikeModal(false);
  };
  return (
    <header>
      {/* Top header */}
      {/* <Row className="top-header">
        <Col>
          <div className="top-header-left">
            <ul>
              <li>Welcome to Our store Multikart</li>
              <li>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                Call Us: 123 - 456 - 7890
              </li>
            </ul>
          </div>
        </Col>

        <Col>
          <div className="top-header-right">
            <ul>
              <li className="wishlist">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                wishlist
              </li>
              <li className="account">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                myaccount
                <ul className="hover-account">
                  <li>login</li>
                  <li>register</li>
                  <li>logout</li>
                </ul>
              </li>
            </ul>
          </div>
        </Col>
      </Row> */}

      {/* Navbar */}
      <Navbar bg="dark" expand="lg" className="row algin-items-center p-3">
        <Container fluid>
          {/* <div className="container-left-sidebar bg-info">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            <div className="left-sidebar"></div>
          </div> */}
          {/* Logo */}
          <LinkContainer to="/">
            <Navbar.Brand className="logo m-0 text-white">
              <img src={window.location.origin + "/Img/logo.png"} alt="logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse className="px-3 nav-collapse" id="navbarNavDropdown">
            <Nav>
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
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          {/* Right Elements */}
          <div className="d-flex align-items-center justify-content-end leftNavbar">
            <Button
              className="text-white d-flex justify-content-center align-items-center like"
              onClick={() => setShowLikeModal(true)}
            >
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              <span className="count-like ">{state.likeItems.length}</span>
            </Button>
            <Button
              className="text-white d-flex justify-content-center align-items-center shopBasket"
              onClick={() => setShowCartModal(true)}
            >
              <FontAwesomeIcon icon={faBasketShopping}></FontAwesomeIcon>
              <span className="count-shop-item">{state.cartItems.length}</span>
            </Button>
            <Navbar.Toggle
              className="toggle-navbar"
              data-target="#navbarNavDropdown"
              data-toggle="collapse"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} className="bars"></FontAwesomeIcon>
            </Navbar.Toggle>
          </div>
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
  );
};

export default NavBar;
