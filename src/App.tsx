import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db.ts';

import { useState } from 'react';

import { NoteList } from './components/NoteList.tsx'

import './index.css';
import './App.css';

export default function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const notes = useLiveQuery(() => db.notes.toArray());

  const addNote = async () => {
    if (!title) return;
    await db.notes.add({ title, content, createdAt: Date.now() });
    setTitle("");
    setContent("");
  };

  return (
    <main style={{ margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Day Draft</h1>

      {/* Creation UI */}
      <div id="main-form" style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title..." />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content..." rows={3} />
        <button onClick={addNote}>Create Note</button>
      </div>

      {/* List UI */}
      <NoteList notes={notes ?? []} ></NoteList>
    </main>
  );
}