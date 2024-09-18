import Departamento from '../models/departamento.js';

export async function getDepartamento(req, res){
    try {
        const departamento = Departamento.find().populate('idPais');
        res.json(departamento);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function postDepartamento(req, res) {
    const departamento = new Departamento(req.body);
    try {
        await departamento.save();
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function putDepartamento(req, res) {
    try {
        const departamento = await Departamento.findByIdAndUpdate(req, URLSearchParams.id, req.body, {
            new: true,
        }).populate('idPais');
        if (!departamento) {
            return res.status(404).json({ message: 'departamento no encontrado '});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {
    getDepartamento,
    postDepartamento,
    putDepartamento
}