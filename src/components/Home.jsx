import React from "react";
// import OuterElectorCard from "../components/OuterElectorCard";
// import CardElector from "../components/CardElector";
// import Elector from "../components/Elector";
// import axios from "axios";

const Home = (props) => {
  return (
    <div className="Home container" align="center">
      {/* <OuterElectorCard /> */}
      {/* <CardElector /> */}
      {/* {showElectores()} */}
      <h5 className="mt-5">Hello : {props.user.displayName}</h5>
      <button onClick={props.logOutUser} className="btn btn-primary">
        Sing Out
      </button>
    </div>
  );
};

export default Home;
