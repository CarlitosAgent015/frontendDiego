import Tecnico from '../models/tecnico.js';

export async function getTecnico(req, res){
    try {
        const tecnico = Tecnico.find();
        res.json(tecnico);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function postTecnico(req, res){
    const tecnico = new Tecnico(req.body);
    try{
        await tecnico.save();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function putTecnico(req, res){
    try {
        const tecnico = await Tecnico.findByIdAndUpdate (
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(tecnico);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    getTecnico,
    postTecnico,
    putTecnico
}