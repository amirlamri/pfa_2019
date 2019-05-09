import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header';
import Content from './components/content';
import Section from './components/section';
import Produit from './components/produit';
import Section2 from './components/section2';
import Contact from './components/contact';
import Login from './components/login';
import Shop from './components/shop';
import Cart from './components/cart';
import Signin from './components/signin';
import Sign_client from './components/sign_client';
import Sign_celler from './components/sign_celler';
import Sign2_celler from './components/sign2_celler';
import Footer from './components/footer';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <Route exact path="/" component={Content} />
          <div className="container">
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/sign_client" component={Sign_client} />
            <Route exact path="/sign_celler" component={Sign_celler} />
            <Route exact path="/sign2_celler" component={Sign2_celler} />
          </div>
          <Footer />
        </div>
      </Router>
      /*<div>
        <Header />
        <Section />
        <Content />
        <Produit /> 
        <Section2 />
        <Footer />
      </div>*/
    );
  }
}

export default App;