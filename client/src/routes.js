import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './HOC/layout';
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/register';
import Shop from './components/Shop';
import UserDashboard from './components/User';
import Auth from './HOC/auth';
import AddProduct from './components/User/Admin/add_product';
import ProductPage from './components/Product';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/product_detail/:id" component={Auth(ProductPage,null)}/>
        <Route path="/user/dashboard" component={Auth(UserDashboard,true)}/>
        <Route path="/admin/add_product" component={Auth(AddProduct,true)}/>
        <Route path="/register" component={Auth(Register,false)}/>
        <Route path="/register_login" component={Auth(RegisterLogin,false)}/>
        <Route path="/shop" component={Auth(Shop,null)}/>
        <Route exact path="/" component={Auth(Home,null)}/>
      </Switch>
    </Layout>
  )
}


export default Routes;
