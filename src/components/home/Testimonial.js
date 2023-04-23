import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./home.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import ProfileImg from '../../img/imgHome/ProfileImg.svg'


export default function Testimonial() {

  return (
    <>
      <Swiper className="mySwiper" autoplay={{ delay: 3000 }} pagination={true} modules={[Pagination, Autoplay]} >
        <SwiperSlide className="slider">
          <div className="testimonial">
            <div className="box">
              <h3>Testimonial</h3>
              <p>Our customer says</p>
            </div>
            <div className="header__content">
              <div className="image">
                <img src={ProfileImg} className="img__profile" />
                <h4>John Doe</h4>
              </div>
              <div className="text__box">
                <p>I met a keen observer who gave me a tip: ‘If you run across a restaurant where you often see Those are two classes of people who like to eat well and get their money’s worth.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="testimonial">
            <div className="box">
              <h3>Testimonial</h3>
              <p>Our customer says</p>
            </div>
            <div className="header__content">
              <div className="image">
                <img src={ProfileImg} className="img__profile" />
                <h4>John Doe</h4>
              </div>
              <div className="text__box">
                <p>I met a keen observer who gave me a tip: ‘If you run across a restaurant where you often see Those are two classes of people who like to eat well and get their money’s worth.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="testimonial">
            <div className="box">
              <h3>Testimonial</h3>
              <p>Our customer says</p>
            </div>
            <div className="header__content">
              <div className="image">
                <img src={ProfileImg} className="img__profile" />
                <h4>John Doe</h4>
              </div>
              <div className="text__box">
                <p>I met a keen observer who gave me a tip: ‘If you run across a restaurant where you often see Those are two classes of people who like to eat well and get their money’s worth.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="testimonial">
            <div className="box">
              <h3>Testimonial</h3>
              <p>Our customer says</p>
            </div>
            <div className="header__content">
              <div className="image">
                <img src={ProfileImg} className="img__profile" />
                <h4>John Doe</h4>
              </div>
              <div className="text__box">
                <p>I met a keen observer who gave me a tip: ‘If you run across a restaurant where you often see Those are two classes of people who like to eat well and get their money’s worth.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
