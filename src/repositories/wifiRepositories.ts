import client from "../config/dataBase.js"

import wifi from "@prisma/client"



async function getAllWirelessByUserId(userId){
    return await client.wifi.findMany({
        select:{
            nameWireless: true,
            password: true,
            title: true
        },
        where: {userId}
    })
}

async function insertNewWireless(dataWifi) {
    await client.wifi.create({
        data: dataWifi
    })
}

export {
    getAllWirelessByUserId,
    insertNewWireless
}