'use client'
import Layout from "@/components/layout/Layout"
import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'
import Link from "next/link"
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="How It Works">
                <div>
                <section className="process-section sec-pad bg-color-1">
                    <div className="shape">
                        <div className="shape-1 float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-20.png)' }}></div>
                        <div className="shape-2 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
                        <div className="shape-3"></div>
                    </div>
                    <div className="auto-container">
                        <div className="sec-title mb_50 centred">
                        <span className="sub-title">Process</span>
                        <h2>How it Helps You to <br />Keep Healthy</h2>
                        </div>
                        <div className="inner-container">
                        <div className="arrow-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-18.png)' }}></div>

                        {/* Processing Blocks */}
                        {[1, 2, 3].map((count) => (
                            <div key={count} className={`processing-block-one wow fadeInLeft animated`} data-wow-delay={`${(count - 1) * 300}ms`} data-wow-duration="1500ms">
                            <div className="inner-box">
                                <span className="count-text">0{count}</span>
                                <figure className="image-box"><img src={`assets/images/resource/process-${count}.jpg`} alt="" /></figure>
                                <div className="lower-content">
                                {/* Replace with actual titles and descriptions */}
                                <h3>Title {count}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </section>

                <section className="testimonial-style-two bg-color-1">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 thumb-column">
                            <div className="thumb-box">
                                <div className="thumb thumb-1"><img src="assets/images/resource/thumb-1.png" alt="" /></div>
                                <div className="thumb thumb-2"><img src="assets/images/resource/thumb-2.png" alt="" /></div>
                                <div className="thumb thumb-3"><img src="assets/images/resource/thumb-3.png" alt="" /></div>
                                <div className="thumb thumb-4"><img src="assets/images/resource/thumb-4.png" alt="" /></div>
                                <div className="thumb thumb-5"><img src="assets/images/resource/thumb-5.png" alt="" /></div>
                                <div className="thumb thumb-6"><img src="assets/images/resource/thumb-6.png" alt="" /></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title mb_50">
                                    <span className="sub-title">TESTIMONIALS</span>
                                    <h2>What Our Client Say About medimart</h2>
                                </div>
                        <div className="content-box">
                            {/*Theme Carousel*/}
                            <TestimonialSlider1 />                        
                        </div>
                    </div>
                    
                    </div>
                    </div>
                </div>
                </section>

                <section className="video-section alternat-2 p_relative">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/video-bg.jpg)" }}></div>
                    <figure className="image-layer"><img src="assets/images/resource/video-2.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="inner-box">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}></div>
                            <div className="video-btn">
                            <a onClick={() => setOpen(true)}><i className="fas fa-play"></i></a>
                            </div>
                            <h2>Online Consultations With <br />Qualified Doctors</h2>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-one"><span>Make an Appointment</span></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-section sec-pad centred">
      <div className="shape">
        <div className="shape-1 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
        <div className="shape-2"></div>
        <div className="shape-3 float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Our Team</span>
          <h2>Meet our experienced doctors <br />for best treatment</h2>
        </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Black Marvin</Link></h3>
                                    <span className="designation">Medical Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Eleanor Pena</Link></h3>
                                    <span className="designation">Doctor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Arlene Maccy</Link></h3>
                                    <span className="designation">Nursing Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Jenny Wilson</Link></h3>
                                    <span className="designation">Senior Doctor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="pagination-wrapper mt_20 centred">
                    <ul className="pagination clearfix">
                        <li><Link href="team" className="current">1</Link></li>
                        <li><Link href="team">2</Link></li>
                        <li><Link href="team">3</Link></li>
                        <li><Link href="team"><i className="icon-36"></i></Link></li>
                    </ul>
                </div>
            </div>
                </section>
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
                                        <label htmlFor="checkbox1">I agree to the <Link href="/">Privacy Policy.</Link></label>
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
         <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="nfP5N9Yc72A" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}