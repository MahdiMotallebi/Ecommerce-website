import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Products from '../products/products';
import { allState } from '../../features/shopSlice';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
const ProductsTab = () => {
  const state = useSelector(allState);
  const [key, setKey] = useState('featured');
  const { t } = useTranslation();
  return (
    <Container fluid>
      <h2 className="title-tab text-uppercase text-center">
        {t('special products')}
      </h2>
      <Tabs
        defaultActiveKey={key}
        activeKey={key}
        transition={false}
        onSelect={(k) => setKey(k)}
        id="controlled-tab-example"
        className="mb-3 react-tab"
      >
        <Tab eventKey="new arriaval" title={t('new arrival')}>
          <Row>
            {state.items.length > 0 &&
              state.items.slice(0, 2).map((item) => {
                return (
                  <Col
                    className="col-react-tab"
                    xs={6}
                    sm={4}
                    lg={3}
                    key={uuidv4()}
                  >
                    <Products item={item} />
                  </Col>
                );
              })}
          </Row>
        </Tab>
        <Tab eventKey="featured" title={t('featured')}>
          <Row>
            {state.items.length > 0 &&
              state.items.slice(0, 6).map((item) => {
                return (
                  <Col
                    className="col-react-tab"
                    xs={6}
                    sm={4}
                    lg={3}
                    key={uuidv4()}
                  >
                    <Products item={item} />
                  </Col>
                );
              })}
          </Row>
        </Tab>
        <Tab eventKey="special" title={t('special')}>
          <Row>
            {state.items.length > 0 &&
              state.items.map((item) => {
                return (
                  <Col
                    className="col-react-tab"
                    xs={6}
                    sm={4}
                    lg={3}
                    key={uuidv4()}
                  >
                    <Products item={item} />
                  </Col>
                );
              })}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ProductsTab;
