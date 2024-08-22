import { HistorialModel } from "../models/historial.js";

export const getAllHistorial = async (idUser) => {
    const historial = await HistorialModel.findAll({ where: { userId: idUser } });
    return historial;
}

export const createHistorial = async (data) => {
    const historial = await HistorialModel.create(data);
    return historial;
}