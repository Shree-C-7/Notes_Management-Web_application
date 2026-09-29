# Currently works on local machine

# 📝 Notes App

A simple full-stack Notes Application built from scratch to understand the fundamentals of modern web application development.

The project demonstrates how a frontend communicates with a backend through REST-style APIs, how CRUD operations work, and how persistent data can be stored and managed using a SQLite database.

---

## 📌 Project Overview

This project started as a basic Notes application and was gradually developed into a database-backed full-stack application.

The application allows users to:

- Create notes
- View all notes
- Edit existing notes
- Delete notes
- Store notes permanently in a SQLite database

The project was built step-by-step to understand the complete flow of a web application:

```text
User
  ↓
Frontend
  ↓
JavaScript
  ↓
HTTP Request
  ↓
Express Backend
  ↓
SQL Query
  ↓
SQLite Database
  ↓
Response
  ↓
Frontend
  ↓
User

# 🚀 Features

1. Create Notes
Users can enter a note using the input field and click the Add Note button.
Example:
Input:
Learn Machine Learning

        ↓

POST /notes

        ↓

SQLite Database

        ↓

Note saved permanently

2. View Notes
When the application loads, the frontend requests all notes from the backend.
GET /notes

The backend retrieves the notes from SQLite and returns them as JSON.
Example response:
[
    {
        "id": 1,
        "text": "Learn JavaScript"
    },
    {
        "id": 2,
        "text": "Learn Node.js"
    }
]

The frontend then displays the notes on the webpage.

3. Edit Notes
Each note has an Edit button.
When the user edits a note, the frontend sends a PUT request:
PUT /notes/:id

Example:
PUT /notes/2

with:
{
    "text": "Learn Node.js and Express"
}

The backend updates the corresponding row in the SQLite database.

4. Delete Notes
Each note also has a Delete button.
When clicked, the frontend sends:
DELETE /notes/:id

Example:
DELETE /notes/2

The backend deletes the corresponding record from the database.

5. Persistent Data Storage
Initially, notes were stored in a JavaScript array:
let notes = [];

This meant that notes disappeared whenever the server restarted.
The application was later migrated to SQLite.
Now the architecture is:
Node.js
   ↓
better-sqlite3
   ↓
SQLite
   ↓
notes.db

Because the data is stored in notes.db, notes remain available after restarting the server.

# 🛠️ Technologies Used

Frontend
- HTML5
- CSS3
- JavaScript
Backend
- Node.js
- Express.js
Database
- SQLite
Database Library
- better-sqlite3
Development Tools
- Visual Studio Code
- npm
- PowerShell

# 📁 Project Structure
demo/
│
├── node_modules/
│
├── notes.db
│
├── package.json
├── package-lock.json
│
├── server.js
├── index.html
├── style.css
└── script.js

# ▶️ How to Run the Project

1. Clone/download the project
Open the project directory in a terminal.
Example:
cd D:\demo

2. Install dependencies
Run:
npm install

This installs the dependencies listed in package.json.
3. Start the server
Run:
node server.js

You should see:
Server running on port 3000

4. Open the application
Open your browser and visit:
http://localhost:3000

📦 Dependencies
The project currently uses:
express
better-sqlite3

They can be installed with:
npm install express better-sqlite3

# 🏗️ Current Architecture

                       NOTES APP

┌──────────────────────────────────────────────┐
│                    CLIENT                    │
│                                              │
│              Browser / Frontend              │
│                                              │
│       HTML + CSS + JavaScript + fetch()      │
└──────────────────────┬───────────────────────┘
                       │
                       │ HTTP / JSON
                       ▼
┌──────────────────────────────────────────────┐
│                    SERVER                    │
│                                              │
│              Node.js + Express               │
│                                              │
│  GET    /notes                               │
│  POST   /notes                               │
│  PUT    /notes/:id                           │
│  DELETE /notes/:id                           │
└──────────────────────┬───────────────────────┘
                       │
                       │ SQL
                       ▼
┌──────────────────────────────────────────────┐
│                   DATABASE                   │
│                                              │
│                    SQLite                    │
│                    notes.db                  │
│                                              │
│              ┌─────────────────┐             │
│              │      notes      │             │
│              ├───────┬─────────┤             │
│              │  id   │  text   │             │
│              └───────┴─────────┘             │
└──────────────────────────────────────────────┘

# 📚 Project Status
Completed
- [x] Node.js setup
- [x] npm project initialization
- [x] Express installation
- [x] Express server
- [x] Frontend HTML
- [x] CSS styling
- [x] Frontend JavaScript
- [x] Client-server communication
- [x] REST-style API
- [x] GET endpoint
- [x] POST endpoint
- [x] PUT endpoint
- [x] DELETE endpoint
- [x] CRUD functionality
- [x] SQLite integration
- [x] Database table creation
- [x] Persistent note storage
- [x] Database-backed GET
- [x] Database-backed POST
- [x] Database-backed PUT
- [x] Database-backed DELETE
- [x] Basic 404 handling
Planned
- [ ] UI redesign
- [ ] Better validation
- [ ] Search
- [ ] Timestamps
- [ ] Authentication
- [ ] Multi-user support
- [ ] Deployment
- [ ] AI features