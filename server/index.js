import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./connection/db.js";
import userRouter from "./router/userRouter.js";
import fileUpload from "express-fileupload";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import countryRouter from "./router/countryRouter.js";
import bookRouter from "./router/bookRouter.js";
import { log } from "console";
const app = express();
dotenv.config();
app.use(express.json());
dbConnect();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(
  fileUpload({
    safeFileNames: true,
    useTempFiles: true,
    preserveExtension: true,
  })
);
console.log(join(__dirname, 'img'));
app.use(cors());
app.use("/img", express.static(join(__dirname, 'img')));
app.use("/countrys", countryRouter)
app.use("/writers", userRouter);
app.use("/books", bookRouter);
app.listen(5000, () => console.log("Server listening on port 5000."));
