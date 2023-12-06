import React, {Component} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SignInLinks from "./components/layout/SignInLink";


function App () {
  return (
    <Router>
    <div>
      <Navbar />
    </div>
    </Router>
  );
}

export default App;
