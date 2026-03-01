import Dexie, { type Table } from 'dexie';

// 1. Define the shape of a "Note"
export interface Note {
  id?: number; // Primary key (auto-incremented)
  title: string;
  content: string;
  createdAt: number;
}

// 2. Initialize the Database
export class DayDraftDB extends Dexie {
  notes!: Table<Note>; 

  constructor() {
    super('DayDraftDatabase');
    
    // Define tables and indexes
    // ++id means auto-incrementing primary key
    // title is indexed so we can search/sort by it later
    this.version(1).stores({
      notes: '++id, title, createdAt' 
    });
  }
}

export const db = new DayDraftDB();