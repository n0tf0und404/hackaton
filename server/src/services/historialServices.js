import { HistorialModel } from "../models/historial.js";

export const getAllHistorial = async (idUser) => {
    const historial = await HistorialModel.findAll({ where: { userId: idUser } });
    return historial;
}

export const createHistorial = async (data) => {
    const historial = await HistorialModel.create(data);
    return historial;
}

export const deleteHistorial = async (id) => {
  try {
    const result = await HistorialModel.destroy({
      where: { id: id },
    });

    if (result === 0) {
      throw new Error("Historial not found or already deleted");
    }

    return { message: "Historial deleted successfully" };
  } catch (error) {
    throw new Error(`Error deleting historial: ${error.message}`);
  }
};

export const updateHistorial = async (id, data) => {
  try {
    const [updated] = await HistorialModel.update(data, {
      where: { id: id },
      returning: true, // Esto devolverá el historial actualizado
    });

    if (updated === 0) {
      throw new Error("Historial not found");
    }

    // `HistorialModel.update` devuelve un array donde el primer elemento es el número de filas afectadas
    const updatedHistorial = await HistorialModel.findByPk(id);
    return updatedHistorial;
  } catch (error) {
    throw new Error(`Error updating historial: ${error.message}`);
  }
};
