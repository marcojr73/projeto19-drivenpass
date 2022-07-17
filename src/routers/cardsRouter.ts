import { Router } from "express";
import { deleteAnCard, getAllCards, getAnCard, insertNewCard } from "../controllers/cardsController.js";
import { validationDataSentForNewCard } from "../middlewares/cardsMiddleware.js";

const cardRouter = Router()

cardRouter.post("/card/create",validationDataSentForNewCard, insertNewCard)
cardRouter.get("/card", getAllCards)
cardRouter.get("/card/:id", getAnCard)
cardRouter.delete("/card/delete/:id", deleteAnCard)

export default cardRouter