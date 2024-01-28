import Link from 'next/link';
import React from 'react';

export default function Chooseus() {
  return (
    <section className="chooseus-style-two bg-color-1">
    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/chooseus-bg-2.jpg)" }}></div>
    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-8 col-md-12 col-sm-12 content-column offset-lg-4">
          <div className="content-box ml_45">
            <div className="sec-title mb_50">
              <span className="sub-title">Why Choose Us</span>
              <h2>Choose The Best For Your <br />Health</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-18"></i></div>
                    <h3>Professional Staff</h3>
                    <p>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-21"></i></div>
                    <h3>Emergency Case</h3>
                    <p>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-19"></i></div>
                    <h3>Online Appointment</h3>
                    <p>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-20"></i></div>
                    <h3>24/7 Services</h3>
                    <p>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
