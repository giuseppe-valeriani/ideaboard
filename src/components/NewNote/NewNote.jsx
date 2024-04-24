import React, { useState } from "react";
import "./NewNote.scss";

const template = {
  title: "",
  description: "",
};

const NewNote = ({ addNote }) => {
  const [addingNote, setAddingNote] = useState(false);
  const [note, setNote] = useState(template);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.description) {
      return setError(true);
    }

    let noteToBeAdd = {
      title: note.title,
      description: note.description,
      id: crypto.randomUUID(),
      date: Date.now(),
    };

    addNote(noteToBeAdd);
    setError(false);
    setNote(template);
    setAddingNote(!addingNote);
  };

  return (
    <article className="new-note">
      <button
        className="new-note__button"
        onClick={() => setAddingNote(!addingNote)}
      >
        {addingNote ? "cancel" : "add new note"}
      </button>
      {addingNote && (
        <form className="new-note__form" onSubmit={handleSubmit}>
          <input
            className={`new-note__input${error ? ` new-note__error` : ``}`}
            name="title"
            value={note.title}
            onChange={handleChange}
          />
          <textarea
            className={`new-note__input new-note__area${
              error ? ` new-note__error` : ``
            }`}
            name="description"
            value={note.description}
            onChange={handleChange}
          ></textarea>
          <button className="new-note__button" type="submit">
            Add
          </button>
        </form>
      )}
    </article>
  );
};

export default NewNote;
