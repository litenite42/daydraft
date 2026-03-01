import { db } from '../db.ts';
import type { Note } from '../db.ts';

interface Props {
  note: Note;
  onEdit: () => void;
}

export function NoteView({ note, onEdit }: Props) {
  return (
    <>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0 }}>{note.title}</h3>
          <small>{new Date(note.createdAt).toLocaleDateString()}</small>

          <hr />
        </div>
        <p style={{ width: '100%', textAlign: 'left', whiteSpace: 'pre-wrap' }}>{note.content}</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button onClick={onEdit}>Edit</button>
          <button onClick={() => db.notes.delete(note.id!)} style={{ color: 'red' }}>Delete</button>
        </div>
      </div>
    </>
  );
}