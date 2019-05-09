// Header.js
import React, {Component} from 'react';

export default class Section2 extends Component {
    render(){
        return (
					<section>
					<section className="ftco-section ftco-section-more img" style={{backgroundImage: "url("+"images/bg_5.jpg"+")"}}>
					<div className="container">
						<div className="row justify-content-center mb-3 pb-3">
							<div className="col-md-12 heading-section">
								<h2>Summer Sale</h2>
							</div>
						</div>
					</div>
				</section>
				<section className="ftco-section-parallax">
				<div className="parallax-img d-flex align-items-center">
					<div className="container">
						<div className="row d-flex justify-content-center py-5">
							<div className="col-md-7 text-center heading-section ">
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