import React from "react";
import Data from "../data";

function Note(props) {
  function deleteNote() {}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
        id="delete"
        type="submit"
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
