import { Router } from "express";
import {
    ctrlGetAllUser,
    ctrlGetUserById,
    ctrlCreateUser,
    ctrlUpdateUser,
    ctrlDeleteUser
} from "../controllers/user.controller.js";


const router = Router();


router.get("/", ctrlGetAllUser);
router.get("/:id", ctrlGetUserById);
router.post("/", ctrlCreateUser);
router.put("/:id", ctrlUpdateUser);
router.delete("/:id", ctrlDeleteUser);


export default router