import Permiso from '../models/permiso.js'

export async function getPermisos(req, res) {
    try {
        const permisos = await Permiso.find()
        res.json({ permisos })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getIdPermisos(req, res){
    try {
        const permiso = await Permiso.findById(req.params.id);
        if (!permiso) {
            return res.status(404).json({ message: 'Permiso no encontrado'});
        }
        res.json(permiso)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function postPermisos(req, res) {
    const nuevoPermiso = new Permiso(req.body);  // El modelo manejará el ObjectId y idPermiso
    try {
        await nuevoPermiso.save();
        res.status(201).json(nuevoPermiso);  // Devolverá ambos ids, si es necesario
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function putPermisos(req, res) {
    try {
        const permisos = await Permiso.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!permisos) {
            return res.status(404).json({ message: "Permiso no encontrado" });
        }
        res.json(permisos);
    } catch (error) {
        console.error(`Error al actualizar el permiso con id ${req.params.id}:`, error);
        res.status(400).json({ message: error.message });
    }
}

export default {
    getPermisos,
    getIdPermisos,
    postPermisos,
    putPermisos
}