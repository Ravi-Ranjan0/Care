import Link from "next/link";
import React from "react";

export default function feature() {
  return (
    <section className="feature-section pt_120 pb_90">
      <div
        className="shape"
        style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}
      ></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-9"></i>
                </div>
                <h3>
                  <Link href="/">Qualified Doctor</Link>
                </h3>
                <p>It prioritize your health and well-being.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-10"></i>
                </div>
                <h3>
                  <Link href="/">Emergency Help</Link>
                </h3>
                <p>Prompt assistance for urgent medical needs.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-11"></i>
                </div>
                <h3>
                  <Link href="/">Modern Equipment</Link>
                </h3>
                <p>State-of-the-art tools for optimal patient care.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-12"></i>
                </div>
                <h3>
                  <Link href="/">Family Medicine</Link>
                </h3>
                <p>Caring for your family’s health at every stage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
