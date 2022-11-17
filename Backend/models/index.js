const engine = process.env.DB_ENGINE || null;

const pathModel = engine === "mysql" ? "./sql" : "./nosql"

const models = {
  userModel: require(`${pathModel}/users`),
  storageModel: require(`${pathModel}/storage`),
  tracksModel: require(`${pathModel}/tracks`),
  clientesModel: require(`${pathModel}/clientes`),
  pagosModel: require(`${pathModel}/pagos`),
  asistenciaGimModel: require(`${pathModel}/asistencia`),
  actividadModel: require(`${pathModel}/actividad`),
};


module.exports = models;
