import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Breadcrumb = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const pathName = pathname.split('/').filter((x) => x);
  return (
    <div className="breadCrumb-container">
      <Container>
        <Row>
          <Col>
            <div className="breadCrumb-nav p-4">
              <Link to="/" className="text-capitalize">
                {t('home')}
              </Link>
              {pathName.map((p, i) => {
                const lastIndex = i === pathName.length - 1;
                const routeTo = `/${pathName.slice(0, i + 1).join('/')}`;

                return !lastIndex ? (
                  <Link className="text-capitalize" to={routeTo}>
                    / {t(`${p}`)}
                  </Link>
                ) : (
                  <span className="text-capitalize">/ {t(`${p}`)}</span>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Breadcrumb;
