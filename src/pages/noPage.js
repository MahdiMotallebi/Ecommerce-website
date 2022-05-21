import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="noPage d-flex flex-column  justify-content-center align-items-center vh-100 ">
      <h3 className="title-noPage">404</h3>
      <span className="subtitle-noPage">page not found</span>
      <Link className="btn btn-dark px-3 btn-noPage" to="/">
        home
      </Link>
    </div>
  );
};

export default NoPage;
