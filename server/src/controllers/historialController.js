import * as HistorialService from "../services/historialServices.js";

export const getAllUserHistorial = (req, res) => {
    try {
        const historial = HistorialService.getAllHistorial(req.params.id);

        if (!historial || historial.length === 0) {
            return res.status(404).json({ error: 'Historial no encontrado' });
        }

        res.status(200).send(historial);
    } catch (err) {
        console.error(err);
    }
}

export const createHistorial = (req, res) => {
    try {
        const historial = HistorialService.createHistorial(req.body);

        if (!historial) {
            return res.status(404).json({ error: 'Historial no creado' });
        }

        res.status(201).send(historial);
    } catch (err) {
        console.error(err);
    }
}