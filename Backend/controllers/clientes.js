const mongoose = require("mongoose");
const { clientesModel, pagosModel, actividadModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
/**
 * obtener la lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getClientes = async (req, res) => {
  try {
    const data = await clientesModel.find({});
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
const getCliente = async (req, res) => {
  try {
    //req = matchedData(req);
    console.log("holaaaaaa consultando cliente", req.params.id);
    const id = req.params.id;
    const data = await clientesModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};
/**
 * obtener un cliente
 * @param {*} req
 * @param {*} res
 */
const getClienteDeudor = async (req, res) => {
  try {
    //req = matchedData(req);
    console.log("holaaaaaa consultando cliente deudor", req.params.id);
    const id = req.params.id;
    const dataCliente = await clientesModel.findById(id);
    const dataPago = await pagosModel.find({ clienteId: id });
    const ActividadId = dataPago[0].ActividadId;
    const dataActividad = await actividadModel.find({ _id: ActividadId });
    const data = {
      pagoId:dataPago[0]._id,
      clienteId: dataPago[0].clienteId,
      ActividadId: dataPago[0].ActividadId,
      nombre: dataCliente.nombre,
      apellido: dataCliente.apellido,
      img: dataCliente.img,
      monto: dataPago[0].monto,
      estado: dataPago[0].estado,
      nombreActividad: dataActividad[0].nombre,
    };
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
const createCliente = async (req, res) => {
  try {
    const { body } = req;
    const data = await clientesModel.create(body);
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
const updateCliente = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    console.log("holaaaaaa este es el rest", req.body); // en el body solo se manda las cosas a modificar no mas
    const data = await clientesModel.findOneAndUpdate(req.params.id, req.body, {
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
const deleteCliente = async (req, res) => {
  try {
    //req = matchedData(req);
    const id = req.params.id;
    console.log("holaaaaaa este es el rest", id);
    const data = await clientesModel.deleteOne({ _id: id });

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
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
  getClienteDeudor,
};
