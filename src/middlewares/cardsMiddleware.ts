import { NextFunction, Request, Response } from "express";
import * as schemas from "../schemas/schemas.js"

async function validationDataSentForNewCard(req: Request, res: Response, next: NextFunction){
    const {number, nameCard, cvc, expirationDate, password, isVirtual, type, title}: 
          {number: string, nameCard: string, cvc: string, expirationDate: string, password: string, isVirtual: boolean, type: string, title: string} = req.body

    const types = ["credit", "debit"]
    if(!types.includes(type)) throw {
        status: 422,
        message: "type not valid"
    }
    await schemas.dataCardIsCorrect.validateAsync({number, nameCard, cvc, expirationDate, password, isVirtual, type, title})
    next()
}

export {
    validationDataSentForNewCard
}