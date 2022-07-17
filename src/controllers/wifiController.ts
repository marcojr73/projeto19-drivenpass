import { Request, Response } from "express";

import * as utils from "../utils/utils.js"
import * as wifiServices from "../services/wiFiServices.js"

async function registerAnNewWifi(req: Request, res: Response){
    let {nameWireless, password, title}: {nameWireless: string, password: string, title: string} = req.body
    const token: string = req.headers.authorization.replace("Bearer", "").trim()

    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    password = utils.encryptPassword(password) 
    await wifiServices.insertNewWireless({nameWireless, password, title, userId})
    
    res.status(201).send("wifi register sucessfull")
}

async function getWifi(req: Request, res: Response){
    const id: number = parseInt(req.params.id)
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    
    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    
    res.status(200).send("bala azul")
}

async function getAllWifi(req: Request, res: Response){
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    
    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    const allWireless = await wifiServices.getAllWireless(userId)
    
    res.status(200).send("bala azul")
}

async function deleteAnWifi(req: Request, res: Response){
    const id: number = parseInt(req.params.id)
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    
    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)

    res.status(204).send("bala azul")
}

export {
    registerAnNewWifi,
    getWifi,
    getAllWifi,
    deleteAnWifi
}