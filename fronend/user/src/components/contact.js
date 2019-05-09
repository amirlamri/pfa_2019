import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

export default class Contact extends Component {
    render(){
        return (
            <section>
                <div className="hero-wrap hero-bread" style={{backgroundImage: "url("+"images/bg_6.jpg"+")"}}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 ftco-animate text-center">
                        <h1 className="mb-0 bread">Contact Us</h1>
                        <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Contact</span></p>
                    </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section contact-section bg-light">
                <div className="container">
                    <div className="row block-9">
                        <div className="col-md-6 order-md-last d-flex">
                            <form action="#" className="bg-white p-5 contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                                </div>
                             </form>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div id="map" className="bg-white"></div>
                        </div>
                    </div>
                    <div className="row d-flex mt-5 contact-info">
                        <div className="w-100"></div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Website</span> <a href="#">yoursite.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
            <section className="ftco-section-parallax">
                <div className="parallax-img d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center py-5">
                            <div className="col-md-7 text-center heading-section ftco-animate">
                                <h1 className="big">Subscribe</h1>
                                <h2>Subcribe to our Newsletter</h2>
                                <div className="row d-flex justify-content-center mt-5">
                                    <div className="col-md-8">
                                        <form action="#" className="subscribe-form">
                                            <div className="form-group d-flex">
                                                <input type="text" className="form-control" placeholder="Enter email address"/>
                                                <input type="submit" value="Subscribe" className="submit px-3"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        )
    }
}