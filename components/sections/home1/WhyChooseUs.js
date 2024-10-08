import Link from "next/link";
import React from "react";

export default function chooseus() {
  return (
    <section className="chooseus-section">
      <div
        className="bg-layer"
        style={{
          backgroundImage: "url(assets/images/background/chooseus-bg.jpg)",
        }}
      ></div>
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}
      ></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title light mb_50">
                <span className="sub-title">
                  Choose The Best For Your <br />
                  Health
                </span>
                <h2>Our Mission</h2>
                <p style={{ color: "white" }}>
                  To simplify healthcare processes, empowering doctors, clinics,
                  and hospitals worldwide to deliver the best care without
                  worrying about operational hurdles. At CareTrotter, we’re
                  committed to enhancing the efficiency and financial health of
                  medical organizations through cutting-edge solutions tailored
                  to your needs.
                </p>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-18"></i>
                      </div>
                      <h3>Professional Staff</h3>
                      <p>
                        Highly trained professionals committed to your health
                        and comfort
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-21"></i>
                      </div>
                      <h3>Emergency Case</h3>
                      <p>
                        Rapid response for urgent care when every second counts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-19"></i>
                      </div>
                      <h3>Online Appointment</h3>
                      <p>
                        Convenient scheduling for your health needs at your
                        fingertips.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-20"></i>
                      </div>
                      <h3>24/7 Services</h3>
                      <p>
                        Always available to support your health around the
                        clock.
                      </p>
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
}
