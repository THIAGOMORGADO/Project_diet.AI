import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { NutritionCreateController } from "./controllers/Nutrition/CreateControolers";

const server = express();
dotenv.config();
server.use(cors());
server.use(express.json());

server.post("/create", NutritionCreateController.execulte);
server.get("/", NutritionCreateController.resultAI);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
