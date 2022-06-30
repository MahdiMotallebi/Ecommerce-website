import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allState, fetchComments, fetchProducts } from "./features/shopSlice";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoPage from "./pages/noPage";
import Hero from "./component/hero/hero";
import Login from "./component/account/login";
import Register from "./component/account/register";
import Footer from "./component/footer/footer";
import SingleBlog from "./component/singleBlog/singleBlog";
import Header from "./component/header/header";
import Loading from "./component/loading/loading";
import AllShop from "./component/shop/allShop";
import Breadcrumb from "./component/breadCrumb/breadCrumb";
import "react-loading-skeleton/dist/skeleton.css";
import ScrollTop from "./component/scrollTop/scrollTop";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(allState);

  React.useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchComments());
  }, []);

  return (
    <>
      {/* {state.loading === "loading" || state.loading === "faild" ? (
        <Loading />
      ) : (
        <> */}
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="singleBlog" element={<SingleBlog />} />
        <Route path="shop" element={<AllShop />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
      {/* </>
      )} */}
    </>
  );
};

export default App;
