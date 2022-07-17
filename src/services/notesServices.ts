import * as notesRepositories from "../repositories/notesRepositories.js"

import {notesData} from "../repositories/notesRepositories.js"

async function verifyTitleIsUnique(allNotes, title: string){
    allNotes.forEach(notes => {
        if(notes.title === title) throw {
            status: 409,
            message: "this title already in use"
        }
    })
}

async function getNoteAndVerifyMaster(id: number, userId: number){
    const note = await notesRepositories.getNoteById(id)
    if(!note) throw {
        status: 404,
        message: "Security Note not found"
    }
    if(note.userId !== userId) throw {
        status: 422,
        message: "this Security Note not pertence this user"
    }
    return note
}

async function getAllNotes(userId: number){
    return await notesRepositories.getAllNotesByUser(userId)
}

async function insertanNewNote(noteData: notesData){
    await notesRepositories.insertNote(noteData)
}

async function deleteNote(id: number){
    await notesRepositories.deleteNoteById(id)
}

export {
    verifyTitleIsUnique,
    getAllNotes,
    insertanNewNote,
    getNoteAndVerifyMaster,
    deleteNote
}