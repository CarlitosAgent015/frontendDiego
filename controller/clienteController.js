import Cliente from '../models/cliente.js';

export async function getCliente(req, res) {
    try {
        const clientes = await Cliente.find();
        res.json(clientes)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function postCliente(req, res){
    const clientes = new Cliente(req.body);
    try {
        await clientes.save();
        res.status(201).json(clientes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function putCliente(req, res){
    try {
        const clientes = await Cliente.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        res.json(clientes)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    getCliente, postCliente, putCliente
}