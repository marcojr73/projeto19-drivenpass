import { Router } from "express";
import { deleteCredential, getAllCredentials, getCredential, insertNewCredential } from "../controllers/credentialsController.js"
import { validationDataSentForNewCredential } from "../middlewares/credentialsMiddleware.js";

const credentialRouter = Router()

credentialRouter.post("/credentials/create", validationDataSentForNewCredential, insertNewCredential)
credentialRouter.get("/credentials", getAllCredentials)
credentialRouter.get("/credentials/:id", getCredential)
credentialRouter.delete("/credentials/delete/:id", deleteCredential)

export default credentialRouter