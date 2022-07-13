import { Router } from "express";

const cardRouter = Router()

cardRouter.post("/card")
cardRouter.get("/card")
cardRouter.delete("/card")

export default cardRouter