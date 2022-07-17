import { Request, Response } from "express";

import * as utils from "../utils/utils.js" 
import * as servicesCard from '../services/cardsServices.js'
import {cardsData} from "../repositories/cardsRepositories.js"

async function insertNewCard(req: Request, res: Response){
    let {number, nameCard, cvc, expirationDate, password, isVirtual, type, title}: cardsData = req.body
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    
    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    const allCards = await servicesCard.getAllCards(userId)
    await servicesCard.verifyTitleCardIsUnique(title, allCards)
    password = utils.encryptPassword(password)    
    cvc = utils.encryptPassword(cvc)
    await servicesCard.insertNewCard({number, nameCard, cvc, expirationDate, password, isVirtual, type, title, userId})

    res.status(201).send("Card data register sucessfull")
}

async function getAllCards(req: Request, res: Response){
    const token: string = req.headers.authorization.replace("Bearer", "").trim()

    const userId = await utils.validatetionAndSendUserIfTokenCorrect(token)
    let allCard = await servicesCard.getAllCards(userId)
    allCard = await servicesCard.decryptAllPasswordCvc(allCard)

    res.status(200).send(allCard)
}

async function getAnCard(req: Request, res: Response){
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    const cardId: number =  parseInt(req.params.id)
    
    const userId: number = await utils.validatetionAndSendUserIfTokenCorrect(token)
    let card = await servicesCard.getCardAndVerifyMaster(cardId, userId)
    card.password = utils.decryptPassword(card.password)
    card.cvc = utils.decryptPassword(card.cvc)

    res.status(200).send(card)
}

async function deleteAnCard(req: Request, res: Response){
    const token: string = req.headers.authorization.replace("Bearer", "").trim()
    const cardId: number =  parseInt(req.params.id)
    
    const userId: number = await utils.validatetionAndSendUserIfTokenCorrect(token)
    await servicesCard.getCardAndVerifyMaster(cardId, userId)
    await servicesCard.deleteCard(cardId)

    res.status(204).send("deleted")
}

export {
    insertNewCard,
    getAllCards,
    getAnCard,
    deleteAnCard
}