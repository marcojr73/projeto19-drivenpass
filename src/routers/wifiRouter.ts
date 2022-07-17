import { Router } from "express";
import { deleteAnWifi, getAllWifi, getWifi, registerAnNewWifi } from "../controllers/wifiController.js";
import { validationDataSentForNewWifi } from "../middlewares/wiFiMiddleware.js";

const wifiRouter = Router()

wifiRouter.post("/wifi/create", validationDataSentForNewWifi, registerAnNewWifi)
wifiRouter.get("/wifi", getAllWifi)
wifiRouter.get("/wifi/:id", getWifi)
wifiRouter.delete("/wifi/delete/:id", deleteAnWifi)

export default wifiRouter