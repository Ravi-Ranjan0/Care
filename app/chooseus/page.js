'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"

import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
const ProgressBar = ({ label, percent }) => (
    <div className="progress-box">
      <p>{label}</p>
      <div className="bar">
        <div className="bar-inner count-bar" style={{ width: `${percent}%` }}></div>
        <div className="count-text">{`${percent}%`}</div>
      </div>
    </div>
  );
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
   
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="ChoosUs">
                {/* chooseus-section */}
                <section className="chooseus-style-two bg-color-1">
                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/chooseus-bg-2.jpg)' }}></div>
                    <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
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
                {/* chooseus-section end */}


                {/* cta */}
                <section className="cta-section">
            <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: "url(assets/images/background/cta-bg.jpg)" }}></div>
            <figure className="image-layer"><img src="assets/images/resource/cta-1.png" alt="" /></figure>
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
                {/* cta end */}


                {/* funfact-section */}
                <section className="funfact-section centred">
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                           
                                <div className="count-outer count-box">
                                    <CounterUp end={75} /><span>+</span>
                                </div>
                                <span className="text">Expert Doctors</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                               
                                <div className="count-outer count-box">
                                    <CounterUp end={7} /><span>k</span>
                                </div>
                                <span className="text">Happy Patients</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                
                                <div className="count-outer count-box">
                                    <CounterUp end={850} />
                                </div>
                                <span className="text">Modern Rooms</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                               
                                <div className="count-outer count-box">
                                    <CounterUp end={15} />
                                </div>
                                <span className="text">Awards Win</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
                {/* funfact-section */}

                {/* <!-- solutions-section --> */}
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
                
        {/* <!-- team-section end --> */}
                {/* <!-- solutions-section --> */}
                <section className="team-section sec-pad centred">
      <div className="shape">
        <div className="shape-1 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
        <div className="shape-2"></div>
        <div className="shape-3 float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Our Team</span>
          <h2>Meet our experienced doctors <br />for the best treatment</h2>
        </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-5.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Black Marvin</Link></h3>
                                    <span className="designation">Medical Assistant</span>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-6.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Eleanor Pena</Link></h3>
                                    <span className="designation">Doctor</span>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-7.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Arlene Maccy</Link></h3>
                                    <span className="designation">Nursing Assistant</span>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-8.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Jenny Wilson</Link></h3>
                                    <span className="designation">Senior Doctor</span>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- team-section end --> */}
               


              
                {/* subscibe */}
                <section className="subscribe-section">
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                        <div className="text-box">
                            <h2><span>Subscribe</span> for the exclusive updates!</h2>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                        <div className="form-inner">
                            <form method="post" action="contact">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Enter Your Email Address" required />
                                <button type="submit" className="theme-btn btn-one"><span>Subscribe Now</span></button>
                            </div>
                            <div className="form-group">
                                <div className="check-box">
                                <input className="check" type="checkbox" id="checkbox1" />
                                <label htmlFor="checkbox1">I agree to the <Link href="index">Privacy Policy.</Link></label>
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

                  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="nfP5N9Yc72A" onClose={() => setOpen(false)} />
    
               
            </Layout>
        </>
    )
}


