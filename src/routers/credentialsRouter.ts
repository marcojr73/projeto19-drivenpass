import { Router } from "express";
import { deleteCredential, getCredential, insertNewCredential } from "../controllers/credentialsController.js"
import { validationDataSentForNewCredential } from "../middlewares/credentialsMiddleware.js";

const credentialRouter = Router()

credentialRouter.post("/credentials", validationDataSentForNewCredential, insertNewCredential)
credentialRouter.get("/credentials", getCredential)
credentialRouter.delete("/credentials", deleteCredential)

export default credentialRouter