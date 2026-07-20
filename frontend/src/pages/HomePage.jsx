import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import NoteCard from '../components/NoteCard';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/notes");
      setNotes(res.data);
    } catch (error) {
      console.log("Error fetching notes", error);
      if (error.response && error.response.status === 429) {
        toast.error("Rate Limit Reached: Please wait a moment.");
      } else {
        toast.error("Failed to load notes");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.error("Error deleting note", error);
      if (error.response && error.response.status === 429) {
        toast.error("Rate Limit Reached: Please wait a moment.");
      } else {
        toast.error("Failed to delete note");
      }
    }
  };

  return (
    <div className='min-h-screen'>
      <Navbar />
      
      <div className="mx-auto max-w-6xl p-4">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : notes.length === 0 ? (
          <div className="text-center py-20 bg-base-200 rounded-xl border border-base-300 mt-6">
            <h2 className="text-2xl font-bold mb-2">No notes yet</h2>
            <p className="text-base-content/70">Click 'New Note' to create your first note!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {notes.map(note => (
              <NoteCard key={note._id} note={note} onDelete={handleDeleteNote} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;