import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom/SingleRoom";
import Error from "./paggit remote add origin https://github.com/A7medSa3ed/Hotel-project.gites/Error";

import Navbar from "./components/Navbar/Navbar";
// import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:id" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
