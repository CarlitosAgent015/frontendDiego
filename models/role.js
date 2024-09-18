import { Schema, model } from 'mongoose'

const roleSchema = new Schema({
    idRol: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    estado: { type: Boolean, required: true },
    descripcion: { type: String },
    permisosAsignados: [{ type: Schema.Types.ObjectId, ref: "Permiso" }],
});

export default model("Role", roleSchema);