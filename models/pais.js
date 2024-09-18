import { Schema, model } from 'mongoose'; 

const paisSchema = new Schema({
    idPais: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true }
});

export default model("Pais", paisSchema);