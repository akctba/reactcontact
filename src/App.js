import React from 'react';
import "./styles.css";
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Provider } from "./Context"; // Import Provider from Context.js

import Contacts from "./Contacts";
import AddContact from "./AddContact";
import About from "./pages/About";
import Header from "./Layout/Header";

function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact/addContact" component={AddContact} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
