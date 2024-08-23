import { UserModel } from "../models/user.js";
import { HistorialModel } from "../models/historial.js";
import { MedicoModel } from '../models/medico.js';

export const setupAssociations = () => {
  UserModel.hasOne(HistorialModel, {
    foreignKey: "userId",
    as: "historial",
    onDelete: "CASCADE",
  });

  HistorialModel.belongsTo(UserModel, {
    foreignKey: "userId",
    as: "usuario",
  });

  // Relación de uno a uno entre Medico y Usuario (paciente)
  MedicoModel.hasOne(UserModel, {
    foreignKey: "medicoId", // Clave foránea en el modelo User para referenciar a Medico
    as: "paciente",
    onDelete: "SET NULL", // Si se elimina el médico, la referencia en el paciente se establece a NULL
  });

  UserModel.belongsTo(MedicoModel, {
    foreignKey: "medicoId", // Clave foránea en el modelo User
    as: "medico",
  });
};
