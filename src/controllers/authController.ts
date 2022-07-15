import { Request, Response } from "express";
import * as authService from "../services/authServices.js";

async function signUp(req: Request, res: Response){

    const {email, password}: {email: string, password: string} = req.body

    await authService.validateEmail(email)
    const passCrypt = authService.encryptedPassword(password)


    res.send("bala azul")
}

async function signIn(req: Request, res: Response){
    


    res.send("bala azul")
}

export {
    signUp,
    signIn
}