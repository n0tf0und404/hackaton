import sequelize from "../config/db.js"; // Importar como default
import { DataTypes } from "sequelize";
import { UserModel } from "./user.js";

export const HistorialModel = sequelize.define(
  "Historial",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: UserModel, // Referencia al modelo de usuario
        key: "id",
      },
      allowNull: false,
      onDelete: "CASCADE", // Si el usuario se elimina, se elimina también su historial
    },
    alergias: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medicamentos: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    condicionesCronicas: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nombreContacto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    relacionContacto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefonoContacto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    deletedAt: "deletedAt",
    tableName: "Historial",
  }
);
