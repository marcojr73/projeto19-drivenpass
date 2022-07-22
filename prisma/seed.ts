import client from "../src/config/dataBase.js";
import bcrypt from "bcrypt"


async function main () {
    await client.users.upsert({
        where: {email:"admin@driven.com"},
        update: {},
        create:{
            email: "admin@driven.com",
            password: bcrypt.hashSync("4815162342", 10)    
        }
    })
}

main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(async () => {
    await client.$disconnect()
})