const express = require("express");
const router = express.Router();
const {
  getAsistencias,
  getAsistencia,
  createAsistencia,
  updateAsistencia,
  deleteAsistencia,
} = require("../controllers/asistencia");
const authMiddleware = require("../middleware/auth");
const authRolMiddleware = require("../middleware/rol");
const {
  validateId,
  validateObjectDataCreate,
  validateObjectDataUpdate,
} = require("../validators/tracks");

router.get("/", getAsistencias);

router.get("/:id", validateId, getAsistencia);

router.post("/", createAsistencia);

router.put("/:id", validateObjectDataUpdate, updateAsistencia);

router.delete("/:id", validateId, deleteAsistencia);

module.exports = router;
