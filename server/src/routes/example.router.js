import { Router } from "express";
import { getExample } from "../controllers/example.controler.js";


const router = Router();

router.get("/", getExample);


export default router