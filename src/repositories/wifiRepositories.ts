import client from "../config/dataBase.js"

import {wifi} from "@prisma/client"

export type wifiData = Omit<wifi, "id" | "createdAt">


async function getAllWirelessByUserId(userId: number){
    return await client.wifi.findMany({
        select:{
            id: true,
            nameWireless: true,
            password: true,
            title: true,
            userId: true
        },
        where: {userId}
    })
}

async function insertNewWireless(dataWifi) {
    await client.wifi.create({
        data: dataWifi
    })
}

async function getWifiById(id: number){
    return await client.wifi.findUnique({
        select:{
            nameWireless: true,
            password: true,
            title: true,
            userId: true
        },
        where: {id}
    })
}

async function deleteWifiById(id: number){
    return await client.wifi.delete({
        where: {id}
    })
}

export {
    getAllWirelessByUserId,
    insertNewWireless,
    getWifiById,
    deleteWifiById
}