const express = require("express");
const router = express.Router();
const {
  getActividades,
  getActividad,
  createActividad,
  updateActividad,
  deleteActividad,
} = require("../controllers/actividad");
const authMiddleware = require("../middleware/auth");
const authRolMiddleware = require("../middleware/rol");
const {
  validateId,
  validateObjectDataCreate,
  validateObjectDataUpdate,
} = require("../validators/tracks");

router.get("/", authMiddleware, getActividades);

router.get("/:id", authMiddleware, validateId, getActividad);

router.post(
  "/",
  authMiddleware,
  authRolMiddleware(["admin"]),
  createActividad
);

router.put("/:id", authMiddleware, validateObjectDataUpdate, updateActividad);

router.delete("/:id", authMiddleware, validateId, deleteActividad);

module.exports = router;
