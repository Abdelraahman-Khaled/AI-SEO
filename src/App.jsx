import React from "react";
import { BrowserRouter } from "react-router-dom";
import CallAction from "./components/CallAction";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <LogoTicker />
        <Features />
        <Clients />
        <CallAction />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
