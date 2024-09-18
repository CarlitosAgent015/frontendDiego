import OrdenServicio from "../models/ordenServicio.js";

export async function getOrdenServicio(req, res){
    try {
        const ordenServicio = await OrdenServicio.find().populate("idCliente"
        );
        res.json(ordenServicio)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function postOrdenServicio(req, res) {
    const ordenServicio = new OrdenServicio(req.body);
    try {
        await ordenServicio.save();
        res.status(201).json(ordenServicio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function putOrdenServicio(req, res) {
    try {
        const ordenServicio = await OrdenServicio.findByIdAndUpdate(req, params.id, req.body, {
        new: true,
        }).populate("idCliente");
        if (!ordenServicio) {
        return res.status(404).json({ message: "cliente no encontrado" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    getOrdenServicio,
    postOrdenServicio,
    putOrdenServicio
}