import { Request, Response } from "express";

import * as utils from "../utils/utils.js"
import * as credentialsServices from "../services/credentialsServices.js"

async function insertNewCredential(req: Request, res: Response){
    let {url, userName, password, title}: {url: string, userName: string, password: string, title: string} = req.body
    const token: string = req.headers.authorization.replace("Bearer", "").trim()

    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    password = utils.encryptPassword(password)
    await credentialsServices.insertAnNewCredential({url, userName, password, title, userId})

    res.status(201).send("Data register with sucessfull on credentials")
}

async function getCredential(req: Request, res: Response){
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    const allCredentials = await credentialsServices.getAllCredentialsPerUser()
    res.send("bala azul")
}

async function getAllCredentials(req: Request, res: Response){
    res.send("bala azul")
}

async function deleteCredential(req: Request, res: Response){

    res.send("bala azul")
}

export {
    insertNewCredential,
    getCredential,
    getAllCredentials,
    deleteCredential
}