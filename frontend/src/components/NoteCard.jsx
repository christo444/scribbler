import { Pencil, Trash2 } from 'lucide-react';

const NoteCard = ({ note, onDelete }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
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
          <button className="hover:text-primary transition-colors p-1" title="Edit note">
            <Pencil className="size-4" />
          </button>
          <button 
            className="hover:text-error transition-colors p-1" 
            title="Delete note"
            onClick={() => onDelete && onDelete(note._id)}
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
