import client from "../config/dataBase.js"

async function findByEmail(email: string){
    return client.users.findFirst({
        where: { email },
      });
}

export {
    findByEmail
}