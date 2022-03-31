const { Router } = require("express");
const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deletenote,
} = require("../controllers/notes.controller");

// Crear pedido
router.get("/notes/add", renderNoteForm);

router.post("/notes/new-note", createNewNote);

// Ver las pedidos
router.get("/notes", renderNotes);

// Editar los pedidos
router.get("/notes/edit/:id", renderEditForm)

router.put("/notes/edit-note/:id", updateNote)

//Eliminar
router.delete("/notes/delete/:id", deletenote);

module.exports = router;
