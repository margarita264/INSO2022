const express = require("express");
const router = express.Router();
const { validateId } = require("../Validators/clientes");
const {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
  getClienteDeudor
} = require("../controllers/clientes");

/**
 * Listar clientes
 */
router.get("/", getClientes);
/**
 * Obtener detalle cliente
 */
router.get("/:id", getCliente);

router.get("/deudor/:id", getClienteDeudor);

/**
 * Crear clientes
 */
router.post("/", createCliente);

router.put("/:id", updateCliente);

router.delete("/:id", deleteCliente);
module.exports = router;
