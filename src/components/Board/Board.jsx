import useLocalStorage from "../../hooks/useLocalStorage";
import Note from "../Note/Note";
import NewNote from "../NewNote/NewNote";
import "./Board.scss";

const Board = () => {
  const [storage, setStorage] = useLocalStorage("ideaboard", []);

  const addNote = (note) => {
    setStorage([...storage, note]);
  };

  const updateNote = (modifiedNote) => {
    let updatedStorage = storage.reduce((acc, curr) => {
      // If the modified note is not the current, leave the current untouched
      if (modifiedNote.id !== curr.id) {
        return [...acc, curr];
      }
      // Else, get the new one instead
      return [...acc, modifiedNote];
    }, []);

    setStorage(updatedStorage);
  };

  const deleteNote = (currentId) => {
    // Delete the note with the id of the one clicked
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
          <Note
            className="handle"
            note={singleNote}
            updateNote={updateNote}
            deleteNote={deleteNote}
          />
        </span>
      ))}
      <NewNote addNote={addNote} />
    </section>
  );
};

export default Board;
