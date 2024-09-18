import { Schema, model } from 'mongoose'; 

const permisoSchema = new Schema({
    idPermiso: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    descripcion: { type: String },
    estado: { type: Boolean, required: true },
});

export default model("Permiso", permisoSchema);
