import { NextFunction, Request, Response } from "express";
import * as schemas from "../schemas/schemas.js"

async function validateDataNotes(req: Request, res: Response, next: NextFunction){
    const {title, note}: {title: string, note: string} =  req.body

    await schemas.dataNotesIsCorrect.validateAsync({title, note})

    next()
}

export {
    validateDataNotes
}