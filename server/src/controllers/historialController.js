import * as HistorialService from "../services/historialServices.js";

export const getAllUserHistorial = async (req, res) => {
  try {
    const historial = await HistorialService.getAllHistorial(req.params.id);

    if (!historial || historial.length === 0) {
      return res.status(404).json({ error: "Historial no encontrado" });
    }

    res.status(200).send(historial);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener el historial" });
  }
};

export const createHistorial = async (req, res) => {
  try {
    const historial = await HistorialService.createHistorial(req.body);

    if (!historial) {
      return res.status(400).json({ error: "Historial no creado" });
    }

    res.status(201).send(historial);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al crear el historial" });
  }
};

export const updateHistorial = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedHistorial = await HistorialService.updateHistorial(
      id,
      req.body
    );

    if (!updatedHistorial) {
      return res.status(404).json({ error: "Historial no encontrado" });
    }

    res.status(200).send(updatedHistorial);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar el historial" });
  }
};

export const deleteHistorial = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await HistorialService.deleteHistorial(id);

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al eliminar el historial" });
  }
};
