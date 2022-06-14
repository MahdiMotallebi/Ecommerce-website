import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allState, fetchProducts } from "./features/shopSlice";
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
import Breadcrumb from "./component/breadCrumb/breadCrumb";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(allState);
  console.log(state.loading);
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      {state.loading === "loading" || state.loading === "" ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="singleBlog" element={<SingleBlog />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
