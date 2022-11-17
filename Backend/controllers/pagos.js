const mongoose = require("mongoose");
const { pagosModel, clientesModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const idAutoIncrement = require("id-auto-increment");
/**
 * obtener la lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getPagos = async (req, res) => {
  try {
    const data = await pagosModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};
/**
 * obtener la lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getPagosPendientes = async (req, res) => {
  try {
    const pago = await pagosModel.find({ estado: "pendiente" });
    //console.log(pago);
    let listaPagos = [];
    //Hacer un for porque debe devolver una lista de pagos
    for (i = 0; i < pago.length; i++) {
      const idCliente = pago[i].clienteId;
      const cliente = await clientesModel.find({ _id: idCliente });
      //console.log(cliente);
      const data = {
        id: pago[i]._id,
        cliente: cliente[0].nombre,
        codigo: pago[i].codigo_pago,
        monto: pago[i].monto,
        tipo: pago[i].tipo_pago,
        estado: pago[i].estado,
        vencimiento: pago[i].fecha_solicitud.toLocaleDateString(),
      };
      listaPagos.push(data);
    }
    res.send({ listaPagos });
  } catch (e) {
    handleHttpError(res, e);
  }
};
/**
 * obtener un cliente
 * @param {*} req
 * @param {*} res
 */
const getPago = async (req, res) => {
  try {
    //req = matchedData(req);
    console.log("holaaaaaa este es el rest", req.params.id);
    const id = req.params.id;
    const data = await pagosModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};
/**
 * obtener un pago por código
 * @param {*} req
 * @param {*} res
 */
const getPagoByCodigo = async (req, res) => {
  try {
    //req = matchedData(req);
    console.log("holaaaaaa este es el rest", req.params.id);
    const codigo = req.params.codigo;
    const data = await pagosModel.find({ codigo_pago: codigo });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};
/**
 * obtener un pago por id cliente
 * @param {*} req
 * @param {*} res
 */
const getPagoByClienteId = async (req, res) => {
  try {
    //req = matchedData(req);
    console.log("holaaaaaa estamos en pago por id", req.params.id);
    const codigo = req.params.id;
    const data = await pagosModel.find({ clienteId: codigo });
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
const createPago = async (req, res) => {
  try {
    const fecha = new Date();
    const { body } = req;

    const bodyInfo = {
      clienteId: body.clienteId,
      ActividadId: body.ActividadId,
      codigo_pago: body.codigo_pago,
      monto: body.monto,
      fecha_solicitud: fecha,
    };
    console.log(bodyInfo, "****************************************");
    const data = await pagosModel.create(bodyInfo);
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
const updatePago = async (req, res) => {
  try {
    //const { id, ...body } = matchedData(req);
    console.log("holaaaaaa modificando pagooo", req.params.id); // en el body solo se manda las cosas a modificar no mas
    console.log("holaaaaaa modificando pagooo", req.body);
    const data = await pagosModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    console.log(data);
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
const deletePago = async (req, res) => {
  try {
    //req = matchedData(req);
    const id = req.params.id;
    console.log("holaaaaaa este es el rest", id);
    const data = await pagosModel.deleteOne({ _id: id });

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
  getPagos,
  getPago,
  createPago,
  updatePago,
  deletePago,
  getPagoByCodigo,
  getPagoByClienteId,
  getPagosPendientes,
};
