import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import Cryptr from "cryptr"

dotenv.config()

async function validatetionAndSendUserIfTokenCorrect(token: string){

    if (!token) throw {
        status: 401,
        message: "Token not sent"
    }

    const {KEYJWT} = process.env
    const {userId} = jwt.verify(token, KEYJWT, function(err, decoded){
        if(err) throw {
            status: 401,
            message: "Token expired or invalid"
        } 
        return decoded
    }) as any
    return userId
}

function encryptPassword(password: string){
    const {KeyCryptr} = process.env
    const cryptr = new Cryptr(KeyCryptr)
    return cryptr.encrypt(password)
}

export {
    validatetionAndSendUserIfTokenCorrect,
    encryptPassword
}