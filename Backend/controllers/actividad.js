const mongoose = require("mongoose");
const { actividadModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
/**
 * obtener la lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getActividades = async (req, res) => {
  try {
    const data = await actividadModel.find({});
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
const getActividad = async (req, res) => {
  try {
    //req = matchedData(req);
    console.log("holaaaaaa este es el rest", req.params.id);
    const id = req.params.id;
    const data = await actividadModel.findById(id);
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
const createActividad = async (req, res) => {
  try {
    const { body } = req;
    const data = await actividadModel.create(body);
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
const updateActividad = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    console.log("holaaaaaa este es el rest", req.body); // en el body solo se manda las cosas a modificar no mas
    const data = await actividadModel.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
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
const deleteActividad = async (req, res) => {
  try {
    //req = matchedData(req);
    const id = req.params.id;
    console.log("holaaaaaa este es el rest", id);
    const data = await actividadModel.deleteOne({ _id: id });

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
  getActividades,
  getActividad,
  createActividad,
  updateActividad,
  deleteActividad,
};
