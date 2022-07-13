import { Router } from "express";

const wifiRouter = Router()

wifiRouter.post("/wifi")
wifiRouter.get("/wifi")
wifiRouter.delete("/wifi")

export default wifiRouter