import { useState } from 'react';

import type { Note } from "../db.ts";

import { NoteView } from './NoteView.tsx';
import { NoteEdit } from './NoteEdit.tsx';

interface ListProps {
    notes: Note[];
}

export function NoteList({ notes }: ListProps) {
    const [editingId, setEditingId] = useState<number | null>(null);

    return (
        <section id="note-list">
            {notes?.map(note => (
                <div key={note.id} style={{ border: '1px solid #ccc', marginBottom: '15px', padding: '15px', borderRadius: '8px' }}>
                    {editingId === note.id ? (
                        <NoteEdit note={note} onDone={() => setEditingId(null)} />
                    ) : (
                        <NoteView note={note} onEdit={() => setEditingId(note.id!)} />
                    )}
                </div>
            ))}
        </section>
    );
}