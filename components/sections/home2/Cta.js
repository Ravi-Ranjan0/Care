import React from 'react';
import Link from "next/link"

export default function Cta() {
  return (
  <section className="cta-section">
      <div
        className="bg-layer parallax-bg"
        data-parallax={{ y: 100 }}
        style={{ backgroundImage: 'url(assets/images/background/cta-bg.jpg)' }}
      ></div>
      <figure className="image-layer">
        <img src="assets/images/resource/cta-1.png" alt="CTA" />
      </figure>
      <div className="auto-container">
        <div className="inner-box">
          <div className="sec-title light">
            <span className="sub-title">Need a Doctor for Check-up?</span>
            <h2>Call for an emergency service when you have a need!</h2>
            <div className="btn-box">
              <Link href="index-2" className="theme-btn btn-one"><span>Make an Appointment</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

