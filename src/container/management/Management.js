import React from "react";
import mangementImg from '../../assets/img/clo_management.JPG'; // Tell webpack this JS file uses this image


const Management = () =>{

    return (
        <section className="bg-light page-section" id="management">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Management</h2>
                        <h3 className="section-subheading text-muted"></h3>
                    </div>
                </div>
            </div>
           
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div class="img">
                        <img className="img-fluid" src= {mangementImg} alt=""></img>
                    </div>
                </div>
            </div>

        </section>
        )
}


export default Management;