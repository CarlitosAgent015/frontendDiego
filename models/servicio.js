import { Schema, model } from "mongoose";

const servicioSchema = new Schema({
    idServicio: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true},
    estado: { type: Boolean, required: true },
    descripcion: { type: String }
});

export default model("Servicio", servicioSchema);
