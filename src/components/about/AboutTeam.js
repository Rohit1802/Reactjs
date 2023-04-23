import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./about.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

import Image1 from '../../img/imgAbout/Image1.svg'
import Image2 from '../../img/imgAbout/Image2.svg'
import Image3 from '../../img/imgAbout/Image3.svg'

import { FaFacebook,  FaInstagram, FaTwitter } from 'react-icons/fa'


const data = [
  {
    id:1,
    name:'Yogesh Kadam',
    img : Image1,
    position:'Director',
    info:'Lisa focuses on providing customers with Organic and Fair Trade Food.'
  },
  {
    id:2,
    name:'Robert leo',
    img : Image2,
    position:'CEO',
    info:'Lisa focuses on providing customers with Organic and Fair Trade Food.'
  },
  {
    id:3,
    name:'John doe',
    img : Image3,
    position:'Technical head',
    info:'Lisa focuses on providing customers with Organic and Fair Trade Food.'
  },
  {
    id:4,
    name:'Suraj Kadam',
    img : Image1,
    position:'Consultant',
    info:'Lisa focuses on providing customers with Organic and Fair Trade Food.'
  },
  {
    id:5,
    name:'Jason warner',
    img : Image2,
    position:'CEO',
    info:'Lisa focuses on providing customers with Organic and Fair Trade Food.'
  },
  {
    id:6,
    name:'John doe',
    img : Image3,
    position:'Manager',
    info:'Lisa focuses on providing customers with Organic and Fair Trade Food.'
  }
]

export default function AboutTeam() {
  return (
    <>
      <div className="container">
        <div className="team__header">
        <h1><span>Team</span>We Have</h1>
        <h3>We have awesome team member to help support.</h3>
        </div>
      </div>
      <Swiper 
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
         
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        { data.map(user =>(
          <SwiperSlide key={user.id}>
            <div className="slider__info">
              <div className="Img">
                <img src={user.img}/>
              </div>
              <div className="Data">
                <h4>{user.name}</h4>
                <h5>{user.position}</h5>
              </div>
              <div className="text">
                <p>Lisa focuses on providing customers with Organic and Fair Trade Food.</p>
              </div>
              <div className="social__links">
                <div className="links">
                  <FaFacebook/>
                </div>
                <div className="links">
                  <FaInstagram/>
                </div>
                <div className="links">
                  <FaTwitter/>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
