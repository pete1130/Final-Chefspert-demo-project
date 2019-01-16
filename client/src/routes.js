import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/HOC/layout';
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/register';
import UserDashboard from './components/User';
import Auth from './components/HOC/auth';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" component={Auth(UserDashboard,true)}/>
        <Route path="/register" component={Auth(Register,false)}/>
        <Route path="/register_login" component={Auth(RegisterLogin,false)}/>
        <Route exact path="/" component={Auth(Home,null)}/>
      </Switch>
    </Layout>
  )
}


export default Routes;
