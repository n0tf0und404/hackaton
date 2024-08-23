import { Router } from "express";

import { 
    getAllUserHistorial, 
    createHistorial 
} from "../controllers/historialController.js";

const router = Router();

router.get("/:id", getAllUserHistorial);
router.post("/", createHistorial);

export default router