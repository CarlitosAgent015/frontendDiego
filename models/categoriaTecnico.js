import { Schema, model } from "mongoose";

const categoriaTecnicoSchema = new Schema({
    idCategoriaTecnico: { type: Number, required: true, unique: true },
    idTecnico: [{ type: Schema.Types.ObjectId, ref: "idTecnico" }],
    nombre: {type: String, required: true},
    descripcion: {type: String},
    estado: {type: Boolean, required: true}
});

export default model("categoriaTecnico", categoriaTecnicoSchema);