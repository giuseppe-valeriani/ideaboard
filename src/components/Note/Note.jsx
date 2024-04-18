import React from "react";
import "./Note.scss";

const Note = ({ note }) => {
  return (
    <article className="note">
      <div className="note__fields note__title">{note.title}</div>
      <div className="note__fields note__description">{note.description}</div>
    </article>
  );
};

export default Note;
