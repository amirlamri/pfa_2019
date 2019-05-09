import React, {Component} from 'react';

import Section from '../components/section';

import Produit from '../components/produit';
import Section2 from '../components/section2';

export default class Content extends Component {
    render(){
        
        return (
        <section>
        <Section />
        <section className="ftco-section ftco-product">
    	    <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section text-center ">
                        <h1 className="big">Trending</h1>
                        <h2 className="mb-4">Trending</h2>
                    </div>
                </div>
    		    <div className="row">
                            <div className="item col-sm col-md-3">
                                <div className="product ">
                                    <a href="#" className="img-prod"><img className="img-fluid" src="/images/product-1.jpg" alt="Colorlib Template"/>
                                        <span className="status">30%</span>
                                    </a>
                                    <div className="text pt-3 px-3">
                                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                                            </div>
                                            <div className="rating">
                                                <p className="text-right">
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-md-3">
                                <div className="product">
                                    <a href="#" className="img-prod"><img className="img-fluid" src="/images/product-2.jpg" alt="Colorlib Template"/></a>
                                    <div className="text pt-3 px-3">
                                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span>$120.00</span></p>
                                            </div>
                                            <div className="rating">
                                                <p className="text-right">
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-md-3">
                                <div className="product">
                                    <a href="#" className="img-prod"><img className="img-fluid" src="/images/product-3.jpg" alt="Colorlib Template"/></a>
                                    <div className="text pt-3 px-3">
                                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span>$120.00</span></p>
                                            </div>
                                            <div className="rating">
                                                <p className="text-right">
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-md-3">
                                <div className="product">
                                    <a href="#" className="img-prod"><img className="img-fluid" src="/images/product-4.jpg" alt="Colorlib Template"/></a>
                                    <div className="text pt-3 px-3">
                                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span>$120.00</span></p>
                                            </div>
                                            <div className="rating">
                                                <p className="text-right">
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    		            </div>
    	            </div>
                </section>
                <Produit />
                <Section2 />
            </section>
            )
        }
}