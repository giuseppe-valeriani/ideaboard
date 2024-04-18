import useLocalStorage from "../../hooks/useLocalStorage";
import Note from "../Note/Note";
import NewNote from "../NewNote/NewNote";
import "./Board.scss";

const Board = () => {
  const [storage, setStorage] = useLocalStorage("ideaboard", []);

  const addNote = (note) => {
    setStorage([...storage, note]);
  };

  if (!storage) {
    return <section>Loading...</section>;
  }

  return (
    <section className="board">
      {storage.map((singleNote) => (
        <span key={singleNote.id} className="board__display">
          <Note note={singleNote} />
        </span>
      ))}
      <NewNote addNote={addNote} />
    </section>
  );
};

export default Board;
