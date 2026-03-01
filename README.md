# 📝 DayDraft

A lightweight, **offline-first** notepad application built with **Deno**, **React**, and **Dexie.js**.

DayDraft leverages the power of **IndexedDB** to ensure your notes are saved locally in your browser instantly as you type. No login required, no cloud latency, just your data on your machine.

## 🚀 Features

- **Offline-First:** Works entirely without an internet connection.
- **Reactive UI:** Real-time updates via `useLiveQuery`—the UI reflects database changes instantly.
- **Local Persistence:** Data is stored in your browser's IndexedDB, not RAM.
- **Modular Design:** Clean separation between View and Edit modes using React components.
- **Modern Stack:** Powered by Deno 2.x and Vite for a lightning-fast development experience.

---

## 🛠️ Tech Stack

- **Runtime:** [Deno](https://deno.com/)
- **Frontend Library:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Database Wrapper:** [Dexie.js](https://dexie.org/) (IndexedDB)
- **Language:** TypeScript

---

## 🏁 Getting Started

### Prerequisites
Ensure you have [Deno](https://docs.deno.com/runtime/manual/getting_started/installation) installed on your system. No Node.js or npm is required.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/litenite42/daydraft.git
   cd daydraft
   ```

2. Install dependencies:
   ```bash
   deno install
   ```

### Development
Start the development server with Hot Module Replacement (HMR):
```bash
deno task dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```text
daydraft/
├── src/
│   ├── components/
│   │   ├── NoteView.tsx   # Displays static note content
│   │   └── NoteEdit.tsx   # Handles database update logic
│   ├── db.ts              # Dexie database schema and configuration
│   ├── App.tsx            # Main application logic and state
│   └── main.tsx           # React entry point
├── deno.json              # Deno configuration and import maps
└── README.md
```

---

## 💾 Database Schema

The app uses a single table named `notes` with the following indexed fields:
- `++id`: Auto-incrementing primary key.
- `title`: The note's heading.
- `content`: The body of the note.
- `createdAt`: Timestamp for sorting.

---

## 📝 License
MIT