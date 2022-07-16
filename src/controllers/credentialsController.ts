import { Request, Response } from "express";

import * as utils from "../utils/utils.js"
import * as credentialsServices from "../services/credentialsServices.js"

async function insertNewCredential(req: Request, res: Response){
    let {url, userName, password, title}: {url: string, userName: string, password: string, title: string} = req.body
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    
    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    password = utils.encryptPassword(password)
    await credentialsServices.verifyTitleIsUnique(userId, title)
    await credentialsServices.insertAnNewCredential({url, userName, password, title, userId})
    
    res.status(201).send("Data register with sucessfull on credentials")
}

async function getCredential(req: Request, res: Response){
    const credentialId: number =  parseInt(req.params.id)
    const token: string = req.headers.authorization.replace("Bearer", "").trim()

    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    let credential = await credentialsServices.getCredentialAndVerifyMaster(credentialId, userId)
    credential.password = utils.decryptPassword(credential.password)

    res.status(200).send(credential)
}

async function getAllCredentials(req: Request, res: Response){
    const token: string = req.headers.authorization.replace("Bearer", "").trim()

    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    let allCredentials = await credentialsServices.getAllCredentialsPerUser(userId)
    allCredentials = await credentialsServices.decryptAllPassword(allCredentials)

    res.status(200).send(allCredentials)
}

async function deleteCredential(req: Request, res: Response){
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    const credentialId: number =  parseInt(req.params.id)
    
    const userId: number = await utils.validatetionAndSendUserIfTokenCorrect(token)
    await credentialsServices.getCredentialAndVerifyMaster(credentialId, userId)
    await credentialsServices.deleteCredential(credentialId)

    res.status(204).send("deleted")
}

export {
    insertNewCredential,
    getCredential,
    getAllCredentials,
    deleteCredential
}