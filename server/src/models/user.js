import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import { MedicoModel } from "./medico.js";

export const UserModel = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    medicoId: {
      type: DataTypes.INTEGER,
      references: {
        model: MedicoModel, // Referencia al modelo de usuario
        key: "id",
      },
      allowNull: false,
      onDelete: "CASCADE",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    deletedAt: "deletedAt",
    tableName: "User",
  }
);
