import useLocalStorage from "../../hooks/useLocalStorage";
import Note from "../Note/Note";
import NewNote from "../NewNote/NewNote";
import "./Board.scss";

const Board = () => {
  const [storage, setStorage] = useLocalStorage("ideaboard", []);

  if (!storage) {
    return <section>Loading...</section>;
  }

  return (
    <section className="board">
      {storage.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <NewNote storage={storage} setStorage={setStorage} />
    </section>
  );
};

export default Board;
