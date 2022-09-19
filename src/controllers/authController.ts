import { Request, Response } from "express";
import * as authService from "../services/authServices.js";

async function signUp(req: Request, res: Response){

    let {email, password}: {email: string, password: string} = req.body

    await authService.validateIfEmailIsInUse(email)
    password = authService.encryptedPassword(password)
    authService.registerUser({email, password})

    res.status(201).send("User register sucessfull")
}

async function signIn(req: Request, res: Response){
    
    res.status(201).send("oi")
}

export {
    signUp,
    signIn
}