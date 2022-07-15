import client from "../config/dataBase.js"
import { credentials } from "@prisma/client"

export type credentialsData = Omit<credentials, "id" | "createdAt">


async function insertAnNewCredentialOnBank(dataCredentials: credentialsData){
    await client.credentials.create({
        data: dataCredentials
    })
}

export{
    insertAnNewCredentialOnBank
} 