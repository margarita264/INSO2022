const express = require("express");
const router = express.Router();
const {
  getPagos,
  getPago,
  createPago,
  updatePago,
  deletePago,
  getPagoByCodigo,
  getPagoByClienteId,
  getPagosPendientes,
} = require("../controllers/pagos");
const authMiddleware = require("../middleware/auth");
const authRolMiddleware = require("../middleware/rol");
const {
  validateId,
  validateObjectDataCreate,
  validateObjectDataUpdate,
} = require("../validators/Pagos");

router.get("/", getPagos);

router.get("/pendientes/", getPagosPendientes);

router.get("/:id", validateId, getPago);

router.get("/codigo/:codigo", getPagoByCodigo);

router.get("/cliente/:id", getPagoByClienteId);

router.post("/", createPago);

router.put("/:id", updatePago);

router.delete("/:id", validateId, deletePago);

module.exports = router;
