import { useState, useEffect } from "react";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]);

  const [note, setNote] = useState("");
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
    console.log(savedNotes);

  }, []);

  


  const addNote = () => {
    if (note.trim() !== "") {
      setNotes([...notes, { id: notes.length + 1, text: note }]);
      setNote("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="absolute top-0 left-0 w-full flex justify-center mt-8">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="px-4 py-2 mr-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 text-gray-100"
          placeholder="Write..."
        />
        <button
          onClick={addNote}
          className="inline-block  text-white uppercase text-4xl border-7 border-red-600 font-roboto tracking-widest transition-all duration-500 font-light hover:font-bold hover:tracking-widest hover:border-12 hover:border-red-600"
        >
          +
        </button>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
