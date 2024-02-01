import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/ck.png";
import Socials from "./Socials";

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Calvin Klein&</h1>
        <h5 className="text-light">Fullstack Developer (Fresher)</h5>
        <CTA />
        <Socials />

        <a href="" className="scroll_down">
          Scroll Down
        </a>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="Scroll Down"></a>
      </div>
    </header>
  );
};

export default header;
