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
        select:{
            url: true,
            userName: true,
            password: true,
            title: true,
            userId: true
        },
        where: {id}
    })
}

async function listAllCredentialsByUserId(userId: number){
    return await client.credentials.findMany({
        select:{
            id: true,
            url: true,
            userName: true,
            password: true,
            title: true,
            userId: true
        },
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