const mongoose = require("mongoose");

const AsistenciaGimScheme = new mongoose.Schema(
  { 
    pagoId: {
      type: String,
    },
    nombreCliente: {
      type: String,
    },
    actividad: {
      type: String,
    },
    fecha_asistencia: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("asistenciaGim", AsistenciaGimScheme);