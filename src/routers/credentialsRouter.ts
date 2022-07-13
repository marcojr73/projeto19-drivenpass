import { Router } from "express";

const credentialRouter = Router()

credentialRouter.post("/credentials")
credentialRouter.get("/credentials")
credentialRouter.delete("/credentials")

export default credentialRouter