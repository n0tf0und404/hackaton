import { HistorialModel } from "../models/historial.js";
import { UserModel } from "../models/user.js";

export async function findUserById(userId) {
  const user = await UserModel.findByPk(userId, {
    include: {
      model: HistorialModel,
      as: "historial",
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}
