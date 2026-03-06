import { db, type Note } from '../db.ts';

interface Props {
  note: Note;
  onDone: () => void;
}

export function NoteEdit({ note, onDone }: Props) {
  const save = (field: string, value: string) => {
    db.notes.update(note.id!, { [field]: value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input 
        defaultValue={note.title} 
        onBlur={(e) => save('title', e.target.value)}
        style={{ fontWeight: 'bold', padding: '5px' }}
      />
      <textarea 
        defaultValue={note.content} 
        rows={4}
        onBlur={(e) => save('content', e.target.value)}
        style={{ padding: '5px' }}
      />
      <button onClick={onDone} style={{ backgroundColor: '#e0ffe0', padding: '5px' }}>
        Save & Close
      </button>
    </div>
  );
}