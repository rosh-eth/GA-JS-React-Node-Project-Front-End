import React from 'react';
import './App.css';
import {Form} from './components/Form';
import {ShowAll} from './components/ShowAll';
import {View} from './components/View';
import {Footer} from './components/Footer';

import {Switch, Route, Link} from "react-router-dom";
import {Nav} from './components/Nav';

function App() {
  return (
  <div>
    <Nav />
    <Switch>
      <Route exact path={"/provider/create"} component={Form} />
      <Route exact path={"/provider"} component={ShowAll} />
      <Route exact path={"/provider/edit/:edit"} component={Form} />
      <Route exact path={"/provider/:id"} component={View} />
      <Route exact path={"/"} component={ShowAll} />

    </Switch>
    <Footer />
  </div>

  );
}

export default App;
