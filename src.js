let operaciones = [];
let balance = 0;

const registrarOperacion = (monto, tipo, categoria, fecha) => {
  tipo == "ingreso" ? (balance += monto) : (balance -= monto);
  operaciones.push(monto, tipo, categoria, fecha);

  localStorage.setItem("operaciones", JSON.stringify(operaciones));
  localStorage.setItem("balance", balance);
};

const registrarMetaAhorro = (meta) => {
  localStorage.setItem("metaAhorro", meta);
};

const estaMiMetaCumplida = () => {
  let getBalance = parseInt(localStorage.getItem("balance"));
  let getMetaAhorro = parseInt(localStorage.getItem("metaAhorro"));
  return getMetaAhorro < getBalance ? "cumple" : "no cumple";
};

module.exports.registrarMetaAhorro = registrarMetaAhorro;
module.exports.estaMiMetaCumplida = estaMiMetaCumplida;
module.exports.registrarOperacion = registrarOperacion;
