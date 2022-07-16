import { Request, Response } from "express";

import * as notesServices from "../services/notesServices.js"
import * as utils from "../utils/utils.js"

async function registerAnNewSecurityNote(req: Request, res: Response){
    const {title, note}: {title: string, note: string} =  req.body
    const token: string = req.headers.authorization.replace("Bearer", "").trim()

    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    const allNotes = await notesServices.getAllNotes(userId)
    await notesServices.verifyTitleIsUnique(allNotes, title)
    await notesServices.insertanNewNote({note, title, userId})

    res.status(201).send("Security Note register sucessfull")
}

async function getNote(req: Request, res: Response){
    const id: number = parseInt(req.params.id)
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    
    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    const note = await notesServices.getNoteAndVerifyMaster(id, userId)

    res.status(200).send(note)
}

async function getAllNotes(req: Request, res: Response){
    const token: string = req.headers.authorization.replace("Bearer", "").trim()

    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    const allNotes = await notesServices.getAllNotes(userId)
    
    res.status(200).send(allNotes)
}

async function deleteAnNote(req: Request, res: Response){
    const id: number = parseInt(req.params.id)
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    
    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    await notesServices.getNoteAndVerifyMaster(id, userId)
    await notesServices.deleteNote(id)

    res.status(204).send("Security Note deleted sucessfull")
}

export {
    registerAnNewSecurityNote,
    getNote,
    getAllNotes,
    deleteAnNote
}