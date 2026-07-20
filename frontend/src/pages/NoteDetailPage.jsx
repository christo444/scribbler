import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const NoteDetailPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/notes/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.error("Error fetching note:", error);
        toast.error("Failed to load note for editing");
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchNote();
  }, [id, navigate]);

  const handleUpdateNote = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error("Title and Content are required");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await axios.put(`http://localhost:5001/api/notes/${id}`, { title, content });
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating note:", error);
      toast.error("Failed to update note");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 max-w-6xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:text-primary transition-colors">
        <ArrowLeft className="size-5" />
        <span className="font-medium">Back to Notes</span>
      </Link>
      
      <div className="bg-base-200 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Edit Note</h2>
        
        <form onSubmit={handleUpdateNote} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <input 
              type="text" 
              placeholder="Note title" 
              className="input input-bordered w-full bg-base-100" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Content</label>
            <textarea 
              placeholder="Write your note here..." 
              className="textarea textarea-bordered w-full bg-base-100 min-h-[150px] resize-y"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="btn btn-primary px-8 rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? <span className="loading loading-spinner loading-sm"></span> : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NoteDetailPage;