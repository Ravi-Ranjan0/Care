"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Services">
        <div>
          {/* service-style-two */}
          <section className="service-section sec-pad-2">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link href="service-details">
                            <img
                              src="assets/images/service/service-4.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <div className="icon-box">
                          <i className="icon-30"></i>
                        </div>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link href="service-details">
                            Medical Scribing & Transcription
                          </Link>
                        </h3>
                        <p>
                          Our expert scribes and transcriptionists capture
                          accurate medical records in real-time, reducing the
                          documentation burden for healthcare providers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat the above block for other service items */}
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link href="service-details-6">
                            <img
                              src="assets/images/service/service-2.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <div className="icon-box">
                          <i className="icon-16"></i>
                        </div>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link href="service-details-6">
                            Medical Billing & Coding
                          </Link>
                        </h3>
                        <p>
                          We provide precise billing and coding solutions to
                          ensure faster reimbursements and accurate claim
                          submissions, optimizing your revenue cycle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat the above block for other service items */}
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link href="service-details-2">
                            <img
                              src="assets/images/service/service-5.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <div className="icon-box">
                          <i className="icon-32"></i>
                        </div>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link href="service-details-2">
                            Healthcare Recruitment & Staffing
                          </Link>
                        </h3>
                        <p>
                          Our recruitment and staffing services help you find
                          the right professionals for your practice, ensuring a
                          seamless experience for both you and your patients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat the above block for other service items */}
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link href="service-details-3">
                            <img
                              src="assets/images/service/service-1.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <div className="icon-box">
                          <i className="icon-15"></i>
                        </div>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link href="service-details-3">
                            Virtual Medical Receptionists
                          </Link>
                        </h3>
                        <p>
                          Our trained virtual receptionists handle your calls,
                          schedule appointments, and manage patient inquiries,
                          allowing your front desk to operate smoothly, even
                          remotely.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat the above block for other service items */}
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link href="service-details-5">
                            <img
                              src="assets/images/service/service-6.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <div className="icon-box">
                          <i className="icon-31"></i>
                        </div>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link href="service-details-5">
                            Virtual Medical Administrative Assistants
                          </Link>
                        </h3>
                        <p>
                          We offer dedicated administrative assistants who
                          handle a variety of tasks like appointment scheduling,
                          patient follow-ups, and insurance verification,
                          keeping your office running efficiently.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* service-style-two end */}
          {/* subscibe */}
          <section className="subscribe-section">
            <div className="auto-container">
              <div className="inner-container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                    <div className="text-box">
                      <h2>
                        <span>Subscribe</span> for the exclusive updates!
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                    <div className="form-inner">
                      <form method="post" action="contact">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            required
                          />
                          <button type="submit" className="theme-btn btn-one">
                            <span>Subscribe Now</span>
                          </button>
                        </div>
                        <div className="form-group">
                          <div className="check-box">
                            <input
                              className="check"
                              type="checkbox"
                              id="checkbox1"
                            />
                            <label htmlFor="checkbox1">
                              I agree to the{" "}
                              <Link href="/">Privacy Policy.</Link>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* subscibe end */}
        </div>
      </Layout>
    </>
  );
}
