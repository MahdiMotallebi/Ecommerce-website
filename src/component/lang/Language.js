import i18next from 'i18next';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { allState } from '../../features/shopSlice';
import { useTranslation } from 'react-i18next';
const theme = ['Dark', 'Light'];

const Language = () => {
  const state = useSelector(allState);
  const { t } = useTranslation();
  return (
    <div className="language p-3 bg-white shadow">
      <Container>
        <Row className="flex flex-column gap-2">
          <Col>
            <h6 className="text-uppercase fw-bold border-bottom mb-2 pb-2">
              {t('language')}
            </h6>
            <ul>
              {state.language.map((lang) => {
                return (
                  <li onClick={() => i18next.changeLanguage(lang.code)}>
                    {t(`${lang.name}`)}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col>
            <h6 className="text-uppercase fw-bold border-bottom mb-2 pb-2">
              {t('theme')}
            </h6>
            <ul>
              {theme.map((th) => {
                return <li>{t(`${th}`)}</li>;
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Language;
