const mongoose = require("mongoose");

const PagosScheme = new mongoose.Schema(
  {
    clienteId: {
      type: String,
    },
    ActividadId: {
      type: String,
    },
    codigo_pago: {
      type: String,
    },
    fecha_solicitud: {
      type: Date,
    },
    monto: {
      type: Number,
    },
    tipo_pago: {
      type: ["efectivo", "web"],
      default: "efectivo",
    },
    fecha_pago: {
      type: Date,
    },
    estado: {
      type: ["pagado", "pendiente"],
      default: "pendiente",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("pago", PagosScheme);
