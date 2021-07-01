import React from "react";
import Data from "../data";
import DeleteIcon from '@material-ui/icons/Delete';
import Zoom from '@material-ui/core/Zoom';

function Note(props) {

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in="true">
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
        id="delete"
        type="submit"
      >
      <DeleteIcon />
      </button>
      </Zoom>
    </div>
  );
}

export default Note;
