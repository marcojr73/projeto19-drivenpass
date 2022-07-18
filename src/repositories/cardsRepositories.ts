import client from "../config/dataBase.js"

import {cards} from "@prisma/client"

export type cardsData = Omit<cards, "id" | "createdAt">


async function getAllCardsByUserId(userId: number){
    return await client.cards.findMany({
        select: {
            nameCard: true,
            cvc: true,
            expirationDate: true,
            title: true,
            password: true,
            userId: true,
            number: true,
            isVirtual: true,
            type: true
        },
        where: {userId}
    })
}

async function insertAnNewCardOnBank(dataCard: cardsData){
    await client.cards.create({
        data: dataCard
    })
}

async function getCardById(id: number){
    return await client.cards.findUnique({
        select:{
            nameCard: true,
            cvc: true,
            expirationDate: true,
            title: true,
            password: true,
            userId: true,
            number: true,
            isVirtual: true,
            type: true
        },
        where: {id}
    })
}

async function deleteCardById(id){
    await client.cards.delete({
        where:{id}
    })
}

export {
    getAllCardsByUserId,
    insertAnNewCardOnBank,
    getCardById,
    deleteCardById
}