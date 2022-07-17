import * as wifiRepositories from "../repositories/wifiRepositories.js"


async function getAllWireless(userId: number){
    return await wifiRepositories.getAllWirelessByUserId(userId)
}

async function insertNewWireless(dataWifi){
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


export {
    getAllWireless,
    insertNewWireless,
    getWifiAndVerifyMaster
}