import React, { useState } from "react";
import "./Note.scss";

const Note = ({ note, updateNote, deleteNote }) => {
  const [onDelete, setOnDelete] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [currentNote, setCurrentNote] = useState(note);

  const handleDelete = (id) => {
    deleteNote(id);
    setOnDelete(false);
  };

  const handleEdit = () => {
    setCurrentNote({ ...currentNote, date: Date.now() });
    updateNote(currentNote);
    setOnEdit(false);
  };

  const handleChange = (e) => {
    setCurrentNote({ ...currentNote, [e.target.name]: e.target.value });
  };

  const readableDate = new Date(note.date).toDateString();

  return (
    <article className="note">
      {onEdit ? (
        <>
          <input
            name="title"
            value={currentNote.title}
            onChange={handleChange}
            className="note__fields note__title"
          />
          <textarea
            name="description"
            value={currentNote.description}
            onChange={handleChange}
            className="note__fields note__description"
          ></textarea>
        </>
      ) : (
        <>
          <div className="note__fields note__title">{note.title}</div>
          <div className="note__fields note__description">
            {note.description}
          </div>
          <div className="note__date">Last Update on: {readableDate}</div>
        </>
      )}
      <div className="note__buttons">
        <button
          className="note__button"
          onClick={
            onDelete ? () => handleDelete(note.id) : () => setOnDelete(true)
          }
        >
          {onDelete ? "are you sure?" : "delete"}
        </button>
        <button
          className="note__button"
          onClick={
            onDelete
              ? () => setOnDelete(false)
              : onEdit
              ? handleEdit
              : () => setOnEdit(true)
          }
        >
          {onDelete ? "no" : onEdit ? "confirm" : "edit"}
        </button>
      </div>
    </article>
  );
};

export default Note;
