import { Router } from "express";
import { registerAnNewWifi } from "../controllers/wifiController.js";
import { validationDataSentForNewWifi } from "../middlewares/wiFiMiddleware.js";

const wifiRouter = Router()

wifiRouter.post("/wifi/create", validationDataSentForNewWifi, registerAnNewWifi)
wifiRouter.get("/wifi")
wifiRouter.get("/wifi/:id")
wifiRouter.delete("/wifi/delete/:id")

export default wifiRouter