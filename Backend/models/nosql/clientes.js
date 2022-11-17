const mongoose = require("mongoose");

const ClienteScheme = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    apellido: {
      type: String,
    },
    patologias: {
      type: String,
    },
    actividad_fisica_previa: {
      type: String,
    },
    peso: {
      type: Number,
    },
    membresia: {
      type: String,
    },
    usuario: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    telefono: {
      type: Number,
    },
    role: {
      type: String,
      default: "cliente",
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("cliente", ClienteScheme);
