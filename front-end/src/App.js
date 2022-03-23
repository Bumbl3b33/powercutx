import React from "react";
import { Routes, Route } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ppOptions from "./config/ppOptions";
import "bootstrap/dist/css/bootstrap.min.css";

//Pages
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Donate from "./pages/donate/donate";

function App() {
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </PayPalScriptProvider>
  );
}

export default App;
