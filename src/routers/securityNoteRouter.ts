import { Router } from "express";
import { deleteAnNote, getAllNotes, getNote, registerAnNewSecurityNote } from "../controllers/securityNoteController.js";
import { validateDataNotes } from "../middlewares/notesMiddleware.js";

const securityNote = Router()

securityNote.post("/notes/create",validateDataNotes, registerAnNewSecurityNote)
securityNote.get("/notes/:id", getNote)
securityNote.get("/notes", getAllNotes)
securityNote.delete("/notes/delete/:id", deleteAnNote)

export default securityNote