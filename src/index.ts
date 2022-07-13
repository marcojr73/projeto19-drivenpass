import express from "express"
import "express-async-errors"

import dotenv from "dotenv"
import cors from "cors"

import cardRouter from "./routers/cardsRouter.js"
import authRouter from "./routers/authRouter.js"
import credentialRouter from "./routers/credentialsRouter.js"
import securityNote from "./routers/securityNoteRouter.js"
import wifiRouter from "./routers/wifiRouter.js"
import errorHandler from "./middlewares/errorHandlerMiddleware.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(cardRouter)
app.use(authRouter)
app.use(credentialRouter)
app.use(securityNote)
app.use(wifiRouter)

app.use(errorHandler)

const PORT = +process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server up on port ${PORT}`)
})