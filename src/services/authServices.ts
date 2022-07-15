import bcrypt from 'bcrypt';

import * as userRepositories from "../repositories/userRepositories.js"

async function validateEmail(email: string){
    const ans = await userRepositories.findByEmail(email)
    if(ans) throw {
        status: 422,
        message: "this email is already registered"
    }
}

function encryptedPassword(password){
    return bcrypt.hashSync(password, 10)
}

export {
    validateEmail,
    encryptedPassword
}