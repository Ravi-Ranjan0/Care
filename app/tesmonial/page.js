
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
  const getTestimonialName = (index) => {
    // Replace with actual names based on the index or fetch from a data source
    const names = ['Jane Cooper', 'Black, Marvin', 'Jenny Wilson', 'Devon Lane', 'Jacob Jones', 'Ralph Edwards'];
    return names[index - 1] || 'Unknown';
  };
  
  const getTestimonialDesignation = (index) => {
    // Replace with actual designations based on the index or fetch from a data source
    const designations = ['Marketing Coordinator', 'Web Designer', 'Medical Assistant', 'President of Sales', 'Nursing Assistant', 'Dog Trainer'];
    return designations[index - 1] || 'Unknown Designation';
  };

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Testimonial">
                <div>
                <section className="testimonial-page-section sec-pad-2">
                  <div className="auto-container">
                    <div className="row clearfix">
                      {/* Repeat the testimonial blocks for each testimonial */}
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                          <div className="testimonial-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="icon-23"></i></div>
                              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia coequat duis enim velit mollit.</p>
                              <div className="author-box">
                                <figure className="author-thumb"><img src={`assets/images/resource/testimonial-${index}.png`} alt="" /></figure>
                                <ul className="rating clearfix">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                {/* Replace the names and designations dynamically */}
                                <h3>{getTestimonialName(index)}</h3>
                                <span className="designation">{getTestimonialDesignation(index)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pagination-wrapper mt_20 centred">
                      <ul className="pagination clearfix">
                        <li><Link href="testimonials" className="current">1</Link></li>
                        <li><Link href="testimonials">2</Link></li>
                        <li><Link href="testimonials">3</Link></li>
                        <li><Link href="testimonials"><i className="icon-36"></i></Link></li>
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

            </Layout>
        </>
    )
}