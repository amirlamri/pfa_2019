import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

export default class Login extends Component {
    render(){
        return (
            <section>
                <div className="hero-wrap hero-bread" style={{backgroundImage: "url("+"images/bg_6.jpg"+")"}}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9  text-center">
                        <h1 className="mb-0 bread">LOg in</h1>
                        <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span> <span>Login</span></p>
                    </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section contact-section">
                <div className="container">
                    <div className="row block-9 " >
                        <div className="col-md-3 order-md-last d-flex"></div>
                        <div className="col-md-6 order-md-last d-flex">
                            <form action="#" className="bg-white p-5 contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your LOgin"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your password"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Log in" className="btn btn-primary py-3 px-5"/>
                                    <a href="/signin" className="btn btn-outline-dark py-3 px-5">sign in</a>
                                </div>
                             </form>
                        </div>
                    </div>
                   
                </div>
            </section>  
            
        </section>
        )
    }
}