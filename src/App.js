import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/shopSlice";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoPage from "./pages/noPage";
import NavBar from "./component/header/navbar";
const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default App;
