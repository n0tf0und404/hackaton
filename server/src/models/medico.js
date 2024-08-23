import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
// import { UserModel } from "./user.js";

export const MedicoModel = sequelize.define(
  "Medico",
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
    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
