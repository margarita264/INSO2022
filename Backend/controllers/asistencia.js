const mongoose = require("mongoose");
const { asistenciaGimModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
/**
 * obtener la lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getAsistencias = async (req, res) => {
  try {
    const data = await asistenciaGimModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};
/**
 * obtener un cliente
 * @param {*} req
 * @param {*} res
 */
const getAsistencia = async (req, res) => {
  try {
    //req = matchedData(req);
    console.log("holaaaaaa este es el rest", req.params.id);
    const id = req.params.id;
    const data = await asistenciaGimModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};
/**
 * insertar un cliente
 * @param {*} req
 * @param {*} res
 */
const createAsistencia = async (req, res) => {
  try {
    const fecha = new Date();
    const { body } = req;
    const bodyInfo = {
      pagoId: body.pagoId,
      nombreCliente: body.nombreCliente,
      actividad: body.actividad,
      fecha_asistencia: fecha.toLocaleString(),
    };
    const data = await asistenciaGimModel.create(bodyInfo);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};
/**
 * actualizar un cliente
 * @param {*} req
 * @param {*} res
 */
const updateAsistencia = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    console.log("holaaaaaa este es el rest", req.body); // en el body solo se manda las cosas a modificar no mas
    const data = await asistenciaGimModel.findOneAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};
/**
 * eliminar un cliente
 * @param {*} req
 * @param {*} res
 */
const deleteAsistencia = async (req, res) => {
  try {
    //req = matchedData(req);
    const id = req.params.id;
    console.log("holaaaaaa este es el rest", id);
    const data = await asistenciaGimModel.deleteOne({ _id: id });

    // const data = {
    //   findData: findData,
    //   deleted: true,
    // };
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = {
  getAsistencias,
  getAsistencia,
  createAsistencia,
  updateAsistencia,
  deleteAsistencia,
};
