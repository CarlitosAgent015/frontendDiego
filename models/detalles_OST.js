import { Schema, model } from "mongoose";

const detalles_OSTSchema = new Schema({
    idOrdenServicio: [{ type: Schema.Types.ObjectId, ref: "idOrdenServicio" }],
    idServicio: [{ type: Schema.Types.ObjectId, ref: "idServicio" }],
    idTecnico: [{ type: Schema.Types.ObjectId, ref: "idTecnico" }],
    precio: {type: Number, required: true},
    cantidad: {type: Number, required: true},
    estado: {type: Boolean, required: true},
    fechaInicio: { type: Date, required: true },
    fechaFinal: { type: Date, required: true }
});

export default model("Detalles_OST", detalles_OSTSchema);
