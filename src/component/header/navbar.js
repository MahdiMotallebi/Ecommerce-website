import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faHeart,
  faBars,
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
    <>
      <Navbar bg="dark" expand="lg" className="row algin-items-center p-3">
        <Container fluid>
          {/* Logo */}
          <LinkContainer to="/">
            <Navbar.Brand className="logo m-0 text-white">
              shop clothing
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse className="px-3 nav-collapse" id="navbarNavDropdown">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link activeClassName="active">Home</Nav.Link>
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
    </>
  );
};

export default NavBar;
