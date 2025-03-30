import { useState, useEffect } from "react";
import axios from "axios";
import Clock from './components/Clock';

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

  const formatDateTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'medium' // Changed from 'short' to 'medium' to include seconds
    }).format(new Date(date));
  };

  const addNote = async () => {
    if (!title || !content) return alert("Title & Content required!");

    try {
      const noteData = {
        title,
        content,
        created_at: new Date().toISOString()
      };

      if (editingNoteId) {
        const response = await axios.put(`${API_URL}${editingNoteId}`, noteData);
        setNotes(notes.map((note) => note.id === editingNoteId ? response.data : note));
        setEditingNoteId(null);
      } else {
        const response = await axios.post(API_URL, noteData);
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
    <div className="min-h-screen bg-gradient-to-br from-dark-gradient1 via-dark-gradient2 to-dark-gradient3 text-dark-text p-6 font-mono">
      <Clock />
      <div className="max-w-7xl mx-auto">
        {/* Update header styling */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl backdrop-blur-sm">
            <span className="text-3xl select-none">📝</span>
          </div>
          <h1 className="text-5xl font-extrabold text-white">
            Notes++
          </h1>
        </div>

        <div className="w-full max-w-2xl mx-auto mb-12 bg-dark-card/90 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-dark-border/30 space-y-4">
          <input
            className="w-full p-4 bg-dark-background/70 border border-dark-border/50 text-dark-text rounded-lg outline-none focus:ring-2 focus:ring-dark-accent/50 transition-all duration-300 text-lg font-mono"
            type="text"
            placeholder="✨ Enter Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full p-4 bg-dark-background/70 border border-dark-border/50 text-dark-text rounded-lg outline-none focus:ring-2 focus:ring-dark-accent/50 transition-all duration-300 min-h-[150px] text-lg resize-y font-mono"
            placeholder="✍️ Enter Note Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold tracking-wide text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform active:scale-95"
            onClick={addNote}
          >
            {editingNoteId ? "🔄 Update Note" : "✨ Add Note"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="group bg-dark-card/90 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-dark-border/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden min-h-[200px]"
            >
              {/* Update hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              
              {/* Update title and date styling */}
              <h3 className="text-2xl font-bold mb-2 text-white relative z-10">
                {note.title}
              </h3>
              <p className="text-sm text-gray-300 mb-3 relative z-10">
                {formatDateTime(note.created_at)}
              </p>
              <p className="text-dark-text relative z-10 whitespace-pre-wrap break-words">
                {note.content}
              </p>

              {/* Update button container and buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  className="bg-rose-500 text-white h-7 w-[52px] rounded-[14px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer z-20 border border-rose-400/20 relative overflow-hidden"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(note.id);
                  }}
                  title="Delete Note"
                >
                  <span className="text-lg relative z-10">✖️</span>
                </button>
                <button
                  className="bg-blue-500 text-white h-7 w-[52px] rounded-[14px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer z-20 border border-blue-400/20 relative overflow-hidden"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingNoteId(note.id);
                    setTitle(note.title);
                    setContent(note.content);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  title="Edit Note"
                >
                  <span className="text-lg relative z-10">✏️</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
