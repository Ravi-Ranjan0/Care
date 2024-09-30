import React from "react";
import Link from "next/link";
export default function News() {
  return (
    <section className="news-section sec-pad bg-color-1">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Our Blog</span>
          <h2>
            Take a look at our most <br />
            recent articles
          </h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Link href="blog-details">
                    <img src="assets/images/news/news-1.jpg" alt="" />
                  </Link>
                </figure>
                <div className="lower-content">
                  <ul className="post-info mb_15 clearfix">
                    <li>
                      <Link href="blog-details">Admin</Link>
                    </li>
                    <li>12 Jan 2022</li>
                    <li>03 Comt</li>
                  </ul>
                  <h3>
                    <Link href="blog-details">
                      How do Inherited Retinal of Diseases Happen?
                    </Link>
                  </h3>
                  <p>
                    Inherited retinal diseases are genetic disorders that affect
                    the retina, leading to vision loss over time. These
                    conditions can be caused by mutations....{" "}
                  </p>
                  <div className="link">
                    <Link href="blog-details">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Link href="blog-details">
                    <img src="assets/images/news/news-2.jpg" alt="" />
                  </Link>
                </figure>
                <div className="lower-content">
                  <ul className="post-info mb_15 clearfix">
                    <li>
                      <Link href="blog-details">Admin</Link>
                    </li>
                    <li>11 Jan 2022</li>
                    <li>0 Comt</li>
                  </ul>
                  <h3>
                    <Link href="blog-details">
                      Prepare to Speak with Your Eye Specialist.
                    </Link>
                  </h3>
                  <p>
                    When preparing for your appointment with an eye specialist,
                    it's important to gather relevant information about your
                    symptoms, medical history....
                  </p>
                  <div className="link">
                    <Link href="blog-details">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Link href="blog-details">
                    <img src="assets/images/news/news-3.jpg" alt="" />
                  </Link>
                </figure>
                <div className="lower-content">
                  <ul className="post-info mb_15 clearfix">
                    <li>
                      <Link href="blog-details">Admin</Link>
                    </li>
                    <li>11 Jan 2022</li>
                    <li>02 Comt</li>
                  </ul>
                  <h3>
                    <Link href="blog-details">
                      How reliece can help you manage diabetes
                    </Link>
                  </h3>
                  <p>
                    Managing diabetes effectively involves a combination of
                    medication, dietary changes, and regular monitoring of blood
                    sugar...
                  </p>
                  <div className="link">
                    <Link href="blog-details">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
