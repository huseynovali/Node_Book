import express from "express";
import { bookController } from "../controller/bookController.js";


const bookRouter = express.Router();

bookRouter.get("/",bookController.getBook);
bookRouter.get("/:id",bookController.getBookById);
bookRouter.post("/",bookController.addBook);
bookRouter.delete("/deletebook/:id",bookController.deleteBookById);


export default bookRouter;