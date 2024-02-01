import React from "react";
import Header from "./componets/Header/header";
import Nav from "./componets/Nav/nav";
import About from "./componets/About/about";
import Experience from "./componets/Experience/experience";
import Contacts from "./componets/Contacts/contacts";
import Portfolio from "./componets/portfolio/portfolio";
import Services from "./componets/Services/services";
import Footer from "./componets/Footer/footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Services />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
