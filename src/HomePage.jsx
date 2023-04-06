import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Work from "./components/Work";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      <Sidebar />
      <Banner />
      <About />
      <Services />
      <Resume />
      <Work />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
