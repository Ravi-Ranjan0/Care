import React from 'react';
import Link from 'next/link';
export default function Banner() {
  return (
    <section className="banner-section p_relative">
      <div className="pattern-layer wow slideInDown animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}></div>
      <div className="shape">
        <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
        <div className="shape-2 float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
        <div className="shape-3" style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}></div>
        <div className="shape-4" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <span className="upper-text">Highest level of service you can find</span>
              <h2>Take <span>Care of Your</span> Health Now.</h2>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              <div className="btn-box">
                <Link href="/" className="theme-btn btn-two"><span>Explore Our Service</span></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box">
              <figure className="image float-bob-y"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

