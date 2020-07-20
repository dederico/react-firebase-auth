import React, { useState, useEffect } from "react";
import Elector from "../components/Elector";
import axios from "axios";

const Manager = () => {
  const [electores, setElectores] = useState({});
  useEffect(() => {
    getElectores();
  }, []);

  const getElectores = () => {
    axios
      .get("https://san-pedro-2021.firebaseio.com/elector.json")
      .then(({ data, status }) => {
        if (status === 200) {
          setElectores(data);
        }
      });

    const showElectores = (elector) => {
      return Object.keys(elector).length <= 0 ? (
        <h1>No hay electores</h1>
      ) : (
        Object.keys(electores).map((elector) => (
          <Elector key={elector} paterno={electores[elector].paterno} />
        ))
      );
    };

    return <>{showElectores}</>;
  };
};
export default Manager;
