import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WaterPurifierServices from "../components/WaterPurifierServices";
import Products from "../components/Products";
import MaintenancePlans from "../components/MaintenancePlans";
import BestProvider from "../components/BestProvider";
import Brands from "../components/Brands";
import Filters from "../components/Filters";
import BookService from "../components/BookService";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <WaterPurifierServices />
      <Products />
      <MaintenancePlans />
      <BestProvider />
      <Brands />
      <Filters />
      <BookService />
      <Footer />
    </div>
  );
};

export default Index;
