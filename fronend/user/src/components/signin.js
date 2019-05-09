import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

export default class Signin extends Component {
    render(){
        return (
            <section>
                <div className="hero-wrap hero-bread" style={{backgroundImage: "url("+"images/bg_6.jpg"+")"}}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9  text-center">
                        <h1 className="mb-0 bread">Sign In</h1>
                        <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span> <span>Sign In</span></p>
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
                                <div class="form-group form-control-lg">
                                    <label for="choix_cnx">sign in as :</label>
                                    <select class="form-control" id="choix_cnx">
                                    <option id="client">Client</option>
                                    <option id="celler">celler</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Next" className="btn btn-primary py-3 px-5"/>
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