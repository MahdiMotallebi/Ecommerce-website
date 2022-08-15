import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NoPage = () => {
  const { t } = useTranslation();
  return (
    <div className="noPage d-flex flex-column  justify-content-center align-items-center vh-100 ">
      <h3 className="title-noPage">404</h3>
      <span className="subtitle-noPage">{t('page not found')}</span>
    </div>
  );
};

export default NoPage;
