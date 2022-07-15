import { NextFunction, Request, Response } from "express";
import * as schemas from "../schemas/schemas.js"

async function validationDataSentForNewCredential(req: Request, res: Response, next: NextFunction){
    const {url, userName, password, title}: {url: String, userName: String, password: String, title: String} = req.body
    await schemas.dataCredentialsisCorrect.validateAsync({url,userName, password, title})
    next()
}

export {
    validationDataSentForNewCredential
}