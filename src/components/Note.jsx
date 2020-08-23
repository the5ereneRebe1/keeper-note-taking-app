import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Note({ id, className, onDelete, onEdit, title, content }) {
  function handleClick() {
    onDelete(id);
  }

  function editOne() {
    onEdit(id);
  }
  return (
    <div className={`note ${className}`}>
      <h1>{title}</h1>
      <p>{content}</p>

      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button onClick={editOne}>
        <EditIcon />
      </button>
    </div>
  );
}

export default Note;
