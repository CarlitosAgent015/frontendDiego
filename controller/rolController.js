import Role from '../models/role.js';

// Obtener un rol específico por ID junto con todos los permisos
export const getRoles = async (req, res) => {
    try {
        const rol = await Role.find()// Obtienes el rol con permisos asignados // Obtienes todos los permisos de la base de datos

        if (!rol) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        res.status(200).json({ rol });  // Envío tanto el rol como los permisos al frontend
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el rol y permisos' });
    }
};

// Obtener un rol específico por ID
export const getRolUnic = async (req, res) => {
    try {
        const rol = await Role.findById(req.params.id).populate('permisosAsignados');
        if (!rol) {
            return res.status(404).json({ message: "Rol no encontrado" });
        }
        res.json(rol);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo rol
export const postRole = async (req, res) => {
    const nuevoRol = new Role({
        idRol: req.body.idRol,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        estado: req.body.estado,
        permisosAsignados: req.body.permisosAsignados
    });

    try {
        await nuevoRol.save();
        res.status(201).json(nuevoRol);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const putRol = async (req, res) => {
    try {
        // Convertir permisosAsignados a ObjectId si es necesario
        if (req.body.permisosAsignados) {
            req.body.permisosAsignados = req.body.permisosAsignados.map(id => mongoose.Types.ObjectId(id));
        }

        const rol = await Role.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).populate('permisosAsignados');

        if (!rol) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        res.status(200).json(rol);  // Devolver el rol actualizado
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default {
    getRoles,
    getRolUnic,
    postRole,
    putRol
};
