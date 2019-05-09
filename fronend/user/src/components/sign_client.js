import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

export default class Sign_client extends Component {
    render(){
        return (
            <section>
            <div className="hero-wrap hero-bread" style={{backgroundImage: "url("+"images/bg_6.jpg"+")"}}>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9  text-center">
                    <h1 className="mb-0 bread">Sign In as client </h1>
                    <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span> <span>Sign In as Client</span></p>
                </div>
                </div>
            </div>
        </div>
            <section className="ftco-section ">
                <div className="container-fluid"></div>
                    <div className="row">
                    <div className="col-lg-12 ">
                        <div className="card card-outline-primary bg-light">
                            <div className="card-body bg-light">
                                <form action="#" className="bg-white p-5 contact-form bg-light">
                                    <div className="form-body">
                                        <h3 className="card-title m-t-15 text-primary">Person Info</h3>
                                        <hr/>
                                        <div className="row form-group">
                                            <div className="col-md-6">
                                                <img id="imgg" src="images/person_4.jpg" alt="your image" style={{width:"30%",paddingRight:"30px", paddingLeft:"0px"}} className="rounded" />
                                                <label for="btn_img" className="custom-file-upload btn btn-info py-1 px-2">
                                                            Custom Upload
                                                            </label>
                                                <input id="btn_img"  name="btn_img" accept="image/JPEG" style={{display: "none"}}   type="file" onchange="readURL(this); "  />
                                                

                                            </div>
                                        </div>
                                        <div className="row p-t-20">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label text-info">First Name</label>
                                                    <input type="text" id="firstName" className="form-control" placeholder="John doe"/>
                                                    <small className="form-control-feedback"> This is inline help </small> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group has-danger">
                                                    <label className="control-label text-info">Last Name</label>
                                                    <input type="text" id="lastName" className="form-control form-control-danger" placeholder="lastName"/>
                                                    <small className="form-control-feedback"> This field has error. </small> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group has-danger">
                                                    <label className="control-label text-info">Login</label>
                                                    <input type="text" id="Login" className="form-control form-control-danger" placeholder="Login"/>
                                                    <small className="form-control-feedback"> enter your login here . </small> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group has-danger">
                                                    <label className="control-label text-info">Password</label>
                                                    <input type="text" id="Password" className="form-control form-control-danger" placeholder="Password"/>
                                                    <small className="form-control-feedback"> This field has error. </small> </div>
                                            </div>
                                        </div>
                                        
                                        <h3 className="box-title m-t-40 text-primary">Address</h3>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-12 ">
                                                <div className="form-group">
                                                    <label className="text-info">Street</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="text-info">City</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="text-info">State</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="text-info">Post Code</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="text-info">Country</label>
                                                    <select className="form-control custom-select">
                                                        <option>--Select your Country--</option>
                                                        <option>India</option>
                                                        <option>Sri Lanka</option>
                                                        <option>USA</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-primary py-3 px-5"  > <i className="fa fa-check"></i> Save</button>
                                        <button type="button" className="btn btn-inverse py-3 px-5" >Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                </section>
                    )
    }
}