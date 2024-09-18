import { Schema, model } from "mongoose";

const categoriaServicioSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    idServicio: [{ type: Schema.Types.ObjectId, ref: "idServicio" }],
    nombre: {type: String, required: true},
    estado: {type: Boolean, required: true}
});

export default model("categoriaServicio", categoriaServicioSchema);