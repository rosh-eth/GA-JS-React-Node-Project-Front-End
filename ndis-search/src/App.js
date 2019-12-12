import React from 'react';
import './App.css';
import {Create} from './components/Create';
import {Delete} from './components/Delete';
import {Edit} from './components/Edit';
import {ShowAll} from './components/ShowAll';
import {Search} from './components/Search';
import {View} from './components/View';

import {Switch, Route, Link} from "react-router-dom";
import {Nav} from './components/Nav';

function App() {
  return (
  <div>
    <Nav />
    <Switch>
      <Route exact path={"/provider/create"} component={Create} />
      <Route exact path={"/provider/delete"} component={Delete} />
      <Route exact path={"/provider/edit"} component={Edit} />
      <Route exact path={"/provider"} component={ShowAll} />
      <Route exact path={"/provider/:id"} component={View} />
      <Route exact path={"/"} component={Search} />

    </Switch>
    
  </div>

  );
}

export default App;
