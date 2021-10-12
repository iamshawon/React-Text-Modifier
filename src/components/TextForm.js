import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleReset = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <>
      <div className="container  mb-3">
        <h3 className="mt-3 mb-3">{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Leave a text here"
          ></textarea>
        </div>
        <button className="btn btn-primary me-2 " onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success me-2" onClick={handleLowerCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info me-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-warning me-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-danger me-2" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="container">
        <h4>Text Summary</h4>
        <p>
          = {text.length === 0 ? "0 " : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          = {text.length === 0 ? "0 " : 0.008 * text.split(" ").length}
          Minutes read
        </p>

        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
