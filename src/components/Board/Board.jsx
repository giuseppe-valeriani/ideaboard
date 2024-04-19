import useLocalStorage from "../../hooks/useLocalStorage";
import Note from "../Note/Note";
import NewNote from "../NewNote/NewNote";
import "./Board.scss";

const Board = () => {
  const [storage, setStorage] = useLocalStorage("ideaboard", []);

  const addNote = (note) => {
    setStorage([...storage, note]);
  };

  const updateNote = (modifiedNote) => {};

  const deleteNote = (currentId) => {
    let updatedStorage = storage.filter((el) => el.id !== currentId);
    setStorage(updatedStorage);
  };

  if (!storage) {
    return <section>Loading...</section>;
  }

  return (
    <section className="board">
      {storage.map((singleNote) => (
        <span key={singleNote.id} className="board__display">
          <Note className="handle" note={singleNote} deleteNote={deleteNote} />
        </span>
      ))}
      <NewNote addNote={addNote} />
    </section>
  );
};

export default Board;
