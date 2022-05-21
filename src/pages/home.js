import React from "react";

import Category from "../component/category/category";
import Shop from "../component/shop/shop";
const Home = () => {
  return (
    <div className="container-fluid">
      <Category />
      <Shop />
    </div>
  );
};

export default Home;
