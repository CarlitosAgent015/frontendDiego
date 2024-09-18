import { Schema, model } from 'mongoose'

const ciudadSchema = new Schema({
    idCiudad: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    departamento: [{ type: Schema.Types.ObjectId, ref: "Departamento" }]
});

export default model("Ciudad", ciudadSchema);