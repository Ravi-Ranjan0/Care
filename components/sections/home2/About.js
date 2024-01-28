import React from 'react';

export default function About() {
  return (
    <section className="about-style-two pt_120 pb_120">
      <div className="pattern-layer">
        <div className="pattern-1 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
        <div className="pattern-2 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}></div>
        <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_one">
              <div className="image-box">
                <div className="shape float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
                <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
                <figure className="image-2"><img src="assets/images/resource/about-1.png" alt="" /></figure>
                <div className="icon-one"><i className="icon-13"></i></div>
                <div className="icon-two"><i className="icon-14"></i></div>
                <div className="text-box">
                  <h3>Wade Warren</h3>
                  <span>Medical Assistant</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_30">
                <div className="sec-title mb_15">
                  <span className="sub-title">About Us</span>
                  <h2>Medical services & diagnostics</h2>
                </div>
                <div className="text-box mb_40">
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  <ul className="list-style-one clearfix">
                    <li>Refresing to get such a personal touch.</li>
                    <li>Duis aute irure dolor in reprehenrit in voluptate.</li>
                    <li>Velit esse cillum dolore eu fugiat nua pariatur.</li>
                  </ul>
                </div>
                <div className="lower-box">
                  <div className="experience-box">
                    <div className="icon-box"><i className="icon-29"></i></div>
                    <h3>32 Years</h3>
                    <span className="designation">Of Medical Experience</span>
                  </div>
                  <figure className="author-thumb"><img src="assets/images/resource/author-1.jpg" alt="" /></figure>
                  <div className="signature"><img src="assets/images/icons/signature-1.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

