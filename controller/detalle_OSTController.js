import Detalle_OST from '../models/detalles_OST.js'

export async function  getDetalle_OST(req, res){
    try {
        const detalle_OST = await Detalle_OST.find().populate('idOrdenServicio', 'idServicio', 'idTecnico');
        res.json(detalle_OST);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function postDetalle_OST(req, res){
    const detalle_OST = new Detalle_OST(req.body);
    try {
        await detalle_OST.save();
        res.json(detalle_OST)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function putDetalle_OST(req, res) {
    try {
        const detalle_OST = await Detalle_OST.findByIdAndUpdate(req, params.id, req.body, {
            new: true,
        }).populate("idRol", "idPais");
        if (!detalle_OST) {
            return res.status(404).json({ message: "detalle orden no encontrado"});
        }
    } catch (error){
        res.status(500).json({ message: error.message })
    }
}

export default {
    getDetalle_OST,
    postDetalle_OST,
    putDetalle_OST
}