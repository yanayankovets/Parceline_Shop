import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { MainPage } from "./components/main/mainPage";
import { Footer } from "./components/footer/footer";
import { ShippingAndReturns } from "./components/footer/shippingAndReturns";
import { CareAndCleaning } from "./components/footer/careAndCleaning";
import { TermsOfService } from "./components/footer/termsOfService";
import { Retailers } from "./components/footer/retailers";
import { ContactForm } from "./components/contact/contact";
import { Story } from "./components/story/story";
import { Shop } from "./components/shop/shop";
import { Item } from "./components/item/item";
import { Cart } from "./components/cart/cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/item" element={<Item />} />

        <Route path="/retailers" element={<Retailers />} />
        <Route path="/shipping" element={<ShippingAndReturns />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/care" element={<CareAndCleaning />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
