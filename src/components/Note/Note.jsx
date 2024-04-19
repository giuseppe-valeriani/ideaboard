import React, { useState } from "react";
import "./Note.scss";

const Note = ({ note, updateNote, deleteNote }) => {
  const [onDelete, setOnDelete] = useState(false);

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <article className="note">
      <div className="note__fields note__title">{note.title}</div>
      <div className="note__fields note__description">{note.description}</div>
      <div className="note__buttons">
        <button className="note__button" onClick={() => deleteNote(note.id)}>
          Delete
        </button>
        <button className="note__button">Edit</button>
      </div>
    </article>
  );
};

export default Note;
