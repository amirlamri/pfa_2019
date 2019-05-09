import React, {Component} from 'react';

export default class Section extends Component {
    render(){
        return (
        /*<section classNameName="hero-section set-bg" style={{backgroundColor:"red"}}>
            <div classNameName="hero-slider owl-carousel">
                <div classNameName="hs-item">
                    <div classNameName="hs-left"><img src="/img/slider-img.png" alt=""/></div>
                    <div classNameName="hs-right">
                        <div classNameName="hs-content">
                            <div classNameName="price">from $19.90</div>
                            <h2><span>2018</span> <br/>summer collection</h2>
                            <a href="" classNameName="site-btn">Shop NOW!</a>
                        </div>	
                    </div>
                </div>
                
            </div>
        </section>*/
    <div className="hero-wrap js-fullheight" style={{backgroundImage: "url("+"/images/bg_4.jpg"+")"}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
        	<h3 className="v">shop - Time to get dress</h3>
        	<h3 className="vr">Since - 1985</h3>
          <div className="col-md-11  text-center">
            <h1>SHOP</h1>
            <h2><span>Wear Your Dress</span></h2>
          </div>
          <div className="mouse">
						<a href="#" className="mouse-icon">
							<div className="mouse-wheel"><span className="ion-ios-arrow-down"></span></div>
						</a>
					</div>
        </div>
      </div>
    </div>
    )
    }
}