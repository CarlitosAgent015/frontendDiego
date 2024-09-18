import Usuario from '../models/usuarios.js';

export async function getUsuario(req, res) {
    try {
        const usuario = Usuario.find().populate('idRol', 'idPais');
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

export async function postUsuario(req, res) {
    const usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function putUsuario(req, res) {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req, params.id, req.body, {
            new: true,
        }).populate("idRol", "idPais");
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado"});
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default {
    getUsuario,
    postUsuario,
    putUsuario
}