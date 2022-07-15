import { Router } from "express";
import { deleteCredential, getAllCredentials, getCredential, insertNewCredential } from "../controllers/credentialsController.js"
import { validationDataSentForNewCredential } from "../middlewares/credentialsMiddleware.js";

const credentialRouter = Router()

credentialRouter.post("/credentials", validationDataSentForNewCredential, insertNewCredential)
credentialRouter.get("/credentials/:id", getCredential)
credentialRouter.get("/credentials", getAllCredentials)
credentialRouter.delete("/credentials/:id", deleteCredential)

export default credentialRouter