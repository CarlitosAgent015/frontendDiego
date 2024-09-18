import { Schema, model } from "mongoose";

const ordenServicioSchema = new Schema({
    idOrdenServicio: { type: Number, required: true, unique: true },
    fecha: { type: Date, required: true },
    idCliente: [{ type: Schema.Types.ObjectId, ref: "idCliente" }],
});

export default model("OrdenServicio", ordenServicioSchema);
