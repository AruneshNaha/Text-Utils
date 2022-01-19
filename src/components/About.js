import React from "react";
import { useState } from "react/cjs/react.development";

export default function About() {
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable dark mode")

  let darkmode = {
    color: "white",
    backgroundColor: "black",
    text: "Enable light mode"
  };

  let lightmode = {
    color: "black",
    backgroundColor: "white",
    text: "Enable dark mode"
  };

  const toggleStyle = () => {
    if (mystyle.color === "black") {
      setMystyle(darkmode)
      setBtnText(darkmode.text)
    }else{
      setMystyle(lightmode)
      setBtnText(lightmode.text)
    }
  }

  const darkMode = () => {
    toggleStyle();
  };

  return (
    <div className="container" style={mystyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item's accordion body.</strong> Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Alias,
              mollitia.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the second item's accordion body.</strong> Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
              dolorum!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle} style={mystyle}>
              <strong>This is the third item's accordion body.</strong> Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              adipisci.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <button type="button" className="btn btn-primary" onClick={darkMode}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
