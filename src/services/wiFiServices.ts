import * as wifiRepositories from "../repositories/wifiRepositories.js"

async function getAllWireless(userId){
    return await wifiRepositories.getAllWirelessByUserId(userId)
}

async function insertNewWireless(dataWifi){
    await wifiRepositories.insertNewWireless(dataWifi)
}

export {
    getAllWireless,
    insertNewWireless
}