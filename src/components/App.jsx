import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { ThemeContext, themes } from "../theme-context";

export function App() {
  const [notes, setNotes] = useState([]);
  const [eNote, setEditNote] = useState(null);
  const [theme, setTheme] = useState(themes.dark);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      setEditNote(null);
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  const toggleTheme = () => {
    setTheme((theme) => (theme === themes.dark ? themes.light : themes.dark));
    document.body.style = `background:${theme.secondarybackground}`;
    document.body.style.backgroundImage =
      'url("https://www.transparenttextures.com/patterns/cubes.png")';
  };

  function editNote(id) {
    const note = notes.filter((noteItem, index) => {
      return index === id;
    });
    setEditNote(note);
  }
  // {
  //   eNote && eNote[0].title === noteItem.title ? "outlined" : ""
  // }
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Header changeTheme={toggleTheme} />
        <CreateArea onAdd={addNote} edit={eNote} />

        {notes.map((noteItem, index) => {
          console.log(eNote && eNote[0].title === noteItem.title);
          return (
            <Note
              className={
                eNote && eNote[0].title === noteItem.title ? "outlined" : ""
              }
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onEdit={editNote}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
