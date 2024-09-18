import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    idUsuario: { type: Number, required: true, unique: true },
    idRol: [{ type: Schema.Types.ObjectId, ref: "idRol" }],
    idPais: [{ type: Schema.Types.ObjectId, ref: "idPais" }],
    nombre: { type: String, required: true },
    estado: { type: Boolean, required: true },
});

export default model("Usuario", usuarioSchema);
