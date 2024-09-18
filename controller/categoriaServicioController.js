import CategoriaServicio from '../models/categoriaServicio.js';

export async function getCategoriaServicio(req, res){
    try {
        const categoriaServicio = CategoriaServicio.find().populate('idServicio');
        res.json(categoriaServicio)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function postCategoriaServicio(req, res) {
    const categoriaServicio = new CategoriaServicio(req.body);
    try {
        await categoriaServicio.save();
        res.json(categoriaServicio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function putCategoriaServicio(req, res) {
    try {
        const categoriaServicio = await CategoriaServicio.findByIdAndUpdate(req, params.id, req.body, {
        new: true,
        }).populate("idServicio");
        if (!categoriaServicio) {
        return res.status(404).json({ message: "Categoria no encontrada " });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    getCategoriaServicio, 
    postCategoriaServicio,
    putCategoriaServicio
}