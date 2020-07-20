import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import OuterElectorCard from "../components/OuterElectorCard";
// import ElectorEvaluado from "../components/ElectorEvaluado";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardElector = () => {
  const { id } = useParams();
  const [informacionUsuario] = useState(window.sessionStorage.getItem("email"));
  const [electores, setElectores] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getElectores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getElectores = () => {
    axios
      .get(
        `https://san-pedro-2021.firebaseio.com/elector/Electores/-MCbVlUbqglNDM27WdQO/${id}.json`
      )
      .then(({ data, status }) => {
        if (data !== null) {
          setElectores(data);
        } else {
          setError("No hay electores");
        }
      })
      .catch(({ response }) => {
        console.log(response);
        setError(response);
      });
  };
  const showElectores = () => {
    return error ? (
      <h1>{error}</h1>
    ) : (
      Object.keys(electores).map((elector) => (
        <OuterElectorCard
          id={elector}
          nombre={electores}
          paterno={electores[elector].paterno}
          materno={electores[elector].materno}
          estado={electores[elector].estado}
          municipio={electores[elector].municipio}
          colonia={electores[elector].colonia}
          calle={electores[elector].calle}
          numero={electores[elector].numero}
          telefono1={electores[elector].telefono1}
          zona={electores[elector].zona}
          seccion={electores[elector].seccion}
          rnm={electores[elector].rnm}
          nacimiento={electores[elector].nacimiento}
          sexo={electores[elector].sexo}
          correo={electores[elector].correo}
          telefono2={electores[elector].telefono2}
        />
      ))
    );
  };

  return (
    <Layout>
      <div className="container">
        <div className="parent white">
          <div className="box green">
            <div className="row">{showElectores()}</div>
            {informacionUsuario}
          </div>
        </div>
      </div>
      {/* <EvaluacionFamilia /> */}
      <br />
    </Layout>
  );
};
export default CardElector;
