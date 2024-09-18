import Pais from '../models/pais.js';

export async function getPais(req, res){
    try {
        const pais = await Pais.find();
        res.json(pais);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function postPais(req, res) {
    const pais = new Pais(req.body);
    try {
        await pais.save();
        res.status(500).json(pais)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function putPais(req, res) {
    try {
        const pais = await Pais.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.json(pais);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    getPais,
    postPais,
    putPais
}