import { NextFunction, Request, Response } from "express";
import * as schemas from "../schemas/schemas.js"

async function validationDataSentForNewWifi(req: Request, res: Response, next: NextFunction){
    const {nameWireless, password, title}: {nameWireless: string, password: string, title: string} = req.body

    await schemas.dataWifiIsCorrect.validateAsync({nameWireless, password, title})
    next()
}

export {
    validationDataSentForNewWifi
}