// Imports
import { useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/inedex";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import DestinationsPage from "./Components/DestinationsPage";
import AboutUsPage from "./Components/AboutUsPage";
import ContactUsPage from "./Components/ContactUsPage";
import SingleItem from "./Components/SingleItem";
import Layout from "./Components/Layout";
import LoginPage from "./Components/LoginPage";
import BasketPage from "./Components/BasketPage";
import ScrollToTop from "./Components/ScrollToTop";
import BackToTopButton from "./Components/BackToTopButton";
import BasketContext from "./Contexts/BasketContext";
// React Component
function App() {
  // states
  const [basket, setBasket] = useState([]);
  return (
    <>
      <BasketContext.Provider value={{ basket, setBasket }}>
        <BrowserRouter>
          <Layout>
            <ScrollToTop />
            <BackToTopButton />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Destinations" element={<DestinationsPage />} />
              <Route path="/Destinations/:id" element={<SingleItem />} />
              <Route path="/AboutUs" element={<AboutUsPage />} />
              <Route path="/ContactUs" element={<ContactUsPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Basket" element={<BasketPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </BasketContext.Provider>
    </>
  );
}

export default App;
