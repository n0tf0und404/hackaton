import express from "express";
import cors from "cors";
import { router } from "./src/routes/routes.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para manejar rutas
app.use("/", router);
app.use(errorHandler);

export default app;
