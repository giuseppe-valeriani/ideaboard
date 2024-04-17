import React, { useState } from "react";
import "./NewNote.scss";

const template = {
  title: "",
  description: "",
};

const NewNote = ({ storage, setStorage }) => {
  const [addNote, setAddNote] = useState(false);
  const [note, setNote] = useState(template);

  const handleChange = (e) => {
    console.log(note);
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <article>
      <button onClick={() => setAddNote(!addNote)}>add new note</button>
      {addNote && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" onChange={handleChange} />
          <textarea
            type="text"
            name="description"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Add</button>
        </form>
      )}
    </article>
  );
};

export default NewNote;
