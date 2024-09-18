import Ciudad from '../models/ciudad.js';

export async function getCiudad(req, res){
    try {
        const ciudad =  Ciudad.find().populate('Departamento');
        res.json(ciudad)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function postCiudad(req, res) {
    const ciudad = new Ciudad(req.body);
    try {
        await ciudad.save();
        res.json(ciudad)
    } catch (error) {
        res.status(500).json8({ message: error.message});
    }
}

export async function putCiudad(req, res) {
    try {
        const ciudad = await Ciudad.findByIdAndUpdate(req, params.id, res.body, {
            new: true,
        }).populate('Departamento')
        res.json(ciudad)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

export default {
    getCiudad,
    postCiudad,
    putCiudad
}