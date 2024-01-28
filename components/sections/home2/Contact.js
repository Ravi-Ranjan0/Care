import React from 'react';

export default function Contact() {
  return (
    <section className="contact-section pt_120 pb_120">
    <div className="auto-container">
        <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 map-column">
                <div className="map-inner mr_35">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                    <div className="sec-title mb_50">
                        <span className="sub-title">Contact</span>
                        <h2>Don't Hesitate to Contact Us</h2>
                    </div>
                    <div className="form-inner">
                        <form action="index-2" method="post" className="default-form">
                            <div className="form-group">
                                <input type="text" name="fname" placeholder="First Name" required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="lname" placeholder="Last Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email" readOnly />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group message-btn">
                                <button type="submit" className="theme-btn btn-one"><span>Send Message</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

