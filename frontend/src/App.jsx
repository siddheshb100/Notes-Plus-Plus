import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/notes/";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch Notes
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setNotes(response.data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  // Add Note
  const addNote = async () => {
    if (!title || !content) return alert("Title & Content required!");
    
    try {
      const response = await axios.post(API_URL, { title, content });
      setNotes([...notes, response.data]); // Update state
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete Note
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}`);
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        🚀 Notes App
      </h1>

      {/* Input Fields */}
      <div className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <input
          className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md mb-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="text"
          placeholder="Enter Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md mb-3 outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="Enter Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold tracking-wide hover:scale-105 transition-transform"
          onClick={addNote}
        >
          ➕ Add Note
        </button>
      </div>

      

      {/* Notes Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
        {notes.map((note) => (
          <div
            key={note.id}
            className="relative bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700 hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-blue-400">{note.title}</h3>
            <p className="text-gray-300 mt-2">{note.content}</p>
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-sm rounded-full hover:bg-red-600 transition"
              onClick={() => deleteNote(note.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
