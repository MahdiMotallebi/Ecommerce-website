import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  allState,
  fetchCartItems,
  fetchComments,
  fetchCompare,
  fetchProducts,
  fetchWishList,
} from './features/shopSlice';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NoPage from './pages/noPage';
import Hero from './component/hero/hero';
import Login from './component/account/login';
import Register from './component/account/register';
import Footer from './component/footer/footer';
import SingleBlog from './component/singleBlog/singleBlog';
import Header from './component/header/header';
import Compare from './component/compare/compare';
import Loading from './component/loading/loading';
import ShopPage from './pages/shopPage';
import 'react-loading-skeleton/dist/skeleton.css';
import ScrollTop from './component/scrollTop/scrollTop';
import ProductDetail from './pages/productDetail';
import { ToastContainer } from 'react-toastify';
const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchComments());
    dispatch(fetchCartItems());
    dispatch(fetchWishList());
    dispatch(fetchCompare());
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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="singleBlog/:id" element={<SingleBlog />} />
        <Route path="productDetail/:id" element={<ProductDetail />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="compare" element={<Compare />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <ToastContainer />
      <Footer />
      {/* </>
      )} */}
    </>
  );
};

export default App;
