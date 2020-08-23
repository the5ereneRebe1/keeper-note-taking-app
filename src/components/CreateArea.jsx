import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";

function isEmpty(string) {
  return string.length === 0 || !string.trim();
}
function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const container = React.createRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        container.current &&
        !container.current.contains(event.target) &&
        !props.edit
      ) {
        if (!isEmpty(note.content)) props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  useEffect(() => {
    if (props.edit !== null) {
      setExpanded(true);
      setNote(props.edit[0]);
    }
  }, [props.edit]);
  function expand(event) {
    setExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpanded(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" ref={container}>
        {isExpanded && (
          <input
            style={{ fontWeight: "bold" }}
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
