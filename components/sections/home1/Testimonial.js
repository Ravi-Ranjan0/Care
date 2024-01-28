import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'

export default function Testimonial() {
    return (
        <>
            
            <section className="testimonial-section sec-pad bg-color-1">
      <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/testimonial-bg.jpg)' }}></div>
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
            <div className="content-box p_relative ml_45">
              <div className="sec-title mb_50">
                <span className="sub-title">Testimonials</span>
                <h2>What Our Client Say About Medimart</h2>
              </div>
                    <div className="content-box">
                        <TestimonialSlider1 />                        
                    </div>
                </div>
                
                </div>
              </div>
            </div>
            </section>
        </>
    )
}
