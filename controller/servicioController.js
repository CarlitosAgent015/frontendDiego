import Servicio from '../models/servicio.js'

export async function getServicio(req, res){
    try {
        const servicios = await Servicio.find();
        res.json(servicios)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function postServicio(req, res){
    const servicios = new Servicio(req.body)
    try {
        await  servicios.save()
        res.status(201).json(servicios)
    } catch {
        res.status(400).json({ message: error.message });
    }
}

export async function putServicio(req, res) {
    try {
        const servicios = await Servicio.findByIdAndUpdate (
        req.params.id,
        req.body,
        { new: true }
        );
        res.json(servicios);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    getServicio,
    postServicio,
    putServicio
}