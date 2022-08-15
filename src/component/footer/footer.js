import React from 'react';
import { Row, Col, Form, Nav, Image, Button, Container } from 'react-bootstrap';
import LogoFooter from '../../img/black-logo.png';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsGoogle,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFillPinMapFill,
  BsFillPrinterFill,
} from 'react-icons/bs';

const Footer = () => {
  const { t } = useTranslation();
  const lang = cookies.get('i18next');
  const importAll = (r) => {
    return r.keys().map(r);
  };
  const footerIcon = importAll(
    require.context('../../img/icon-footer', false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} className="top-footer mb-3 mb-lg-5 pt-4 pb-lg-4">
            <Row>
              <Col xs={12} lg={6} className="left ">
                <h4 className="text-center text-lg-start text-uppercase fw-bold">
                  {t('title newsletter')}
                </h4>
                <h6 className="d-none d-lg-block">
                  {t('newsletter sub description')}
                </h6>
              </Col>
              <Col xs={12} lg={6} className="right mt-2 mt-lg-0">
                <Form className="form-subscribe d-flex justify-content-center justify-content-lg-end align-items-center gap-3">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      className="email-input rounded-0"
                      placeholder={t('enter your email')}
                    />
                  </Form.Group>

                  <Button
                    className="button-subscribe rounded-0 text-uppercase text-center"
                    type="submit"
                  >
                    {t('subscribe')}
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="mid-footer p-4">
            <Row className="gap-4 gap-sm-0">
              <Col xs={12} sm={6} lg={3} className="col-one mb-sm-4">
                <h3 className="pb-2 d-lg-none">about</h3>
                <div className="logo my-4 mt-lg-0 mb-lg-3">
                  <Image
                    src={LogoFooter}
                    alt="logo-footer"
                    loading="lazy"
                  ></Image>
                </div>
                <p>{t('footer description')}</p>
                <Nav className="d-flex gap-4 mt-3 flex-row justify-content-start align-items-center ">
                  <Nav.Item>
                    <Nav.Link>
                      <BsFacebook />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>
                      <BsTwitter />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>
                      <BsGoogle />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>
                      <BsInstagram />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12} sm={6} lg={3} className="col-two mb-sm-4">
                <h3 className=" pb-2">{t('my account')}</h3>
                <Nav className="d-flex flex-column gap-2">
                  <Nav.Item>
                    <Nav.Link>{t('womens')}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>{t('clothing')}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>{t('accessories')}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>{t('featured')}</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12} sm={6} lg={3} className="col-three mb-sm-4">
                <h3 className=" pb-2">{t('why we choose')}</h3>
                <Nav className="d-flex flex-column gap-2">
                  <Nav.Item>
                    <Nav.Link>{t('shipping & return')}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>{t('secure shopping')}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>{t('gallery')}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>{t('affiliate')}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>{t('contacts')}</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12} sm={6} lg={3} className="col-four mb-sm-4">
                <h3 className="pb-2">{t('store information')}</h3>
                <Nav className="d-flex flex-column gap-2">
                  <Nav.Item>
                    <BsFillPinMapFill
                      className={`${lang === 'en' ? 'me-2' : 'ms-2'}`}
                    />
                    {t('address store')}
                  </Nav.Item>
                  <Nav.Item>
                    <BsFillTelephoneFill
                      className={`${lang === 'en' ? 'me-2' : 'ms-2'}`}
                    />
                    {t('call us')}: 123-456-7898
                  </Nav.Item>
                  <Nav.Item>
                    <BsFillEnvelopeFill
                      className={`${lang === 'en' ? 'me-2' : 'ms-2'}`}
                    />
                    Support@Fiot.Com
                  </Nav.Item>
                  <Nav.Item>
                    <BsFillPrinterFill
                      className={`${lang === 'en' ? 'me-2' : 'ms-2'}`}
                    />
                    {t('fax')}: 123456
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="bg-white px-1 py-4">
          <Col xs={12} lg={6} className="text-center mb-3 mb-lg-0">
            <p className="text-copyright">2020-21 {t('copyright message')}</p>
          </Col>
          <Col xs={12} lg={6}>
            <Nav className="footer-icon-nav">
              {footerIcon.map((img) => {
                return (
                  <Nav.Item key={uuidv4()}>
                    <Nav.Link>
                      <Image src={img} className="footer-icon" loading="lazy" />
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
