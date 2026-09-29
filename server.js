const express = require("express");
const Database = require("better-sqlite3");
const app = express();
const db = new Database("notes.db");
db.prepare(`
    CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL
    )
`).run();
app.use(express.static("."));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/notes", (req, res) => {
    const notes = db.prepare("SELECT id, text FROM notes").all();

    res.json(notes);
});
app.post("/notes", (req, res) => {
    const newNote = req.body.text;

    const result = db
        .prepare("INSERT INTO notes (text) VALUES (?)")
        .run(newNote);

    res.json({
        message: "Note added successfully",
        id: result.lastInsertRowid,
        note: newNote
    });
});
app.put("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedNote = req.body.text;

    const result = db
        .prepare("UPDATE notes SET text = ? WHERE id = ?")
        .run(updatedNote, id);

    if (result.changes === 0) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.json({
        message: "Note updated successfully",
        id: id,
        note: updatedNote
    });
});
app.delete("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const result = db
        .prepare("DELETE FROM notes WHERE id = ?")
        .run(id);

    if (result.changes === 0) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.json({
        message: "Note deleted successfully",
        id: id
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});