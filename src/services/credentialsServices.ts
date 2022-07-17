import * as credentialsRepositories from "../repositories/credentialsRepositories.js"
import * as utils from "../utils/utils.js"
import {credentialsData} from "../repositories/credentialsRepositories.js"

async function insertAnNewCredential(dataCredentials: credentialsData){
    await credentialsRepositories.insertAnNewCredentialOnBank(dataCredentials)
}

async function verifyTitleIsUnique(userId: number, title: string){
    const allCredentials = await getAllCredentialsPerUser(userId)
    allCredentials.forEach(credential=>{
        if(credential.title===title) throw {
            status: 422,
            message: "This title already in use"
        }
    })
}

async function getCredentialAndVerifyMaster(credentialId: number, userId){
    const credential = await credentialsRepositories.getCredentialById(credentialId)
    if(!credential) throw {
        status: 404,
        message: "credential not found"
    }
    if(credential.userId !== userId) throw {
        status: 422,
        message: "This credential is not this user"
    }
    return credential
}

async function getAllCredentialsPerUser(userId: number){
    return await credentialsRepositories.listAllCredentialsByUserId(userId)
}



async function deleteCredential(credentialId: number){
    await credentialsRepositories.deleteCrdentialById(credentialId)
}

export {
    insertAnNewCredential,
    getAllCredentialsPerUser,
    verifyTitleIsUnique,
    getCredentialAndVerifyMaster,
    deleteCredential
}