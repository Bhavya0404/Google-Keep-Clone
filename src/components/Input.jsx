import { func } from "prop-types";
import React, { useState } from "react";
import Data from "../data";
import Note from "./Note";

function Input(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onChecked(inputText);
    setInputText({
        title: "",
        content: ""
     } );
    event.preventDefault();
  }

  return (
    <div className="input-container">
      <div className="input">
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          type="text"
          placeholder="Take a note..."
          value={inputText.content}
        />
        <button onClick={handleClick} type="submit">
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
