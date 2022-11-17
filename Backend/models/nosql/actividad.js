const mongoose = require("mongoose");

const ActividadScheme = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    precio: {
      type: Number,
    },
    cupo: {
      type: Number,
    },
    inscriptos: {
      type: Number,
    },
    estado: {
      type: ["activa", "inactiva"],
      default: "activa",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("actividad", ActividadScheme);
