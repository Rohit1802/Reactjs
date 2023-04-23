import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./about.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper autoplay={{ delay: 3000 }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
        <SwiperSlide>
        <div className="AboutWord">
            <div className="AboutWord__data">
              <div className="AboutWord__text">
                <h1>Words</h1>
                <h3>From Our Costumers</h3>
              </div>
              <div className="AboutWord__content">
                <p>I met a keen observer who gave me a tip: ‘If you run across a restaurant where you often see priests eating with priests, or sporting girls with sporting girls, you may be confident that it is good. Those are two classes of people who like to eat well and get their money’s worth.</p>
                <p className="testimonial">John Doe</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="AboutWord">
            <div className="AboutWord__data">
              <div className="AboutWord__text">
                <h1>Words</h1>
                <h3>From Our Costumers</h3>
              </div>
              <div className="AboutWord__content">
                <p>I met a keen observer who gave me a tip: ‘If you run across a restaurant where you often see priests eating with priests, or sporting girls with sporting girls, you may be confident that it is good. Those are two classes of people who like to eat well and get their money’s worth.</p>
                <p className="testimonial">John Doe</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="AboutWord">
            <div className="AboutWord__data">
              <div className="AboutWord__text">
                <h1>Words</h1>
                <h3>From Our Costumers</h3>
              </div>
              <div className="AboutWord__content">
                <p>I met a keen observer who gave me a tip: ‘If you run across a restaurant where you often see priests eating with priests, or sporting girls with sporting girls, you may be confident that it is good. Those are two classes of people who like to eat well and get their money’s worth.</p>
                <p className="testimonial">John Doe</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="AboutWord">
            <div className="AboutWord__data">
              <div className="AboutWord__text">
                <h1>Words</h1>
                <h3>From Our Costumers</h3>
              </div>
              <div className="AboutWord__content">
                <p>I met a keen observer who gave me a tip: ‘If you run across a restaurant where you often see priests eating with priests, or sporting girls with sporting girls, you may be confident that it is good. Those are two classes of people who like to eat well and get their money’s worth.</p>
                <p className="testimonial">John Doe</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
