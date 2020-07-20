import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Elector = ({
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
        history.push("/");
      })
      .catch(({ response }) => {
        alert(response);
      });
    return (
      <>
        <h1>Elector</h1>
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
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
              <button className="btn btn-danger" onClick={deleteElector()}>
                Borrar
              </button>
            </tr>
          </tbody>
        </Table>
      </>
    );
  };
};

export default Elector;
