import React from 'react';

export default function working() {
  return (
    <section className="working-section centred">
      <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
      <div className="auto-container">
        <div className="sec-title mb_60">
          <span className="sub-title">Service Industry</span>
          <h2>A wide range of waste <br />disposal services</h2>
        </div>
        <div className="content-inner">
          <div className="working-block-one">
            <div className="inner-box">
              <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
              <div className="icon-box">
                <div className="icon"><i className="icon-29"></i></div>
                <span className="count-text">01</span>
              </div>
              <h3>Waste pickup</h3>
              <p>Amet minim mollit no duis deserunt ulamco.</p>
            </div>
          </div>
          <div className="working-block-one">
            <div className="inner-box">
              <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
              <div className="icon-box">
                <div className="icon"><i className="icon-30"></i></div>
                <span className="count-text">02</span>
              </div>
              <h3>Waste collection</h3>
              <p>Amet minim mollit no duis deserunt ulamco.</p>
            </div>
          </div>
          <div className="working-block-one">
            <div className="inner-box">
              <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
              <div className="icon-box">
                <div className="icon"><i className="icon-31"></i></div>
                <span className="count-text">03</span>
              </div>
              <h3>Proccessing</h3>
              <p>Amet minim mollit no duis deserunt ulamco.</p>
            </div>
          </div>
          <div className="working-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <div className="icon"><i className="icon-32"></i></div>
                <span className="count-text">04</span>
              </div>
              <h3>Recycling</h3>
              <p>Amet minim mollit no duis deserunt ulamco.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
