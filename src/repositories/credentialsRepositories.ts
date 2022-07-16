import client from "../config/dataBase.js"
import { credentials } from "@prisma/client"

export type credentialsData = Omit<credentials, "id" | "createdAt">


async function insertAnNewCredentialOnBank(dataCredentials: credentialsData){
    await client.credentials.create({
        data: dataCredentials
    })
}

async function getCredentialById(id: number){
    return await client.credentials.findUnique({
        where: {id}
    })
}

async function listAllCredentialsByUserId(userId: number){
    return await client.credentials.findMany({
        where: {userId}
    })
}

async function deleteCrdentialById(id: number){
    return await client.credentials.delete({
        where: {id}
    })
}

export{
    insertAnNewCredentialOnBank,
    listAllCredentialsByUserId,
    getCredentialById,
    deleteCrdentialById
} 