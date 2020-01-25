import React, {useState, useContext} from 'react';
import './App.css';
import {Form} from './components/Form';
import {ShowAll} from './components/ShowAll';
import {View} from './components/View';
import {Footer} from './components/Footer';
import Home from './components/Home';
import {Login} from './components/Login';

import {Switch, Route} from "react-router-dom";
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginContext = React.createContext();
const LoginProvider = LoginContext.Provider;

function App() {

  const [loginState, setLoginState] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  return (
  <div>
    <LoginProvider value={{loginState, setLoginState, userProfile, setUserProfile}}>
      <Nav />

      <Switch>
        <Route exact path={"/provider/create"} component={Form} />
        <Route exact path={"/provider"} component={ShowAll} />
        <Route exact path={"/provider/edit/:edit"} component={Form} />
        <Route exact path={"/provider/:id"} component={View} />
        <Route exact path={"/"} component={Login} />
        <Route exact path={"/login"} component={Login} />
      </Switch>
      <Footer />
    </LoginProvider>
  </div>

  );
}

export {LoginContext};
export default App;
