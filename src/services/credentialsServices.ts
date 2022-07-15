import * as credentialsRepositories from "../repositories/credentialsRepositories.js"
import {credentialsData} from "../repositories/credentialsRepositories.js"

async function insertAnNewCredential(dataCredentials: credentialsData){
    await credentialsRepositories.insertAnNewCredentialOnBank(dataCredentials)
}

export {
    insertAnNewCredential
}