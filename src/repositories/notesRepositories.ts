import client from "../config/dataBase.js"

import {security_notes} from "@prisma/client"

export type notesData = Omit<security_notes, "id" | "createdAt">

async function getAllNotesByUser(userId){
    return await client.security_notes.findMany({
        select: {
            note: true,
            title: true,
            userId: true
        },
        where: { userId }
    })
}

async function getNoteById(id: number){
    return await client.security_notes.findUnique({
        select: {
            note: true,
            title: true,
            userId: true
        },
        where: {id}
    })
}

async function insertNote(noteData: notesData){
    return client.security_notes.create({
        data: noteData
    })
}

async function deleteNoteById(id: number){
    return await client.security_notes.delete({
        where: {id}
    })
}

export {
    getAllNotesByUser,
    insertNote,
    getNoteById,
    deleteNoteById
}