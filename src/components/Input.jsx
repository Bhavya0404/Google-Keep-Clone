import { func } from "prop-types";
import React, { useState } from "react";
import Data from "../data";
import Note from "./Note";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function Input(props) {
  const [isExpanded, setExpanded] = useState(false);

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
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="input-container">
      <div className="input">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Title"
            value={inputText.title}
          />
        )}

        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          type="text"
          placeholder="Take a note..."
          value={inputText.content}
          rows={isExpanded ? 3 : 1}
        />
        {isExpanded ? (
          <Zoom in={isExpanded}>
            <Fab size="medium" onClick={handleClick} type="submit">
              <AddIcon />
            </Fab>
          </Zoom>
        ) : null}
      </div>
    </div>
  );
}

export default Input;
