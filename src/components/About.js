import React from "react";
import { useState } from "react/cjs/react.development";

export default function About(props) {
  let mystyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#404040" : "white",
    // "border-radius": "20px"
  };

  let border = {
    border: props.mode === "dark" ? "1px solid #B3B3B3" : "",
  };

  return (
    <div className="container p-3" style={mystyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={border}>
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
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textutils give you a way to analyze your text quickly and
              efficiently. Be it word count or character count.
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
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textutils is a free character counter tool that provides instant
              character count, word count & word count statistics for a given
              text. Textutils reports the number of characters. Thus it is
              suitable for writing text with words/character limit.
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
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              The word counter software works in any web browser such as Chrome, Firefox, Edge, Safari, Opera, It suits to count characters
              in facebook, blogs, books, excel documents, pdf documents, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
