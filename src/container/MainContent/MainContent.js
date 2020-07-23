import React from "react";
//import "./MainContent.css";
import Portfolio from "../portfolio/Portfolio";
import Management from "../management/Management";
import aboutImg from  "../../assets/img/about-details.JPG";
import clientsImg from '../../assets/img/clo_clients.JPG';
import brandsImg from '../../assets/img/clo_brands.JPG';
import officeImg from '../../assets/img/clo_office.JPG';

const MainContent = () => {

    const portfolioLinks = [
        {
          title: 'Threads',
          caption: 'Illustration'
        },
        {
          title: 'Explore',
          caption: 'Graphic Design'
        },
        {
          title: 'Finish',
          caption: 'Identity'
        },
        {
          title: 'Lines',
          caption: 'Branding'
        },
        {
          title: 'Southwest',
          caption: 'Website Design'
        },
        {
          title: 'Window',
          caption: 'Photography'
        }
      ]

    return <div>
        <section className="page-section" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Business Model</h2>
                        <h3 className="section-subheading text-muted">Consolidator For Home & Living , Health Hygiene Products.</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">OMNI Channel</h4>
                        <p className="text-muted">ONLINE, CORPORATE SALES, INSTITUTIONAL SALES BY LOCAL DELIVERY.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Responsive Design</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Web Security</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
        <Management></Management>

        <section className="page-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">About US</h2>
                        <h3 className="section-subheading text-muted">.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div >
                            <img className="img-fluid" src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

        <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

        <section className="page-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Brands</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div >
                            <img className="img-fluid" src={brandsImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="page-section bg-light" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">On Going Work order</h2>
                        <h4 className="section-title">  </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 jumbotron">
                        <div >
                            <img className="img-fluid" src={officeImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 jumbotron text-center">
                        <div className= "icon">
                            <p>
                                Car Bottle Holder exporting 180000 pieces
                                </p>
                                <p>
                                Bath Bucket 16 ltr for Indian Brand 10 lakh pieces
                                </p>
                                <p>
                                Big Storage Container 10 ltr for Indian brand 5 lakh pieces
                                </p>
                                <p>
                                Brand Clochepan registration in Udaan started
                                </p>
                                <p>
                                Jurney just started ....
                                </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light page-section" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
                            <h4>Kay Garland</h4>
                            <p className="text-muted">Lead Designer</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt="" />
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Lead Marketer</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt="" />
                            <h4>Diana Pertersen</h4>
                            <p className="text-muted">Lead Developer</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <a href="#something">
                            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="#something">
                            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="#something">
                            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="#something">
                            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="page-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Clients</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div >
                            <img className="img-fluid" src={clientsImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="page-section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


        </div>
      }


export default MainContent;