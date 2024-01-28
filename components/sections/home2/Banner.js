'use client'
import React from 'react';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
  return (
    <section className="banner-style-two p_relative">
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none">                    
                    <SwiperSlide className="slide-item">
                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-1.jpg)' }}></div>
                    <figure className="image-layer"><img src="assets/images/banner/banner-img-2.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="upper-text">The Art of Healthcare Starts Right Now</span>
                            <h2>We offer <span>complete</span> Healthcare services.</h2>
                            <p>It is not only the medicine that cures and recovers your health earlier, it is the Healthcare team who loves the art of treatment with love.</p>
                            <div className="btn-box">
                                <Link href="index-2" className="theme-btn btn-one"><span>Explore Our Service</span></Link>
                            </div>
                        </div>
                    </div>
          </SwiperSlide>  
        {/* Repeat the above structure for each slide-item as needed */}
        <SwiperSlide className="slide-item">
        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-1.jpg)' }}></div>
                    <figure className="image-layer"><img src="assets/images/banner/banner-img-2.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="upper-text">The Art of Healthcare Starts Right Now</span>
                            <h2>We offer <span>complete</span> Healthcare services.</h2>
                            <p>It is not only the medicine that cures and recovers your health earlier, it is the Healthcare team who loves the art of treatment with love.</p>
                            <div className="btn-box">
                                <Link href="index-2" className="theme-btn btn-one"><span>Explore Our Service</span></Link>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide> 
        {/* Repeat the above structure for each slide-item as needed */}
        <SwiperSlide className="slide-item">
        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-1.jpg)' }}></div>
                    <figure className="image-layer"><img src="assets/images/banner/banner-img-2.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="upper-text">The Art of Healthcare Starts Right Now</span>
                            <h2>We offer <span>complete</span> Healthcare services.</h2>
                            <p>It is not only the medicine that cures and recovers your health earlier, it is the Healthcare team who loves the art of treatment with love.</p>
                            <div className="btn-box">
                                <Link href="index-2" className="theme-btn btn-one"><span>Explore Our Service</span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 
      </Swiper>
    </section>
  );
};

