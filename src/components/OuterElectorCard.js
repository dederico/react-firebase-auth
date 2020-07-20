import React from "react";
import { useHistory } from "react-router-dom";

import { Table } from "reactstrap";
// import "./OuterFamiliaCard.scss";
import axios from "axios";
// import ElectorEvaluado from "./ElectorEvaluado";
// import { Link, useParams } from "react-router-dom";
// import C from "../components/Familia";
// import CardElector from "./CardElector";

const OuterFamiliaCard = ({
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
  const history = useHistory();

  const url = `https://san-pedro-2021.firebaseio.com/elector/Electores/-MCapFg0tCH2hmvqF32-/Electores/${id}.json`;
  const deleteElector = () => {
    axios
      .delete(url)
      .then(() => {
        history.push("/home");
      })
      .catch(({ response }) => {
        alert(response);
      });
  };
  return (
    // < className="col-lg-3">

    <Table hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>APELLIDO PATERNO</th>
          <th>APELLIDO MATERNO</th>
          <th>NOMBRE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>id{id}</th>
          <td>Apellido Paterno{paterno}</td>
          <td>Apellido Materno{materno}</td>
          <td>Nombre{nombre}</td>
          <button className="btn btn-danger" onClick={deleteElector}>
            Borrar
          </button>
        </tr>
      </tbody>
    </Table>
  );
};

export default OuterFamiliaCard;
