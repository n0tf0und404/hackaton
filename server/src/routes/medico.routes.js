import { Router } from "express";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import {
  ctrlCreateUser,
  ctrlDeleteUser,
  ctrlGetAllUsers,
  ctrlGetUser,
  ctrlUpdateUser,
  ctrlLoginUser,
  ctrlGetUserByToken,
} from "../controllers/medicoController.js";
import {
  createMedicoSchema,
  loginMedicoSchema,
} from "../models/Schema/medicoSchema.js";
import { validator } from "../middlewares/validator.js";
import { validateMedic } from "../models/Schema/medicoSchema.js";


const medicoRouter = Router();

// Ruta para iniciar sesión
medicoRouter.post("/login", loginMedicoSchema, ctrlLoginUser);

// Ruta para obtener todos los usuarios (requiere autenticación)
medicoRouter.get("/", authenticateUser, ctrlGetAllUsers);

// Ruta para obtener un usuario utilizando el token de autenticación
medicoRouter.get("/userByToken", authenticateUser, ctrlGetUserByToken);

// Ruta para obtener un usuario por ID (requiere autenticación)
medicoRouter.get("/:id", authenticateUser, ctrlGetUser);

// Ruta para crear un nuevo usuario
medicoRouter.post("/", createMedicoSchema, validator,validateMedic, ctrlCreateUser);

// Ruta para actualizar un usuario existente por ID (requiere autenticación)
medicoRouter.put("/:id", authenticateUser, ctrlUpdateUser);

// Ruta para eliminar un usuario por ID (requiere autenticación)
medicoRouter.delete("/:id", authenticateUser, ctrlDeleteUser);

export default medicoRouter;
