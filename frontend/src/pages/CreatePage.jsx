import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleCreateNote = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error("Title and Content are required");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await axios.post("http://localhost:5001/api/notes", { title, content });
      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      console.error("Error creating note:", error);
      toast.error("Failed to create note");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-4 max-w-6xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:text-primary transition-colors">
        <ArrowLeft className="size-5" />
        <span className="font-medium">Back to Notes</span>
      </Link>
      
      <div className="bg-base-200 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Create New Note</h2>
        
        <form onSubmit={handleCreateNote} className="space-y-6">
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
              {isSubmitting ? <span className="loading loading-spinner loading-sm"></span> : 'Create Note'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;