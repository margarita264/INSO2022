//100% hecho en banilaJS(javaJS puro) no se usa nada de react
//Este es un Helper que nos va a servir para hacer todas las peticiones de HTTP de API REST
//se hace mediante la arquitectura rest
export const helpHttp = () => {
  const customFetch = (endpoint /* ruta*/, options) => {
    //metodo privado
    const defaultHeaders = {
      //estas peticiones aceptas pjson
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal; //para cancelar la petición por si el servidor no responde
    //si el usuario no especificó algún método por default es GET
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.body = JSON.stringify(options.body) || false; // se convierte el objeto que viene a cadena para nuesta BD
    if (!options.body) delete options.body;

    // console.log(options);

    setTimeout(() => controller.abort, 6000); // tiempo de espera para abortar petición

    return fetch(endpoint, options) //objeto que rechaza la promesa en caso
      .then(
        (
          res //en caso de que la respuesta no sea exitosa
        ) =>
          res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00", //numero de respuesta del sevidor
                statusText: res.statusText || "Ocurrió un error",
              })
      )
      .catch((err) => err);
  };
  //metodo get
  const get = (url, options = {}) => customFetch(url, options);
  //metodo post
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  //metodo put
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
  //metodo del
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };
  return {
    //metodos de arquitectura REST
    get,
    post,
    put,
    del,
  };
};
