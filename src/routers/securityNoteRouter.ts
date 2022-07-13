import { Router } from "express";

const securityNote = Router()

securityNote.post("/notes")
securityNote.get("/notes")
securityNote.delete("/notes")

export default securityNote