import { Schema, model } from "mongoose";

const clientSchema = new Schema({
    idCliente: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    celular: { type: Number, required:true, maxlength:[10, 'max 10 characters'], minlength:[10, 'min 10 characters'] },
    direccion: {type:  String, required:true}
});

export default model("Client", clientSchema);
