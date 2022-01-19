import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("success", "Text converted to uppercase.")
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("success", "Text converted to lowercase.")
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("success", "Text cleared.")
  };
  const handleCopyClick = () => {
    // var text = document.getElementById("myBox")
    // text.select()
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Copied to clipboard.")
  };

  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("success", "Extra spaces removed in the text.")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            // color: props.mode === "dark" ? "white" : "black",
          }}
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-info mx-2" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-danger mx-2" onClick={handleClearClick}>
        Clear text
      </button>
      <button className="btn btn-success mx-2" onClick={handleCopyClick}>
        Copy text
      </button>
      <button className="btn btn-warning mx-2" onClick={handleExtraSpaceClick}>
        Clear extra space
      </button>
      <div className="container my-2">
        {text.split(" ").length - 1} words {text.length} characters
        <br />
        {text.split(" ").length * 0.008} Minutes to read
      </div>
    </div>
  );
}
