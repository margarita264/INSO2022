export const getCliente = async (codigo) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/clientes/${codigo}`
    );
    console.log("consultando a clientesssss");
    return response.json();
  } catch {
    throw new Error("error");
  }
};
