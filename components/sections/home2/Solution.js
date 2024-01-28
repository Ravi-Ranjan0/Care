import React from 'react';
import Link from "next/link"
const ProgressBar = ({ label, percent }) => (
  <div className="progress-box">
    <p>{label}</p>
    <div className="bar">
      <div className="bar-inner count-bar" style={{ width: `${percent}%` }}></div>
      <div className="count-text">{`${percent}%`}</div>
    </div>
  </div>
);
export default function Solution() {
  return (
  <section className="solutions-section bg-color-1 p_relative">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div className="content-box">
            <div className="sec-title mb_50">
              <span className="sub-title">Better Solutions</span>
              <h2>Quality Medical Service with Experts</h2>
            </div>
            <div className="progress-inner mb_50">
              
              <ProgressBar label="Skilled Doctor" percent={85} />
              <ProgressBar label="Modernized Equipment" percent={90} />
              <ProgressBar label="Dedicated Team" percent={80} />
            </div>
            <div className="btn-box">
              <Link href="index-2" className="theme-btn btn-one"><span>Discover More</span></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
          <div className="image_block_two">
            <div className="image-box">
              <figure className="image image-1"><img src="assets/images/resource/skills-1.jpg" alt="" /></figure>
              <figure className="image image-2"><img src="assets/images/resource/skills-2.jpg" alt="" /></figure>
              <div className="icon-box"><i className="icon-33"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};


