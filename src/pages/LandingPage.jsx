import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainLayout from "../layouts/MainLayout";
import DefaultLayout from "../layouts/DefaultLayout";

const LandingPage = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
      </MainLayout>
      
    </div>
  );
};

export default LandingPage;
