import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Cities from "./components/Cities.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Itinerary from "./components/Itinerary.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Navbar} />
          </Switch>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
          <Switch>
            <Route path="/Footer" component={Footer} />
          </Switch>
          <Switch>
            <Route path="/Cities" component={Cities} />
          </Switch>
          <Switch>
            <Route path="/Login" component={Login} />
          </Switch>
          <Switch>
            <Route path="/Register" component={Register} />
          </Switch>
          <Switch>
            <Route exact path="/:city" component={Itinerary} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
