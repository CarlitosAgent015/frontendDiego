import { Schema, model } from 'mongoose'

const departamentoSchema = new Schema({
    idDepartamento: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    pais: [{ type: Schema.Types.ObjectId, ref: "Pais" }],
});

export default model("Departamento", departamentoSchema);