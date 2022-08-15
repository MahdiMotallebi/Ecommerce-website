import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Navbar,
  Nav,
  Col,
  Form,
  Row,
  Image,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import Modal from 'react-modal';
import whiteLogo from '../../img/white-logo.png';
import {
  BsSearch,
  BsTelephoneFill,
  BsHeartFill,
  BsPerson,
  BsBasket3,
  BsList,
  BsShuffle,
} from 'react-icons/bs';

import { allState } from '../../features/shopSlice';
import Cart from '../cart/cart';
import Like from '../like/like';
import { menuItems } from '../../menuItems';
import MenuItems from '../menu/MenuItems';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const state = useSelector(allState);
  const { t } = useTranslation();
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
      <header id="header">
        {/* Top header */}
        <div className="mobile-section"></div>

        <div className="top-header">
          <Container fluid>
            <Row>
              <Col>
                <div className="top-header-left d-none d-lg-flex">
                  <Nav className="d-flex  align-items-center gap-4">
                    <Nav.Item className="py-lg-3">{t('welcome')}</Nav.Item>
                    <Nav.Item className="py-lg-3">
                      <BsTelephoneFill className="mx-2" />
                      {t('telephone')}
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
                      <BsHeartFill className="wishlist-icon" />

                      <span className="text-wishlist">{t('wishlist')}</span>
                    </Nav.Item>
                    <Nav.Item className="account py-sm-3 d-sm-flex justify-content-center align-items-center gap-2 text-capitalize">
                      <BsPerson className="account-icon" />
                      <span className="text-account">{t('account')}</span>

                      <Nav className="hover-account">
                        <LinkContainer to="login">
                          <Nav.Link>{t('login')}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="register">
                          <Nav.Link>{t('register')}</Nav.Link>
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
        <Navbar expand="lg" className="align-items-center custom-navbar">
          <Container fluid>
            <Col className="d-flex align-items-center">
              <LinkContainer to="/">
                <Navbar.Brand className="logo">
                  <Image
                    src={whiteLogo}
                    className="logo-header"
                    alt="logo"
                  ></Image>
                </Navbar.Brand>
              </LinkContainer>

              {/* navLinks */}
              <Navbar.Collapse className="nav-collapse" id="navbarNavDropdown">
                <Nav className="main-navLink">
                  {menuItems.map((menu) => {
                    let depthLevel = 0;
                    return (
                      <MenuItems
                        menu={menu}
                        key={menu.id}
                        depthLevel={depthLevel}
                      />
                    );
                  })}
                </Nav>
              </Navbar.Collapse>
            </Col>
            {/* Right Elements */}
            <Col className="d-flex align-items-center justify-content-end gap-3 rightNavbar">
              <div className="search" onClick={() => setShowSearch(true)}>
                <BsSearch className="search-icon" />
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
                        placeholder={t('Search a Product')}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        className="input-modal shadown-none"
                      />
                      <Button
                        type="submit"
                        className="btn-hover-search-modal shadow-none btn-submit-modalSearch"
                        id="button-addon2"
                      >
                        <BsSearch />
                      </Button>
                    </InputGroup>
                  </Form>
                </Modal>
              )}
              <div className="compare" title="compare">
                <Link to="/compare">
                  <BsShuffle className="compare-icon" />
                </Link>
              </div>
              <div
                className="basketShop"
                onClick={() => setShowCartModal(true)}
              >
                <BsBasket3 className="cart-icon" />

                <span className="count-shop-item">
                  {state.cartItems.length}
                </span>
                {state.cartItems.length === 0 && (
                  <div className="hover-cart">
                    {t('your cart is currently empty')}
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
                <BsList className="bars" />
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
