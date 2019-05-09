// Header.js
import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

export default class Header extends Component {
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2" id="ftco-navbar" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html">SHOP</a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
	          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
              	<a className="dropdown-item" href="/shop">Shop</a>
                <a className="dropdown-item" href="product-single.html">Single Product</a>
                <a className="dropdown-item" href="cart.html">Cart</a>
                <a className="dropdown-item" href="checkout.html">Checkout</a>
              </div>
            </li>
	          <li className="nav-item"><a href="" className="nav-link">About</a></li>
	          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
              <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
	          <li className="nav-item cta cta-colored"><a href="/cart" className="nav-link"><span className="icon-shopping_cart"></span>[0]</a></li>

	        </ul>
	      </div>
	    </div>
	  </nav>
        )
    }
}