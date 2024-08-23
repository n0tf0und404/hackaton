import { Router } from "express";
import userRouter from "./user.routes.js";
import historialRouter from "./historial.routes.js";
import medicoRouter from "./medico.routes.js";

const router = Router();

router.use("/users", userRouter);
router.use("/historial", historialRouter);
router.use("/medico", medicoRouter);

export { router };
