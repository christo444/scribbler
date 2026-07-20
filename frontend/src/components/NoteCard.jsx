import { Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const NoteCard = ({ note, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const confirmDelete = () => {
    onDelete && onDelete(note._id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="bg-base-200 rounded-xl p-6 border-t-4 border-primary flex flex-col h-full hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold mb-2 text-base-content">{note.title}</h3>
        <p className="text-base-content/70 flex-grow mb-6 line-clamp-3">
          {note.content}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-base-content/50">
            {formatDate(note.createdAt)}
          </span>
          
          <div className="flex items-center gap-2 text-base-content/50">
            <Link to={`/note/${note._id}`} className="hover:text-primary transition-colors p-1" title="Edit note">
              <Pencil className="size-4" />
            </Link>
            <button 
              className="hover:text-error transition-colors p-1" 
              title="Delete note"
              onClick={() => setShowDeleteModal(true)}
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-base-100 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-base-300">
            <h3 className="text-lg font-bold mb-2 text-base-content">Delete Note</h3>
            <p className="text-base-content/70 mb-6">
              Are you sure you want to delete "{note.title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button 
                className="btn btn-ghost" 
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-error" 
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteCard;
