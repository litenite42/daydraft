import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db.ts';
import { NoteView } from './components/NoteView.tsx';
import { NoteEdit } from './components/NoteEdit.tsx';

import './index.css';
import './App.css';

export default function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  
  const notes = useLiveQuery(() => db.notes.toArray());

  const addNote = async () => {
    if (!title) return;
    await db.notes.add({ title, content, createdAt: Date.now() });
    setTitle(""); 
    setContent("");
  };

  return (
    <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Day Draft</h1>
      
      {/* Creation UI */}
      <div id="main-form" style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title..." />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content..." rows={3} />
        <button onClick={addNote}>Create Note</button>
      </div>

      {/* List UI */}
      <section style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', gap: '.75rem' }}>
        {notes?.map(note => (
          <div key={note.id} style={{ height: '100%', border: '1px solid #ccc', marginBottom: '15px', padding: '15px', borderRadius: '8px' }}>
            {editingId === note.id ? (
              <NoteEdit note={note} onDone={() => setEditingId(null)} />
            ) : (
              <NoteView note={note} onEdit={() => setEditingId(note.id!)} />
            )}
          </div>
        ))}
      </section>
    </main>
  );
}