import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import "./Board.scss";
import NewNote from "../NewNote/NewNote";

const Board = () => {
  const [storage, setStorage] = useState(null);

  useEffect(() => {
    const currentLocalStorage = localStorage.getItem("ideaboard");
    const getList = currentLocalStorage
      ? JSON.parse(currentLocalStorage)
      : null;
    getList?.length > 0 ? setStorage(getList) : setStorage([]);
    console.log("click");
  }, []);

  useEffect(() => {
    localStorage.setItem("ideaboard", JSON.stringify(storage));
    console.log("clack");
  }, [storage]);

  if (!storage) {
    return <section>Loading...</section>;
  }

  return (
    <section className="board">
      {storage.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <NewNote />
    </section>
  );
};

export default Board;
