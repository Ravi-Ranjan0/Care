
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Sidebar">
                <div>
                    {/* sidebar-page-container */}
                    <section className="sidebar-page-container sec-pad-2">
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="blog-sidebar default-sidebar mr_10">
                            <div className="sidebar-widget search-widget">
                                <div className="search-form">
                                <form method="post" action="blog-2">
                                    <div className="form-group">
                                    <input type="search" name="search-field" placeholder="Search here" required />
                                    <button type="submit"><i className="icon-27"></i></button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            {/* Add more sidebar widgets as needed */}
                            <div className="sidebar-widget category-widget">
                                <div className="widget-title">
                                    <h3>Categories</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="category-list clearfix">
                                        <li><Link href="blog-details">Cardiology</Link></li>
                                        <li><Link href="blog-details">Dental Clinic</Link></li>
                                        <li><Link href="blog-details">Neurosurgery</Link></li>
                                        <li><Link href="blog-details">Medical</Link></li>
                                        <li><Link href="blog-details">Pediatrics</Link></li>
                                        <li><Link href="blog-details">Modern Laboratory</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Add more sidebar widgets as needed */}
                            <div className="sidebar-widget category-widget archives-widget">
                                <div className="widget-title">
                                    <h3>Archives</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="category-list clearfix">
                                        <li><Link href="blog-details">December 2021</Link></li>
                                        <li><Link href="blog-details">October 2021</Link></li>
                                        <li><Link href="blog-details">January 2022</Link></li>
                                        <li><Link href="blog-details">October 2022</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Add more sidebar widgets as needed */}
                            <div className="sidebar-widget tags-widget">
                                <div className="widget-title">
                                    <h3>Tags</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="tags-list clearfix">
                                        <li><Link href="blog-details">Adventures</Link></li>
                                        <li><Link href="blog-details">Health</Link></li>
                                        <li><Link href="blog-details">Care</Link></li>
                                        <li><Link href="blog-details">Cardiac</Link></li>
                                        <li><Link href="blog-details">Doctors</Link></li>
                                        <li><Link href="blog-details">Cardiac</Link></li>
                                        <li><Link href="blog-details">Hospital</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Add more sidebar widgets as needed */}
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="blog-classic-content">
                            <div className="news-block-one">
                                <div className="inner-box">
                                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-7.jpg" alt="" /></Link></figure>
                                <div className="lower-content">
                                    <ul className="post-info mb_15 clearfix">
                                    <li><Link href="blog-details">Admin</Link></li>
                                    <li>12 Jan 2022</li>
                                    <li>03 Comt</li>
                                    </ul>
                                    <h3><Link href="blog-details">How do Inherited Retinal of Diseases Happen?</Link></h3>
                                    <p>Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    <div className="link">
                                    <Link href="blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* Repeat similar blocks for other news items */}
                            <div className="news-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-8.jpg" alt="" /></Link></figure>
                                                    <div className="lower-content">
                                                        <ul className="post-info mb_15 clearfix">
                                                            <li><Link href="blog-details">Admin</Link></li>
                                                            <li>11 Jan 2022</li>
                                                            <li>05 Comt</li>
                                                        </ul>
                                                        <h3><Link href="blog-details">Prepare to Speak with Your Eye Specialist.</Link></h3>
                                                        <p>Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                                        <div className="link">
                                                            <Link href="blog-details"><span>Read More</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                            {/* Repeat similar blocks for other news items */}
                            <div className="news-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-9.jpg" alt="" /></Link></figure>
                                                    <div className="lower-content">
                                                        <ul className="post-info mb_15 clearfix">
                                                            <li><Link href="blog-details">Admin</Link></li>
                                                            <li>10 Jan 2022</li>
                                                            <li>0 Comt</li>
                                                        </ul>
                                                        <h3><Link href="blog-details">How reliece can help you manage diabetes</Link></h3>
                                                        <p>Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                                        <div className="link">
                                                            <Link href="blog-details"><span>Read More</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                            {/* Repeat similar blocks for other news items */}
                            <div className="news-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-10.jpg" alt="" /></Link></figure>
                                                    <div className="lower-content">
                                                        <ul className="post-info mb_15 clearfix">
                                                            <li><Link href="blog-details">Admin</Link></li>
                                                            <li>09 Jan 2022</li>
                                                            <li>03 Comt</li>
                                                        </ul>
                                                        <h3><Link href="blog-details">What Causes Inherited Retinal Diseases?</Link></h3>
                                                        <p>Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                                        <div className="link">
                                                            <Link href="blog-details"><span>Read More</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                            <div className="pagination-wrapper pt_20">
                                <ul className="pagination clearfix">
                                <li><Link href="blog-2" className="current">1</Link></li>
                                <li><Link href="blog-2">2</Link></li>
                                <li><Link href="blog-2">3</Link></li>
                                <li><Link href="blog-2"><i className="icon-36"></i></Link></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* sidebar-page-container end */}
                     {/* subscribe-two */}
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
                    {/* subscribe end */}
                </div>

            </Layout>
        </>
    )
}
