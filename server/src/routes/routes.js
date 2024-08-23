import { Router } from "express";
import userRouter from "./user.routes.js";
import historialRouter from "./historial.routes.js";

const router = Router();

router.use("/users", userRouter);
router.use("/historial", historialRouter);

export { router };
