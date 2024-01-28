
'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from "next/link"
export default function WhyChooseUs() {
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
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Gallery">        

            {/* gallery */}
            <section className="gallery-page-section sec-pad-2">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 gallery-block">
                        <div className="gallery-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/gallery/gallery-6.jpg" alt="" /></figure>
                                <div className="view-btn"><Link href="assets/images/gallery/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-4"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above block for other gallery items */}
                    <div className="col-lg-4 col-md-6 col-sm-12 gallery-block">
                        <div className="gallery-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/gallery/gallery-7.jpg" alt="" /></figure>
                                <div className="view-btn"><Link href="assets/images/gallery/gallery-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-4"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above block for other gallery items */}
                    <div className="col-lg-4 col-md-6 col-sm-12 gallery-block">
                        <div className="gallery-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/gallery/gallery-8.jpg" alt="" /></figure>
                                <div className="view-btn"><Link href="assets/images/gallery/gallery-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-4"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above block for other gallery items */}
                    <div className="col-lg-4 col-md-6 col-sm-12 gallery-block">
                        <div className="gallery-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/gallery/gallery-9.jpg" alt="" /></figure>
                                <div className="view-btn"><Link href="assets/images/gallery/gallery-9.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-4"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above block for other gallery items */}
                    <div className="col-lg-4 col-md-6 col-sm-12 gallery-block">
                        <div className="gallery-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/gallery/gallery-10.jpg" alt="" /></figure>
                                <div className="view-btn"><Link href="assets/images/gallery/gallery-10.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-4"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above block for other gallery items */}
                    <div className="col-lg-4 col-md-6 col-sm-12 gallery-block">
                        <div className="gallery-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/gallery/gallery-11.jpg" alt="" /></figure>
                                <div className="view-btn"><Link href="assets/images/gallery/gallery-11.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-4"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above block for other gallery items */}
                </div>
                <div className="pagination-wrapper mt_20 centred">
                    <ul className="pagination clearfix">
                        <li><Link href="gallery" className="current">1</Link></li>
                        <li><Link href="gallery">2</Link></li>
                        <li><Link href="gallery">3</Link></li>
                        <li><Link href="gallery"><i className="icon-36"></i></Link></li>
                    </ul>
                </div>
            </div>
        </section>
            {/* gallery end */} 

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
                </Layout>   
        </>
    )
}



