import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/notes/";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setNotes(response.data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  const addNote = async () => {
    if (!title || !content) return alert("Title & Content required!");

    try {
      if (editingNoteId) {
        const response = await axios.put(`${API_URL}${editingNoteId}`, { title, content });
        setNotes(notes.map((note) => note.id === editingNoteId ? response.data : note));
        setEditingNoteId(null);
      } else {
        const response = await axios.post(API_URL, { title, content });
        setNotes([...notes, response.data]);
      }
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}`);
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="min-h-screen bg-dark-background text-dark-text flex flex-col items-center justify-center p-6 space-y-6 font-sans">
      <h1 className="text-4xl font-extrabold text-dark-accent">
        📝 Notes++
      </h1>

      <div className="w-full max-w-xl bg-dark-card p-6 rounded-lg shadow-md border border-dark-border space-y-4">
        <input
          className="w-full p-3 bg-dark-background border border-dark-border text-dark-text rounded-md outline-none focus:ring-2 focus:ring-dark-accent transition"
          type="text"
          placeholder="Enter Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-3 bg-dark-background border border-dark-border text-dark-text rounded-md outline-none focus:ring-2 focus:ring-dark-accent transition"
          placeholder="Enter Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold tracking-wide shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          onClick={addNote}
          >
          {editingNoteId ? "🔄 Update Note" : "➕ Add Note"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-dark-card p-5 rounded-lg shadow-md border border-dark-border hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-dark-accent">{note.title}</h3>
            <p className="text-dark-text mt-2">{note.content}</p>

            <button
              className="absolute top-2 right-2 bg-red-500 text-dark-background px-3 py-1 text-sm rounded-full hover:bg-red-600 transition"
              onClick={() => deleteNote(note.id)}
            >
              ❌
            </button>

            <button
              className="absolute top-10 right-2 bg-blue-500 text-dark-background px-3 py-1 text-sm rounded-full hover:bg-blue-600 transition"
              onClick={() => {
                setEditingNoteId(note.id);
                setTitle(note.title);
                setContent(note.content);
              }}
            >
              ✏️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
