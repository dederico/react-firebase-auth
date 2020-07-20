import React, { useEffect, useState } from "react";

const ElectorEvaluado = ({
  id,
  paterno,
  materno,
  nombre,
  estado,
  municipio,
  colonia,
  calle,
  numero,
  telefono1,
  zona,
  seccion,
  rnm,
  nacimiento,
  sexo,
  correo,
  telefono2,
}) => {
  const [viable, setViable] = useState(false);
  useEffect(() => {
    /* eslint-disable */
    nombre.length > 0 ? setViable(true) : setViable(false);
    //vivienda === "Propia" ? setViable(true) : setViable(false);
  }, []);
  return (
    <>
      <p>
        {nombre}
        {paterno}
        {materno} <b>{viable ? "Es viable" : "No es viable"}</b>
      </p>
      <br />
    </>
  );
};
export default ElectorEvaluado;
