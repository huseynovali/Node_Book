import express from "express";
import { countryController } from "../controller/countryController.js";


const countryRouter = express.Router();


countryRouter.get("/", countryController.getAll)
countryRouter.get("/:id", countryController.getById)
countryRouter.post("/", countryController.addCountry)
countryRouter.delete("/deleteCountry/:id", countryController.deleteCountry)



export default countryRouter