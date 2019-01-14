import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/HOC/layout';
import RegisterLogin from './components/Register_login';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register_login" component={RegisterLogin}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Layout>
  )
}


export default Routes;
