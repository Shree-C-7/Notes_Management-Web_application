const noteInput = document.getElementById("noteInput");
const addButton = document.getElementById("addButton");
const notesList = document.getElementById("notesList");

addButton.addEventListener("click", async () => {
    const note = noteInput.value;

    if (note.trim() === "") {
        return;
    }

    await fetch("/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: note
        })
    });

    noteInput.value = "";

    loadNotes();
});

async function loadNotes() {
    const response = await fetch("/notes");
    const notes = await response.json();

    notesList.innerHTML = "";

    notes.forEach((note) => {
        const li = document.createElement("li");

        const noteText = document.createElement("span");
        noteText.textContent = note.text;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.addEventListener("click", () => {
            editNote(note.id, note.text);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            deleteNote(note.id);
        });

        li.appendChild(noteText);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        notesList.appendChild(li);
    });
}

async function editNote(id, oldNote) {
    const updatedNote = prompt("Edit your note:", oldNote);

    if (updatedNote === null) {
        return;
    }

    if (updatedNote.trim() === "") {
        return;
    }

    await fetch(`/notes/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: updatedNote
        })
    });

    loadNotes();
}

async function deleteNote(id) {
    await fetch(`/notes/${id}`, {
        method: "DELETE"
    });

    loadNotes();
}

loadNotes();