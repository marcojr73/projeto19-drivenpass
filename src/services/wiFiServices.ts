import * as wifiRepositories from "../repositories/wifiRepositories.js"

import {wifiData} from "../repositories/wifiRepositories.js"


async function getAllWireless(userId: number){
    return await wifiRepositories.getAllWirelessByUserId(userId)
}

async function insertNewWireless(dataWifi: wifiData){
    await wifiRepositories.insertNewWireless(dataWifi)
}

async function getWifiAndVerifyMaster(id: number, userId: number){
    const wifi = await wifiRepositories.getWifiById(id)
    if(!wifi) throw {
        status: 404,
        message: "wifi not found"
    }
    if ( wifi.userId !== userId) throw {
        status: 422,
        message: "this wifi not pertence this user"
    }
    return wifi
}

async function deleteWifi(id: number){
    await wifiRepositories.deleteWifiById(id)
}


export {
    getAllWireless,
    insertNewWireless,
    getWifiAndVerifyMaster,
    deleteWifi
}