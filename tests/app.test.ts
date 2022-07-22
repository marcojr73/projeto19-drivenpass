import supertest from "supertest"
import app from "../src"
import client from "../src/config/dataBase"
import dotenv from "dotenv"

dotenv.config()

console.log("tests running on base" + process.env.DATABASE_URL)

beforeEach(async ()=> {
    await client.$executeRaw`DELETE FROM users`
})

const login = {
    email: "marcola@driven.com",
    password: "4815162342"
}

describe("validation signup", () => {
    it("given email and password create account", async () => {
        const response = await supertest(app).post("/sign-up").send(login)
        expect(response.statusCode).toBe(201)
    })

    it("receber um token ao fazer o login correto", async () => {
        const response = await supertest(app).post("/sign-in").send(login)
        const {token} = response.body
        expect(token).not.toBeNull()
    })
    
    it("given email and password already in use fail signup", async () => {
        await supertest(app).post("/sign-up").send(login)
        const response = await supertest(app).post("/sign-up").send(login)
        expect(response.statusCode).toBe(422)
    })

})

afterAll(async () => {
    await client.$disconnect();
});

