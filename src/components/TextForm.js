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
            backgroundColor: props.mode === "dark" ? "#404040" : "white",
            color: props.mode === "dark" ? "#B3B3B3" : "black",
          }}
          rows="8"
        ></textarea>
      </div>

      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>
        Clear text
      </button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleCopyClick}>
        Copy text
      </button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleExtraSpaceClick}>
        Clear extra space
      </button>
      <div className="container my-2">
        {text.split(" ").filter((element) => {return element.length!==0}).length} words {text.length} characters
        <br />
        {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes to read
      </div>
    </div>
  );
}
