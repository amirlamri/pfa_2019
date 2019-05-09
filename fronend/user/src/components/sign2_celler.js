import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

export default class Sign2_celler extends Component {
    render(){
        return (
            <section>
            <div className="hero-wrap hero-bread" style={{backgroundImage: "url("+"images/bg_6.jpg"+")"}}>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9  text-center">
                    <h1 className="mb-0 bread">Sign In as celler </h1>
                    <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span> <span>Sign In as celler</span></p>
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
                                        <h3 className="card-title m-t-15 text-primary">Magasin Info</h3>
                                        <hr/>
                                        <div className="row p-t-20">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label text-info">Magasin Name</label>
                                                    <input type="text" id="Magasin description" className="form-control" placeholder="Magasin description"/>
                                                    <small className="form-control-feedback"> This is inline help </small> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group has-danger">
                                                    <label className="control-label text-info"> Magasin description </label>
                                                    <textarea class="form-control rounded-0 form-control-danger" id="exampleFormControlTextarea2" rows="3" placeholder="Magasin description ..."></textarea>
                                                    <small className="form-control-feedback"> This field has error. </small> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-primary py-2 px-3"  > <i className="fa fa-check"></i> Save</button>
                                        <button type="button" className="btn btn-inverse py-2 px-3" >Cancel</button>
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