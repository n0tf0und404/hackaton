import { UserModel } from "../models/user.js";
import { HistorialModel } from "../models/historial.js";

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
};
