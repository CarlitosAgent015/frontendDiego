import CategoriaTecnico from '../models/categoriaTecnico.js'

export async function getCategoriaTecnico(req, res) {
    try {
        const categoriaTecnico =  await CategoriaTecnico.find();
        res.json(categoriaTecnico)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function postCategoriaTecnico(req, res) {
    const categoriaTecnico = new CategoriaTecnico(req.body);
    try {
        await categoriaTecnico.save();
        res.status(201).json(categoriaTecnico)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function putCategoriaTecnico(req, res){
    try {
        const categoriaTecnico = await CategoriaTecnico.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(categoriaTecnico);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    getCategoriaTecnico,
    postCategoriaTecnico,
    putCategoriaTecnico
}