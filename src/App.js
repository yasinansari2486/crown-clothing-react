import React from 'react';
import { Switch,Route,BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
