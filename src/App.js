import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";
import firebase, { auth } from "./firebase";
import Layout from "./components/Layout";
import "./App.css";
import logo from "./pan.png";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  logOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then((window.location = "/"));
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <br />
          <br />
          <img src={logo} alt="logo" />

          <br />
          <br />

          <HashRouter basename="/">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home
                    {...props}
                    logOutUser={this.logOutUser}
                    user={this.state.user}
                  />
                )}
              />
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact component={NoMatch} />
            </Switch>
          </HashRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
