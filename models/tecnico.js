import { Schema, model } from "mongoose";

const tecnicoSchema = new Schema({
    idTecnico: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    celular: { type: Number, required:true, maxlength: [10, 'max 1 characters'], minlength: [10, 'min 10 characters']},
    precio: { type: Number, required: true },
    estado: { type: Boolean, required: true },
});

export default model("Tecnico", tecnicoSchema);
